namespace CloudGarage.Masters
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("CloudGarage.CurrencyPositionKind")]
    public enum CurrencyPositionKind
    {
        [Description("Left")]
        Left = 1,
        [Description("Right")]
        Right = 2
    }
}
