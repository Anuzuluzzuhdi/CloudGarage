using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.invoice
{
    public partial class InvoiceJobItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.invoice.InvoiceJobItemsEditor";

        public InvoiceJobItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}
