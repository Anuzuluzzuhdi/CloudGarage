using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class UnitNameInvFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.invoice.UnitNameInvFormatter";

        public UnitNameInvFormatterAttribute()
            : base(Key)
        {
        }
    }
}
