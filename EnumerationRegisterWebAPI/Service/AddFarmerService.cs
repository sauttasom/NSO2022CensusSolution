using EnumerationRegisterWebAPI.Models;
using EnumerationRegisterWebAPI.Request;
using EnumerationRegisterWebAPI.Response;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Text;

namespace EnumerationRegisterWebAPI.Service
{
    public interface IAddFarmerService
    {
        public Task<ResponseDTO> DeleteFarmer(int rownumber);
        public Task<List<User>> GetFarmerById(int userid);
        public ResponseDTO GenerateFarmerUserName(string pid);
        public Task<List<FarmerSearchListResponse>> GetFarmerSearchList(AddFarmerSearchRequest addFarmerSearch, int createby);
        public Task<ResponseDTO> AddFarmer(AddFarmerRequest addFarmerRequest, int createBy);
        public Task<ResponseDTO> UpdateFarmer(AddFarmerRequest addFarmerRequest, int createBy);
    }
    public class AddFarmerService : IAddFarmerService
    {
        private readonly Agrc66Context _context;
        private readonly string _key = "R2zhan8um8HQWnVr9g85fQ0SQJ7NW8ez";
        enum Direction { DESC, ASC };
        public AddFarmerService(Agrc66Context context)
        {
            _context = context;
        }
        public async Task<ResponseDTO> DeleteFarmer(int rowNumber)
        {
            if (rowNumber == null)
                return new ResponseDTO { Message = "rowNumber IsNullOrEmpty", Success = false };

            var responseDto = new ResponseDTO();
            try
            {
                var dbUser = await _context.Users.FindAsync(rowNumber);
                _context.Users.Remove(dbUser);
                var result = await _context.SaveChangesAsync();

                if (result > 0)
                {
                    responseDto.Message = "Deleted Success";
                    responseDto.Success = true;
                }
                else
                {
                    responseDto.Message = "Deleted Fail please contact admin";
                    responseDto.Success = false;
                }

            }
            catch (Exception ex)
            {
                return new ResponseDTO
                { Message = ex.Message, Success = false };
            }
            return responseDto;
        }
        private ResponseDTO FindCradID(string pid)
        {
            if (!string.IsNullOrEmpty(pid))
            {
                string alreadyPID = _context.Users.Where(x => x.Pid.Equals(pid)).Select(p => p.Pid).FirstOrDefault();

                if (!string.IsNullOrEmpty(alreadyPID))
                {

                    return new ResponseDTO { Message = "เลขบัตรประชาชน นี้ถูกใช้แล้ว", Success = false };
                }
                else
                {
                    return new ResponseDTO { Message = string.Empty, Success = true };
                }
            }
            else
            {
                return new ResponseDTO { Message = "เลขบัตรประชาชน นี้ถูกใช้แล้ว", Success = false };
            }
        }
        public async Task<List<User>> GetFarmerById(int userid)
        {
            if (userid == null)
                throw new ArgumentNullException(nameof(userid), "Argument cannot be null");

            var Iquery = _context.Users.Where(x => x.UserId.Equals(userid));
            string passwordDecry = DecryptString(Iquery.Select(x => x.Password).FirstOrDefault());
            var data = await Iquery.Select(x => new User
            {
                Pid = x.Pid,
                Name = x.Name,
                Phone = x.Phone,
                Email = x.Email,
                AhCode = x.AhCode,
                Active = x.Active,
                UserId = x.UserId,
                Username = x.Username,
                Password = passwordDecry,

            }).ToListAsync();


            return data;
        }
        public async Task<List<FarmerSearchListResponse>> GetFarmerSearchList(AddFarmerSearchRequest addFarmerSearch, int createby)
        {

            var Iquery = _context.Users.Where(x => x.CreatedBy.HasValue && x.CreatedBy.Value.Equals(createby)&&
                                                  x.RoleId.Value.Equals(10) );

            if (!string.IsNullOrEmpty(addFarmerSearch.FullName.Trim()))
            {
                Iquery = Iquery.Where(x => x.Name.Trim().Contains(addFarmerSearch.FullName.Trim()));
            }
            if (!string.IsNullOrEmpty(addFarmerSearch.UserName))
            {
                Iquery = Iquery.Where(x => x.Username.Contains(addFarmerSearch.UserName.Trim()));
            }
            if (addFarmerSearch.Active.Any())
            {
                var status = addFarmerSearch.Active.ToList();
                Iquery = Iquery.Where(x => x.Active.HasValue && status.Contains(x.Active.Value));

            }

            try
            {

                if (addFarmerSearch.OrderBy.Equals("userName"))
                {
                    if (addFarmerSearch.Direction.Equals(Direction.DESC.ToString()))
                    {
                        Iquery = Iquery.OrderByDescending(x => x.Username);
                    }
                    else
                    {
                        Iquery = Iquery.OrderBy(x => x.Username);
                    }

                }
                else if (addFarmerSearch.OrderBy.Equals("fullName"))
                {
                    if (addFarmerSearch.Direction.Equals(Direction.DESC.ToString()))
                    {
                        Iquery = Iquery.OrderByDescending(x => x.Name);
                    }
                    else
                    {
                        Iquery = Iquery.OrderBy(x => x.Name);
                    }
                }
                else if (addFarmerSearch.OrderBy.Equals("createByName"))
                {
                    if (addFarmerSearch.Direction.Equals(Direction.DESC.ToString()))
                    {
                        Iquery = Iquery.OrderByDescending(x => x.CreatedByName);
                    }
                    else
                    {
                        Iquery = Iquery.OrderBy(x => x.CreatedByName);
                    }
                }
                int totalRecord = Iquery.Count();
                var data = Iquery.Select(x => new FarmerSearchListResponse
                {
                    FarmerId = x.UserId,
                    UserName = x.Username,
                    FullName = x.Name,
                    CreateByName = x.CreatedByName,
                    RoleId = x.RoleId.Value,
                    RoleName = x.RoleName,

                    Active = x.Active.Value,
                    CreateDate = x.CreatedDate.Value,
                    TotalRecord = totalRecord

                });
                return await data
                    .Skip((addFarmerSearch.PageNo - 1) * addFarmerSearch.PageSize)
                    .Take(addFarmerSearch.PageSize)
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }



        }
        private string EncryptString(string plainText)
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
        private string DecryptString(string cipherText)
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
        public async Task<ResponseDTO> AddFarmer(AddFarmerRequest addFarmerRequest, int createBy)
        {
            if (addFarmerRequest == null)
                return new ResponseDTO { Message = "FarmerRequest Is Emty", Success = false };

            var responseCreate = new ResponseDTO();
            var resultValidate = ValidateFarmerRequest(addFarmerRequest);
            if (resultValidate.Success)
            {


                try
                {
                    int userId = await _context.Users.Select(e => e.UserId).OrderByDescending(u => u).FirstOrDefaultAsync();
                    string createByname = _context.Users.FirstOrDefault(x => x.UserId.Equals(createBy)).Name;
                    var farmerObj = new User()
                    {
                        UserId = ++userId,
                        Username = addFarmerRequest.UserName.Trim(),
                        Name = addFarmerRequest.Name.Trim(),
                        Active = addFarmerRequest.Status,
                        RoleId = addFarmerRequest.RoleId,
                        RoleName = addFarmerRequest.RoleName.Trim(),
                        Phone = addFarmerRequest.Phone.Trim(),
                        Email = addFarmerRequest.Email.Trim(),
                        Password = EncryptString(addFarmerRequest.Password),
                        Pid = addFarmerRequest.PID,
                        AhCode = !string.IsNullOrEmpty(addFarmerRequest.Ah_code) ? addFarmerRequest.Ah_code.Trim() : null,
                        CreatedBy = createBy,
                        CreatedByName = createByname,
                        CreatedDate = DateTime.Now,


                    };

                    await _context.Users.AddAsync(farmerObj);
                    var reslut = await _context.SaveChangesAsync();
                    if (reslut > 0)
                    {
                        responseCreate.Message = "Add Farmer Success";
                        responseCreate.Success = true;
                    }
                    else
                    {
                        responseCreate.Message = "Add Farmer Fail";
                        responseCreate.Success = false;

                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }


            }
            else
            {
                responseCreate.Message = resultValidate.Message;
                responseCreate.Success = false;
            }
            return responseCreate;
        }
        public async Task<ResponseDTO> UpdateFarmer(AddFarmerRequest addFarmerRequest, int modifiedBy)
        {
            if (addFarmerRequest == null)
                return new ResponseDTO { Message = "UpdateFarmerRequest Argument cannot be null", Success = false };

            var responseUpdate = new ResponseDTO();
            var resultValidate = ValidateFarmerRequest(addFarmerRequest);
            if (resultValidate.Success)
            {
                try
                {
                    var userDB = await _context.Users.FindAsync(addFarmerRequest.FarmerId);
                    if (userDB == null)
                        return new ResponseDTO { Message = "Find User by Id  Not Found", Success = false };
                    var modifiendname = _context.Users.FirstOrDefault(x => x.UserId.Equals(modifiedBy)).CreatedByName;



                    userDB.Username = addFarmerRequest.UserName.Trim();
                    userDB.Name = addFarmerRequest.Name.Trim();
                    userDB.Active = addFarmerRequest.Status;
                    userDB.RoleId = addFarmerRequest.RoleId;
                    userDB.RoleName = addFarmerRequest.RoleName.Trim();
                    userDB.Phone = addFarmerRequest.Phone.Trim();
                    userDB.Email = addFarmerRequest.Email.Trim();
                    userDB.Password = EncryptString(addFarmerRequest.Password);
                    userDB.Pid = addFarmerRequest.PID;
                    userDB.AhCode = !string.IsNullOrEmpty(addFarmerRequest.Ah_code) ? addFarmerRequest.Ah_code.Trim() : null;
                    userDB.ModifiedBy = modifiedBy;
                    userDB.ModifiedByName = modifiendname;
                    userDB.CreatedDate = DateTime.Now;

                    var resutlUpdate = await _context.SaveChangesAsync();
                    if (resutlUpdate > 0)
                    {
                        responseUpdate.Message = "Update Success";
                        responseUpdate.Success = true;
                    }
                    else
                    {
                        responseUpdate.Message = "Update fail Please contact admin";
                        responseUpdate.Success = true;
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }



            }
            return responseUpdate;
        }
        private ResponseDTO ValidateFarmerRequest(AddFarmerRequest addFarmerRequest)
        {

            var ResponseDTO = new ResponseDTO();
            ResponseDTO.Success = true;
            if (string.IsNullOrEmpty(addFarmerRequest.PID))
            {
                ResponseDTO.Message = "PID Format Is Emtry";
                ResponseDTO.Success = false;
            }
            else
            {
                if (addFarmerRequest.PID.Length != 13)
                {
                    ResponseDTO.Message = "PID Format Invalid";
                    ResponseDTO.Success = false;
                }
                if (!ValidateDTO.ValidatePIDFormat(addFarmerRequest.PID))
                {
                    ResponseDTO.Message = "PID Format Invalid";
                    ResponseDTO.Success = false;
                }
            }

            if (string.IsNullOrEmpty(addFarmerRequest.Name))
            {

                ResponseDTO.Message = "Name is Emtry";
                ResponseDTO.Success = false;
            }

            if (string.IsNullOrEmpty(addFarmerRequest.UserName))
            {
                ResponseDTO.Message = "UserName is Emtry";
                ResponseDTO.Success = false;
            }
            if (string.IsNullOrEmpty(addFarmerRequest.Password))
            {
                ResponseDTO.Message = "Password is Emtry";
                ResponseDTO.Success = false;
            }

            return ResponseDTO;

        }
        public ResponseDTO GenerateFarmerUserName(string pid)
        {
            //  bool resultStringPID = ValidateDTO.ValidatePIDFormat(pid);

            string message = string.Empty;
            bool isSuccess = true;
            if (!string.IsNullOrEmpty(pid))
            {
                if (pid.Length != 13)
                {
                    isSuccess = false;
                    message = $"กรุณาระบุเลขบัตรประชาชนให้ครบ 13 หลัก";
                    return new ResponseDTO { Message = message, Success = isSuccess };
                }
                if (!ValidateDTO.ValidatePIDFormat(pid))
                {
                    message = $"กรุณาระบุเลขบัตรประชาชนให้ถูกต้อง";
                    isSuccess = false;
                    return new ResponseDTO { Message = message, Success = isSuccess };
                }
                var result = FindCradID(pid);
                if (!result.Success)
                {
                    message = $"{result.Message}";
                    isSuccess = false;
                    return new ResponseDTO { Message = message, Success = isSuccess };
                }
            }
            else
            {
                message = "รหัสประจำตัวประชาชน ไม่สามารถเป็นค่าว่างได้";
                isSuccess = false;
                return new ResponseDTO { Message = message, Success = isSuccess };
            }
            return new ResponseDTO { Message = $"P{pid}", Success = isSuccess };
        }
    }
}
