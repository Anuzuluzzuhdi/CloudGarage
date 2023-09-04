namespace CloudGarage.HumanResource
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("CloudGarage.RateKind")]
    public enum RateKind
    {
        [Description("Hourly")]
        Hourly = 1,
        [Description("Salary")]
        Salary = 2
    }
}
