namespace CloudGarage.Inventory {
    export interface ProductsRow {
        Id?: number;
        Barcode?: string;
        Sn?: string;
        ProductName?: string;
        Model?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        CategoryId?: number;
        UnitId?: number;
        BrandId?: number;
        Image?: string;
        ProductDetails?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        DeleteDate?: string;
        DeleteUserId?: number;
        IsActive?: number;
        BranchId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
        UnitName?: string;
        UnitDescription?: string;
        PurchasePrice?: number;
        BrandName?: string;
        BrandDescription?: string;
    }

    export namespace ProductsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Inventory.Products';
        export const lookupKey = 'Inventory.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('Inventory.Products');
        }
        export const deletePermission = 'Inventory:Product:Delete';
        export const insertPermission = 'Inventory:Product:Create';
        export const readPermission = 'Inventory:Product:View';
        export const updatePermission = 'Inventory:Product:Update';

        export declare const enum Fields {
            Id = "Id",
            Barcode = "Barcode",
            Sn = "Sn",
            ProductName = "ProductName",
            Model = "Model",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            CategoryId = "CategoryId",
            UnitId = "UnitId",
            BrandId = "BrandId",
            Image = "Image",
            ProductDetails = "ProductDetails",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            DeleteDate = "DeleteDate",
            DeleteUserId = "DeleteUserId",
            IsActive = "IsActive",
            BranchId = "BranchId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            PurchasePrice = "PurchasePrice",
            BrandName = "BrandName",
            BrandDescription = "BrandDescription"
        }
    }
}
