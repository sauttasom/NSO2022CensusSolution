using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace EnumerationRegisterWebAPI.Request
{
    public class AddFarmerRequest
    {
        public int? FarmerId { get; set; }
        public string PID { get; set; } 
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        [JsonProperty("AH_CODE")]
        public string Ah_code { get; set; }
        public int Status { get; set;}

        public string UserName { get; set;}
        public string Password { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
    }
}
