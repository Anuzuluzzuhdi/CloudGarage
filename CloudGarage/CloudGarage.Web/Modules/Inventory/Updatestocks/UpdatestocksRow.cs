﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("updatestocks")]
    [DisplayName("Update Stock"), InstanceName("Updatestocks")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UpdatestocksRow : Row<UpdatestocksRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductBarcode")]
        [LookupEditor(typeof(ProductsRow))]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("V No")]
        public int? VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("Branch"), NotNull, ForeignKey("branches", "Id"), LeftJoin("jBranch"), TextualField("BranchName")]
        [LookupEditor(typeof(Masters.BranchesRow))]
        public int? BranchId
        {
            get => fields.BranchId[this];
            set => fields.BranchId[this] = value;
        }

        [DisplayName("Warehouse"), ForeignKey("warehouses", "Id"), LeftJoin("jWarehouse"), TextualField("WarehouseName")]
        [LookupEditor(typeof(Masters.WarehousesRow))]
        public int? WarehouseId
        {
            get => fields.WarehouseId[this];
            set => fields.WarehouseId[this] = value;
        }

        [DisplayName("Mode"), Size(10), QuickSearch, NameProperty]
        public string Mode
        {
            get => fields.Mode[this];
            set => fields.Mode[this] = value;
        }

        [DisplayName("Transaction Type"), Size(50)]
        public string TransactionType
        {
            get => fields.TransactionType[this];
            set => fields.TransactionType[this] = value;
        }

        [DisplayName("Status"), NotNull, DefaultValue(StatusKind.Complete), QuickFilter]
        public StatusKind? Status
        {
            get => (StatusKind?)fields.Status[this];
            set => fields.Status[this] = (Int32)value;
        }

        [DisplayName("Mode"), NotNull, DefaultValue(StockKind.IN), NotMapped]
        public StockKind? StockMode
        {
            get => (StockKind?)fields.StockMode[this];
            set => fields.StockMode[this] = (Int32)value;
        }

        [DisplayName("Note"), Size(255), NotNull]
        public string Note
        {
            get => fields.Note[this];
            set => fields.Note[this] = value;
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
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

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]")]
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

        //[DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        //public DateTime? ProductInsertDate
        //{
        //    get => fields.ProductInsertDate[this];
        //    set => fields.ProductInsertDate[this] = value;
        //}

        //[DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        //public int? ProductInsertUserId
        //{
        //    get => fields.ProductInsertUserId[this];
        //    set => fields.ProductInsertUserId[this] = value;
        //}

        //[DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        //public DateTime? ProductUpdateDate
        //{
        //    get => fields.ProductUpdateDate[this];
        //    set => fields.ProductUpdateDate[this] = value;
        //}

        //[DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        //public int? ProductUpdateUserId
        //{
        //    get => fields.ProductUpdateUserId[this];
        //    set => fields.ProductUpdateUserId[this] = value;
        //}

        //[DisplayName("Product Delete Date"), Expression("jProduct.[DeleteDate]")]
        //public DateTime? ProductDeleteDate
        //{
        //    get => fields.ProductDeleteDate[this];
        //    set => fields.ProductDeleteDate[this] = value;
        //}

        //[DisplayName("Product Delete User Id"), Expression("jProduct.[DeleteUserId]")]
        //public int? ProductDeleteUserId
        //{
        //    get => fields.ProductDeleteUserId[this];
        //    set => fields.ProductDeleteUserId[this] = value;
        //}

        //[DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        //public int? ProductIsActive
        //{
        //    get => fields.ProductIsActive[this];
        //    set => fields.ProductIsActive[this] = value;
        //}

        [DisplayName("Product Branch Id"), Expression("jProduct.[BranchId]")]
        public int? ProductBranchId
        {
            get => fields.ProductBranchId[this];
            set => fields.ProductBranchId[this] = value;
        }

        [DisplayName("Branch Name"), Expression("jBranch.[Name]")]
        public string BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
        }

        [DisplayName("Branch Description"), Expression("jBranch.[Description]")]
        public string BranchDescription
        {
            get => fields.BranchDescription[this];
            set => fields.BranchDescription[this] = value;
        }

        [DisplayName("Branch Address"), Expression("jBranch.[Address]")]
        public string BranchAddress
        {
            get => fields.BranchAddress[this];
            set => fields.BranchAddress[this] = value;
        }

        [DisplayName("Branch City"), Expression("jBranch.[City]")]
        public int? BranchCity
        {
            get => fields.BranchCity[this];
            set => fields.BranchCity[this] = value;
        }

        [DisplayName("Branch State"), Expression("jBranch.[State]")]
        public int? BranchState
        {
            get => fields.BranchState[this];
            set => fields.BranchState[this] = value;
        }

        [DisplayName("Branch Country"), Expression("jBranch.[Country]")]
        public int? BranchCountry
        {
            get => fields.BranchCountry[this];
            set => fields.BranchCountry[this] = value;
        }

        [DisplayName("Branch Email"), Expression("jBranch.[Email]")]
        public string BranchEmail
        {
            get => fields.BranchEmail[this];
            set => fields.BranchEmail[this] = value;
        }

        [DisplayName("Branch Phone1"), Expression("jBranch.[Phone1]")]
        public string BranchPhone1
        {
            get => fields.BranchPhone1[this];
            set => fields.BranchPhone1[this] = value;
        }

        [DisplayName("Branch Phone2"), Expression("jBranch.[Phone2]")]
        public string BranchPhone2
        {
            get => fields.BranchPhone2[this];
            set => fields.BranchPhone2[this] = value;
        }

        [DisplayName("Branch Use Branch Address"), Expression("jBranch.[UseBranchAddress]")]
        public short? BranchUseBranchAddress
        {
            get => fields.BranchUseBranchAddress[this];
            set => fields.BranchUseBranchAddress[this] = value;
        }

        [DisplayName("Branch Vat Percentage"), Expression("jBranch.[VatPercentage]")]
        public double? BranchVatPercentage
        {
            get => fields.BranchVatPercentage[this];
            set => fields.BranchVatPercentage[this] = value;
        }

        [DisplayName("Branch Logo"), Expression("jBranch.[Logo]")]
        public string BranchLogo
        {
            get => fields.BranchLogo[this];
            set => fields.BranchLogo[this] = value;
        }

        [DisplayName("Branch Insert User Id"), Expression("jBranch.[InsertUserId]")]
        public int? BranchInsertUserId
        {
            get => fields.BranchInsertUserId[this];
            set => fields.BranchInsertUserId[this] = value;
        }

        [DisplayName("Branch Insert Date"), Expression("jBranch.[InsertDate]")]
        public DateTime? BranchInsertDate
        {
            get => fields.BranchInsertDate[this];
            set => fields.BranchInsertDate[this] = value;
        }

        [DisplayName("Branch Update User Id"), Expression("jBranch.[UpdateUserId]")]
        public int? BranchUpdateUserId
        {
            get => fields.BranchUpdateUserId[this];
            set => fields.BranchUpdateUserId[this] = value;
        }

        [DisplayName("Branch Update Date"), Expression("jBranch.[UpdateDate]")]
        public DateTime? BranchUpdateDate
        {
            get => fields.BranchUpdateDate[this];
            set => fields.BranchUpdateDate[this] = value;
        }

        [DisplayName("Branch Delete User Id"), Expression("jBranch.[DeleteUserId]")]
        public int? BranchDeleteUserId
        {
            get => fields.BranchDeleteUserId[this];
            set => fields.BranchDeleteUserId[this] = value;
        }

        [DisplayName("Branch Delete Date"), Expression("jBranch.[DeleteDate]")]
        public DateTime? BranchDeleteDate
        {
            get => fields.BranchDeleteDate[this];
            set => fields.BranchDeleteDate[this] = value;
        }

        [DisplayName("Branch Is Active"), Expression("jBranch.[IsActive]")]
        public int? BranchIsActive
        {
            get => fields.BranchIsActive[this];
            set => fields.BranchIsActive[this] = value;
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

        public UpdatestocksRow()
            : base()
        {
        }

        public UpdatestocksRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductId;
            public DoubleField Quantity;
            public Int32Field VNo;
            public Int32Field BranchId;
            public Int32Field WarehouseId;
            public StringField Mode;
            public StringField TransactionType;
            public Int32Field Status;
            public StringField Note;
            public DateTimeField InsertDate;
            public Int32Field StockMode;

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
            //public DateTimeField ProductInsertDate;
            //public Int32Field ProductInsertUserId;
            //public DateTimeField ProductUpdateDate;
            //public Int32Field ProductUpdateUserId;
            //public DateTimeField ProductDeleteDate;
            //public Int32Field ProductDeleteUserId;
            //public Int32Field ProductIsActive;
            public Int32Field ProductBranchId;

            public StringField BranchName;
            public StringField BranchDescription;
            public StringField BranchAddress;
            public Int32Field BranchCity;
            public Int32Field BranchState;
            public Int32Field BranchCountry;
            public StringField BranchEmail;
            public StringField BranchPhone1;
            public StringField BranchPhone2;
            public Int16Field BranchUseBranchAddress;
            public DoubleField BranchVatPercentage;
            public StringField BranchLogo;
            public Int32Field BranchInsertUserId;
            public DateTimeField BranchInsertDate;
            public Int32Field BranchUpdateUserId;
            public DateTimeField BranchUpdateDate;
            public Int32Field BranchDeleteUserId;
            public DateTimeField BranchDeleteDate;
            public Int32Field BranchIsActive;

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
