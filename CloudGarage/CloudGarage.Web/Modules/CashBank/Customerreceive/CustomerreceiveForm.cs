using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.CashBank.Forms
{
    [FormScript("CashBank.Customerreceive")]
    [BasedOnRow(typeof(CustomerreceiveRow), CheckNames = true)]
    public class CustomerreceiveForm
    {    
        [DefaultValue("now")]
        public DateTime VDate { get; set; }
        public Int32 Vtype { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 CoaId { get; set; }
        [DisplayName("Amount"), DefaultValue(0)]
        public Double Debit { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Narration { get; set; }
    }
}