using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Sales
{
    [FormScript("Sales.PickerOrder")]
    [BasedOnRow(typeof(SalesRow), CheckNames = true)]
    public class PickerOrderForm
    {
        [HalfWidth]
        public int CustomerId { get; set; }
        [DefaultValue("now"), DateEditor]
        [MediumThirdLargeQuarterWidth]
        public DateTime Date { get; set; }
        [FormCssClass("line-break-sm")]
        [HalfWidth]
        public int PaymentAccount { get; set; }
        [Category("Line Items")]
        [PickerOrderDetailsEditor]
        public List<SaledetailsRow> LineItems { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public double GrandTotal { get; set; }
        [DefaultValue(0)]
        public double Discount { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public double TotalDiscount { get; set; }
        [CheckboxFormatter]
        public Boolean NoTax { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public double Vat { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public double TotalTax { get; set; }
        [DefaultValue(0)]
        public double ShippingCost { get; set; }

        [ReadOnly(true)]
        [DefaultValue(0)]
        public double NetTotal { get; set; }
        [DefaultValue(0)]
        public double PaidAmount { get; set; }
        [ReadOnly(true)]
        public double Due { get; set; }
        [ReadOnly(true)]
        public double Change { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public string Details { get; set; }
    }
}
