using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Financial.Forms
{
    [FormScript("Financial.Accounts")]
    [BasedOnRow(typeof(AccountsRow), CheckNames = true)]
    public class AccountsForm
    {
        [HalfWidth(UntilNext = true)]
        public String HeadName { get; set; }
        [ReadOnly(true), IntegerEditor]
        public Int64 HeadCode { get; set; }
        public Int64 ParentHead { get; set; }
        [ReadOnly(true)]
        public String PHeadName { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public Int32 HeadLevel { get; set; }
        [ReadOnly(true)]
        public String HeadType { get; set; }
        public Boolean IsTransaction { get; set; }
        public Boolean IsGl { get; set; }
    }
}