using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Products")]
    [BasedOnRow(typeof(ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public String Barcode { get; set; }
        public String Sn { get; set; }
        public String ProductName { get; set; }
        public String Model { get; set; }
        public Double UnitPrice { get; set; }
        public Double UnitsOnOrder { get; set; }
        public Double PurchasePrice { get; set; }
        public Double ReorderLevel { get; set; }
        [QuickFilter]
        public String CategoryName { get; set; }
        [QuickFilter]
        public String UnitName { get; set; }
        [QuickFilter]
        public String BrandName { get; set; }
        public String ProductDetails { get; set; }
    }
}