namespace CloudGarage.Meeting {
    export interface MeetingagendaRow {
        AgendaId?: number;
        MeetingId?: number;
        AgendaNumber?: number;
        Title?: string;
        Description?: number[];
        AgendaTypeId?: number;
        RequestedByContactId?: number;
        Images?: number[];
        Attachments?: number[];
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
        AgendaTypeName?: string;
        RequestedByContactTitle?: string;
        RequestedByContactFirstName?: string;
        RequestedByContactLastName?: string;
        RequestedByContactEmail?: string;
        RequestedByContactIdentityNo?: string;
        RequestedByContactUserId?: number;
    }

    export namespace MeetingagendaRow {
        export const idProperty = 'AgendaId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Meeting.Meetingagenda';
        export const lookupKey = 'Meeting.Meetingagenda';

        export function getLookup(): Q.Lookup<MeetingagendaRow> {
            return Q.getLookup<MeetingagendaRow>('Meeting.Meetingagenda');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AgendaId = "AgendaId",
            MeetingId = "MeetingId",
            AgendaNumber = "AgendaNumber",
            Title = "Title",
            Description = "Description",
            AgendaTypeId = "AgendaTypeId",
            RequestedByContactId = "RequestedByContactId",
            Images = "Images",
            Attachments = "Attachments",
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
            AgendaTypeName = "AgendaTypeName",
            RequestedByContactTitle = "RequestedByContactTitle",
            RequestedByContactFirstName = "RequestedByContactFirstName",
            RequestedByContactLastName = "RequestedByContactLastName",
            RequestedByContactEmail = "RequestedByContactEmail",
            RequestedByContactIdentityNo = "RequestedByContactIdentityNo",
            RequestedByContactUserId = "RequestedByContactUserId"
        }
    }
}
