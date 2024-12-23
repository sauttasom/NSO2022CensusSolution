using EnumerationRegisterWebAPI.Request;
using EnumerationRegisterWebAPI.Response;
using System.Text.RegularExpressions;

namespace EnumerationRegisterWebAPI.Service
{
    public class ValidateDTO
    {
        public static bool ValidatePIDFormat(string pid)
        {
            char[] numberChars = pid.ToCharArray();

            int total = 0;
            int mul = 13;
            int mod = 0, mod2 = 0;
            int nsub = 0;
            int numberChars12 = 0;

            for (int i = 0; i < numberChars.Length - 1; i++)
            {
                int num = 0;
                int.TryParse(numberChars[i].ToString(), out num);

                total = total + num * mul;
                mul = mul - 1;

                //Debug.Log(total + " - " + num + " - "+mul);
            }

            mod = total % 11;
            nsub = 11 - mod;
            mod2 = nsub % 10;


            int.TryParse(numberChars[12].ToString(), out numberChars12);


            if (mod2 != numberChars12)
                return false;
            else
                return true;

        }
        public static ResponseDTO ValidateEnurateRquest(EnumerateRequest enumerateRequest)
        {
            bool flagValidate = true;


            if (string.IsNullOrEmpty(enumerateRequest.PID))
            {
                return new ResponseDTO { Message = "PID  IsNull Or Empty", Success = false };
            }
            else
            {


                if (enumerateRequest.PID.Length != 13)
                {

                    return new ResponseDTO { Message = "เลขบัตรประชาชนไม่ครบ 13 หลัก กรุณาแก้ไข", Success = false };
                }
                else
                {
                    var result = ValidatePIDFormat(enumerateRequest.PID);
                    if (!result)
                    {
                        return new ResponseDTO { Message = "เลขบัตรประชาชนผิดรูปแบบ กรุณาแก้ไข", Success = false };

                    }
                }
            }
            if (enumerateRequest.IsVolunteer == 1)
            {
                if (!string.IsNullOrEmpty(enumerateRequest.EducationID))
                {
                    if (int.Parse(enumerateRequest.EducationID) == 0)
                    {
                        return new ResponseDTO { Message = "Education Invalid", Success = false };
                    }

                }
                else
                {
                    return new ResponseDTO { Message = "กรุณาระบุ  ระดับการศึกษา", Success = false };

                }

            }


            if (string.IsNullOrEmpty(enumerateRequest.Perfix))
            {
                return new ResponseDTO { Message = "Perfix is null", Success = false };
            }
            if (string.IsNullOrEmpty(enumerateRequest.FirstName))
            {
                return new ResponseDTO { Message = "FirstName is null", Success = false };
            }
            if (!enumerateRequest.BirthDate.HasValue)
            {
                return new ResponseDTO { Message = "BirthDate is null", Success = false };
            }

            if (!enumerateRequest.Age.HasValue)
            {
                return new ResponseDTO { Message = "ช่วงอายุต้องอยู่ระหว่าง 18-65 ปี", Success = false };
            }



            //if (enumerateRequest.Age.Value < 18 || enumerateRequest.Age.Value > 65)
            //{
            //    if (enumerateRequest.IsVolunteer == 0)
            //    {
            //        return new ResponseDTO { Message = "ช่วงอายุต้องอยู่ระหว่าง 18-65 ปี", Success = false };
            //    }

            //}
  


            if (string.IsNullOrEmpty(enumerateRequest.PhoneNumber))
            {
                return new ResponseDTO { Message = "PhoneNumber Invalid", Success = false };
            }
            else
            {
                string motif = @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
                var checkPhoneformat = Regex.IsMatch(enumerateRequest.PhoneNumber, motif);
                if (!checkPhoneformat)
                {
                    return new ResponseDTO { Message = "PhoneNumber Invalid format", Success = false };
                }
            }


            if (!string.IsNullOrEmpty(enumerateRequest.ProvinceId))
            {

                if (int.Parse(enumerateRequest.ProvinceId) == 0)
                {
                    return new ResponseDTO { Message = "Province Invalid", Success = false };
                }

            }
            else
            {
                return new ResponseDTO { Message = "Province Invalid", Success = false };

            }

            if (!string.IsNullOrEmpty(enumerateRequest.DistrictId))
            {
                if (int.Parse(enumerateRequest.DistrictId) == 0)
                {
                    return new ResponseDTO { Message = "District Invalid", Success = false };
                }

            }
            else
            {
                return new ResponseDTO { Message = "District Invalid", Success = false };

            }

            if (!string.IsNullOrEmpty(enumerateRequest.SubDistrictId))
            {
                if (int.Parse(enumerateRequest.SubDistrictId) == 0)
                {
                    return new ResponseDTO { Message = "SubDistrict Invalid", Success = false };
                }

            }
            else
            {
                return new ResponseDTO { Message = "District Invalid", Success = false };

            }
            if (!string.IsNullOrEmpty(enumerateRequest.SubDistrictId))
            {
                if (int.Parse(enumerateRequest.SubDistrictId) == 0)
                {
                    return new ResponseDTO { Message = "SubDistrict Invalid", Success = false };
                }

            }
            else
            {
                return new ResponseDTO { Message = "District Invalid", Success = false };

            }
            if (!string.IsNullOrEmpty(enumerateRequest.TypeMunicipalityId))
            {
                if (int.Parse(enumerateRequest.TypeMunicipalityId) == 0)
                {
                    return new ResponseDTO { Message = "TypeMunicipality Invalid", Success = false };
                }

            }
            else
            {
                return new ResponseDTO { Message = "TypeMunicipality Invalid", Success = false };

            }
            if (!string.IsNullOrEmpty(enumerateRequest.VillageId))
            {
                if (int.Parse(enumerateRequest.VillageId) == 0)
                {
                    if (enumerateRequest.VillageId != "00")
                    {
                        return new ResponseDTO { Message = "Village Invalid", Success = false };
                    }

                }

            }
            else
            {
                return new ResponseDTO { Message = "Village Invalid", Success = false };

            }
            return new ResponseDTO { Message = $"{enumerateRequest.PID}", Success = flagValidate };
        }
    }
}
