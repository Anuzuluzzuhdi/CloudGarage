using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.CashBank.Forms
{
    [FormScript("CashBank.Banktransactions")]
    [BasedOnRow(typeof(BanktransactionsRow), CheckNames = true)]
    public class BanktransactionsForm
    {
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        [DefaultValue(AccountKind.Credit)]
        public AccountKind AccountType { get; set; }
        public decimal VNo { get; set; }
        public Int32 Vtype { get; set; }
        public Int64 CoaId { get; set; }
        [DisplayName("Amount"), DefaultValue(0)]
        public Double Credit { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Narration { get; set; }
    }
}