using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Goodsreceiptdetails")]
    [BasedOnRow(typeof(GoodsreceiptdetailsRow), CheckNames = true)]
    public class GoodsreceiptdetailsColumns
    {
      //  [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
       // public int Id { get; set; }
       // public String GoodsReceiptProductName { get; set; }
       // public String ProductBarcode { get; set; }
        [EditLink, ProductsFormatter]
        public string ProductName { get; set; }
        [WarehaouseFormatter]
        public String WarehouseName { get; set; }
        //  public string Description { get; set; }
        public double Quantity { get; set; }
      
    }
}