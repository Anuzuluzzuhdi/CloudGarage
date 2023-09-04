using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Inventory
{
    public partial class ProductsTFFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.Inventory.ProductsTFFormatter";

        public ProductsTFFormatterAttribute()
            : base(Key)
        {
        }
    }
}
