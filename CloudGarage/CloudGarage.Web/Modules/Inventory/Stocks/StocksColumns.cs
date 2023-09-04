using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Stocks")]
    [BasedOnRow(typeof(StocksRow), CheckNames = true)]
    public class StocksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public int Id { get; set; }
        [QuickFilter]
        public String ProductBarcode { get; set; }
        [QuickFilter]
        public String CategoryName { get; set; }
        
        [QuickFilter]
        public String BranchName { get; set; }
        public double QtyIn { get; set; }
        public double QtyOut { get; set; }
        public double Stock { get; set; }
    }
}