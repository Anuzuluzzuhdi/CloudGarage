using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Financial.Forms
{
    [FormScript("Financial.Creditvoucher")]
    [BasedOnRow(typeof(CreditvoucherRow), CheckNames = true)]
    public class CreditvoucherForm
    {
       
       [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int32 Vtype { get; set; }
        public Int32 CoaId { get; set; }
        public Int32 CreditAccountId { get; set; }
        [DisplayName("Amount"), DefaultValue(0)]
        public Double Debit { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Remark { get; set; }
    }
}