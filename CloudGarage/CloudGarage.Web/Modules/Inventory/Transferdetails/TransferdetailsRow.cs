using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("transferdetails")]
    [DisplayName("Transferdetails"), InstanceName("Transferdetails")]
    [ReadPermission(PermissionKeys.Transfers.View)]
    [InsertPermission(PermissionKeys.Transfers.Create)]
    [UpdatePermission(PermissionKeys.Transfers.Update)]
    [DeletePermission(PermissionKeys.Transfers.Delete)]
    public sealed class TransferdetailsRow : Row<TransferdetailsRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Transfer"), NotNull, ForeignKey("transfers", "Id"), LeftJoin("jTransfer")]
        public int? TransferId
        {
            get => fields.TransferId[this];
            set => fields.TransferId[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("products", "Id"), LeftJoin("jProduct"), TextualField("ProductBarcode"), NameProperty]
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

        [DisplayName("Unit Price"), NotNull]
        public double? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Transfer V No"), Expression("jTransfer.[VNo]")]
        public int? TransferVNo
        {
            get => fields.TransferVNo[this];
            set => fields.TransferVNo[this] = value;
        }

        [DisplayName("Transfer From Branch Id"), Expression("jTransfer.[FromBranchId]")]
        public int? TransferFromBranchId
        {
            get => fields.TransferFromBranchId[this];
            set => fields.TransferFromBranchId[this] = value;
        }

        [DisplayName("Transfer To Branch Id"), Expression("jTransfer.[ToBranchId]")]
        public int? TransferToBranchId
        {
            get => fields.TransferToBranchId[this];
            set => fields.TransferToBranchId[this] = value;
        }

        [DisplayName("Transfer From Warehouse Id"), Expression("jTransfer.[FromWarehouseId]")]
        public int? TransferFromWarehouseId
        {
            get => fields.TransferFromWarehouseId[this];
            set => fields.TransferFromWarehouseId[this] = value;
        }

        [DisplayName("Transfer To Warehouse Id"), Expression("jTransfer.[ToWarehouseId]")]
        public int? TransferToWarehouseId
        {
            get => fields.TransferToWarehouseId[this];
            set => fields.TransferToWarehouseId[this] = value;
        }

        [DisplayName("Transfer Status"), Expression("jTransfer.[Status]")]
        public int? TransferStatus
        {
            get => fields.TransferStatus[this];
            set => fields.TransferStatus[this] = value;
        }

        [DisplayName("Transfer Total Quantity"), Expression("jTransfer.[TotalQuantity]")]
        public double? TransferTotalQuantity
        {
            get => fields.TransferTotalQuantity[this];
            set => fields.TransferTotalQuantity[this] = value;
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

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]"),MinSelectLevel(SelectLevel.List)]
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

        public TransferdetailsRow()
            : base()
        {
        }

        public TransferdetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TransferId;
            public Int32Field ProductId;
            public DoubleField Quantity;
            public DoubleField UnitPrice;

            public Int32Field TransferVNo;
            public Int32Field TransferFromBranchId;
            public Int32Field TransferToBranchId;
            public Int32Field TransferFromWarehouseId;
            public Int32Field TransferToWarehouseId;
            public Int32Field TransferStatus;
            public DoubleField TransferTotalQuantity;

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
        }
    }
}
