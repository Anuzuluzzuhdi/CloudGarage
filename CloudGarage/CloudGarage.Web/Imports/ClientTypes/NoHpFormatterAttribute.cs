using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage
{
    public partial class NoHpFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.NoHpFormatter";

        public NoHpFormatterAttribute()
            : base(Key)
        {
        }
    }
}
