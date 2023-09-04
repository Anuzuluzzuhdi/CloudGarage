using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.JobCards
{
    public partial class JobcardFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.JobCards.JobcardFormatter";

        public JobcardFormatterAttribute()
            : base(Key)
        {
        }
    }
}
