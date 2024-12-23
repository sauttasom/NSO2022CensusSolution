using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class Amp
{
    public string AmpCode { get; set; } = null!;

    public string AmpOrder { get; set; } = null!;

    public string? AmpName { get; set; }

    public string CwtCode { get; set; } = null!;

    public virtual Cwt CwtCodeNavigation { get; set; } = null!;

    public virtual ICollection<Tam> Tams { get; } = new List<Tam>();
}
