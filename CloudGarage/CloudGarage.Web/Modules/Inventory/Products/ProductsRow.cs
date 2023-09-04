using Serenity;
using CloudGarage;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("products")]
    [DisplayName("Products"), InstanceName("Products")]
    [ReadPermission(PermissionKeys.Products.View)]
    [InsertPermission(PermissionKeys.Products.Create)]
    [UpdatePermission(PermissionKeys.Products.Update)]
    [DeletePermission(PermissionKeys.Products.Delete)]
    [LookupScript]
    public sealed class ProductsRow : Row<ProductsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Barcode"), Size(255), QuickSearch, LookupInclude]
        public string Barcode
        {
            get => fields.Barcode[this];
            set => fields.Barcode[this] = value;
        }

        [DisplayName("Sn"), Column("SN"), Size(255)]
        public string Sn
        {
            get => fields.Sn[this];
            set => fields.Sn[this] = value;
        }

        [DisplayName("Product Name"), Size(255), LookupInclude, NameProperty]
        public string ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [DisplayName("Model"), Size(255)]
        public string Model
        {
            get => fields.Model[this];
            set => fields.Model[this] = value;
        }
        [CurrencyFormatter]
        [DisplayName("Unit Price"), Size(10), Scale(2), NotNull, LookupInclude]
        public decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Units In Stock"), Size(10), Scale(2), NotNull, LookupInclude]
        public decimal? UnitsInStock
        {
            get => fields.UnitsInStock[this];
            set => fields.UnitsInStock[this] = value;
        }

        [DisplayName("Units On Order"), Size(10), Scale(2), NotNull, LookupInclude]
        public decimal? UnitsOnOrder
        {
            get => fields.UnitsOnOrder[this];
            set => fields.UnitsOnOrder[this] = value;
        }

        [DisplayName("Reorder Level"), Size(10), Scale(2), NotNull]
        public decimal? ReorderLevel
        {
            get => fields.ReorderLevel[this];
            set => fields.ReorderLevel[this] = value;
        }

        [DisplayName("Category"), NotNull, ForeignKey("categories", "Id"), LeftJoin("jCategory"), TextualField("CategoryName")]
        [LookupInclude,CategoriesEditor(InplaceAdd = true, DialogType = "CloudGarage.Inventory.Categories")]
        public int? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Unit"), NotNull, ForeignKey("units", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        [LookupEditor(typeof(UnitsRow), InplaceAdd = true, DialogType = "CloudGarage.Inventory.Units"), LookupInclude]
        public int? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Brand"), ForeignKey("brands", "Id"), LeftJoin("jBrand"), TextualField("BrandName")]
        [LookupEditor(typeof(BrandsRow), InplaceAdd = true, DialogType = "CloudGarage.Inventory.Brands")]
        public int? BrandId
        {
            get => fields.BrandId[this];
            set => fields.BrandId[this] = value;
        }

        [DisplayName("Image"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public string Image
        {
            get => fields.Image[this];
            set => fields.Image[this] = value;
        }

        [DisplayName("Product Details"), Size(255)]
        public string ProductDetails
        {
            get => fields.ProductDetails[this];
            set => fields.ProductDetails[this] = value;
        }

        [DisplayName("Insert User Id")]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Delete Date")]
        public DateTime? DeleteDate
        {
            get => fields.DeleteDate[this];
            set => fields.DeleteDate[this] = value;
        }

        [DisplayName("Delete User Id")]
        public int? DeleteUserId
        {
            get => fields.DeleteUserId[this];
            set => fields.DeleteUserId[this] = value;
        }

        [DisplayName("Is Active")]
        public int? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Branch Id")]
        public int? BranchId
        {
            get => fields.BranchId[this];
            set => fields.BranchId[this] = value;
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

        [DisplayName("Brand Name"), Expression("jBrand.[Name]")]
        public string BrandName
        {
            get => fields.BrandName[this];
            set => fields.BrandName[this] = value;
        }

        [DisplayName("Brand Description"), Expression("jBrand.[Description]")]
        public string BrandDescription
        {
            get => fields.BrandDescription[this];
            set => fields.BrandDescription[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Purchase Price"), Column("PurchasePrice"), Expression("(SELECT AVG(products.UnitPrice)  FROM purchasedetails products where products.ProductId=t0.Id)"), LookupInclude]
        public double? PurchasePrice
        {
            get { return Fields.PurchasePrice[this]; }
            set { Fields.PurchasePrice[this] = value; }
        }

        public ProductsRow()
            : base()
        {
        }

        public ProductsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Barcode;
            public StringField Sn;
            public StringField ProductName;
            public StringField Model;
            public DecimalField UnitPrice;
            public DecimalField UnitsInStock;
            public DecimalField UnitsOnOrder;
            public DecimalField ReorderLevel;
            public Int32Field CategoryId;
            public Int32Field UnitId;
            public Int32Field BrandId;
            public StringField Image;
            public StringField ProductDetails;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public DateTimeField DeleteDate;
            public Int32Field DeleteUserId;
            public Int32Field IsActive;
            public Int32Field BranchId;

            public StringField CategoryName;
            public StringField CategoryDescription;
            public Int32Field CategoryParentCategoryId;

            public StringField UnitName;
            public StringField UnitDescription;

            public DoubleField PurchasePrice;

            public StringField BrandName;
            public StringField BrandDescription;
        }
    }
}
