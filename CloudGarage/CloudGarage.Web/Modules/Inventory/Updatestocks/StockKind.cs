namespace CloudGarage.Inventory
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("CloudGarage.StockKind")]
    public enum StockKind
    {
        [Description("IN")]
        IN = 1,
        [Description("OUT")]
        OUT = 2
    }
}
