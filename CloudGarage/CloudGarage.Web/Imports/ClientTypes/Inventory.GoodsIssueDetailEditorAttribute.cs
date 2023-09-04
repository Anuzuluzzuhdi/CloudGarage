using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Inventory
{
    public partial class GoodsIssueDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Inventory.GoodsIssueDetailEditor";

        public GoodsIssueDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
