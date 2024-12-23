namespace EnumerationRegisterWebAPI.Response
{
    public class EnumerateResponse
    {
        public string? EnumerateId { get; set; }

        public string? PID { get; set; }
        public string? FullName { get; set; }
        public string? FirstName { get; set; }
        public string? TypeMunId { get; set; }
        public string? TypeMunName { get; set; }
        public string? MunicipalityName{ get; set; }
        public string? MunicipalityId { get; set; }
        public string? SubDistrict { get; set; }
        public string? SubDistrictId { get; set; }
        public string? VillageId { get; set; }
        public string? VillageName { get; set; }
        public bool? IsVolunteer { get; set; }
        public int? Status { get; set; }
        public bool? IsChecking { get; set; }
        public string? StatusText { get; set; }
        public int DataLegth { get; set; }
    }
}
