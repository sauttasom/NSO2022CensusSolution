namespace EnumerationRegisterWebAPI.Response
{
    public class FarmerSearchListResponse
    {
        public int FarmerId { get; set; }
        public string? FullName { get; set; }
        public string? UserName { get; set; }
        public string? CreateByName { get; set; }
        public DateTime? CreateDate { get; set; }
        public int? Active { get; set; }
        public int? RoleId { get; set; }
        public string? RoleName { get; set; }
        public int? TotalRecord { get; set;}
    }
}
