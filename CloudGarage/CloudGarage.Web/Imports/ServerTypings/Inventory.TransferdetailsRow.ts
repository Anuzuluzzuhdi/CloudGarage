namespace CloudGarage.Inventory {
    export interface TransferdetailsRow {
        Id?: number;
        TransferId?: number;
        ProductId?: number;
        Quantity?: number;
        UnitPrice?: number;
        TransferVNo?: number;
        TransferFromBranchId?: number;
        TransferToBranchId?: number;
        TransferFromWarehouseId?: number;
        TransferToWarehouseId?: number;
        TransferStatus?: number;
        TransferTotalQuantity?: number;
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
    }

    export namespace TransferdetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductId';
        export const localTextPrefix = 'Inventory.Transferdetails';
        export const deletePermission = 'Inventory:Transfers:Delete';
        export const insertPermission = 'Inventory:Transfers:Create';
        export const readPermission = 'Inventory:Transfers:View';
        export const updatePermission = 'Inventory:Transfers:Update';

        export declare const enum Fields {
            Id = "Id",
            TransferId = "TransferId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            TransferVNo = "TransferVNo",
            TransferFromBranchId = "TransferFromBranchId",
            TransferToBranchId = "TransferToBranchId",
            TransferFromWarehouseId = "TransferFromWarehouseId",
            TransferToWarehouseId = "TransferToWarehouseId",
            TransferStatus = "TransferStatus",
            TransferTotalQuantity = "TransferTotalQuantity",
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
            ProductBranchId = "ProductBranchId"
        }
    }
}
