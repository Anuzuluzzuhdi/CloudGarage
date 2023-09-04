using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Goodsreceipt")]
    [BasedOnRow(typeof(GoodsreceiptRow), CheckNames = true)]
    public class GoodsreceiptForm
    {
        [HalfWidth]
        public Int64 PurchaseId { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public Int64 SupplierId { get; set; }
        [HalfWidth]
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        [HalfWidth]
        public Int64 EmployeenId { get; set; }
        [HalfWidth]
        public String Reference { get; set; }
        [HalfWidth]
        public int BranchesId { get; set; }
        [GoodsReceiptDetailEditor]
        public List<GoodsreceiptdetailsRow> LineItems { get; set; }
        [QuarterWidth]
        [ReadOnly(true), DefaultValue(0)]
        public Double TotalQuantity { get; set; }
        [FormCssClass("line-break-sm")]
        [HalfWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Remarks { get; set; }
        [HalfWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String JournalRemarks { get; set; }
    }
}