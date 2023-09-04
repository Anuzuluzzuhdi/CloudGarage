using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Sales
{
    public partial class SalesDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Sales.SalesDetailEditor";

        public SalesDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
