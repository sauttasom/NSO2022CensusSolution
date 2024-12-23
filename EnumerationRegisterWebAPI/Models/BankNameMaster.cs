using System;
using System.Collections.Generic;

namespace EnumerationRegisterWebAPI.Models;

public partial class BankNameMaster
{
    public int BanknameId { get; set; }

    public string BankName { get; set; } = null!;
}
