using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Purchasing.Columns
{
    [ColumnsScript("Purchasing.Purchase")]
    [BasedOnRow(typeof(PurchaseRow), CheckNames = true)]
    public class PurchaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter, EditLink]
        public String SupplierCompanyName { get; set; }
        [EditLink]
        public String InvoiceNo { get; set; }
        [QuickFilter, EditLink]
        public DateTime Date { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        public Int64 PaymentAccount { get; set; }
        public Double Discount { get; set; }
        public Double TotalDiscount { get; set; }
        public Boolean NoTax { get; set; }
        public Double Vat { get; set; }
        public Double TotalTax { get; set; }
        public Double ShippingCost { get; set; }
        public Double GrandTotal { get; set; }
        public Double NetTotal { get; set; }
        public Double PaidAmount { get; set; }
        public Double Due { get; set; }
        public Double Change { get; set; }
        public String Details { get; set; }
    }
}