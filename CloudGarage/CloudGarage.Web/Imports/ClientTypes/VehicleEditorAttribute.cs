using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage
{
    public partial class VehicleEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "CloudGarage.VehicleEditor";

        public VehicleEditorAttribute()
            : base(Key)
        {
        }
    }
}
