using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.invoice.Forms
{
    [FormScript("invoice.Invoiceitems")]
    [BasedOnRow(typeof(InvoiceitemsRow), CheckNames = true)]
    public class InvoiceitemsForm
    {
        [HalfWidth]
        public Int64 ProductId { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Int64 UnitId { get; set; }
        [FormCssClass("line-break-sm")]
        [HalfWidth(UntilNext = true)]
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        [FormCssClass("line-break-sm")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public String Description { get; set; }
    }
}