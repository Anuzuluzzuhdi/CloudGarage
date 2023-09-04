using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.CashBank.Columns
{
    [ColumnsScript("CashBank.Banktransactions")]
    [BasedOnRow(typeof(BanktransactionsRow), CheckNames = true)]
    public class BanktransactionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public decimal VNo { get; set; }
        [QuickFilter]
        public Int32 Vtype { get; set; }
        [QuickFilter]
        public DateTime VDate { get; set; }
        public String CoaHeadName { get; set; }
        [QuickFilter]
        public String Coa { get; set; }
        public String Narration { get; set; }
        public Double Debit { get; set; }
        public Double Credit { get; set; }
    }
}