using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Updatestocks")]
    [BasedOnRow(typeof(UpdatestocksRow), CheckNames = true)]
    public class UpdatestocksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [QuickFilter]
        public String ProductProductName { get; set; }
        public double Quantity { get; set; }
        // public int VNo { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        [QuickFilter]
        public String WarehouseName { get; set; }
        [EditLink]
        public string Mode { get; set; }
        //public string TransactionType { get; set; }
        public int Status { get; set; }
        public string Note { get; set; }
        public DateTime InsertDate { get; set; }
    }
}