namespace CloudGarage.invoice {
    export interface InvoiceitemsRow {
        Id?: number;
        ProductId?: number;
        Description?: string;
        UnitId?: number;
        Quantity?: number;
        PurchasePrice?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        InvoiceId?: number;
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
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        UnitName?: string;
        UnitDescription?: string;
        InvoiceCustomerId?: number;
        InvoiceJobcard?: number;
        InvoiceVehicle?: number;
        InvoiceDate?: string;
        InvoiceDiscount?: number;
        InvoiceTotalDiscount?: number;
        InvoiceVat?: number;
        InvoiceTotalTax?: number;
        InvoiceShippingCost?: number;
        InvoiceGrandTotal?: number;
        InvoiceNetTotal?: number;
        InvoicePaidAmount?: number;
        InvoiceDue?: number;
        InvoiceChange?: number;
        InvoiceDetails?: string;
        InvoicePaymentAccount?: number;
        InvoiceVNo?: number;
        InvoiceScheduleDatetime?: string;
        InvoiceDeliveryDatetime?: string;
    }

    export namespace InvoiceitemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'invoice.Invoiceitems';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Description = "Description",
            UnitId = "UnitId",
            Quantity = "Quantity",
            PurchasePrice = "PurchasePrice",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            InvoiceId = "InvoiceId",
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
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            InvoiceCustomerId = "InvoiceCustomerId",
            InvoiceJobcard = "InvoiceJobcard",
            InvoiceVehicle = "InvoiceVehicle",
            InvoiceDate = "InvoiceDate",
            InvoiceDiscount = "InvoiceDiscount",
            InvoiceTotalDiscount = "InvoiceTotalDiscount",
            InvoiceVat = "InvoiceVat",
            InvoiceTotalTax = "InvoiceTotalTax",
            InvoiceShippingCost = "InvoiceShippingCost",
            InvoiceGrandTotal = "InvoiceGrandTotal",
            InvoiceNetTotal = "InvoiceNetTotal",
            InvoicePaidAmount = "InvoicePaidAmount",
            InvoiceDue = "InvoiceDue",
            InvoiceChange = "InvoiceChange",
            InvoiceDetails = "InvoiceDetails",
            InvoicePaymentAccount = "InvoicePaymentAccount",
            InvoiceVNo = "InvoiceVNo",
            InvoiceScheduleDatetime = "InvoiceScheduleDatetime",
            InvoiceDeliveryDatetime = "InvoiceDeliveryDatetime"
        }
    }
}
