using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.JobCards
{
    public partial class JobFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.JobCards.JobFormatter";

        public JobFormatterAttribute()
            : base(Key)
        {
        }
    }
}
