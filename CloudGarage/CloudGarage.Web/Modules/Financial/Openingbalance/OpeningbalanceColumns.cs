using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Financial.Columns
{
    [ColumnsScript("Financial.Openingbalance")]
    [BasedOnRow(typeof(OpeningbalanceRow), CheckNames = true)]
    public class OpeningbalanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string VNo { get; set; }
        public string Vtype { get; set; }
        public DateTime VDate { get; set; }
        public String CoaHeadName { get; set; }
        public string Coa { get; set; }
        public string Narration { get; set; }
        public double Debit { get; set; }
        public double Credit { get; set; }
        public short IsPosted { get; set; }
        public short IsAppove { get; set; }
        public short IsOpening { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
    }
}