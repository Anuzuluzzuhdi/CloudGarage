using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Goodsreceiptdetails")]
    [BasedOnRow(typeof(GoodsreceiptdetailsRow), CheckNames = true)]
    public class GoodsreceiptdetailsForm
    {
       // public int GoodsReceiptId { get; set; }
        public int ProductId { get; set; }
        //public string ProductName { get; set; }
        public double Quantity { get; set; }
        public int WarehouseId { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public string Description { get; set; }
        
       
    }
}