using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Quotations
{
    [ConnectionKey("couldgarage"), Module("Quotations"), TableName("quotationdetails")]
    [DisplayName("Quotation Details"), InstanceName("Quotation Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class QuotationdetailsRow : Row<QuotationdetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product Id"), NotNull, PrimaryKey, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(Inventory.ProductsRow), InplaceAdd = true, DialogType = "CloudGarage.Inventory.Products")]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Description"), Size(255), QuickSearch]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Product Name"), Size(255), NameProperty, QuickSearch]
        public string ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [DisplayName("Unit Name"), Size(255), QuickSearch]
        public string UnitName
        {
            get => fields.UnitName[this];
            set => fields.UnitName[this] = value;
        }

        [DisplayName("Unit Id"), PrimaryKey, ForeignKey("units", "Id"), LeftJoin("jUnit"), TextualField("UnitUnitName")]
        [LookupEditor(typeof(Inventory.UnitsRow), InplaceAdd = true, DialogType = "CloudGarage.Inventory.Units")]
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

        [DisplayName("Quotation Id"), ForeignKey("quotations", "Id"), LeftJoin("jQuotation"), TextualField("QuotationDetails")]
        public int? QuotationId
        {
            get => fields.QuotationId[this];
            set => fields.QuotationId[this] = value;
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

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]")]
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

        [DisplayName("Product Brand Id"), Expression("jProduct.[BrandId]")]
        public Int64? ProductBrandId
        {
            get { return Fields.ProductBrandId[this]; }
            set { Fields.ProductBrandId[this] = value; }
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

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get { return Fields.ProductInsertDate[this]; }
            set { Fields.ProductInsertDate[this] = value; }
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int32? ProductInsertUserId
        {
            get { return Fields.ProductInsertUserId[this]; }
            set { Fields.ProductInsertUserId[this] = value; }
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get { return Fields.ProductUpdateDate[this]; }
            set { Fields.ProductUpdateDate[this] = value; }
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int32? ProductUpdateUserId
        {
            get { return Fields.ProductUpdateUserId[this]; }
            set { Fields.ProductUpdateUserId[this] = value; }
        }

        [DisplayName("Product Delete Date"), Expression("jProduct.[DeleteDate]")]
        public DateTime? ProductDeleteDate
        {
            get { return Fields.ProductDeleteDate[this]; }
            set { Fields.ProductDeleteDate[this] = value; }
        }

        [DisplayName("Product Delete User Id"), Expression("jProduct.[DeleteUserId]")]
        public Int32? ProductDeleteUserId
        {
            get { return Fields.ProductDeleteUserId[this]; }
            set { Fields.ProductDeleteUserId[this] = value; }
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int32? ProductIsActive
        {
            get { return Fields.ProductIsActive[this]; }
            set { Fields.ProductIsActive[this] = value; }
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitUnitName
        {
            get { return Fields.UnitUnitName[this]; }
            set { Fields.UnitUnitName[this] = value; }
        }

        [DisplayName("Unit Description"), Expression("jUnit.[Description]")]
        public String UnitDescription
        {
            get { return Fields.UnitDescription[this]; }
            set { Fields.UnitDescription[this] = value; }
        }

        [DisplayName("Unit Insert Date"), Expression("jUnit.[InsertDate]")]
        public DateTime? UnitInsertDate
        {
            get { return Fields.UnitInsertDate[this]; }
            set { Fields.UnitInsertDate[this] = value; }
        }

        [DisplayName("Unit Insert User Id"), Expression("jUnit.[InsertUserId]")]
        public Int32? UnitInsertUserId
        {
            get { return Fields.UnitInsertUserId[this]; }
            set { Fields.UnitInsertUserId[this] = value; }
        }

        [DisplayName("Unit Update Date"), Expression("jUnit.[UpdateDate]")]
        public DateTime? UnitUpdateDate
        {
            get { return Fields.UnitUpdateDate[this]; }
            set { Fields.UnitUpdateDate[this] = value; }
        }

        [DisplayName("Unit Update User Id"), Expression("jUnit.[UpdateUserId]")]
        public Int32? UnitUpdateUserId
        {
            get { return Fields.UnitUpdateUserId[this]; }
            set { Fields.UnitUpdateUserId[this] = value; }
        }

        [DisplayName("Unit Delete Date"), Expression("jUnit.[DeleteDate]")]
        public DateTime? UnitDeleteDate
        {
            get { return Fields.UnitDeleteDate[this]; }
            set { Fields.UnitDeleteDate[this] = value; }
        }

        [DisplayName("Unit Delete User Id"), Expression("jUnit.[DeleteUserId]")]
        public Int32? UnitDeleteUserId
        {
            get { return Fields.UnitDeleteUserId[this]; }
            set { Fields.UnitDeleteUserId[this] = value; }
        }

        [DisplayName("Unit Is Active"), Expression("jUnit.[IsActive]")]
        public Int32? UnitIsActive
        {
            get { return Fields.UnitIsActive[this]; }
            set { Fields.UnitIsActive[this] = value; }
        }

        [DisplayName("Quotation Customer Id"), Expression("jQuotation.[CustomerId]")]
        public Int64? QuotationCustomerId
        {
            get { return Fields.QuotationCustomerId[this]; }
            set { Fields.QuotationCustomerId[this] = value; }
        }

        [DisplayName("Quotation Date"), Expression("jQuotation.[Date]")]
        public DateTime? QuotationDate
        {
            get { return Fields.QuotationDate[this]; }
            set { Fields.QuotationDate[this] = value; }
        }

        [DisplayName("Quotation Discount"), Expression("jQuotation.[Discount]")]
        public Double? QuotationDiscount
        {
            get { return Fields.QuotationDiscount[this]; }
            set { Fields.QuotationDiscount[this] = value; }
        }

        [DisplayName("Quotation Total Discount"), Expression("jQuotation.[TotalDiscount]")]
        public Double? QuotationTotalDiscount
        {
            get { return Fields.QuotationTotalDiscount[this]; }
            set { Fields.QuotationTotalDiscount[this] = value; }
        }

        [DisplayName("Quotation Vat"), Expression("jQuotation.[Vat]")]
        public Double? QuotationVat
        {
            get { return Fields.QuotationVat[this]; }
            set { Fields.QuotationVat[this] = value; }
        }

        [DisplayName("Quotation Total Tax"), Expression("jQuotation.[TotalTax]")]
        public Double? QuotationTotalTax
        {
            get { return Fields.QuotationTotalTax[this]; }
            set { Fields.QuotationTotalTax[this] = value; }
        }

        [DisplayName("Quotation Shipping Cost"), Expression("jQuotation.[ShippingCost]")]
        public Double? QuotationShippingCost
        {
            get { return Fields.QuotationShippingCost[this]; }
            set { Fields.QuotationShippingCost[this] = value; }
        }

        [DisplayName("Quotation Grand Total"), Expression("jQuotation.[GrandTotal]")]
        public Double? QuotationGrandTotal
        {
            get { return Fields.QuotationGrandTotal[this]; }
            set { Fields.QuotationGrandTotal[this] = value; }
        }

        [DisplayName("Quotation Net Total"), Expression("jQuotation.[NetTotal]")]
        public Double? QuotationNetTotal
        {
            get { return Fields.QuotationNetTotal[this]; }
            set { Fields.QuotationNetTotal[this] = value; }
        }

        [DisplayName("Quotation Details"), Expression("jQuotation.[Details]")]
        public String QuotationDetails
        {
            get { return Fields.QuotationDetails[this]; }
            set { Fields.QuotationDetails[this] = value; }
        }

        [DisplayName("Quotation Expiry Date"), Expression("jQuotation.[ExpiryDate]")]
        public DateTime? QuotationExpiryDate
        {
            get { return Fields.QuotationExpiryDate[this]; }
            set { Fields.QuotationExpiryDate[this] = value; }
        }

        public QuotationdetailsRow()
            : base()
        {
        }

        public QuotationdetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductId;
            public StringField Description;
            public StringField ProductName;
            public StringField UnitName;
            public Int32Field UnitId;
            public DoubleField Quantity;
            public DecimalField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public Int32Field QuotationId;

            public StringField ProductBarcode;
            public StringField ProductSn;
            public StringField ProductProductName;
            public StringField ProductModel;
            public DoubleField ProductUnitPrice;
            public DoubleField ProductUnitsInStock;
            public DoubleField ProductUnitsOnOrder;
            public DoubleField ProductReorderLevel;
            public Int64Field ProductCategoryId;
            public Int64Field ProductUnitId;
            public Int64Field ProductBrandId;
            public StringField ProductImage;
            public StringField ProductProductDetails;
            public DateTimeField ProductInsertDate;
            public Int32Field ProductInsertUserId;
            public DateTimeField ProductUpdateDate;
            public Int32Field ProductUpdateUserId;
            public DateTimeField ProductDeleteDate;
            public Int32Field ProductDeleteUserId;
            public Int32Field ProductIsActive;

            public StringField UnitUnitName;
            public StringField UnitDescription;
            public DateTimeField UnitInsertDate;
            public Int32Field UnitInsertUserId;
            public DateTimeField UnitUpdateDate;
            public Int32Field UnitUpdateUserId;
            public DateTimeField UnitDeleteDate;
            public Int32Field UnitDeleteUserId;
            public Int32Field UnitIsActive;

            public Int64Field QuotationCustomerId;
            public DateTimeField QuotationDate;
            public DoubleField QuotationDiscount;
            public DoubleField QuotationTotalDiscount;
            public DoubleField QuotationVat;
            public DoubleField QuotationTotalTax;
            public DoubleField QuotationShippingCost;
            public DoubleField QuotationGrandTotal;
            public DoubleField QuotationNetTotal;
            public StringField QuotationDetails;
            public DateTimeField QuotationExpiryDate;
        }
    }
}
