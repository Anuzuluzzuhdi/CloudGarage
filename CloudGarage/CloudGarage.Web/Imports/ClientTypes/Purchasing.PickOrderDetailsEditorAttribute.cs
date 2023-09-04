using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Purchasing
{
    public partial class PickOrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Purchasing.PickOrderDetailsEditor";

        public PickOrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
