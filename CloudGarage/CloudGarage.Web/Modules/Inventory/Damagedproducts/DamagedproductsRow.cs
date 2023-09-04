using Serenity;
using CloudGarage.Inventory;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;
using static MVC.Views.Inventory;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("damagedproducts")]
    [DisplayName("Damaged Products"), InstanceName("Damaged Products")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DamagedproductsRow : Row<DamagedproductsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Code"), Size(255), QuickSearch, NameProperty]
        public string Code
        {
            get => fields.Code[this];
            set => fields.Code[this] = value;
        }

        [DisplayName("Name"), Size(100)]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Category"), NotNull, ForeignKey("categories", "Id"), LeftJoin("jCategory"), TextualField("CategoryName")]
        [CategoriesEditor(InplaceAdd = true, DialogType = "CloudGarage.Inventory.Categories")]
        public int? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Purchase Price"), NotNull]
        public double? PurchasePrice
        {
            get => fields.PurchasePrice[this];
            set => fields.PurchasePrice[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Note"), Size(255)]
        public string Note
        {
            get => fields.Note[this];
            set => fields.Note[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductBarcode")]
        [LookupEditor(typeof(ProductsRow), InplaceAdd = true, CascadeField = "CategoryId", CascadeFrom = "CategoryId", DialogType = "CloudGarage.Inventory.Products")]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public string CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [DisplayName("Category Description"), Expression("jCategory.[Description]")]
        public string CategoryDescription
        {
            get => fields.CategoryDescription[this];
            set => fields.CategoryDescription[this] = value;
        }

        [DisplayName("Category Parent Category Id"), Expression("jCategory.[ParentCategoryId]")]
        public int? CategoryParentCategoryId
        {
            get => fields.CategoryParentCategoryId[this];
            set => fields.CategoryParentCategoryId[this] = value;
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

        public DamagedproductsRow()
            : base()
        {
        }

        public DamagedproductsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField Name;
            public Int32Field CategoryId;
            public DoubleField PurchasePrice;
            public DoubleField Quantity;
            public DateTimeField Date;
            public StringField Note;
            public Int32Field ProductId;

            public StringField CategoryName;
            public StringField CategoryDescription;
            public Int32Field CategoryParentCategoryId;

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
        }
    }
}
