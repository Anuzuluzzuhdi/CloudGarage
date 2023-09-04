using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.invoice.Columns
{
    [ColumnsScript("invoice.Invoices")]
    [BasedOnRow(typeof(InvoicesRow), CheckNames = true)]
    public class InvoicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String JobcardWorkOrderNo { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        [EditLink,QuickFilter]
        public DateTime Date { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        public Double Discount { get; set; }
        public Double TotalDiscount { get; set; }
        public Boolean NoTax { get; set; }
        public Double Vat { get; set; }
        public Double TotalTax { get; set; }
        public Double ShippingCost { get; set; }
        public Double GrandTotal { get; set; }
        public Double NetTotal { get; set; }
        public Double PaidAmount { get; set; }
        public Double Due { get; set; }
        public Double Change { get; set; }
        [EditLink]
        public String Details { get; set; }
        [QuickFilter]
        public Int64 PaymentAccount { get; set; }
        public Int64 VNo { get; set; }
        public DateTime ScheduleDatetime { get; set; }
        public DateTime DeliveryDatetime { get; set; }
    }
}