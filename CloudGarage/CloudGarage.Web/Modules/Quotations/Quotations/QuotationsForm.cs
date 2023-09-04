using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Quotations.Forms
{
    [FormScript("Quotations.Quotations")]
    [BasedOnRow(typeof(QuotationsRow), CheckNames = true)]
    public class QuotationsForm
    {
        [HalfWidth]
        public Int64 CustomerId { get; set; }
        [HalfWidth]
        public Int32Field BranchesId {get ; set;}
        [HalfWidth]
        public Int64 Vehicle { get; set; }
        [DefaultValue("now"), DateEditor, HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth, DateEditor]
        public DateTime ExpiryDate { get; set; }
        [FullWidth]
        [QuotationJobItemsEditor]
        public List<QuotationjobitemsRow> Jobs { get; set; }

        [PickProductDetailEditor]
        public List<QuotationdetailsRow> LineItems { get; set; }
        [QuarterWidthAttribute(UntilNext = true), ReadOnly(true), DefaultValue(0)]
        public Double GrandTotal { get; set; }
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double TotalDiscount { get; set; }
       //    [CheckboxFormatter]
        public Boolean NoTax { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double Vat { get; set; }
        [ReadOnly(true), DefaultValue(0)]
        public Double TotalTax { get; set; }
        [DefaultValue(0)]
        public Double ShippingCost { get; set; }

        [ReadOnly(true), DefaultValue(0)]
        public Double NetTotal { get; set; }
        [HalfWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Details { get; set; }
    }
}