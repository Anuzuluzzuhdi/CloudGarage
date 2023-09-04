using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Goodsissuedetails")]
    [BasedOnRow(typeof(GoodsissuedetailsRow), CheckNames = true)]
    public class GoodsissuedetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [EditLink, ProductsFormatter]
        public String ProductName { get; set; }
        [WarehaouseFormatter]
        public String WarehouseName { get; set; }
        public Double Quantity { get; set; }
    }
}