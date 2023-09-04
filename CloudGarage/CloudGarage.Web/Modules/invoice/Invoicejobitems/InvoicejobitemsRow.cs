using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.invoice
{
    [ConnectionKey("couldgarage"), Module("invoice"), TableName("invoicejobitems")]
    [DisplayName("Invoicejobitems"), InstanceName("Invoicejobitems")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class InvoicejobitemsRow : Row<InvoicejobitemsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("jobtypes", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        [LookupEditor(typeof(Masters.JobtypesRow))]
        public int? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Description"), Size(255), QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Unit Price"), Size(10), Scale(2), NotNull]
        public decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Total"), NotNull]
        public double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("Invoice"), NotNull, ForeignKey("invoices", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceDetails")]
        public int? InvoiceJobId
        {
            get => fields.InvoiceJobId[this];
            set => fields.InvoiceJobId[this] = value;
        }

        [DisplayName("Job Type Job Category"), Expression("jJobType.[JobCategory]")]
        public int? JobTypeJobCategory
        {
            get => fields.JobTypeJobCategory[this];
            set => fields.JobTypeJobCategory[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]"), MinSelectLevel(SelectLevel.List)]
        public string JobTypeName 
        { 
            get => fields.JobTypeName[this]; 
            set => fields.JobTypeName[this] = value; 
        } 

        [DisplayName("Job Type Rate"), Expression("jJobType.[Rate]")]
        public double? JobTypeRate
        {
            get => fields.JobTypeRate[this];
            set => fields.JobTypeRate[this] = value;
        }

        [DisplayName("Job Type Standard Timing"), Expression("jJobType.[StandardTiming]")]
        public DateTime? JobTypeStandardTiming
        {
            get => fields.JobTypeStandardTiming[this];
            set => fields.JobTypeStandardTiming[this] = value;
        }

        [DisplayName("Job Type Is Inspection List"), Expression("jJobType.[IsInspectionList]")]
        public short? JobTypeIsInspectionList
        {
            get => fields.JobTypeIsInspectionList[this];
            set => fields.JobTypeIsInspectionList[this] = value;
        }

        [DisplayName("Invoice Customer Id"), Expression("jInvoice.[CustomerId]")]
        public int? InvoiceCustomerId
        {
            get => fields.InvoiceCustomerId[this];
            set => fields.InvoiceCustomerId[this] = value;
        }

        [DisplayName("Invoice Jobcard"), Expression("jInvoice.[Jobcard]")]
        public int? InvoiceJobcard
        {
            get => fields.InvoiceJobcard[this];
            set => fields.InvoiceJobcard[this] = value;
        }

        [DisplayName("Invoice Vehicle"), Expression("jInvoice.[Vehicle]")]
        public int? InvoiceVehicle
        {
            get => fields.InvoiceVehicle[this];
            set => fields.InvoiceVehicle[this] = value;
        }

        [DisplayName("Invoice Date"), Expression("jInvoice.[Date]")]
        public DateTime? InvoiceDate
        {
            get => fields.InvoiceDate[this];
            set => fields.InvoiceDate[this] = value;
        }

        [DisplayName("Invoice Discount"), Expression("jInvoice.[Discount]")]
        public double? InvoiceDiscount
        {
            get => fields.InvoiceDiscount[this];
            set => fields.InvoiceDiscount[this] = value;
        }

        [DisplayName("Invoice Total Discount"), Expression("jInvoice.[TotalDiscount]")]
        public double? InvoiceTotalDiscount
        {
            get => fields.InvoiceTotalDiscount[this];
            set => fields.InvoiceTotalDiscount[this] = value;
        }

        [DisplayName("Invoice Vat"), Expression("jInvoice.[Vat]")]
        public double? InvoiceVat
        {
            get => fields.InvoiceVat[this];
            set => fields.InvoiceVat[this] = value;
        }

        [DisplayName("Invoice Total Tax"), Expression("jInvoice.[TotalTax]")]
        public double? InvoiceTotalTax
        {
            get => fields.InvoiceTotalTax[this];
            set => fields.InvoiceTotalTax[this] = value;
        }

        [DisplayName("Invoice Shipping Cost"), Expression("jInvoice.[ShippingCost]")]
        public decimal? InvoiceShippingCost
        {
            get => fields.InvoiceShippingCost[this];
            set => fields.InvoiceShippingCost[this] = value;
        }

        [DisplayName("Invoice Grand Total"), Expression("jInvoice.[GrandTotal]")]
        public double? InvoiceGrandTotal
        {
            get => fields.InvoiceGrandTotal[this];
            set => fields.InvoiceGrandTotal[this] = value;
        }

        [DisplayName("Invoice Net Total"), Expression("jInvoice.[NetTotal]")]
        public double? InvoiceNetTotal
        {
            get => fields.InvoiceNetTotal[this];
            set => fields.InvoiceNetTotal[this] = value;
        }

        [DisplayName("Invoice Paid Amount"), Expression("jInvoice.[PaidAmount]")]
        public double? InvoicePaidAmount
        {
            get => fields.InvoicePaidAmount[this];
            set => fields.InvoicePaidAmount[this] = value;
        }

        [DisplayName("Invoice Due"), Expression("jInvoice.[Due]")]
        public double? InvoiceDue
        {
            get => fields.InvoiceDue[this];
            set => fields.InvoiceDue[this] = value;
        }

        [DisplayName("Invoice Change"), Expression("jInvoice.[Change]")]
        public double? InvoiceChange
        {
            get => fields.InvoiceChange[this];
            set => fields.InvoiceChange[this] = value;
        }

        [DisplayName("Invoice Details"), Expression("jInvoice.[Details]")]
        public string InvoiceDetails
        {
            get => fields.InvoiceDetails[this];
            set => fields.InvoiceDetails[this] = value;
        }

        [DisplayName("Invoice Payment Account"), Expression("jInvoice.[PaymentAccount]")]
        public int? InvoicePaymentAccount
        {
            get => fields.InvoicePaymentAccount[this];
            set => fields.InvoicePaymentAccount[this] = value;
        }

        [DisplayName("Invoice V No"), Expression("jInvoice.[VNo]")]
        public int? InvoiceVNo
        {
            get => fields.InvoiceVNo[this];
            set => fields.InvoiceVNo[this] = value;
        }

        [DisplayName("Invoice Schedule Datetime"), Expression("jInvoice.[ScheduleDatetime]")]
        public DateTime? InvoiceScheduleDatetime
        {
            get => fields.InvoiceScheduleDatetime[this];
            set => fields.InvoiceScheduleDatetime[this] = value;
        }

        [DisplayName("Invoice Delivery Datetime"), Expression("jInvoice.[DeliveryDatetime]")]
        public DateTime? InvoiceDeliveryDatetime
        {
            get => fields.InvoiceDeliveryDatetime[this];
            set => fields.InvoiceDeliveryDatetime[this] = value;
        }

        public InvoicejobitemsRow()
            : base()
        {
        }

        public InvoicejobitemsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field JobType;
            public StringField Description;
            public DecimalField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public Int32Field InvoiceJobId;

            public Int32Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public DateTimeField JobTypeStandardTiming;
            public Int16Field JobTypeIsInspectionList;

            public Int32Field InvoiceCustomerId;
            public Int32Field InvoiceJobcard;
            public Int32Field InvoiceVehicle;
            public DateTimeField InvoiceDate;
            public DoubleField InvoiceDiscount;
            public DoubleField InvoiceTotalDiscount;
            public DoubleField InvoiceVat;
            public DoubleField InvoiceTotalTax;
            public DecimalField InvoiceShippingCost;
            public DoubleField InvoiceGrandTotal;
            public DoubleField InvoiceNetTotal;
            public DoubleField InvoicePaidAmount;
            public DoubleField InvoiceDue;
            public DoubleField InvoiceChange;
            public StringField InvoiceDetails;
            public Int32Field InvoicePaymentAccount;
            public Int32Field InvoiceVNo;
            public DateTimeField InvoiceScheduleDatetime;
            public DateTimeField InvoiceDeliveryDatetime;
        }
    }
}
