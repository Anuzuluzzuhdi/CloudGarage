using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Purchasing.Forms
{
    [FormScript("Purchasing.Purchase")]
    [BasedOnRow(typeof(PurchaseRow), CheckNames = true)]
    public class PurchaseForm
    {
        [HalfWidth]
        public Int64 SupplierId { get; set; }
        [HalfWidth]
        public String InvoiceNo { get; set; }
        [DefaultValue("now"), DateEditor]
        [HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public Int64 PaymentAccount { get; set; }
        [HalfWidth]
        public int BranchesId { get; set; }
        //public Int64 BankId { get; set; }
        [PickOrderDetailsEditor]
        public List<PurchasedetailsRow> LineItems { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public Double GrandTotal { get; set; }
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true)]
        public Double TotalDiscount { get; set; }
        [CheckboxFormatter]
        public Boolean NoTax { get; set; }

        [DefaultValue(0)]
        [FormCssClass("line-break-sm")]
        [ReadOnly(true)]
        public Double Vat { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double TotalTax { get; set; }
        [DefaultValue(0)]
        public Double ShippingCost { get; set; }

        [ReadOnly(true)]
        public Double NetTotal { get; set; }
        [DefaultValue(0)]
        [FormCssClass("line-break-sm")]
        public Double PaidAmount { get; set; }
        [ReadOnly(true)]
        public Double Due { get; set; }
        [ReadOnly(true)]
        public Double Change { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        [FormCssClass("line-break-sm")]
        public String Details { get; set; }
    }
}