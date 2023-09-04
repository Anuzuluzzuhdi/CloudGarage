namespace CloudGarage.Inventory {
    export interface StocksRow {
        Id?: number;
        ProductId?: number;
        BranchId?: number;
        CategoryId?: number;
        QtyIn?: number;
        QtyOut?: number;
        Stock?: number;
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
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
    }

    export namespace StocksRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inventory.Stocks';
        export const deletePermission = 'Inventory:Stocks:View';
        export const insertPermission = 'Inventory:Stocks:View';
        export const readPermission = 'Inventory:Stocks:View';
        export const updatePermission = 'Inventory:Stocks:View';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            BranchId = "BranchId",
            CategoryId = "CategoryId",
            QtyIn = "QtyIn",
            QtyOut = "QtyOut",
            Stock = "Stock",
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
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId"
        }
    }
}
