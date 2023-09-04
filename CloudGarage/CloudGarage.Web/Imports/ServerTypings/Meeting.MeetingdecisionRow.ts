namespace CloudGarage.Meeting {
    export interface MeetingdecisionRow {
        DecisionId?: number;
        MeetingId?: number;
        AgendaId?: number;
        Description?: number[];
        DecisionNumber?: number;
        ResponsibleContactId?: number;
        DueDate?: string;
        ResolutionStatus?: number;
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
        AgendaMeetingId?: number;
        AgendaAgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: number[];
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: number[];
        AgendaAttachments?: number[];
        DecisionNumberName?: string;
        ResponsibleContactTitle?: string;
        ResponsibleContactFirstName?: string;
        ResponsibleContactLastName?: string;
        ResponsibleContactEmail?: string;
        ResponsibleContactIdentityNo?: string;
        ResponsibleContactUserId?: number;
    }

    export namespace MeetingdecisionRow {
        export const idProperty = 'DecisionId';
        export const localTextPrefix = 'Meeting.Meetingdecision';
        export const lookupKey = 'Meeting.Meetingdecision';

        export function getLookup(): Q.Lookup<MeetingdecisionRow> {
            return Q.getLookup<MeetingdecisionRow>('Meeting.Meetingdecision');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DecisionId = "DecisionId",
            MeetingId = "MeetingId",
            AgendaId = "AgendaId",
            Description = "Description",
            DecisionNumber = "DecisionNumber",
            ResponsibleContactId = "ResponsibleContactId",
            DueDate = "DueDate",
            ResolutionStatus = "ResolutionStatus",
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
            AgendaMeetingId = "AgendaMeetingId",
            AgendaAgendaNumber = "AgendaAgendaNumber",
            AgendaTitle = "AgendaTitle",
            AgendaDescription = "AgendaDescription",
            AgendaAgendaTypeId = "AgendaAgendaTypeId",
            AgendaRequestedByContactId = "AgendaRequestedByContactId",
            AgendaImages = "AgendaImages",
            AgendaAttachments = "AgendaAttachments",
            DecisionNumberName = "DecisionNumberName",
            ResponsibleContactTitle = "ResponsibleContactTitle",
            ResponsibleContactFirstName = "ResponsibleContactFirstName",
            ResponsibleContactLastName = "ResponsibleContactLastName",
            ResponsibleContactEmail = "ResponsibleContactEmail",
            ResponsibleContactIdentityNo = "ResponsibleContactIdentityNo",
            ResponsibleContactUserId = "ResponsibleContactUserId"
        }
    }
}
