using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Sales
{
    public partial class ProductsFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.Sales.ProductsFormatter";

        public ProductsFormatterAttribute()
            : base(Key)
        {
        }
    }
}
