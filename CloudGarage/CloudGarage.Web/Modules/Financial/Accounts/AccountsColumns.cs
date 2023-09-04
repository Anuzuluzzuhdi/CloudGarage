using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Financial.Columns
{
    [ColumnsScript("Financial.Accounts")]
    [BasedOnRow(typeof(AccountsRow), CheckNames = true)]
    public class AccountsColumns
    {
        [EditLink, Width(100)]
        public Int64 HeadCode { get; set; }
        [Width(450)]
        public String HeadName { get; set; }
        [Width(150),AlignRight]
        public Double OpeningBalance { get; set; }
        [Width(100),AlignRight]
        public Double Balance { get; set; }
    }
}