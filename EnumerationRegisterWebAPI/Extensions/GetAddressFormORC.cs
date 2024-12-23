using EnumerationRegisterWebAPI.Response;
using Newtonsoft.Json;

namespace EnumerationRegisterWebAPI.Extensions
{  
    public class GetAddressFormORC 
    {
        private static string? _domain;
        private static string? _rootAddress;

        public static  async Task<List<SubDistrict>> GetSubDistrict(IConfiguration configuration , string provinceId , string districtId)
        {
            using (var client = new HttpClient())
            {

                _domain = configuration["Domain"];
                string? _rootAddress = configuration["AddressConfig:rootAddress"];

                if (string.IsNullOrEmpty(_domain))
                    throw new ArgumentNullException("ArgumentNullException Domain");

                if (string.IsNullOrEmpty(_rootAddress))
                    throw new ArgumentNullException("ArgumentNullException RootAddress Not Found in appsetting.json");


                string endpoint = $"{_domain}/{_rootAddress}/GetSubDistrict?provinceid={provinceId}&districtid={districtId}";
                client.BaseAddress = new Uri(endpoint);
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();
                List<SubDistrict> subDistricts= new List<SubDistrict>();

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    subDistricts = JsonConvert.DeserializeObject<List<SubDistrict>>(content);



                }
                return subDistricts;

            }
        }
        public static async Task<List<Municipality>> GetMunicipality(IConfiguration configuration, string provinceId, string districtId, string subdisrictId , string munType)
        {
            using (var client = new HttpClient())
            {

                _domain = configuration["Domain"];
                _rootAddress = configuration["AddressConfig:rootAddress"];

                if (string.IsNullOrEmpty(_domain))
                    throw new ArgumentNullException("ArgumentNullException Domain");

                if (string.IsNullOrEmpty(_rootAddress))
                    throw new ArgumentNullException("ArgumentNullException RootAddress Not Found in appsetting.json");


                string endpoint = $"{_domain}/{_rootAddress}/GetMunicipality?proviceid={provinceId}&district={districtId}&subdistrict={subdisrictId}&typeMun={munType}";
                client.BaseAddress = new Uri(endpoint);
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();

                List<Municipality> municipalityList = new List<Municipality>();
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    municipalityList = JsonConvert.DeserializeObject<List<Municipality>>(content);



                }
                return municipalityList;

            }
        }
        public static async Task<List<Village>> GetVillage(IConfiguration configuration, string provinceId, string districtId, string munType , string subdisrictId)
        {
            using (var client = new HttpClient())
            {

                _domain = configuration["Domain"];
               _rootAddress = configuration["AddressConfig:rootAddress"];

                if (string.IsNullOrEmpty(_domain))
                    throw new ArgumentNullException("ArgumentNullException Domain");

                if (string.IsNullOrEmpty(_rootAddress))
                    throw new ArgumentNullException("ArgumentNullException RootAddress Not Found in appsetting.json");


                string endpoint = $"{_domain}/{_rootAddress}/GetVillage?provinceid={provinceId}&districtid={districtId}&subdistrict={subdisrictId}&muntype={munType}";
                client.BaseAddress = new Uri(endpoint);
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();

                List<Village> villageList = new List<Village>();
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    villageList = JsonConvert.DeserializeObject<List<Village>>(content);



                }
                return villageList;

            }
        }
        public static async Task<List<MunicipalityType>> GetMunTypes(IConfiguration configuration , string provinceId , string districtId ,string subDistrictId)
        {
            using (var client = new HttpClient())
            {
                _domain = configuration["Domain"];
                 _rootAddress = configuration["AddressConfig:rootAddress"];

                if (string.IsNullOrEmpty(_domain))
                    throw new ArgumentNullException("ArgumentNullException Domain");

                if (string.IsNullOrEmpty(_rootAddress))
                    throw new ArgumentNullException("ArgumentNullException " +
                        "RootAddress Not Found in appsetting.json");
                string endpoint = $"{_domain}/{_rootAddress}/GetMunicipalityType?proviceid={provinceId}&district={districtId}&subdistrict={subDistrictId}";

                client.BaseAddress = new Uri(endpoint);
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();
                List<MunicipalityType> munTypes = new List<MunicipalityType>();

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    munTypes = JsonConvert.DeserializeObject<List<MunicipalityType>>(content);
                }
                return munTypes;

            }
        }
    }
}
