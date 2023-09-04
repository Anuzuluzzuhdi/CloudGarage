namespace CloudGarage.Inspections {
    export interface InspectionjobtypesRow {
        Id?: number;
        InspectionId?: number;
        JobType?: number;
        InspectionJobCategory?: number;
        InspectionJobType?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: number;
    }

    export namespace InspectionjobtypesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inspections.Inspectionjobtypes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            InspectionId = "InspectionId",
            JobType = "JobType",
            InspectionJobCategory = "InspectionJobCategory",
            InspectionJobType = "InspectionJobType",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList"
        }
    }
}
