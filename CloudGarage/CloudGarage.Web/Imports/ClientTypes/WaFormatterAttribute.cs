﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage
{
    public partial class WaFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.WaFormatter";

        public WaFormatterAttribute()
            : base(Key)
        {
        }
    }
}
