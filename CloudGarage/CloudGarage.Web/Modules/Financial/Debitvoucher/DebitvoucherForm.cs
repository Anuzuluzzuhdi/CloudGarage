using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Financial.Forms
{
    [FormScript("Financial.Debitvoucher")]
    [BasedOnRow(typeof(DebitvoucherRow), CheckNames = true)]
    public class DebitvoucherForm
    {      
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int32 Vtype { get; set; }
        public Int64 CoaId { get; set; }
        public Int64 DebitAccountId { get; set; }
        [DisplayName("Amount"), DefaultValue(0)]
        public Double Credit { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Remark { get; set; }
    }
}