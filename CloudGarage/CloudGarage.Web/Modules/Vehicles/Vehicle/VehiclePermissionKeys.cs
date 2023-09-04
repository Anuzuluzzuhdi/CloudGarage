

using Serenity.ComponentModel;
using System.ComponentModel;

namespace CloudGarage.Vehicle
{
    [NestedPermissionKeys]
    [DisplayName("Vehicles")]
    public class PermissionKeys
    {
        [DisplayName("Vehicles")]
        public class Vehicles
        {
            public const string View = "Vehicles:Vehicle:View";
            public const string Create = "Vehicles:Vehicle:Create";
            public const string Update = "Vehicles:Vehicle:Update";
            public const string Delete = "Vehicles:Vehicle:Delete";
        }
    }
}
