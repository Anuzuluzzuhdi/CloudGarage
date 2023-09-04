using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Categories")]
    [BasedOnRow(typeof(CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        public int ParentCategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}