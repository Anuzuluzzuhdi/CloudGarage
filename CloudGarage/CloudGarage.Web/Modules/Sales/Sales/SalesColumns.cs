using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Sales.Columns
{
    [ColumnsScript("Sales.Sales")]
    [BasedOnRow(typeof(SalesRow), CheckNames = true)]
    public class SalesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public int Id { get; set; }
        [QuickFilter, EditLink]
        public string CustomerName { get; set; }
        [QuickFilter, EditLink]
        public DateTime Date { get; set; }
        [QuickFilter]
        public int PaymentAccount { get; set; }
        [QuickFilter]
        public string BranchName { get; set; }
        public double Discount { get; set; }
        public double TotalDiscount { get; set; }
        public Boolean NoTax { get; set; }
        public double Vat { get; set; }
        public double TotalTax { get; set; }
        public double ShippingCost { get; set; }
        public double GrandTotal { get; set; }
        public double NetTotal { get; set; }
        public double PaidAmount { get; set; }
        public double Due { get; set; }
        public double Change { get; set; }
        [EditLink]
        public string Details { get; set; }
    }
}