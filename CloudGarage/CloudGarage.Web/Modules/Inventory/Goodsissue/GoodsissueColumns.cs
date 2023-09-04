using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Goodsissue")]
    [BasedOnRow(typeof(GoodsissueRow), CheckNames = true)]
    public class GoodsissueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [QuickFilter, DisplayName("Customer")]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        [QuickFilter]
        public String SaleInvoice { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public Double TotalQuantity { get; set; }
        [QuickFilter]
        public String EmployeenFirstName { get; set; }
        [EditLink]
        public String Remarks { get; set; }
        public String Reference { get; set; }
    }
}