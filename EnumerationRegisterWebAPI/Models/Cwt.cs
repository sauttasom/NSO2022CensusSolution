using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class Cwt
{
    public string CwtCode { get; set; } = null!;

    public string? CwtOrder { get; set; }

    public string? CwtName { get; set; }

    public string RegCode { get; set; } = null!;

    public virtual ICollection<Amp> Amps { get; } = new List<Amp>();
}
