using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Units")]
    [BasedOnRow(typeof(UnitsRow), CheckNames = true)]
    public class UnitsForm
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}