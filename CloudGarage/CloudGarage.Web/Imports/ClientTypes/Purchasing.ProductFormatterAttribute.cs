using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Purchasing
{
    public partial class ProductFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.Purchasing.ProductFormatter";

        public ProductFormatterAttribute()
            : base(Key)
        {
        }
    }
}
