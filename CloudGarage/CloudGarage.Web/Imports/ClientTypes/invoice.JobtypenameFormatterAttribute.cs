using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class JobtypenameFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.invoice.JobtypenameFormatter";

        public JobtypenameFormatterAttribute()
            : base(Key)
        {
        }
    }
}
