namespace CloudGarage.Inventory
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("CloudGarage.StatusKind")]
    public enum StatusKind
    {
        [Description("Pending")]
        Pending = 1,
        [Description("Complete")]
        Complete = 2
    }
}
