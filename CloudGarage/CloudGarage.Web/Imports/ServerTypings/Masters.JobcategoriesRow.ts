namespace CloudGarage.Masters {
    export interface JobcategoriesRow {
        Id?: number;
        Name?: string;
    }

    export namespace JobcategoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Jobcategories';
        export const lookupKey = 'Masters.Jobcategories';

        export function getLookup(): Q.Lookup<JobcategoriesRow> {
            return Q.getLookup<JobcategoriesRow>('Masters.Jobcategories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
