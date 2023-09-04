using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Quotations
{
    public partial class ProductsFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.Quotations.ProductsFormatter";

        public ProductsFormatterAttribute()
            : base(Key)
        {
        }
    }
}
