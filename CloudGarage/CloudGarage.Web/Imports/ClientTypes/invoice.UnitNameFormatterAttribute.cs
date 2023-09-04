using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class UnitNameFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.invoice.UnitNameFormatter";

        public UnitNameFormatterAttribute()
            : base(Key)
        {
        }
    }
}
