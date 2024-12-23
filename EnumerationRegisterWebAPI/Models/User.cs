using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Pid { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? OfficerId { get; set; }

    public int? PositionId { get; set; }

    public string? PositionName { get; set; }

    public int? RoleId { get; set; }

    public string? RoleName { get; set; }

    public int? Active { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedBy { get; set; }

    public string? CreatedByName { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public int? ModifiedBy { get; set; }

    public string? ModifiedByName { get; set; }

    public string? CwtCode { get; set; }

    public string? CwtName { get; set; }

    public string? AmpCode { get; set; }

    public string? AmpName { get; set; }

    public string? TamCode { get; set; }

    public string? TamName { get; set; }

    public string? Area { get; set; }

    public string? VilCode { get; set; }

    public string? VilName { get; set; }

    public string? MunCode { get; set; }

    public string? MunName { get; set; }

    public int? Assign { get; set; }

    /// <summary>
    /// {null or 0 =&gt;  is not trained, 1 =&gt;  is trained}
    /// </summary>
    public int? IsTained { get; set; }

    public string? TypeCode { get; set; }

    public string? TypeName { get; set; }

    public string? AhCode { get; set; }

    public string? AreaCode { get; set; }

    public string? Reg { get; set; }

    public string? Regn { get; set; }

    public string? Vilt { get; set; }

    public virtual ICollection<MapUserControl> MapUserControls { get; } = new List<MapUserControl>();
}
