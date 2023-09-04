using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Transfers")]
    [BasedOnRow(typeof(TransfersRow), CheckNames = true)]
    public class TransfersForm
    {

        // public int VNo { get; set; }
        [HalfWidth(UntilNext = true)]
        public int FromBranchId { get; set; }
        public int ToBranchId { get; set; }
        public int FromWarehouseId { get; set; }
        public int ToWarehouseId { get; set; }
        public int Status { get; set; }
        [TransferDetailEditor,FullWidth]
        public List<TransferdetailsRow> LineItems { get; set; }
        public double TotalQuantity { get; set; }
    }
}