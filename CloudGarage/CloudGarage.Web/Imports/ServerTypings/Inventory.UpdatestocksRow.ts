namespace CloudGarage.Inventory {
    export interface UpdatestocksRow {
        Id?: number;
        ProductId?: number;
        Quantity?: number;
        VNo?: number;
        BranchId?: number;
        WarehouseId?: number;
        Mode?: string;
        TransactionType?: string;
        Status?: StatusKind;
        Note?: string;
        InsertDate?: string;
        StockMode?: StockKind;
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
        ProductBranchId?: number;
        BranchName?: string;
        BranchDescription?: string;
        BranchAddress?: string;
        BranchCity?: number;
        BranchState?: number;
        BranchCountry?: number;
        BranchEmail?: string;
        BranchPhone1?: string;
        BranchPhone2?: string;
        BranchUseBranchAddress?: number;
        BranchVatPercentage?: number;
        BranchLogo?: string;
        BranchInsertUserId?: number;
        BranchInsertDate?: string;
        BranchUpdateUserId?: number;
        BranchUpdateDate?: string;
        BranchDeleteUserId?: number;
        BranchDeleteDate?: string;
        BranchIsActive?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
    }

    export namespace UpdatestocksRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Mode';
        export const localTextPrefix = 'Inventory.Updatestocks';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Quantity = "Quantity",
            VNo = "VNo",
            BranchId = "BranchId",
            WarehouseId = "WarehouseId",
            Mode = "Mode",
            TransactionType = "TransactionType",
            Status = "Status",
            Note = "Note",
            InsertDate = "InsertDate",
            StockMode = "StockMode",
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
            ProductBranchId = "ProductBranchId",
            BranchName = "BranchName",
            BranchDescription = "BranchDescription",
            BranchAddress = "BranchAddress",
            BranchCity = "BranchCity",
            BranchState = "BranchState",
            BranchCountry = "BranchCountry",
            BranchEmail = "BranchEmail",
            BranchPhone1 = "BranchPhone1",
            BranchPhone2 = "BranchPhone2",
            BranchUseBranchAddress = "BranchUseBranchAddress",
            BranchVatPercentage = "BranchVatPercentage",
            BranchLogo = "BranchLogo",
            BranchInsertUserId = "BranchInsertUserId",
            BranchInsertDate = "BranchInsertDate",
            BranchUpdateUserId = "BranchUpdateUserId",
            BranchUpdateDate = "BranchUpdateDate",
            BranchDeleteUserId = "BranchDeleteUserId",
            BranchDeleteDate = "BranchDeleteDate",
            BranchIsActive = "BranchIsActive",
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
