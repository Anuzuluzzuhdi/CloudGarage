using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class InvoiceItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.invoice.InvoiceItemsEditor";

        public InvoiceItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}
