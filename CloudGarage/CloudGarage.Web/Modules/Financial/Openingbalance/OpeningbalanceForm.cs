using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using CloudGarage.CashBank;

namespace CloudGarage.Financial.Forms
{
    [FormScript("Financial.Openingbalance")]
    [BasedOnRow(typeof(OpeningbalanceRow), CheckNames = true)]
    public class OpeningbalanceForm
    {
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int64 CoaId { get; set; }
        [DefaultValue(AccountKind.Debit)]
        public AccountKind AccountType { get; set; }
        [DisplayName("Amount")]
        public Double Debit { get; set; }
        [DisplayName("Remark"), TextAreaEditor(Cols = 1, Rows = 3)]
        public String Narration { get; set; }
    }
}