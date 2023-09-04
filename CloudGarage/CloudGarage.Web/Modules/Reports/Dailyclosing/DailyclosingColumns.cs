using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Reports.Columns
{
    [ColumnsScript("Reports.Dailyclosing")]
    [BasedOnRow(typeof(DailyclosingRow), CheckNames = true)]
    public class DailyclosingColumns
    {
        public DateTime Date { get; set; }
        [Width(200)]
        public Double LastDayClosing { get; set; }
        public Double CashIn { get; set; }
        public Double CashOut { get; set; }
        public Double Amount { get; set; }
    }
}