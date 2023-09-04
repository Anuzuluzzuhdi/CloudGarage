using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Damagedproducts")]
    [BasedOnRow(typeof(DamagedproductsRow), CheckNames = true)]
    public class DamagedproductsForm
    {
        [HalfWidth]
        public int CategoryId { get; set; }
        [HalfWidth]
        public int ProductId { get; set; }
        [ReadOnly(true)]
        [HalfWidth(UntilNext = true)]
        public string Code { get; set; }
        [ReadOnly(true)]
        public string Name { get; set; }   
        public double PurchasePrice { get; set; }
        public double Quantity { get; set; }
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        [FullWidth]
        [TextAreaEditor]
        public string Note { get; set; }
        
    }
}