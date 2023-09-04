using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.invoice.Columns
{
    [ColumnsScript("invoice.Invoiceitems")]
    [BasedOnRow(typeof(InvoiceitemsRow), CheckNames = true)]
    public class InvoiceitemsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [EditLink]
        public String ProductProductName { get; set; }

        public String Description { get; set; }
        
        public String UnitName { get; set; }
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
    }
}