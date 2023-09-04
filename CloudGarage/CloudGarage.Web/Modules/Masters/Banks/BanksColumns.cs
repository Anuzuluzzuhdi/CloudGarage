using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Banks")]
    [BasedOnRow(typeof(BanksRow), CheckNames = true)]
    public class BanksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public int Id { get; set; }
        [EditLink]
        public string BankName { get; set; }
        public string AcName { get; set; }
        public string AcNumber { get; set; }
        public string Branch { get; set; }
        //public string SignaturePicture { get; set; }
    }
}