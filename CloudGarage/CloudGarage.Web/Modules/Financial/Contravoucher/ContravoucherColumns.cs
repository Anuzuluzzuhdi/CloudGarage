using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Financial.Columns
{
    [ColumnsScript("Financial.Contravoucher")]
    [BasedOnRow(typeof(ContravoucherRow), CheckNames = true)]
    public class ContravoucherColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String VNo { get; set; }
        public String Vtype { get; set; }
        public DateTime VDate { get; set; }
        public String CoaHeadName { get; set; }
        public String Coa { get; set; }
        public String Narration { get; set; }
        public Double Debit { get; set; }
        public Double Credit { get; set; }
    }
}