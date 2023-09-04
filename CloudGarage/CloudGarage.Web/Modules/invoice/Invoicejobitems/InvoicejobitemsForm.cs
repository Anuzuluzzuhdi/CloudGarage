using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.invoice.Forms
{
    [FormScript("invoice.Invoicejobitems")]
    [BasedOnRow(typeof(InvoicejobitemsRow), CheckNames = true)]
    public class InvoicejobitemsForm
    {
        [HalfWidth]
        public Int64 JobType { get; set; }
        [HalfWidth(UntilNext = true)]
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        [FormCssClass("line-break-sm")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public String Description { get; set; }
    }
}