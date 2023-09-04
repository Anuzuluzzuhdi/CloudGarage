using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Transfers")]
    [BasedOnRow(typeof(TransfersRow), CheckNames = true)]
    public class TransfersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
       // public int VNo { get; set; }
        public String FromBranchName { get; set; }
        public String ToBranchName { get; set; }
        public String FromWarehouseName { get; set; }
        public String ToWarehouseName { get; set; }
        public int Status { get; set; }
        //public double TotalQuantity { get; set; }
    }
}