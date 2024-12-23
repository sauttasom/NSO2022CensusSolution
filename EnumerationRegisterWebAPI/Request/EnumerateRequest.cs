using Newtonsoft.Json;

namespace EnumerationRegisterWebAPI.Request
{

    public class EnumerateSearchRequest
    {
        public string?[]? TamCodeMapControl { get; set; }
        public string? SubDistrictId { get; set; }
        public string? TypeMunId { get; set; }
        public string? MunicipaliId { get; set; }
        public string? VillageId { get; set; }



        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int[]? IsVolunteer { get; set; }
        public int[]? Status { get; set; }

        public int PageNumber { get; set; }
        public int PageSize { get; set; }

        public string OrderBy { get; set; }

        public string Direction { get; set; }

    }
    public class EnumerateRequest
    {
        public int? EnumerateId { get; set; }
        public string? PID { get; set; }
        public string? Perfix { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set;}
        public DateTime? BirthDate { get; set; }
        public int? Age { get; set; }

        [JsonProperty("Education")]
        public string? EducationID { get; set; }  
        public string? PhoneNumber { get; set; }
        public int IsVolunteer { get; set; }

        [JsonProperty("EmailAddress")]
        public string? Email { get; set; }
        public string? LineID { get; set;}

        public string? PhoneBrand{ get; set;}
        public int PhoneOS { get; set; }
        public string? PhoneOSName { get; set; }
        public int? PhoneNetWork { get; set; }
        public string? PhoneNetworkName { get; set; }


        //public string? OtherVolunteer { get; set; }


        public string? ProvinceId { get; set; }
        public string? ProvinceName { get; set; }

        public string? DistrictId { get; set; }
        public string? DistrictName { get; set; }
        
        public string? SubDistrictId { get; set; }
        public string? SubDistrictName { get; set; }


        public string? MunicipalityId { get; set; }
        public string? MunicipalityName { get; set; }

        public string? TypeMunicipalityId { get; set; }
        public string? TypeMunicipalityName { get; set; }
        
        public string? VillageId { get; set;}
        public string? VillageName { get; set; }


        public string? BankAccountNumber { get; set; }
        public string? BankAccountName { get; set; }
        public int? BankAccount { get; set; }

        public string? PositionId { get; set; }
         
    }
}
