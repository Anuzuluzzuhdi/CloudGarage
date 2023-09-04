using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Purchasing.Columns
{
    [ColumnsScript("Purchasing.Purchasedetails")]
    [BasedOnRow(typeof(PurchasedetailsRow), CheckNames = false)]
    public class PurchasedetailsColumns
    {
        [EditLink]
        public string ProductName { get; set; }
        public string Description { get; set; }
        [ProductFormatter]
        public string UnitName { get; set; }
        public double Quantity { get; set; }
        public double UnitPrice { get; set; }
        public double Discount { get; set; }
        public double Total { get; set; }
    }
}