using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class Vil
{
    public string VilCode { get; set; } = null!;

    public string? VilOrder { get; set; }

    public string? VilName { get; set; }

    public string? TamCode { get; set; }

    public string? Area { get; set; }

    public string? MunCode { get; set; }

    public virtual Tam? TamCodeNavigation { get; set; }
}
