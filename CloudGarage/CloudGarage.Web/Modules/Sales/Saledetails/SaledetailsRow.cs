using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Sales
{
    [ConnectionKey("couldgarage"), Module("Sales"), TableName("saledetails")]
    [DisplayName("Saledetails"), InstanceName("Saledetails")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SaledetailsRow : Row<SaledetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product"), NotNull, PrimaryKey, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(Inventory.ProductsRow), InplaceAdd = true, DialogType = "CloudGarage.Inventory.Products")]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Product Name"), Size(255), QuickSearch, NameProperty]
        public string ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [DisplayName("Description"), Size(255), QuickSearch]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Unit Id"), PrimaryKey, ForeignKey("units", "Id"), LeftJoin("jUnit"), TextualField("UnitUnitName")]
        [LookupEditor(typeof(Inventory.UnitsRow), DialogType = "Products.Units")]
        public int? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitUnitName
        {
            get { return Fields.UnitUnitName[this]; }
            set { Fields.UnitUnitName[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
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
        [DisplayName("Total")]
        public double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("Unit Name"), Size(255)]
        public string UnitName
        {
            get => fields.UnitName[this];
            set => fields.UnitName[this] = value;
        }

        [DisplayName("Sale Id"), PrimaryKey, ForeignKey("sales", "Id"), LeftJoin("jSale"), TextualField("SaleDetails"), Updatable(false)]
        public int? SaleId
        {
            get => fields.SaleId[this];
            set => fields.SaleId[this] = value;
        }

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public String ProductBarcode
        {
            get { return Fields.ProductBarcode[this]; }
            set { Fields.ProductBarcode[this] = value; }
        }

        [DisplayName("Product Sn"), Expression("jProduct.[SN]")]
        public String ProductSn
        {
            get { return Fields.ProductSn[this]; }
            set { Fields.ProductSn[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Model"), Expression("jProduct.[Model]")]
        public String ProductModel
        {
            get { return Fields.ProductModel[this]; }
            set { Fields.ProductModel[this] = value; }
        }

        [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]")]
        public Double? ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Double? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Double? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Double? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Double? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryId]")]
        public Int64? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Unit Id"), Expression("jProduct.[UnitId]")]
        public Int64? ProductUnitId
        {
            get { return Fields.ProductUnitId[this]; }
            set { Fields.ProductUnitId[this] = value; }
        }

        [DisplayName("Product Image"), Expression("jProduct.[Image]")]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Product Product Details"), Expression("jProduct.[ProductDetails]")]
        public String ProductProductDetails
        {
            get { return Fields.ProductProductDetails[this]; }
            set { Fields.ProductProductDetails[this] = value; }
        }

        [DisplayName("Sale Customer Id"), Expression("jSale.[CustomerId]")]
        public Int64? SaleCustomerId
        {
            get { return Fields.SaleCustomerId[this]; }
            set { Fields.SaleCustomerId[this] = value; }
        }

        [DisplayName("Sale Date"), Expression("jSale.[Date]")]
        public DateTime? SaleDate
        {
            get { return Fields.SaleDate[this]; }
            set { Fields.SaleDate[this] = value; }
        }

        [DisplayName("Sale Payment Type"), Expression("jSale.[PaymentType]")]
        public Int64? SalePaymentType
        {
            get { return Fields.SalePaymentType[this]; }
            set { Fields.SalePaymentType[this] = value; }
        }

        [DisplayName("Sale Bank Id"), Expression("jSale.[BankId]")]
        public Int64? SaleBankId
        {
            get { return Fields.SaleBankId[this]; }
            set { Fields.SaleBankId[this] = value; }
        }

        [DisplayName("Sale Discount"), Expression("jSale.[Discount]")]
        public Double? SaleDiscount
        {
            get { return Fields.SaleDiscount[this]; }
            set { Fields.SaleDiscount[this] = value; }
        }

        [DisplayName("Sale Total Discount"), Expression("jSale.[TotalDiscount]")]
        public Double? SaleTotalDiscount
        {
            get { return Fields.SaleTotalDiscount[this]; }
            set { Fields.SaleTotalDiscount[this] = value; }
        }

        [DisplayName("Sale Vat"), Expression("jSale.[Vat]")]
        public Double? SaleVat
        {
            get { return Fields.SaleVat[this]; }
            set { Fields.SaleVat[this] = value; }
        }

        [DisplayName("Sale Total Tax"), Expression("jSale.[TotalTax]")]
        public Double? SaleTotalTax
        {
            get { return Fields.SaleTotalTax[this]; }
            set { Fields.SaleTotalTax[this] = value; }
        }

        [DisplayName("Sale Shipping Cost"), Expression("jSale.[ShippingCost]")]
        public Double? SaleShippingCost
        {
            get { return Fields.SaleShippingCost[this]; }
            set { Fields.SaleShippingCost[this] = value; }
        }

        [DisplayName("Sale Grand Total"), Expression("jSale.[GrandTotal]")]
        public Double? SaleGrandTotal
        {
            get { return Fields.SaleGrandTotal[this]; }
            set { Fields.SaleGrandTotal[this] = value; }
        }

        [DisplayName("Sale Net Total"), Expression("jSale.[NetTotal]")]
        public Double? SaleNetTotal
        {
            get { return Fields.SaleNetTotal[this]; }
            set { Fields.SaleNetTotal[this] = value; }
        }

        [DisplayName("Sale Paid Amount"), Expression("jSale.[PaidAmount]")]
        public Double? SalePaidAmount
        {
            get { return Fields.SalePaidAmount[this]; }
            set { Fields.SalePaidAmount[this] = value; }
        }

        [DisplayName("Sale Due"), Expression("jSale.[Due]")]
        public Double? SaleDue
        {
            get { return Fields.SaleDue[this]; }
            set { Fields.SaleDue[this] = value; }
        }

        [DisplayName("Sale Change"), Expression("jSale.[Change]")]
        public Double? SaleChange
        {
            get { return Fields.SaleChange[this]; }
            set { Fields.SaleChange[this] = value; }
        }

        [DisplayName("Sale Details"), Expression("jSale.[Details]")]
        public String SaleDetails
        {
            get { return Fields.SaleDetails[this]; }
            set { Fields.SaleDetails[this] = value; }
        }
        [Insertable(false), Updatable(false), LookupInclude]
        public Int64? BranchId
        {
            get => fields.BranchId[this];
        }

        public SaledetailsRow()
            : base()
        {
        }

        public SaledetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductId;
            public StringField ProductName;
            public StringField Description;
            public Int32Field UnitId;
            public DoubleField Quantity;
            public DecimalField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public StringField UnitName;
            public Int32Field SaleId;

            public StringField ProductBarcode;
            public StringField ProductSn;
            public StringField ProductProductName;
            public StringField ProductModel;
            public DoubleField ProductQuantityPerUnit;
            public DoubleField ProductUnitPrice;
            public DoubleField ProductUnitsInStock;
            public DoubleField ProductUnitsOnOrder;
            public DoubleField ProductReorderLevel;
            public Int64Field ProductCategoryId;
            public Int64Field ProductUnitId;
            public StringField ProductImage;
            public StringField ProductProductDetails;

            public Int64Field SaleCustomerId;
            public DateTimeField SaleDate;
            public Int64Field SalePaymentType;
            public Int64Field SaleBankId;
            public DoubleField SaleDiscount;
            public DoubleField SaleTotalDiscount;
            public DoubleField SaleVat;
            public DoubleField SaleTotalTax;
            public DoubleField SaleShippingCost;
            public DoubleField SaleGrandTotal;
            public DoubleField SaleNetTotal;
            public DoubleField SalePaidAmount;
            public DoubleField SaleDue;
            public DoubleField SaleChange;
            public StringField SaleDetails;

            public StringField UnitUnitName;

            public Int64Field BranchId;
        }
    }
}
