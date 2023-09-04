using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Damagedproducts")]
    [BasedOnRow(typeof(DamagedproductsRow), CheckNames = true)]
    public class DamagedproductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Code { get; set; }
        public string Name { get; set; }
        [QuickFilter]
        public String CategoryName { get; set; }
        public double PurchasePrice { get; set; }
        public double Quantity { get; set; }
        public DateTime Date { get; set; }
        public string Note { get; set; }
    }
}