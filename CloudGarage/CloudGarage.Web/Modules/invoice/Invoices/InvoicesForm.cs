using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.invoice.Forms
{
    [FormScript("invoice.Invoices")]
    [BasedOnRow(typeof(InvoicesRow), CheckNames = true)]
    public class InvoicesForm
    {
        [HalfWidth(UntilNext = true)]
        public Int64 CustomerId { get; set; }
        public Int64 Jobcard { get; set; }
        public Int64 Vehicle { get; set; }
        [DefaultValue("now"), DateEditor]
        public DateTime Date { get; set; }
        [DefaultValue("now"), DateEditor]
        public DateTime ScheduleDatetime { get; set; }
        [DefaultValue("now"), DateEditor]
        public DateTime DeliveryDatetime { get; set; }
        public Int64 PaymentAccount { get; set; }
        [FullWidth]
        [JobItemsEditor]
        public List<InvoicejobitemsRow> Jobs { get; set; }
        [FullWidth]
        [PickerProductDetailEditor]
        public List<InvoiceitemsRow> LineItems { get; set; }
        //public Int64 VNo { get; set; }
        [QuarterWidthAttribute(UntilNext = true)]
        [ReadOnly(true)]
        public Double GrandTotal { get; set; }
        [DefaultValue(0)]
        public Double Discount { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double TotalDiscount { get; set; }

        [CheckboxFormatter]
        public Boolean NoTax { get; set; }

        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double Vat { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double TotalTax { get; set; }
        [DefaultValue(0)]
        public Double ShippingCost { get; set; }

        [ReadOnly(true)]
        [DefaultValue(0)]
        public Double NetTotal { get; set; }
        [DefaultValue(0)]
        public Double PaidAmount { get; set; }
        [ReadOnly(true)]
        public Double Due { get; set; }
        [ReadOnly(true)]
        public Double Change { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public String Details { get; set; }
    }
}