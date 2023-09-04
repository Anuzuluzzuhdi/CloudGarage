using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Quotations.Forms
{
    [FormScript("Quotations.Quotationjobitems")]
    [BasedOnRow(typeof(QuotationjobitemsRow), CheckNames = true)]
    public class QuotationjobitemsForm
    {
        public Int64 JobType { get; set; }
        //[ReadOnly(true)]
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}