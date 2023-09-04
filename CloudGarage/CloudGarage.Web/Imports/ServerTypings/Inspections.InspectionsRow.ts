namespace CloudGarage.Inspections {
    export interface InspectionsRow {
        Id?: number;
        Name?: string;
        Rate?: number;
        StandardTiming?: string;
        IsInspectionList?: boolean;
        Checklist?: InspectionchecklistRow[];
        CustomerName?: string;
        CustomerId?: number;
    }

    export namespace InspectionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inspections.Inspections';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Rate = "Rate",
            StandardTiming = "StandardTiming",
            IsInspectionList = "IsInspectionList",
            Checklist = "Checklist",
            CustomerName = "CustomerName",
            CustomerId = "CustomerId"
        }
    }
}
