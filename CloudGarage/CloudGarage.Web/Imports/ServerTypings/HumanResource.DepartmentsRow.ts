namespace CloudGarage.HumanResource {
    export interface DepartmentsRow {
        Id?: number;
        Department?: string;
        Description?: string;
        ParentDepartmentId?: number;
        ParentDepartmentDepartment?: string;
        ParentDepartmentDescription?: string;
        ParentDepartmentParentDepartmentId?: number;
    }

    export namespace DepartmentsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Department';
        export const localTextPrefix = 'HumanResource.Departments';
        export const lookupKey = 'HumanResource.Departments';

        export function getLookup(): Q.Lookup<DepartmentsRow> {
            return Q.getLookup<DepartmentsRow>('HumanResource.Departments');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Department = "Department",
            Description = "Description",
            ParentDepartmentId = "ParentDepartmentId",
            ParentDepartmentDepartment = "ParentDepartmentDepartment",
            ParentDepartmentDescription = "ParentDepartmentDescription",
            ParentDepartmentParentDepartmentId = "ParentDepartmentParentDepartmentId"
        }
    }
}
