namespace EnumerationRegisterWebAPI.Response
{
    public class EnumerateRegisterDetailResponse
    {
        public int EnumerateId { get; set; }
        public string PID { get; set; }
        public string Perfix { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public int? Age { get; set; }
        public int EducationId { get; set; }
        public string Email { get; set; }
        public string LineID { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneBrand { get; set; }
        public string PhoneOS { get; set; }
        public string PhoneOSName { get; set; }
        public string PhoneNetWork { get; set; }
        public string PhoneNetworkName { get; set; }
        public int IsVolunteer { get; set; }

        public string PositionId { get; set; }


        public string BankAccountNumber { get; set; }
        public string BankAccountName { get; set; }
        public string BankAccount { get; set; }
        
        public string ProvinceId { get; set; }
        public string ProvinceName{ get; set; }
        public string DistrictId { get; set; }
        public string DistrictName { get; set; }
        public string SubDistrictId { get; set; }
        public string SubDistrictName { get; set; }
        public string TypeMunId { get; set; }
        public string TypeMunName { get; set; }
        public string MunicipalityId { get; set; }
        public string MunicipalityName { get; set; }
        public string VillageId { get; set; }
        public string VillageName { get; set; }
        public int Status { get; set; }
    }
}
