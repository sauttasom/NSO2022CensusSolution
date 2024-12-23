using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class EducationLevel
{
    public int EducationId { get; set; }

    public string EducationName { get; set; } = null!;

    public int? Active { get; set; }

    public virtual ICollection<EnumerateRegister> EnumerateRegisters { get; } = new List<EnumerateRegister>();
}
