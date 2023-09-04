namespace CloudGarage.Masters {
    export interface JobtypesRow {
        Id?: number;
        JobCategory?: number;
        Name?: string;
        Rate?: number;
        StandardTiming?: string;
        IsInspectionList?: number;
        JobCategoryName?: string;
    }

    export namespace JobtypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Jobtypes';
        export const lookupKey = 'Masters.Jobtypes';

        export function getLookup(): Q.Lookup<JobtypesRow> {
            return Q.getLookup<JobtypesRow>('Masters.Jobtypes');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            JobCategory = "JobCategory",
            Name = "Name",
            Rate = "Rate",
            StandardTiming = "StandardTiming",
            IsInspectionList = "IsInspectionList",
            JobCategoryName = "JobCategoryName"
        }
    }
}
