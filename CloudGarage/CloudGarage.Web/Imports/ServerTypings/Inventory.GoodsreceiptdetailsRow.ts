namespace CloudGarage.Inventory {
    export interface GoodsreceiptdetailsRow {
        Id?: number;
        GoodsReceiptId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        GoodsReceiptGoodsReceiptId?: number;
        GoodsReceiptProductId?: number;
        GoodsReceiptProductName?: string;
        GoodsReceiptDescription?: string;
        GoodsReceiptQuantity?: number;
        GoodsReceiptWarehouseId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
    }

    export namespace GoodsreceiptdetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Inventory.Goodsreceiptdetails';
        export const deletePermission = 'Inventory:Goods Receipt:Delete';
        export const insertPermission = 'Inventory:Goods Receipt:Create';
        export const readPermission = 'Inventory:Goods Receipt:View';
        export const updatePermission = 'Inventory:Goods Receipt:Update';

        export declare const enum Fields {
            Id = "Id",
            GoodsReceiptId = "GoodsReceiptId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            GoodsReceiptGoodsReceiptId = "GoodsReceiptGoodsReceiptId",
            GoodsReceiptProductId = "GoodsReceiptProductId",
            GoodsReceiptProductName = "GoodsReceiptProductName",
            GoodsReceiptDescription = "GoodsReceiptDescription",
            GoodsReceiptQuantity = "GoodsReceiptQuantity",
            GoodsReceiptWarehouseId = "GoodsReceiptWarehouseId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress"
        }
    }
}
