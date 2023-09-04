using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Purchasing
{
    public partial class PickerOrderDetailsEditor1Attribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Purchasing.PickerOrderDetailsEditor1";

        public PickerOrderDetailsEditor1Attribute()
            : base(Key)
        {
        }
    }
}
