namespace CloudGarage.Meeting {
    export interface MeetingattendeeRow {
        AttendeeId?: number;
        MeetingId?: number;
        ContactId?: number;
        AttendeeType?: number;
        AttendanceStatus?: number;
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }

    export namespace MeetingattendeeRow {
        export const idProperty = 'AttendeeId';
        export const localTextPrefix = 'Meeting.Meetingattendee';
        export const lookupKey = 'Meeting.Meetingattendee';

        export function getLookup(): Q.Lookup<MeetingattendeeRow> {
            return Q.getLookup<MeetingattendeeRow>('Meeting.Meetingattendee');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AttendeeId = "AttendeeId",
            MeetingId = "MeetingId",
            ContactId = "ContactId",
            AttendeeType = "AttendeeType",
            AttendanceStatus = "AttendanceStatus",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingNumber = "MeetingMeetingNumber",
            MeetingMeetingGuid = "MeetingMeetingGuid",
            MeetingMeetingTypeId = "MeetingMeetingTypeId",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingLocationId = "MeetingLocationId",
            MeetingUnitId = "MeetingUnitId",
            MeetingOrganizerContactId = "MeetingOrganizerContactId",
            MeetingReporterContactId = "MeetingReporterContactId",
            MeetingInsertUserId = "MeetingInsertUserId",
            MeetingInsertDate = "MeetingInsertDate",
            MeetingUpdateUserId = "MeetingUpdateUserId",
            MeetingUpdateDate = "MeetingUpdateDate",
            ContactTitle = "ContactTitle",
            ContactFirstName = "ContactFirstName",
            ContactLastName = "ContactLastName",
            ContactEmail = "ContactEmail",
            ContactIdentityNo = "ContactIdentityNo",
            ContactUserId = "ContactUserId"
        }
    }
}
