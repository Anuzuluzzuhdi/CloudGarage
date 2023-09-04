using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Inventory
{
    public partial class CategoriesEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "CloudGarage.Inventory.CategoriesEditor";

        public CategoriesEditorAttribute()
            : base(Key)
        {
        }
    }
}
