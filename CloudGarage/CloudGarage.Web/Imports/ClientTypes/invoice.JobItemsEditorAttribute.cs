using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class JobItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.invoice.JobItemsEditor";

        public JobItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}
