namespace EnumerationRegisterWebAPI.Request
{
    public class UserInfoResponse
    {
        public int UserId { get; set; } = 0;
        public string UserName { get; set; } = "";
        public string Name { get; set; } = "";
        public string PID { get; set; } = "";
        public string Email { get; set; } = "";
        public string Phone { get; set; } = "";
        public string OfficerId { get; set; } = "";
        public int PositionId { get; set; } = 0;
        public string PositionName { get; set; } = "";
        public int RoleId { get; set; } = 0;
        public string RoleName { get; set; } = "";

        public string CwtCode { get; set; } = "";
        public string CwtName { get; set; } = "";
        public string AmpCode { get; set; } = "";
        public string AmpName { get; set; } = "";
        public string TamCode { get; set; } = "";
        public string TamName { get; set; } = "";
        public string VilCode { get; set; } = "";
        public string VilName { get; set; } = "";
        public string MunCode { get; set; } = "";
        public string TypeCode { get; set; } = "";
    }
}
