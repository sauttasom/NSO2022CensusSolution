using Newtonsoft.Json;

namespace EnumerationRegisterWebAPI.Request
{
    public class AddFarmerSearchRequest
    {
        [JsonProperty("username")]
        public string? UserName { get; set; }
        [JsonProperty("fullname")]
        public string? FullName { get; set; }

        [JsonProperty("active")]
        public int?[] Active { get; set; }

        public int PageSize { get; set; }

        public int PageNo { get; set; }

        public string OrderBy { get; set; }

        public string Direction { get; set; }
    }
}
