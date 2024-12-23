using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class Tam
{
    public string TamCode { get; set; } = null!;

    public string TamOrder { get; set; } = null!;

    public string? TamName { get; set; }

    public string AmpCode { get; set; } = null!;

    public virtual Amp AmpCodeNavigation { get; set; } = null!;

    public virtual ICollection<Vil> Vils { get; } = new List<Vil>();
}
