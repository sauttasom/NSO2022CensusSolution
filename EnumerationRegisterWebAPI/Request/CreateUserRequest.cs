namespace EnumerationRegisterWebAPI.Request
{
    public class CreateUserRequest
    {
        public int UserLoginID { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string? EmpolyId { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public string PID { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int PositionId { get; set; }
        public int RoleId { get; set; }
        public int Active { get; set; }
    }
}
