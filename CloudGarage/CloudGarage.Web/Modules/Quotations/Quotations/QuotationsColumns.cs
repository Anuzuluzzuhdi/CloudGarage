using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Quotations.Columns
{
    [ColumnsScript("Quotations.Quotations")]
    [BasedOnRow(typeof(QuotationsRow), CheckNames = true)]
    public class QuotationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public Double Discount { get; set; }
        public Double TotalDiscount { get; set; }
        public Boolean NoTax { get; set; }
        public Double Vat { get; set; }
        public Double TotalTax { get; set; }
        public Double ShippingCost { get; set; }
        public Double GrandTotal { get; set; }
        public Double NetTotal { get; set; }
        [EditLink]
        public String Details { get; set; }
        [QuickFilter]
        public DateTime ExpiryDate { get; set; }
    }
}