namespace CloudGarage.invoice {
    export interface InvoicejobitemsRow {
        Id?: number;
        JobType?: number;
        Description?: string;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        InvoiceJobId?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: number;
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

    export namespace InvoicejobitemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'invoice.Invoicejobitems';
        export const lookupKey = 'invoice.Invoicejobitems';

        export function getLookup(): Q.Lookup<InvoicejobitemsRow> {
            return Q.getLookup<InvoicejobitemsRow>('invoice.Invoicejobitems');
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
            InvoiceJobId = "InvoiceJobId",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
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
