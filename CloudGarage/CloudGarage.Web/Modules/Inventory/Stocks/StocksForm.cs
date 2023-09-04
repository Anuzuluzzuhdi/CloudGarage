using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Stocks")]
    [BasedOnRow(typeof(StocksRow), CheckNames = true)]
    public class StocksForm
    {
        public int ProductId { get; set; }
        public int BranchId { get; set; }
        public int CategoryId { get; set; }
        public double QtyIn { get; set; }
        public double QtyOut { get; set; }
        public double Stock { get; set; }
    }
}