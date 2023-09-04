using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Inventory
{
    public partial class GoodsReceiptDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Inventory.GoodsReceiptDetailEditor";

        public GoodsReceiptDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
