using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Sales
{
    public partial class PickerOrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Sales.PickerOrderDetailsEditor";

        public PickerOrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
