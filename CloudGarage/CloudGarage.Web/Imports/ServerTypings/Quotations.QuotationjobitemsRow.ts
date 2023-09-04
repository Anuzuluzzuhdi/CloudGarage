namespace CloudGarage.Quotations {
    export interface QuotationjobitemsRow {
        Id?: number;
        JobType?: number;
        Description?: string;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        QuotationId?: number;
        JobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: boolean;
        QuotationCustomerId?: number;
        QuotationVehicle?: number;
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

    export namespace QuotationjobitemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Quotations.Quotationjobitems';
        export const lookupKey = 'Quotations.Quotationjobitems';

        export function getLookup(): Q.Lookup<QuotationjobitemsRow> {
            return Q.getLookup<QuotationjobitemsRow>('Quotations.Quotationjobitems');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            JobType = "JobType",
            Description = "Description",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            QuotationId = "QuotationId",
            JobCategory = "JobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationVehicle = "QuotationVehicle",
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
