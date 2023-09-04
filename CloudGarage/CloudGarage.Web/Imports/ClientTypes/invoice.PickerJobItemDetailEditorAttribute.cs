using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class PickerJobItemDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.invoice.PickerJobItemDetailEditor";

        public PickerJobItemDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
