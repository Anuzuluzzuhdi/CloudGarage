namespace CloudGarage
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("CloudGarage.VoucherType")]
    public enum VoucherType
    {
        [Description("INV")]
        INV = 1,
        [Description("Expense")]
        Expense = 2,   
        [Description("Journal")]
        Journal = 3, 
        [Description("Contra")]
        Contra = 4,    
        [Description("Customer Receive")]
        CustomerReceive = 5,   
        [Description("PM")]
        PM = 6,  
        [Description("DV")]
        DV = 7,
        [Description("Bank Transaction")]
        BankTransaction = 8,  
        [Description("CV")]
        CV = 9,
        [Description("Purchase")]
        Purchase = 10
    }
}
