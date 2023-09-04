
namespace CloudGarage.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.StockReport")]
    [BasedOnRow(typeof(Inventory.StocksRow), CheckNames = true)]
    public class StockReportColumns
    {
        [QuickFilter]
        public string ProductProductName { get; set; }
        [QuickFilter]
        public string CategoryName { get; set; }
        [QuickFilter]
        public string BranchName { get; set; }

        public Double QtyIn { get; set; }
        public Double QtyOut { get; set; }
        public Double Stock { get; set; }

    }
}