namespace CloudGarage.Inventory
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("CloudGarage.StatusKindTf")]
    public enum StatusKindTf
    {
        [Description("Pending")]
        Pending = 1,
        [Description("Complete")]
        Complete = 2
    }
}
