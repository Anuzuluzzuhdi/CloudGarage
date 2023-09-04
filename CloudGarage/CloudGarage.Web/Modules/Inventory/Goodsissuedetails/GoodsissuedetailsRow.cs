using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("goodsissuedetails")]
    [DisplayName("Goodsissuedetails"), InstanceName("Goodsissuedetails")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class GoodsissuedetailsRow : Row<GoodsissuedetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Goods Issue"), NotNull, ForeignKey("goodsissue", "Id"), LeftJoin("jGoodsIssue"), TextualField("GoodsIssueRemarks")]
        public int? GoodsIssueId
        {
            get => fields.GoodsIssueId[this];
            set => fields.GoodsIssueId[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductBarcode")]
        [LookupEditor(typeof(ProductsRow))]
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

        [DisplayName("Description"), Size(255)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Warehouse"), NotNull, ForeignKey("warehouses", "Id"), LeftJoin("jWarehouse"), TextualField("WarehouseName")]
        [LookupEditor(typeof(Masters.WarehousesRow))]
        public int? WarehouseId
        {
            get => fields.WarehouseId[this];
            set => fields.WarehouseId[this] = value;
        }

        [DisplayName("Goods Issue Customer Id"), Expression("jGoodsIssue.[CustomerId]")]
        public int? GoodsIssueCustomerId
        {
            get => fields.GoodsIssueCustomerId[this];
            set => fields.GoodsIssueCustomerId[this] = value;
        }

        [DisplayName("Goods Issue Sale Id"), Expression("jGoodsIssue.[SaleId]")]
        public int? GoodsIssueSaleId
        {
            get => fields.GoodsIssueSaleId[this];
            set => fields.GoodsIssueSaleId[this] = value;
        }

        [DisplayName("Goods Issue Date"), Expression("jGoodsIssue.[Date]")]
        public DateTime? GoodsIssueDate
        {
            get => fields.GoodsIssueDate[this];
            set => fields.GoodsIssueDate[this] = value;
        }

        [DisplayName("Goods Issue Total Quantity"), Expression("jGoodsIssue.[TotalQuantity]")]
        public double? GoodsIssueTotalQuantity
        {
            get => fields.GoodsIssueTotalQuantity[this];
            set => fields.GoodsIssueTotalQuantity[this] = value;
        }

        [DisplayName("Goods Issue Employeen Id"), Expression("jGoodsIssue.[EmployeenId]")]
        public int? GoodsIssueEmployeenId
        {
            get => fields.GoodsIssueEmployeenId[this];
            set => fields.GoodsIssueEmployeenId[this] = value;
        }

        [DisplayName("Goods Issue Remarks"), Expression("jGoodsIssue.[Remarks]")]
        public string GoodsIssueRemarks
        {
            get => fields.GoodsIssueRemarks[this];
            set => fields.GoodsIssueRemarks[this] = value;
        }

        [DisplayName("Goods Issue Journal Remarks"), Expression("jGoodsIssue.[JournalRemarks]")]
        public string GoodsIssueJournalRemarks
        {
            get => fields.GoodsIssueJournalRemarks[this];
            set => fields.GoodsIssueJournalRemarks[this] = value;
        }

        [DisplayName("Goods Issue Reference"), Expression("jGoodsIssue.[Reference]")]
        public string GoodsIssueReference
        {
            get => fields.GoodsIssueReference[this];
            set => fields.GoodsIssueReference[this] = value;
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

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
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

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get => fields.ProductInsertDate[this];
            set => fields.ProductInsertDate[this] = value;
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

        [DisplayName("Warehouse Name"), Expression("jWarehouse.[Name]")]
        public string WarehouseName
        {
            get => fields.WarehouseName[this];
            set => fields.WarehouseName[this] = value;
        }

        [DisplayName("Warehouse Description"), Expression("jWarehouse.[Description]")]
        public string WarehouseDescription
        {
            get => fields.WarehouseDescription[this];
            set => fields.WarehouseDescription[this] = value;
        }

        [DisplayName("Warehouse Country Id"), Expression("jWarehouse.[CountryId]")]
        public int? WarehouseCountryId
        {
            get => fields.WarehouseCountryId[this];
            set => fields.WarehouseCountryId[this] = value;
        }

        [DisplayName("Warehouse State Id"), Expression("jWarehouse.[StateId]")]
        public int? WarehouseStateId
        {
            get => fields.WarehouseStateId[this];
            set => fields.WarehouseStateId[this] = value;
        }

        [DisplayName("Warehouse City Id"), Expression("jWarehouse.[CityId]")]
        public int? WarehouseCityId
        {
            get => fields.WarehouseCityId[this];
            set => fields.WarehouseCityId[this] = value;
        }

        [DisplayName("Warehouse Phone"), Expression("jWarehouse.[Phone]")]
        public string WarehousePhone
        {
            get => fields.WarehousePhone[this];
            set => fields.WarehousePhone[this] = value;
        }

        [DisplayName("Warehouse Address"), Expression("jWarehouse.[Address]")]
        public string WarehouseAddress
        {
            get => fields.WarehouseAddress[this];
            set => fields.WarehouseAddress[this] = value;
        }

        public GoodsissuedetailsRow()
            : base()
        {
        }

        public GoodsissuedetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field GoodsIssueId;
            public Int32Field ProductId;
            public StringField ProductName;
            public StringField Description;
            public DoubleField Quantity;
            public Int32Field WarehouseId;

            public Int32Field GoodsIssueCustomerId;
            public Int32Field GoodsIssueSaleId;
            public DateTimeField GoodsIssueDate;
            public DoubleField GoodsIssueTotalQuantity;
            public Int32Field GoodsIssueEmployeenId;
            public StringField GoodsIssueRemarks;
            public StringField GoodsIssueJournalRemarks;
            public StringField GoodsIssueReference;

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
            public DateTimeField ProductInsertDate;
            public Int32Field ProductInsertUserId;
            public DateTimeField ProductUpdateDate;
            public Int32Field ProductUpdateUserId;
            public DateTimeField ProductDeleteDate;
            public Int32Field ProductDeleteUserId;
            public Int32Field ProductIsActive;
            public Int32Field ProductBranchId;

            public StringField WarehouseName;
            public StringField WarehouseDescription;
            public Int32Field WarehouseCountryId;
            public Int32Field WarehouseStateId;
            public Int32Field WarehouseCityId;
            public StringField WarehousePhone;
            public StringField WarehouseAddress;
        }
    }
}
