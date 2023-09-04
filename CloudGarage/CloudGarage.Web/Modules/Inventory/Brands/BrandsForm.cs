using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Brands")]
    [BasedOnRow(typeof(BrandsRow), CheckNames = true)]
    public class BrandsForm
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}