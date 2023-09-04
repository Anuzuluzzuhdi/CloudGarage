using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.invoice
{
    [ConnectionKey("couldgarage"), Module("invoice"), TableName("invoiceitems")]
    [DisplayName("Invoiceitems"), InstanceName("Invoiceitems")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InvoiceitemsRow : Row<InvoiceitemsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductBarcode")]
        [LookupEditor(typeof(Inventory.ProductsRow), InplaceAdd = true, DialogType = "CloudGarage.Inventory.Products")]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Description"), Size(255), QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Unit"), ForeignKey("units", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        [LookupEditor(typeof(Inventory.UnitsRow), DialogType = "CloudGarage.Inventory.Units")]
        public int? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Purchase Price"), Size(10), Scale(2), DefaultValue(0)]
        public decimal? PurchasePrice
        {
            get => fields.PurchasePrice[this];
            set => fields.PurchasePrice[this] = value;
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
        public int? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
        }

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public string ProductBarcode
        {
            get => fields.ProductBarcode[this];
            set => fields.ProductBarcode[this] = value;
        }

        [DisplayName("Product Sn"), Expression("jProduct.[SN]")]
        public string ProductSn
        {
            get => fields.ProductSn[this];
            set => fields.ProductSn[this] = value;
        }

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List)]
        public string ProductProductName
        {
            get => fields.ProductProductName[this];
            set => fields.ProductProductName[this] = value;
        }

        [DisplayName("Product Model"), Expression("jProduct.[Model]")]
        public string ProductModel
        {
            get => fields.ProductModel[this];
            set => fields.ProductModel[this] = value;
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public decimal? ProductUnitPrice
        {
            get => fields.ProductUnitPrice[this];
            set => fields.ProductUnitPrice[this] = value;
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public decimal? ProductUnitsInStock
        {
            get => fields.ProductUnitsInStock[this];
            set => fields.ProductUnitsInStock[this] = value;
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public decimal? ProductUnitsOnOrder
        {
            get => fields.ProductUnitsOnOrder[this];
            set => fields.ProductUnitsOnOrder[this] = value;
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public decimal? ProductReorderLevel
        {
            get => fields.ProductReorderLevel[this];
            set => fields.ProductReorderLevel[this] = value;
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryId]")]
        public int? ProductCategoryId
        {
            get => fields.ProductCategoryId[this];
            set => fields.ProductCategoryId[this] = value;
        }

        [DisplayName("Product Unit Id"), Expression("jProduct.[UnitId]")]
        public int? ProductUnitId
        {
            get => fields.ProductUnitId[this];
            set => fields.ProductUnitId[this] = value;
        }

        [DisplayName("Product Brand Id"), Expression("jProduct.[BrandId]")]
        public int? ProductBrandId
        {
            get => fields.ProductBrandId[this];
            set => fields.ProductBrandId[this] = value;
        }

        [DisplayName("Product Image"), Expression("jProduct.[Image]")]
        public string ProductImage
        {
            get => fields.ProductImage[this];
            set => fields.ProductImage[this] = value;
        }

        [DisplayName("Product Product Details"), Expression("jProduct.[ProductDetails]")]
        public string ProductProductDetails
        {
            get => fields.ProductProductDetails[this];
            set => fields.ProductProductDetails[this] = value;
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public int? ProductInsertUserId
        {
            get => fields.ProductInsertUserId[this];
            set => fields.ProductInsertUserId[this] = value;
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get => fields.ProductUpdateDate[this];
            set => fields.ProductUpdateDate[this] = value;
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public int? ProductUpdateUserId
        {
            get => fields.ProductUpdateUserId[this];
            set => fields.ProductUpdateUserId[this] = value;
        }

        [DisplayName("Product Delete Date"), Expression("jProduct.[DeleteDate]")]
        public DateTime? ProductDeleteDate
        {
            get => fields.ProductDeleteDate[this];
            set => fields.ProductDeleteDate[this] = value;
        }

        [DisplayName("Product Delete User Id"), Expression("jProduct.[DeleteUserId]")]
        public int? ProductDeleteUserId
        {
            get => fields.ProductDeleteUserId[this];
            set => fields.ProductDeleteUserId[this] = value;
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public int? ProductIsActive
        {
            get => fields.ProductIsActive[this];
            set => fields.ProductIsActive[this] = value;
        }

        [DisplayName("Product Branch Id"), Expression("jProduct.[BranchId]")]
        public int? ProductBranchId
        {
            get => fields.ProductBranchId[this];
            set => fields.ProductBranchId[this] = value;
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public string UnitName
        {
            get => fields.UnitName[this];
            set => fields.UnitName[this] = value;
        }

        [DisplayName("Unit Description"), Expression("jUnit.[Description]")]
        public string UnitDescription
        {
            get => fields.UnitDescription[this];
            set => fields.UnitDescription[this] = value;
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

        public InvoiceitemsRow()
            : base()
        {
        }

        public InvoiceitemsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductId;
            public StringField Description;
            public Int32Field UnitId;
            public DoubleField Quantity;
            public DecimalField PurchasePrice;
            public DecimalField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public Int32Field InvoiceId;

            public StringField ProductBarcode;
            public StringField ProductSn;
            public StringField ProductProductName;
            public StringField ProductModel;
            public DecimalField ProductUnitPrice;
            public DecimalField ProductUnitsInStock;
            public DecimalField ProductUnitsOnOrder;
            public DecimalField ProductReorderLevel;
            public Int32Field ProductCategoryId;
            public Int32Field ProductUnitId;
            public Int32Field ProductBrandId;
            public StringField ProductImage;
            public StringField ProductProductDetails;
            public Int32Field ProductInsertUserId;
            public DateTimeField ProductUpdateDate;
            public Int32Field ProductUpdateUserId;
            public DateTimeField ProductDeleteDate;
            public Int32Field ProductDeleteUserId;
            public Int32Field ProductIsActive;
            public Int32Field ProductBranchId;

            public StringField UnitName;
            public StringField UnitDescription;

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
