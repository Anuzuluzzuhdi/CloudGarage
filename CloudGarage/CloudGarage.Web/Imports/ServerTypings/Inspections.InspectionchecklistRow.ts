namespace CloudGarage.Inspections {
    export interface InspectionchecklistRow {
        Id?: number;
        JobCategory?: number;
        JobType?: number;
        JobCategoryName?: string;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: number;
        JobTypes?: number[];
    }

    export namespace InspectionchecklistRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inspections.Inspectionchecklist';
        export const lookupKey = 'Inspections.Inspectionchecklist';

        export function getLookup(): Q.Lookup<InspectionchecklistRow> {
            return Q.getLookup<InspectionchecklistRow>('Inspections.Inspectionchecklist');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            JobCategory = "JobCategory",
            JobType = "JobType",
            JobCategoryName = "JobCategoryName",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            JobTypes = "JobTypes"
        }
    }
}
