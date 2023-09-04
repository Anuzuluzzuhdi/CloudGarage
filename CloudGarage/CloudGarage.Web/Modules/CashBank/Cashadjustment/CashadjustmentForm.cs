using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.CashBank.Forms
{
    [FormScript("CashBank.Cashadjustment")]
    [BasedOnRow(typeof(CashadjustmentRow), CheckNames = true)]
    public class CashadjustmentForm
    {
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int32 Vtype { get; set; }
        public Int64 CoaId { get; set; }
        [DisplayName("Code"), DefaultValue(1020203)]
        [ReadOnly(true)]
        public String Coa { get; set; }
        [DefaultValue(AccountKind.Credit)]
        public AccountKind AccountType { get; set; }
        [DisplayName("Amount"), DefaultValue(0)]
        public Double Credit { get; set; }
        [DisplayName("Remark"), TextAreaEditor(Cols = 1, Rows = 3)]
        public String Narration { get; set; }
    }
}