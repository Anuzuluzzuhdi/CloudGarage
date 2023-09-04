using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Reports.Forms
{
    [FormScript("Reports.Dailyclosing")]
    [BasedOnRow(typeof(DailyclosingRow), CheckNames = true)]
    public class DailyclosingForm
    {
        [DefaultValue("now")]
        [ReadOnly(true)]
        public DateTime Date { get; set; }
        [Hidden]
        public Double LastDayClosing { get; set; }
        [ReadOnly(true)]
        public Double CashIn { get; set; }
        [ReadOnly(true)]
        public Double CashOut { get; set; }
        [ReadOnly(true)]
        public Double Amount { get; set; }
    }
}