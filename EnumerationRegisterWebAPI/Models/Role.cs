using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string RoleName { get; set; } = null!;

    public int? Active { get; set; }
}
