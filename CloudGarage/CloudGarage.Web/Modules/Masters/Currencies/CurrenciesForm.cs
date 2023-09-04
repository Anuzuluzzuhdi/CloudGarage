using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Currencies")]
    [BasedOnRow(typeof(CurrenciesRow), CheckNames = true)]
    public class CurrenciesForm
    {
        public string CurrencyName { get; set; }
        public string CurrencySymbol { get; set; }
    }
}