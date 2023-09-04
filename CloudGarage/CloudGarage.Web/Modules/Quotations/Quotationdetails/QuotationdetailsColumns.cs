using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Quotations.Columns
{
    [ColumnsScript("Quotations.Quotationdetails")]
    [BasedOnRow(typeof(QuotationdetailsRow), CheckNames = true)]
    public class QuotationdetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [EditLink]
        public String ProductName { get; set; }

        public String Description { get; set; }
        [ProductsFormatter]
        public String UnitName { get; set; }
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
    }
}