using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class EnumerateRegister
{
    public int EnumerateId { get; set; }

    public string UserName { get; set; } = null!;

    public string PassWord { get; set; } = null!;

    public string Perfix { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public DateTime BirthDate { get; set; }

    public string? EducationName { get; set; }

    public int? EducationId { get; set; }

    public string? Email { get; set; }

    public string? LineId { get; set; }

    public string PhoneNummber { get; set; } = null!;

    public string? PhoneBrand { get; set; }

    public string? PhoneOs { get; set; }

    public string? PhoneOsid { get; set; }

    public string? PhoneNetWork { get; set; }

    public string? PhoneNetWorkid { get; set; }

    public string ProvinceId { get; set; } = null!;

    public string ProvinceName { get; set; } = null!;

    public string DistrictId { get; set; } = null!;

    public string DistrictName { get; set; } = null!;

    public string SubDistrictId { get; set; } = null!;

    public string SubDistrictName { get; set; } = null!;

    public string MunicipalityId { get; set; } = null!;

    public string MunicipalityName { get; set; } = null!;

    public string VillageId { get; set; } = null!;

    public string? VillageName { get; set; }

    public int IsVolunteer { get; set; }

    public string? OtherVolunteer { get; set; }

    public int Status { get; set; }

    public DateTime? CreateDate { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public int? Age { get; set; }

    public string TypeMunicipalityId { get; set; } = null!;

    public string TypeMunicipalityName { get; set; } = null!;

    public string? FullName { get; set; }

    public string? BankAccount { get; set; }

    public string? BankAccountName { get; set; }

    public string? BankAccountNo { get; set; }

    public string? PositionId { get; set; }

    public string? ModifiedBy { get; set; }

    public virtual EducationLevel? Education { get; set; }
}
