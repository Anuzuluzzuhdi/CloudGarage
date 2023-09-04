using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Inventory
{
    public partial class WarehaouseFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.Inventory.WarehaouseFormatter";

        public WarehaouseFormatterAttribute()
            : base(Key)
        {
        }
    }
}
