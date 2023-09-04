namespace CloudGarage.Quotations {
    export interface QuotationdetailsRow {
        Id?: number;
        ProductId?: number;
        Description?: string;
        ProductName?: string;
        UnitName?: string;
        UnitId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        QuotationId?: number;
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
        UnitUnitName?: string;
        UnitDescription?: string;
        UnitInsertDate?: string;
        UnitInsertUserId?: number;
        UnitUpdateDate?: string;
        UnitUpdateUserId?: number;
        UnitDeleteDate?: string;
        UnitDeleteUserId?: number;
        UnitIsActive?: number;
        QuotationCustomerId?: number;
        QuotationDate?: string;
        QuotationDiscount?: number;
        QuotationTotalDiscount?: number;
        QuotationVat?: number;
        QuotationTotalTax?: number;
        QuotationShippingCost?: number;
        QuotationGrandTotal?: number;
        QuotationNetTotal?: number;
        QuotationDetails?: string;
        QuotationExpiryDate?: string;
    }

    export namespace QuotationdetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Quotations.Quotationdetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Description = "Description",
            ProductName = "ProductName",
            UnitName = "UnitName",
            UnitId = "UnitId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            QuotationId = "QuotationId",
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
            UnitUnitName = "UnitUnitName",
            UnitDescription = "UnitDescription",
            UnitInsertDate = "UnitInsertDate",
            UnitInsertUserId = "UnitInsertUserId",
            UnitUpdateDate = "UnitUpdateDate",
            UnitUpdateUserId = "UnitUpdateUserId",
            UnitDeleteDate = "UnitDeleteDate",
            UnitDeleteUserId = "UnitDeleteUserId",
            UnitIsActive = "UnitIsActive",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationDate = "QuotationDate",
            QuotationDiscount = "QuotationDiscount",
            QuotationTotalDiscount = "QuotationTotalDiscount",
            QuotationVat = "QuotationVat",
            QuotationTotalTax = "QuotationTotalTax",
            QuotationShippingCost = "QuotationShippingCost",
            QuotationGrandTotal = "QuotationGrandTotal",
            QuotationNetTotal = "QuotationNetTotal",
            QuotationDetails = "QuotationDetails",
            QuotationExpiryDate = "QuotationExpiryDate"
        }
    }
}
