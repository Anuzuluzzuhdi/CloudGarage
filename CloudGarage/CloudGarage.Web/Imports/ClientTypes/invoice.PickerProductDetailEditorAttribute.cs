using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class PickerProductDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.invoice.PickerProductDetailEditor";

        public PickerProductDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
