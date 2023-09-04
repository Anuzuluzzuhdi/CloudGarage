using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Quotations.Forms
{
    [FormScript("Quotations.Quotationdetails")]
    [BasedOnRow(typeof(QuotationdetailsRow), CheckNames = true)]
    public class QuotationdetailsForm
    {
        public Int64 ProductId { get; set; }
        [ReadOnly(true)]
        public Int64 UnitId { get; set; }
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}