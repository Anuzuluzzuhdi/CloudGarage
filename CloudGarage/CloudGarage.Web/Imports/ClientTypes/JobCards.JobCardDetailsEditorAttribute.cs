using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.JobCards
{
    public partial class JobCardDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.JobCards.JobCardDetailsEditor";

        public JobCardDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
