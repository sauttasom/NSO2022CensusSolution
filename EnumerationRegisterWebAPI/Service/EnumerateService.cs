using EnumerationRegisterWebAPI.Extensions;
using EnumerationRegisterWebAPI.Models;
using EnumerationRegisterWebAPI.Request;
using EnumerationRegisterWebAPI.Response;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Formats.Asn1;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace EnumerationRegisterWebAPI.Service
{

    public interface IEnumerateService
    {
        public Task<ResponseDTO> RegisterEnumerate(EnumerateRequest enumerateRequest);
        public Task<List<EnumerateResponse>> GetEnumerateList(EnumerateSearchRequest enumerateRequest, UserInfoResponse usersInfo);
        public Task<List<EnumerateResponse>> GetEnumerateCheckingList(EnumerateSearchRequest enumerateRequest, UserInfoResponse usersInfo);

        public Task<ResponseDTO> ImportEnumerator(int?[] enumerateId, int createBy);
        public Task<List<BankNameMaster>> GetBankNameMaster();


        public Task<ResponseDTO> CancelChecked(int? enumerateId, int? cancalBy);

        public Task<List<EnumerateRegisterDetailResponse>> GetEnumerateRegisterById(string enumerateid);
        public Task<List<EducationLevelResponse>> GetEducationLevel();
        public Task<ResponseDTO> UpdateEnumerateChecking(int enumerateId);
        public Task<List<PositionResponse>> GetPositionEnumerate(int isvolunteer);

        public Task<List<Village>> GetVillageUserMapControl(VillageUserMapControlRequest villageUserMapControlRequest, int userid);
        public Task<List<SubDistrict>> GetTamUserMapControl(int userId);
        public Task<ResponseDTO> UpdateEnumerateDetail(EnumerateRequest enumerateRequest, int updateby);

    }
    public class EnumerateService : IEnumerateService
    {
        private enum _EnumerateStatus { Created = 0, Checked = 1, Imported = 2 }
        private readonly Agrc66Context _context;
        private readonly IConfiguration _configuration;
        private readonly string _key = "R2zhan8um8HQWnVr9g85fQ0SQJ7NW8ez";
        enum Direction { DESC, ASC };
        public EnumerateService(Agrc66Context agrc66Context, IConfiguration configuration)
        {
            _context = agrc66Context;
            _configuration = configuration;
        }
        public async Task<List<BankNameMaster>> GetBankNameMaster()
        {
            var bankList = await _context.BankNameMasters.ToListAsync();
            return bankList;
        }

        public async Task<List<Village>> GetVillageUserMapControl(VillageUserMapControlRequest villageUserMapControlRequest, int userid)
        {
            if (userid == 0)
                throw new ArgumentNullException("UserId Emtry");

            string tamCode = !string.IsNullOrEmpty(villageUserMapControlRequest.SubDistrictId) ? villageUserMapControlRequest.SubDistrictId : "0";

            var userMapcontrol = _context.MapUserControls.Where(x => x.UserId == userid && x.Tam.Equals(tamCode));

            var villageList = new List<Village>();
            if (villageUserMapControlRequest.VillageListId != null)
            {
                villageList = await userMapcontrol.Where(x => villageUserMapControlRequest.VillageListId.Contains(x.Vil))
                    .Select(x => new Village
                    {
                        Villageid = x.Vil,
                        VillageName = x.VilN,
                        VillageOrder = x.Vil,

                    }).OrderBy(x => x.Villageid)
                    .ToListAsync();
            }

            return villageList;
        }

        public async Task<List<SubDistrict>> GetTamUserMapControl(int userId)
        {
            try
            {
                var subDistricts = new List<SubDistrict>();
                var query = _context.MapUserControls.Where(x => x.UserId == userId)
                                                    .GroupBy(x => new { x.Tam, x.TamN })
                                                    .Select(group => new SubDistrict
                                                    {
                                                        SubDistrictid = group.Key.Tam,
                                                        SubDistrictName = group.Key.TamN,
                                                        SubDistrictOrder = group.Key.Tam,
                                                    });
                if (query.Any())
                {
                    subDistricts = await query.ToListAsync();
                }

                return subDistricts;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
        private bool CheckPersonIdCardExist(string pid)
        {
            try
            {
                var IdAlreadyExist = _context.EnumerateRegisters.FirstOrDefault(x => x.Pid.Equals(pid.Trim()));
                if (IdAlreadyExist is not null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public async Task<List<EducationLevelResponse>> GetEducationLevel()
        {
            return await _context.EducationLevels.Where(x => x.Active.HasValue && x.Active.Value.Equals(1)).Select(x =>
            new EducationLevelResponse
            {
                EducationId = x.EducationId,
                EducationName = x.EducationName
            }).ToListAsync();

        }
        public async Task<ResponseDTO> CancelChecked(int? enumerateId, int? cancelBy)
        {
            try
            {

                if (!enumerateId.HasValue)
                    return new ResponseDTO { Message = "enumerateRequest Object Is Invalid", Success = false };

                var query = await _context.EnumerateRegisters.FindAsync(enumerateId.Value);
                if (query is null)
                    return new ResponseDTO { Message = "enumerateRequest Object Is Invalid", Success = false };

                if (query.Status == 1)
                {
                    query.Status = 0;
                    query.ModifiedDate = DateTime.Now;
                    query.ModifiedBy = cancelBy.HasValue ? cancelBy.Value.ToString() : "1";
                }
                else
                {
                    return new ResponseDTO { Message = "Can not Update Enumerate Statu. Pls Contact Admin ", Success = false };
                }

                int updateSuccess = _context.SaveChanges();
                if (updateSuccess > 0)
                {
                    return new ResponseDTO { Message = "Update Sucess", Success = true };
                }
                else
                {
                    return new ResponseDTO { Message = "Update Fail", Success = false };
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<ResponseDTO> UpdateEnumerateDetail(EnumerateRequest enumerateRequest, int updateby)
        {


            if (enumerateRequest == null)
                return new ResponseDTO { Message = "enumerateRequest Object Is Invalid", Success = false };

            if (updateby == 0)
                return new ResponseDTO { Message = "ArgumentOutOfRangeException UpdateBy", Success = false };

            if (!enumerateRequest.EnumerateId.HasValue)
                return new ResponseDTO { Message = "ArgumentOutOfRangeException EnumerateId", Success = false };
            try
            {


                var reustValidate = ValidateDTO.ValidateEnurateRquest(enumerateRequest);
                if (reustValidate.Success)
                {


                    var enumerateRegistersUpdate = _context.EnumerateRegisters.FirstOrDefault(e => e.EnumerateId == enumerateRequest.EnumerateId.Value);


                    if (enumerateRegistersUpdate is null)
                        return new ResponseDTO { Message = " Not Found  Information RegisterEnumeration Pls Contact Admin ", Success = false };


                    string userName = enumerateRegistersUpdate.UserName;
                    string newUserNameEnumrate = GenerateEnumerateUserName(new RequestEnumerateUserName
                    {
                        ProviceId = !string.IsNullOrEmpty(enumerateRequest.ProvinceId) ? enumerateRequest.ProvinceId : "0",
                        DistrictId = !string.IsNullOrEmpty(enumerateRequest.DistrictId) ? enumerateRequest.DistrictId : "0",
                        SubDistrictId = !string.IsNullOrEmpty(enumerateRequest.SubDistrictId) ? enumerateRequest.SubDistrictId : "0",
                        MunicipalityId = !string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityId) ? enumerateRequest.TypeMunicipalityId : "0",
                        VillageId = !string.IsNullOrEmpty(enumerateRequest.VillageId) ? enumerateRequest.VillageId : "0"
                    });

                    if (userName != newUserNameEnumrate)
                    {
                        var checkUserName = await _context.EnumerateRegisters.Where(x => x.UserName.Equals(newUserNameEnumrate)).FirstOrDefaultAsync();
                        if (checkUserName is not null)
                            return new ResponseDTO { Message = $"  {newUserNameEnumrate} เขตปฏิบัติงานนี้ ถูกใช้งานในระบบแล้ว", Success = false };

                        var usersName_Users = await _context.Users.Where(x => x.Username.Equals(newUserNameEnumrate)).FirstOrDefaultAsync();

                        if (usersName_Users is not null)
                            return new ResponseDTO { Message = $"  {newUserNameEnumrate} เขตปฏิบัติงานนี้ ถูกใช้งานในระบบแล้ว", Success = false };

                    }



                    EducationLevel educationLevel = new EducationLevel();
                    string educationName = string.Empty;
                    int educationId = 0;
                    if (!string.IsNullOrEmpty(enumerateRequest.EducationID))
                    {
                        int eduId = int.Parse(enumerateRequest.EducationID);
                        var   education = _context.EducationLevels.Where(e => e.EducationId == eduId).ToList();
                        if(education.Any())
                        {
                            educationName = education.Select(x => x.EducationName).FirstOrDefault();
                            educationId = education.Select(x => x.EducationId).FirstOrDefault();

                            educationLevel.EducationId = eduId;
                            educationLevel.EducationName = educationName;
              
                     
                        }

                    }
                    

                    enumerateRegistersUpdate.UserName = newUserNameEnumrate;
                    enumerateRegistersUpdate.PassWord = newUserNameEnumrate;
                    //Personal
                    enumerateRegistersUpdate.Perfix = enumerateRequest.Perfix.Trim();
                    enumerateRegistersUpdate.FirstName = enumerateRequest.FirstName.Trim();
                    enumerateRegistersUpdate.LastName = enumerateRequest.LastName.Trim();
                    enumerateRegistersUpdate.FullName = $"{enumerateRequest.Perfix.Trim()} {enumerateRequest.FirstName.Trim()}  {enumerateRequest.LastName.Trim()}";
                    enumerateRegistersUpdate.IsVolunteer = enumerateRequest.IsVolunteer;
                    enumerateRegistersUpdate.PositionId = enumerateRequest.PositionId.Trim();
                    enumerateRegistersUpdate.Pid = enumerateRequest.PID.Trim();
                    enumerateRegistersUpdate.BirthDate = enumerateRequest.BirthDate.Value.AddHours(7);
                    enumerateRegistersUpdate.Age = enumerateRequest.Age.Value;

                    enumerateRegistersUpdate.EducationName = !string.IsNullOrEmpty(educationName) ? educationName : null;
                    enumerateRegistersUpdate.EducationId = educationId != 0 ? educationId : null;


                    enumerateRegistersUpdate.PhoneNummber = enumerateRequest.PhoneNumber.Trim();
                    enumerateRegistersUpdate.LineId = !string.IsNullOrEmpty(enumerateRequest.LineID) ? enumerateRequest.LineID.Trim() : null;
                    enumerateRegistersUpdate.Email = !string.IsNullOrEmpty(enumerateRequest.Email) ? enumerateRequest.Email.Trim() : null;
                    enumerateRegistersUpdate.PhoneBrand = !string.IsNullOrEmpty(enumerateRequest.PhoneBrand) ? enumerateRequest.PhoneBrand.Trim() : null;
                    enumerateRegistersUpdate.PhoneOsid = enumerateRequest.PhoneOS != null ? enumerateRequest.PhoneOS.ToString() : null;
                    enumerateRegistersUpdate.PhoneNetWorkid = enumerateRequest.PhoneNetWork != null ? enumerateRequest.PhoneNetWork.ToString() : null;

                    //bank account
                    enumerateRegistersUpdate.BankAccount = enumerateRequest.BankAccount.HasValue ? enumerateRequest.BankAccount.Value.ToString().Trim() : null;
                    enumerateRegistersUpdate.BankAccountName = !string.IsNullOrEmpty(enumerateRequest.BankAccountName) ? enumerateRequest.BankAccountName.Trim() : null;
                    enumerateRegistersUpdate.BankAccountNo = !string.IsNullOrEmpty(enumerateRequest.BankAccountNumber) ? enumerateRequest.BankAccountNumber.Trim() : null;


                    //address

                    enumerateRegistersUpdate.ProvinceId = !string.IsNullOrEmpty(enumerateRequest.ProvinceId) ? enumerateRegistersUpdate.ProvinceId.Trim() : string.Empty;
                    enumerateRegistersUpdate.ProvinceName = !string.IsNullOrEmpty(enumerateRequest.ProvinceName) ? enumerateRequest.ProvinceName.Trim() : string.Empty;

                    enumerateRegistersUpdate.DistrictId = !string.IsNullOrEmpty(enumerateRequest.DistrictId) ? enumerateRequest.DistrictId.Trim() : string.Empty;
                    enumerateRegistersUpdate.DistrictName = !string.IsNullOrEmpty(enumerateRequest.DistrictName) ? enumerateRequest.DistrictName.Trim() : string.Empty;

                    enumerateRegistersUpdate.SubDistrictId = !string.IsNullOrEmpty(enumerateRequest.SubDistrictId) ? enumerateRequest.SubDistrictId.Trim() : string.Empty;
                    enumerateRegistersUpdate.SubDistrictName = !string.IsNullOrEmpty(enumerateRequest.SubDistrictName) ? enumerateRequest.SubDistrictName.Trim() : string.Empty;

                    enumerateRegistersUpdate.TypeMunicipalityId = !string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityId) ? enumerateRequest.TypeMunicipalityId.Trim() : string.Empty;
                    enumerateRegistersUpdate.TypeMunicipalityName = !string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityName) ? enumerateRequest.TypeMunicipalityName.Trim() : string.Empty;


                    enumerateRegistersUpdate.MunicipalityId = !string.IsNullOrEmpty(enumerateRequest.MunicipalityId) ? enumerateRequest.MunicipalityId.Trim() : string.Empty;
                    enumerateRegistersUpdate.MunicipalityName = !string.IsNullOrEmpty(enumerateRequest.MunicipalityName) ? enumerateRequest.MunicipalityName.Trim() : string.Empty;

                    enumerateRegistersUpdate.VillageId = !string.IsNullOrEmpty(enumerateRequest.VillageId) ? enumerateRequest.VillageId.Trim() : string.Empty;
                    enumerateRegistersUpdate.VillageName = !string.IsNullOrEmpty(enumerateRequest.VillageName) ? enumerateRequest.VillageName.Trim() : string.Empty;

                    enumerateRegistersUpdate.ModifiedBy = updateby.ToString();
                    enumerateRegistersUpdate.ModifiedDate = DateTime.Now;

                    int isSuccess = await _context.SaveChangesAsync();
                    if (isSuccess > 0)
                    {
                        return new ResponseDTO { Message = "Update Enumerate Success", Success = true };
                    }
                    else
                    {
                        return new ResponseDTO { Message = "enumerateRequest SaveChangesAsync Exception", Success = false };
                    }
                }
                else
                {
                    return new ResponseDTO { Message = reustValidate.Message, Success = false };
                }
            }
            catch (Exception ex)
            {
                return new ResponseDTO { Success = false, Message = ex.Message };
            }


        }
        public async Task<ResponseDTO> RegisterEnumerate(EnumerateRequest enumerateRequest)
        {
            if (enumerateRequest == null)
                throw new ArgumentNullException(nameof(enumerateRequest));


            var reustValidate = ValidateDTO.ValidateEnurateRquest(enumerateRequest);

            if (!reustValidate.Success)
                return new ResponseDTO { Message = reustValidate.Message, Success = reustValidate.Success };


            try
            {
                //var result = CheckPersonIdCardExist(enumerateRequest.PID);
                //if (result)
                //    return new ResponseDTO { Message = "เลขประจำตัวประชาชน นี้ถูกใช้ในระบบแล้ว", Success = false };

                var userName = GenerateEnumerateUserName(new RequestEnumerateUserName
                {
                    ProviceId = !string.IsNullOrEmpty(enumerateRequest.ProvinceId) ? enumerateRequest.ProvinceId : "0",
                    DistrictId = !string.IsNullOrEmpty(enumerateRequest.DistrictId) ? enumerateRequest.DistrictId : "0",
                    SubDistrictId = !string.IsNullOrEmpty(enumerateRequest.SubDistrictId) ? enumerateRequest.SubDistrictId : "0",
                    MunicipalityId = !string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityId) ? enumerateRequest.TypeMunicipalityId : "0",
                    VillageId = !string.IsNullOrEmpty(enumerateRequest.VillageId) ? enumerateRequest.VillageId : "0"
                });

                var userNameDup = await _context.Users.FirstOrDefaultAsync(x => x.Username.Equals(userName)
                             && x.Active.HasValue && x.Active.Value.Equals(1));

                if (userNameDup is not null)
                    return new ResponseDTO { Message = "UserName นี้ถูกใช้งานในระบบแล้ว", Success = false };


                var enumerateUserName = await _context.EnumerateRegisters.FirstOrDefaultAsync(x => x.UserName.Equals(userName));


                if (enumerateUserName is not null)
                    return new ResponseDTO { Message = "เขตปฏิบัติงานนี้ ถูกใช้งานในระบบแล้ว", Success = false };

                EducationLevel education = new EducationLevel();

                if (!string.IsNullOrEmpty(enumerateRequest.EducationID) && !enumerateRequest.EducationID.Equals("0"))
                {
                    education = _context.EducationLevels.Single(x => x.EducationId.Equals(int.Parse(enumerateRequest.EducationID)));
                }




                if (string.IsNullOrEmpty(userName))
                    return new ResponseDTO { Message = "Generate User Invail ", Success = false };


                var enumerateRegister = await _context.EnumerateRegisters.AddAsync(new EnumerateRegister
                {

                    UserName = userName,
                    PassWord = userName,
                    FullName = $"{enumerateRequest.Perfix.Trim()} {enumerateRequest.FirstName.Trim()}  {enumerateRequest.LastName.Trim()}",
                    Perfix = enumerateRequest.Perfix.Trim(),
                    FirstName = enumerateRequest.FirstName.Trim(),
                    LastName = enumerateRequest.LastName.Trim(),

                    Pid = enumerateRequest.PID.Trim(),

                    BirthDate = enumerateRequest.BirthDate.HasValue ? enumerateRequest.BirthDate.Value.AddHours(7) : DateTime.Now,
                    Age = enumerateRequest.Age,
                    // Education = education is not null ?  education : null,
                    EducationName = !string.IsNullOrEmpty(education.EducationName) ? education.EducationName : null,
                    EducationId = education.EducationId != 0 ? education.EducationId : null,

                    PhoneNummber = !string.IsNullOrEmpty(enumerateRequest.PhoneNumber) ? enumerateRequest.PhoneNumber.Trim().Replace("-", string.Empty) : "",

                    Email = !string.IsNullOrEmpty(enumerateRequest.Email) ? enumerateRequest.Email.Trim() : null,
                    LineId = !string.IsNullOrEmpty(enumerateRequest.LineID) ? enumerateRequest.LineID.Trim() : null,
                    PhoneBrand = !string.IsNullOrEmpty(enumerateRequest.PhoneBrand) ? enumerateRequest.PhoneBrand.Trim() : null,
                    PhoneNetWork = !string.IsNullOrEmpty(enumerateRequest.PhoneNetworkName) ? enumerateRequest.PhoneNetworkName.Trim() : null,
                    PhoneNetWorkid = enumerateRequest.PhoneNetWork != null ? enumerateRequest.PhoneNetWork.ToString() : null,
                    PhoneOsid = enumerateRequest.PhoneOS != null ? enumerateRequest.PhoneOS.ToString() : null,
                    PhoneOs = !string.IsNullOrEmpty(enumerateRequest.PhoneOSName) ? enumerateRequest.PhoneOSName.Trim() : null,
                    IsVolunteer = enumerateRequest.IsVolunteer,
                    //OtherVolunteer = !string.IsNullOrEmpty(enumerateRequest.OtherVolunteer) ? enumerateRequest.OtherVolunteer : null,


                    ProvinceId = !string.IsNullOrEmpty(enumerateRequest.ProvinceId) ? enumerateRequest.ProvinceId : "0",
                    ProvinceName = enumerateRequest.ProvinceName.Substring(3),

                    DistrictId = !string.IsNullOrEmpty(enumerateRequest.DistrictId) ? enumerateRequest.DistrictId : "0",
                    DistrictName = enumerateRequest.DistrictName.Substring(3),

                    SubDistrictId = !string.IsNullOrEmpty(enumerateRequest.SubDistrictId) ? enumerateRequest.SubDistrictId.Trim() : "0",
                    SubDistrictName = enumerateRequest.SubDistrictName.Substring(3),

                    MunicipalityId = !string.IsNullOrEmpty(enumerateRequest.MunicipalityId) ? enumerateRequest.MunicipalityId.Trim() : "0",
                    MunicipalityName = !string.IsNullOrEmpty(enumerateRequest.MunicipalityName) ? enumerateRequest.MunicipalityName.Substring(7) : string.Empty,

                    TypeMunicipalityId = !string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityId) ? enumerateRequest.TypeMunicipalityId.Trim() : "0",
                    TypeMunicipalityName = !string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityName) ? enumerateRequest.TypeMunicipalityName.Substring(3) : string.Empty,


                    VillageId = !string.IsNullOrEmpty(enumerateRequest.VillageId) ? enumerateRequest.VillageId.Trim() : "0",
                    VillageName = !string.IsNullOrEmpty(enumerateRequest.VillageName) ? enumerateRequest.VillageName.Length > 3 ? enumerateRequest.VillageName.Substring(3) : string.Empty : string.Empty,

                    Status = (int)_EnumerateStatus.Created,
                    CreateDate = DateTime.Now,

                    BankAccount = enumerateRequest.BankAccount != null ? enumerateRequest.BankAccount.ToString() : string.Empty,
                    BankAccountName = !string.IsNullOrEmpty(enumerateRequest.BankAccountName) ? enumerateRequest.BankAccountName : string.Empty,
                    BankAccountNo = !string.IsNullOrEmpty(enumerateRequest.BankAccountNumber) ? enumerateRequest.BankAccountNumber : string.Empty,

                    PositionId = enumerateRequest.PositionId

                });

                int isSave = _context.SaveChanges();
                if (isSave > 0)
                {
                    return new ResponseDTO { Message = "RegisterEnumerator Success", Success = true };
                }
                else
                {
                    return new ResponseDTO { Message = "RegisterEnumerator Fail", Success = false };
                }

            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

        }
        private async Task<List<Region>> GetRegionAsync(string provinceId)
        {
            string _Domain = _configuration["Domain"]; ///"https://agcensustest.nso.go.th/";
            var region = new List<Region>();
            using (var client = new HttpClient())
            {



                string endpoint = $"{_Domain}/addressapi/api/AddressControllers/GetRegionCode?provinceId={provinceId}";
                client.BaseAddress = new Uri(endpoint);
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    region = JsonConvert.DeserializeObject<List<Region>>(content);



                }
                return region;

            }


        }
        private async Task<string> GetRegionCode(string regid)
        {
            List<string> regionCenter = new List<string>() { "1", "2" };
            List<string> regionNorth = new List<string>() { "3" };
            List<string> regionSouth = new List<string>() { "5" };
            List<string> regionNortheast = new List<string>() { "4" };
            if (regionCenter.Contains(regid))
            {
                return "c";
            }
            else if (regionNorth.Contains(regid))
            {
                return "n";
            }
            else if (regionSouth.Contains(regid))
            {
                return "s";
            }
            else if (regionNortheast.Contains(regid))
            {
                return "e";
            }
            return string.Empty;

        }
        private string GenerateEnumerateUserName(RequestEnumerateUserName requestEnumerateUserName)
        {
            string username = string.Empty;
            var regionList = GetRegionAsync(requestEnumerateUserName.ProviceId).Result;

            if (regionList.Count > 0)
            {
                string regName = regionList.Single().Regionid;
                string regcode = GetRegionCode(regName).Result;
                if (string.IsNullOrEmpty(regName))
                { return string.Empty; }



                username = string.Concat(
                                            regcode,
                                            requestEnumerateUserName.ProviceId,
                                            requestEnumerateUserName.DistrictId,
                                            requestEnumerateUserName.SubDistrictId,
                                            requestEnumerateUserName.MunicipalityId,
                                            requestEnumerateUserName.VillageId
                                         );
            }


            return username;
        }
        private string GetStatusName(int status)
        {
            string statusName = string.Empty;
            switch (status)
            {
                case 0:
                    statusName = "รอตรวจสอบ";
                    break;
                case 1:
                    statusName = "ตรวจสอบแล้ว";
                    break;
                case 2:
                    statusName = "นำเข้าแล้ว";
                    break;

            }
            return statusName;
        }
        public async Task<List<EnumerateResponse>> GetEnumerateCheckingList(EnumerateSearchRequest enumerateRequest, UserInfoResponse usersInfo)
        {
            if (enumerateRequest == null)
                throw new ArgumentNullException("EnumerateSearchRequest is Null");
            try
            {

                var queryable = _context.EnumerateRegisters.Where(x => !string.IsNullOrEmpty(x.Pid) &&
                                                                                            x.Status != 2 &&
                                                                                            x.ProvinceId.Equals(usersInfo.CwtCode) &&
                                                                                            x.DistrictId.Equals(usersInfo.AmpCode));

                int updateBy = usersInfo.UserId;
                var mapControl = _context.MapUserControls.Where(x => x.UserId.Equals(updateBy));

                if (mapControl.Any())
                {
                    var mapControlEntity = mapControl.GroupBy(x => new { x.Cwt, x.Amp, x.Tam, x.Vil })
                        .Select(g => new
                        {
                            Cwt = g.Key.Cwt,
                            Amp = g.Key.Amp,
                            Tam = g.Key.Tam,
                            Vil = g.Key.Vil,
                        }).ToList();
                    if (mapControlEntity.Any())
                    {
                        var villageAssignid = mapControlEntity.Select(x => x.Vil).ToList();
                        queryable = queryable.Where(x => villageAssignid.Contains(x.VillageId));
                    }

                }

                if (enumerateRequest.TamCodeMapControl != null)
                {
                    if (enumerateRequest.TamCodeMapControl.Length > 0)
                    {
                        queryable = queryable.Where(x => enumerateRequest.TamCodeMapControl.Contains(x.SubDistrictId));
                    }

                }
                if (!string.IsNullOrEmpty(enumerateRequest.SubDistrictId))
                {
                    queryable = queryable.Where(x => x.SubDistrictId.Equals(enumerateRequest.SubDistrictId));

                }
                if (!string.IsNullOrEmpty(enumerateRequest.VillageId))
                {
                    queryable = queryable.Where(x => x.VillageId.Equals(enumerateRequest.VillageId));

                }
                if (!string.IsNullOrEmpty(enumerateRequest.TypeMunId))
                {
                    queryable = queryable.Where(x => x.TypeMunicipalityId.Equals(enumerateRequest.TypeMunId));
                }

                if (!string.IsNullOrEmpty(enumerateRequest.MunicipaliId))
                {
                    queryable = queryable.Where(x => x.MunicipalityId.Equals(enumerateRequest.MunicipaliId));
                }

                if (!string.IsNullOrEmpty(enumerateRequest.FirstName))
                {
                    queryable = queryable.Where(x => x.FirstName.Contains(enumerateRequest.FirstName.Trim()));

                }
                if (!string.IsNullOrEmpty(enumerateRequest.LastName))
                {
                    queryable = queryable.Where(x => x.LastName.Contains(enumerateRequest.LastName));

                }

                if (enumerateRequest.IsVolunteer != null)
                {
                    if (enumerateRequest.IsVolunteer.Length > 0)
                    {
                        queryable = queryable.Where(x => enumerateRequest.IsVolunteer.Contains(x.IsVolunteer));
                    }

                }

                //wait check = 0 ,checked ,wait Import  = 1 , imported = 2 
                if (enumerateRequest.Status.Length > 0)
                {
                    queryable = queryable.Where(x => enumerateRequest.Status.Contains(x.Status));
                }



                if (enumerateRequest.OrderBy.Equals("subDistrict"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.SubDistrictId);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.SubDistrictId);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("TypeMun"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.TypeMunicipalityId);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.TypeMunicipalityId);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("MunName"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.MunicipalityName);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.MunicipalityName);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("Village"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.VillageName);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.VillageName);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("PID"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.Pid);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.Pid);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("FullName"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.FullName);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.FullName);
                    }
                }



                int Legth = queryable.Count();
                var data = queryable.AsEnumerable().Select(x => new EnumerateResponse
                {

                    EnumerateId = x.EnumerateId.ToString(),
                    SubDistrictId = x.SubDistrictId,
                    SubDistrict = x.SubDistrictName,
                    FirstName = x.FirstName,
                    TypeMunId = x.TypeMunicipalityId,
                    TypeMunName = x.TypeMunicipalityName,

                    MunicipalityName = x.MunicipalityName,
                    MunicipalityId = x.MunicipalityId,

                    StatusText = GetStatusName(x.Status),
                    VillageId = x.VillageId,
                    VillageName = !string.IsNullOrEmpty(x.VillageName) ? x.VillageName : string.Empty,
                    IsChecking = false,
                    PID = x.Pid,
                    FullName = string.Concat(x.Perfix, " ", x.FirstName, " ", x.LastName),
                    Status = x.Status,
                    DataLegth = Legth

                })
                .Skip((enumerateRequest.PageNumber - 1) * enumerateRequest.PageSize)
                .Take(enumerateRequest.PageSize)
                .ToList();
                return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<List<EnumerateResponse>> GetEnumerateList(EnumerateSearchRequest enumerateRequest, UserInfoResponse usersInfo)
        {
            if (enumerateRequest == null)
                throw new ArgumentNullException("EnumerateSearchRequest is Null");


            try
            {

                var queryable = _context.EnumerateRegisters.Where(x => !string.IsNullOrEmpty(x.Pid) &&
                                                                                            x.Status != 0 &&
                                                                                            x.ProvinceId.Equals(usersInfo.CwtCode) &&
                                                                                            x.DistrictId.Equals(usersInfo.AmpCode));
                if (!string.IsNullOrEmpty(enumerateRequest.SubDistrictId))
                {
                    queryable = queryable.Where(x => x.SubDistrictId.Equals(enumerateRequest.SubDistrictId));
                }
                if (!string.IsNullOrEmpty(enumerateRequest.TypeMunId))
                {
                    queryable = queryable.Where(x => x.TypeMunicipalityId.Equals(enumerateRequest.TypeMunId));
                }
                if (!string.IsNullOrEmpty(enumerateRequest.MunicipaliId))
                {
                    queryable = queryable.Where(x => x.MunicipalityId.Equals(enumerateRequest.MunicipaliId));
                }
                if (!string.IsNullOrEmpty(enumerateRequest.VillageId))
                {
                    queryable = queryable.Where(x => x.VillageId.Equals(enumerateRequest.VillageId));
                }


                if (!string.IsNullOrEmpty(enumerateRequest.FirstName))
                {
                    queryable = queryable.Where(x => x.FirstName.Contains(enumerateRequest.FirstName.Trim()));

                }
                if (!string.IsNullOrEmpty(enumerateRequest.LastName))
                {
                    queryable = queryable.Where(x => x.LastName.Contains(enumerateRequest.LastName));

                }

                if (enumerateRequest.IsVolunteer != null)
                {
                    if (enumerateRequest.IsVolunteer.Length > 0)
                    {
                        queryable = queryable.Where(x => enumerateRequest.IsVolunteer.Contains(x.IsVolunteer));
                    }

                }

                //wait check = 0 ,checked ,wait Import  = 1 , imported = 2 
                if (enumerateRequest.Status.Length > 0)
                {
                    queryable = queryable.Where(x => enumerateRequest.Status.Contains(x.Status));
                }



                if (enumerateRequest.OrderBy.Equals("subDistrict"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.SubDistrictId);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.SubDistrictId);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("TypeMun"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.TypeMunicipalityId);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.TypeMunicipalityId);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("MunName"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.MunicipalityName);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.MunicipalityName);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("Village"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.VillageName);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.VillageName);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("PID"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.Pid);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.Pid);
                    }
                }
                else if (enumerateRequest.OrderBy.Equals("FullName"))
                {
                    if (enumerateRequest.Direction.Equals(Direction.DESC.ToString()))
                    {
                        queryable = queryable.OrderByDescending(x => x.FullName);
                    }
                    else
                    {
                        queryable = queryable.OrderBy(x => x.FullName);
                    }
                }



                int Legth = queryable.Count();
                var data = queryable.AsEnumerable().Select(x => new EnumerateResponse
                {

                    EnumerateId = x.EnumerateId.ToString(),
                    SubDistrictId = x.SubDistrictId,
                    SubDistrict = x.SubDistrictName,
                    FirstName = x.FirstName,
                    TypeMunId = x.TypeMunicipalityId,
                    TypeMunName = x.TypeMunicipalityName,

                    MunicipalityName = x.MunicipalityName,
                    MunicipalityId = x.MunicipalityId,

                    StatusText = GetStatusName(x.Status),
                    VillageId = x.VillageId,
                    VillageName = !string.IsNullOrEmpty(x.VillageName) ? x.VillageName : string.Empty,
                    IsChecking = false,
                    PID = x.Pid,
                    FullName = string.Concat(x.Perfix, " ", x.FirstName, " ", x.LastName),
                    Status = x.Status,
                    DataLegth = Legth

                })
                .Skip((enumerateRequest.PageNumber - 1) * enumerateRequest.PageSize)
                .Take(enumerateRequest.PageSize)
                .ToList();
                return data;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
        private ResponseDTO UpdateStutaImport(List<EnumerateRegister> enumeratelist)
        {

            try
            {

                var updateList = enumeratelist;
                foreach (var data in updateList)
                {

                    data.Status = (int)_EnumerateStatus.Imported;
                }

                _context.EnumerateRegisters.UpdateRange(updateList);
                return new ResponseDTO { Message = "Update Enumerate Success", Success = true };
                //var resultUpdate  =  await _context.SaveChangesAsync();
                //if (await _context.SaveChangesAsync() > 0)
                //{
                //    return new ResponseDTO { Message = "Update Enumerate Success", Success = true };
                //}
                //else
                //{
                //    return new ResponseDTO { Message = "Update Enumerate Fail", Success = false };
                //}
            }
            catch (Exception ex)
            {
                return new ResponseDTO { Message = ex.Message, Success = false };
            }

        }
        private string GetEnumerateRoleName(int enumerateRoleId)
        {
            string enumerateRoleName = string.Empty;
            if (enumerateRoleId == 9)
            {
                enumerateRoleName = _context.Roles.FirstOrDefault(x => x.RoleId.Equals(enumerateRoleId)).RoleName;
            }
            return enumerateRoleName;
        }
        public async Task<List<PositionResponse>> GetPositionEnumerate(int isvolunteer)
        {
            var query = _context.Positions.Where(x => x.RoleId9 == 1);
            if (isvolunteer == 1)
            {
                query = query.Where(x => x.Active == 1);
            }
            else
            {
                query = query.Where(x => x.Active == 0);
            }

            var positionList = await query.Select(x => new PositionResponse
            {
                PositionId = x.PositionId,
                PositionName = x.PositionName,
                Active = x.Active.Value
            }).ToListAsync();

            return positionList;

        }
        private string GetIsVolunteerRoleName(string positionid)
        {
            string RoleName = string.Empty;
            if (!string.IsNullOrEmpty(positionid))
            {
                int positionId = int.Parse(positionid.Trim());
                var query = _context.Positions.FirstOrDefault(x => x.PositionId == positionId);
                if (query != null)
                {
                    RoleName = query.PositionName;
                }


            }
            return RoleName;
        }
        public async Task<List<EnumerateRegisterDetailResponse>> GetEnumerateRegisterById(string enumerateid)
        {
            try
            {
                if (string.IsNullOrEmpty(enumerateid))
                    throw new ArgumentNullException("enumerateid is Emtry or Null");

                var query = _context.EnumerateRegisters.Where(x => x.EnumerateId.Equals(int.Parse(enumerateid)));

                return await query.Select(x => new EnumerateRegisterDetailResponse
                {

                    EnumerateId = x.EnumerateId,
                    PID = x.Pid,
                    Perfix = x.Perfix,
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    BirthDate = x.BirthDate,
                    Age = x.Age,
                    EducationId = x.EducationId.HasValue ? x.EducationId.Value : 0,
                    PhoneNumber = x.PhoneNummber,
                    LineID = x.LineId,
                    Email = x.Email,
                    PhoneBrand = x.PhoneBrand,
                    PhoneOS = x.PhoneOsid,
                    PhoneNetWork = x.PhoneNetWorkid,
                    IsVolunteer = x.IsVolunteer,
                    PositionId = !string.IsNullOrEmpty(x.PositionId) ? x.PositionId : "0",

                    ProvinceId = !string.IsNullOrEmpty(x.ProvinceId) ? x.ProvinceId.Trim() : string.Empty,
                    ProvinceName = !string.IsNullOrEmpty(x.ProvinceName) ? x.ProvinceName.Trim() : string.Empty,
                    DistrictId = !string.IsNullOrEmpty(x.DistrictId) ? x.DistrictId.Trim() : string.Empty,
                    DistrictName = !string.IsNullOrEmpty(x.DistrictName) ? x.DistrictName.Trim() : string.Empty,

                    SubDistrictId = !string.IsNullOrEmpty(x.SubDistrictId) ? x.SubDistrictId.Trim() : string.Empty,
                    SubDistrictName = !string.IsNullOrEmpty(x.SubDistrictName) ? x.SubDistrictName.Trim() : string.Empty,


                    TypeMunId = x.TypeMunicipalityId.Trim(),
                    TypeMunName = x.TypeMunicipalityName.Trim(),


                    MunicipalityId = x.MunicipalityId.Trim(),
                    MunicipalityName = x.MunicipalityName.Trim(),

                    VillageId = x.VillageId.Trim(),
                    VillageName = x.VillageName.Trim(),

                    Status = x.Status,

                    BankAccountNumber = x.BankAccountNo.Trim(),
                    BankAccountName = x.BankAccountName.Trim(),
                    BankAccount = x.BankAccount.Trim()


                }).ToListAsync();

            }
            catch (Exception ex)
            {
                throw ex;
            }



        }
        public async Task<int> GetMaxUserId()
        {
            return await _context.Users.Select(e => e.UserId).OrderByDescending(u => u).FirstOrDefaultAsync();
        }
        public string EncryptString(string plainText)
        {

            byte[] iv = new byte[16];
            byte[] array;

            using (Aes aes = Aes.Create())
            {
                aes.Key = Encoding.UTF8.GetBytes(_key);
                aes.IV = iv;
                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter streamWriter = new StreamWriter((Stream)cryptoStream))
                        {
                            streamWriter.Write(plainText);
                        }

                        array = memoryStream.ToArray();
                    }
                }
            }

            return Convert.ToBase64String(array).Replace("+", "-").Replace("/", "_").Replace("=", "|");
        }
        public string DecryptString(string cipherText)
        {
            byte[] iv = new byte[16];
            string s = cipherText;
            s = s.Replace("-", "+").Replace("_", "/").Replace("|", "=");
            byte[] buffer = Convert.FromBase64String(s);

            using (Aes aes = Aes.Create())
            {
                aes.Key = Encoding.UTF8.GetBytes(_key);
                aes.IV = iv;
                ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream(buffer))
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader streamReader = new StreamReader((Stream)cryptoStream))
                        {
                            return streamReader.ReadToEnd();
                        }
                    }
                }
            }
        }
        public async Task<ResponseDTO> ImportEnumerator(int?[] enumerateId, int createBy)
        {
            if (enumerateId == null)
                return new ResponseDTO { Message = "enumerateId is Emtry", Success = false };

            var enumerateList = await _context.EnumerateRegisters.Where(x => enumerateId.Contains(x.EnumerateId)).ToListAsync();

            if (enumerateList == null)
                return new ResponseDTO { Message = "Not Found EnumeratorId  in table EnumerateRegisters", Success = false };

            var objcreateBy = await _context.Users.FirstOrDefaultAsync(x => x.UserId.Equals(createBy));
            if (objcreateBy == null)
                return new ResponseDTO { Message = "Not Found User Create  in table Users", Success = false };


            //var enumeratePID = enumerateList.Select(x => x.Pid).FirstOrDefault();
            //var pidIsDup = await _context.Users.FirstOrDefaultAsync(x => !string.IsNullOrEmpty(x.Pid) && x.Pid.Equals(enumeratePID));
            //if (pidIsDup != null)
            //{
            //    if (!string.IsNullOrEmpty(pidIsDup.Pid))
            //        return new ResponseDTO { Message = "เลขบัตรประชาชนนี้ ได้ถูกใช้ในระบบแแล้ว", Success = false };
            //}
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {

                    int enumerateRoleId = 9;

                    var lockName = "Users";
                    _context.Database.ExecuteSqlRaw($"exec sp_getapplock '{lockName}', 'exclusive'");

                    string? positionId = enumerateList.FirstOrDefault()?.PositionId;

                    if (string.IsNullOrEmpty(positionId))
                        return new ResponseDTO { Message = "รหัสตำแหน่ง ไม่สามารถ เป็นค่าว่าง ", Success = false };
                    
                    var position = await _context.Positions.Where(x => x.PositionId.Equals(int.Parse(positionId)))
                                                            .Select(x => new Position { PositionId = x.PositionId, PositionName = x.PositionName })
                                                            .FirstOrDefaultAsync();

                    if (position == null)
                        return new ResponseDTO { Message = "ไม่พบตำแหน่งที่ต้องการสมัคร", Success = false };

                    int userid = await GetMaxUserId();
                    var role = await _context.Roles.FirstOrDefaultAsync(x => x.RoleId.Equals(enumerateRoleId));
                    if (role == null)
                        return new ResponseDTO { Message = "Not Found Role ", Success = false };


                    var createUser = enumerateList.Select(x => new User
                    {
                        UserId = ++userid,
                        Username = x.UserName,
                        Password = EncryptString(x.PassWord),
                        Name = string.Concat(x.Perfix, " ", x.FirstName, " ", x.LastName),
                        Pid = !string.IsNullOrEmpty(x.Pid) ? x.Pid : null,
                        Phone = x.PhoneNummber,
                        Email = x.Email,

                        RoleId = enumerateRoleId,
                        RoleName = !string.IsNullOrEmpty(role.RoleName) ? role.RoleName : null,

                        PositionId = position.PositionId,
                        PositionName = position.PositionName,

                        CwtCode = x.ProvinceId,
                        CwtName = x.ProvinceName,

                        AmpCode = x.DistrictId,
                        AmpName = x.DistrictName,

                        TamCode = x.SubDistrictId,
                        TamName = x.SubDistrictName,

                        MunCode = x.MunicipalityId != "06" ? x.MunicipalityId : null,
                        MunName = x.MunicipalityId != "06" ? x.MunicipalityName : null,

                        TypeCode = x.TypeMunicipalityId,
                        TypeName = x.TypeMunicipalityName,

                        VilCode = x.VillageId,
                        VilName = x.VillageName,


                        Active = 1,
                        CreatedDate = DateTime.Now,
                        CreatedBy = createBy,
                        CreatedByName = !string.IsNullOrEmpty(objcreateBy.Name) ? objcreateBy.Name : null,
                    }).ToArray();

                    _context.Users.AddRange(createUser);
                    var result = await _context.SaveChangesAsync();
                    if (createUser.Length > 0)
                    {
                        var response_Update = UpdateStutaImport(enumerateList);
                        if (response_Update.Success)
                        {
                            await _context.SaveChangesAsync();
                            await transaction.CommitAsync();
                            return new ResponseDTO { Message = "Import EnumerateRegister to User Role Enumerate Success", Success = true }; ;
                        }
                        else
                        {
                            return new ResponseDTO { Message = response_Update.Message, Success = false }; ;
                        }
                    }
                    return new ResponseDTO { Message = "Success", Success = true };
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw ex;
                }

            }

        }

        public async Task<ResponseDTO> UpdateEnumerateChecking(int enumerateId)
        {
            if (enumerateId == 0) return new ResponseDTO { Message = "enumerate id is Emtry or Null", Success = false };

            var enumerate = await _context.EnumerateRegisters.FirstOrDefaultAsync(x => x.EnumerateId.Equals(enumerateId));

            if (enumerate == null)
                return new ResponseDTO { Message = "Not Found enumerate with id", Success = false };


            enumerate.Status = (int)_EnumerateStatus.Checked;
            if (await _context.SaveChangesAsync() > 0)
            {
                return new ResponseDTO { Message = "Checked Enumerate Finish", Success = true };
            }
            else
            {
                return new ResponseDTO { Message = "Update EnumerateChecking Executed .SaveChangesAsync() Fail ", Success = false };
            }
        }
    }

}
