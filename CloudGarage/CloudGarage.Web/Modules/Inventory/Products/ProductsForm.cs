using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Products")]
    [BasedOnRow(typeof(ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [HalfWidth(UntilNext = true)]
        public String Barcode { get; set; }
        public String Sn { get; set; }
        public String ProductName { get; set; }
        public String Model { get; set; }
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        [DefaultValue(0)]
        public Double UnitPrice { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double UnitsInStock { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double UnitsOnOrder { get; set; }
        [DefaultValue(10)]
        public Double ReorderLevel { get; set; }
        [HalfWidth]
        public Int64 CategoryId { get; set; }
        [HalfWidth]
        public Int64 UnitId { get; set; }
        [HalfWidth]
        public Int64 BrandId { get; set; }
        [FullWidth]
        public String Image { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String ProductDetails { get; set; }
    }
    
}