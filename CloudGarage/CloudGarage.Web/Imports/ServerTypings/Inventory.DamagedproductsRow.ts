namespace CloudGarage.Inventory {
    export interface DamagedproductsRow {
        Id?: number;
        Code?: string;
        Name?: string;
        CategoryId?: number;
        PurchasePrice?: number;
        Quantity?: number;
        Date?: string;
        Note?: string;
        ProductId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
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
    }

    export namespace DamagedproductsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Inventory.Damagedproducts';
        export const lookupKey = 'Inventory.Damagedproducts';

        export function getLookup(): Q.Lookup<DamagedproductsRow> {
            return Q.getLookup<DamagedproductsRow>('Inventory.Damagedproducts');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            CategoryId = "CategoryId",
            PurchasePrice = "PurchasePrice",
            Quantity = "Quantity",
            Date = "Date",
            Note = "Note",
            ProductId = "ProductId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId",
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
            ProductBranchId = "ProductBranchId"
        }
    }
}
