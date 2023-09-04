using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Sales
{
    public partial class SaleDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Sales.SaleDetailsEditor";

        public SaleDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
