using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Updatestocks")]
    [BasedOnRow(typeof(UpdatestocksRow), CheckNames = true)]
    public class UpdatestocksForm
    {
        public Int32 ProductId { get; set; }
        public Double Quantity { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 WarehouseId { get; set; }
        public Int32 StockMode { get; set; }
        public Int32 Status { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Note { get; set; }
    }
}