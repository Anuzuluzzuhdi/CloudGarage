using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Quotations
{
    public partial class JobItemsDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Quotations.JobItemsDetailEditor";

        public JobItemsDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
