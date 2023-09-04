using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage
{
    public partial class CurrencyFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CloudGarage.CurrencyFormatter";

        public CurrencyFormatterAttribute()
            : base(Key)
        {
        }

        public string ContractAmount
        {
            get { return GetOption<string>("contractAmount"); }
            set { SetOption("contractAmount", value); }
        }
    }
}
