using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Currencies")]
    [BasedOnRow(typeof(CurrenciesRow), CheckNames = true)]
    public class CurrenciesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string CurrencyName { get; set; }
        public string CurrencySymbol { get; set; }
    }
}