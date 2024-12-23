using System.ComponentModel.DataAnnotations;

namespace EnumerationRegisterWebAPI.Request
{
    public class RequestEnumerateUserName
    {
        [Required]
        public string ProviceId { get; set; }

        public string DistrictId { get; set; }
        public string SubDistrictId { get; set; }
        public string VillageId { get; set; }
        public string MunicipalityId { get; set; }
        //public string Vit { get; set; }
    }
}
