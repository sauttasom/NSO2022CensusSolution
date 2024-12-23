namespace EnumerationRegisterWebAPI.Response
{
    public class Region
    {
        public string Regionid { get; set; }
        public string RegionName { get; set; }
        public string RegionOrder { get; set; }
    }
   
    public class SubDistrict
    {

        public string? SubDistrictid { get; set; }
        public string? SubDistrictName { get; set; }
        public string? SubDistrictOrder { get; set; }


    }
    public class MunicipalityType
    {
        public string? Typeid { get; set; }
        public string? Typename { get; set; }
        public string? TypenameOrder { get; set; }
    }
    public class Municipality
    {
        public string? Munid { get; set; }
        public string? MunName { get; set; }
        public string? MunOrder { get; set; }
    }
    public class Village
    {

        public string? Villageid { get; set; }
        public string? VillageName { get; set; }
        public string? VillageOrder { get; set; }
    }
}
