using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Purchasing
{
    public partial class PurchaseDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Purchasing.PurchaseDetailEditor";

        public PurchaseDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
