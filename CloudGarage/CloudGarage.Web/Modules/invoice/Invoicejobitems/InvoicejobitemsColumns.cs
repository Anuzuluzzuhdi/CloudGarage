using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.invoice.Columns
{
    [ColumnsScript("invoice.Invoicejobitems")]
    [BasedOnRow(typeof(InvoicejobitemsRow), CheckNames = true)]
    public class InvoicejobitemsColumns
    {
        [EditLink, AlignCenter]
        public String JobTypeName { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
    }
}