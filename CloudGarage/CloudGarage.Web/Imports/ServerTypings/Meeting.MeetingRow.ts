namespace CloudGarage.Meeting {
    export interface MeetingRow {
        MeetingId?: number;
        MeetingName?: string;
        MeetingNumber?: string;
        MeetingGuid?: string;
        MeetingTypeId?: number;
        StartDate?: string;
        EndDate?: string;
        LocationId?: number;
        UnitId?: number;
        OrganizerContactId?: number;
        ReporterContactId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        MeetingTypeName?: string;
        LocationName?: string;
        LocationAddress?: string;
        LocationLatitude?: number;
        LocationLongitude?: number;
        UnitName?: string;
        UnitParentUnitId?: number;
        OrganizerContactTitle?: string;
        OrganizerContactFirstName?: string;
        OrganizerContactLastName?: string;
        OrganizerContactEmail?: string;
        OrganizerContactIdentityNo?: string;
        OrganizerContactUserId?: number;
        ReporterContactTitle?: string;
        ReporterContactFirstName?: string;
        ReporterContactLastName?: string;
        ReporterContactEmail?: string;
        ReporterContactIdentityNo?: string;
        ReporterContactUserId?: number;
    }

    export namespace MeetingRow {
        export const idProperty = 'MeetingId';
        export const nameProperty = 'MeetingName';
        export const localTextPrefix = 'Meeting.Meeting';
        export const lookupKey = 'Meeting.Meeting';

        export function getLookup(): Q.Lookup<MeetingRow> {
            return Q.getLookup<MeetingRow>('Meeting.Meeting');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MeetingId = "MeetingId",
            MeetingName = "MeetingName",
            MeetingNumber = "MeetingNumber",
            MeetingGuid = "MeetingGuid",
            MeetingTypeId = "MeetingTypeId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            LocationId = "LocationId",
            UnitId = "UnitId",
            OrganizerContactId = "OrganizerContactId",
            ReporterContactId = "ReporterContactId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            MeetingTypeName = "MeetingTypeName",
            LocationName = "LocationName",
            LocationAddress = "LocationAddress",
            LocationLatitude = "LocationLatitude",
            LocationLongitude = "LocationLongitude",
            UnitName = "UnitName",
            UnitParentUnitId = "UnitParentUnitId",
            OrganizerContactTitle = "OrganizerContactTitle",
            OrganizerContactFirstName = "OrganizerContactFirstName",
            OrganizerContactLastName = "OrganizerContactLastName",
            OrganizerContactEmail = "OrganizerContactEmail",
            OrganizerContactIdentityNo = "OrganizerContactIdentityNo",
            OrganizerContactUserId = "OrganizerContactUserId",
            ReporterContactTitle = "ReporterContactTitle",
            ReporterContactFirstName = "ReporterContactFirstName",
            ReporterContactLastName = "ReporterContactLastName",
            ReporterContactEmail = "ReporterContactEmail",
            ReporterContactIdentityNo = "ReporterContactIdentityNo",
            ReporterContactUserId = "ReporterContactUserId"
        }
    }
}
