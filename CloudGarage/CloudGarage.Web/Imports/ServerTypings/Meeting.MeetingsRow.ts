namespace CloudGarage.Meeting {
    export interface MeetingsRow {
        Id?: number;
        MeetingName?: string;
        MeetingType?: number;
        StartDate?: string;
        EndDate?: string;
        Department?: number;
        Location?: number;
        OrganizedBy?: number;
        Reporter?: number;
    }

    export namespace MeetingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'MeetingName';
        export const localTextPrefix = 'Meeting.Meetings';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            MeetingName = "MeetingName",
            MeetingType = "MeetingType",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Department = "Department",
            Location = "Location",
            OrganizedBy = "OrganizedBy",
            Reporter = "Reporter"
        }
    }
}
