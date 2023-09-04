namespace CloudGarage.CashBank
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("CloudGarage.AccountKind")]
    public enum AccountKind
    {
        [Description("Debit (+)")]
        Debit = 1,
        [Description("Credit (-)")]
        Credit = 2
    }
}
