namespace CloudGarage.HumanResource {
    export interface DesignationsRow {
        Id?: number;
        Designation?: string;
        Description?: string;
        ParentDesignationId?: number;
        ParentDesignationDesignation?: string;
        ParentDesignationDescription?: string;
        ParentDesignationParentDesignationId?: number;
    }

    export namespace DesignationsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Designation';
        export const localTextPrefix = 'HumanResource.Designations';
        export const lookupKey = 'HumanResource.Designations';

        export function getLookup(): Q.Lookup<DesignationsRow> {
            return Q.getLookup<DesignationsRow>('HumanResource.Designations');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Designation = "Designation",
            Description = "Description",
            ParentDesignationId = "ParentDesignationId",
            ParentDesignationDesignation = "ParentDesignationDesignation",
            ParentDesignationDescription = "ParentDesignationDescription",
            ParentDesignationParentDesignationId = "ParentDesignationParentDesignationId"
        }
    }
}
