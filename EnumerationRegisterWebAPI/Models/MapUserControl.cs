using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class MapUserControl
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string? Reg { get; set; }

    public string? RegN { get; set; }

    public string? Cwt { get; set; }

    public string? CwtN { get; set; }

    public string? Amp { get; set; }

    public string? AmpN { get; set; }

    public string? Tam { get; set; }

    public string? TamN { get; set; }

    public string? Type { get; set; }

    public byte[]? TypeN { get; set; }

    public string? Mun { get; set; }

    public string? MunN { get; set; }

    public string? Vil { get; set; }

    public string? VilN { get; set; }

    public virtual User User { get; set; } = null!;
}
