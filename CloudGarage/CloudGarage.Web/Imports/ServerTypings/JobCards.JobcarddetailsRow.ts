namespace CloudGarage.JobCards {
    export interface JobcarddetailsRow {
        Id?: number;
        JobType?: number;
        JobOrder?: number;
        Mechanic?: number;
        CustomerNotes?: string;
        MechanicFullName?: string;
        JobTypeName?: string;
        JobOrderCustomer?: number;
        JobOrderWorkOrderNo?: string;
        JobOrderAddress?: string;
        JobOrderVehicle?: number;
        JobOrderPhone?: string;
        JobOrderReference?: string;
        JobOrderMobile?: string;
        JobOrderScheduleDatetime?: string;
        JobOrderWebsite?: string;
        JobOrderDeliveryDatetime?: string;
        JobOrderDetails?: string;
    }

    export namespace JobcarddetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CustomerNotes';
        export const localTextPrefix = 'JobCards.Jobcarddetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            JobType = "JobType",
            JobOrder = "JobOrder",
            Mechanic = "Mechanic",
            CustomerNotes = "CustomerNotes",
            MechanicFullName = "MechanicFullName",
            JobTypeName = "JobTypeName",
            JobOrderCustomer = "JobOrderCustomer",
            JobOrderWorkOrderNo = "JobOrderWorkOrderNo",
            JobOrderAddress = "JobOrderAddress",
            JobOrderVehicle = "JobOrderVehicle",
            JobOrderPhone = "JobOrderPhone",
            JobOrderReference = "JobOrderReference",
            JobOrderMobile = "JobOrderMobile",
            JobOrderScheduleDatetime = "JobOrderScheduleDatetime",
            JobOrderWebsite = "JobOrderWebsite",
            JobOrderDeliveryDatetime = "JobOrderDeliveryDatetime",
            JobOrderDetails = "JobOrderDetails"
        }
    }
}
