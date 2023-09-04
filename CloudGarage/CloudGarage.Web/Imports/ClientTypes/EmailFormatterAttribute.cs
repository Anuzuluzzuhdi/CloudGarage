using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage
{
    public partial class EmailFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.EmailFormatter";

        public EmailFormatterAttribute()
            : base(Key)
        {
        }
    }
}
