using Newtonsoft.Json;

namespace EnumerationRegisterWebAPI.Request
{
    public class VillageUserMapControlRequest
    {
        [JsonProperty("tamId")]
        public string SubDistrictId { get; set; }

        [JsonProperty("villageListId")]
        public string[]? VillageListId { get; set; }
    }
}
