using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class InvoiceFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.invoice.InvoiceFormatter";

        public InvoiceFormatterAttribute()
            : base(Key)
        {
        }
    }
}
