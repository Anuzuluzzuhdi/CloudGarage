using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Goodsissuedetails")]
    [BasedOnRow(typeof(GoodsissuedetailsRow), CheckNames = true)]
    public class GoodsissuedetailsForm
    {
        public Int64 ProductId { get; set; }
        public Double Quantity { get; set; }
        public Int64 WarehouseId { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}