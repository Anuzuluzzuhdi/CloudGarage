namespace CloudGarage.Meeting {
    export interface MeetingagendarelevantRow {
        AgendaRelevantId?: number;
        AgendaId?: number;
        ContactId?: number;
        AgendaMeetingId?: number;
        AgendaAgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: number[];
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: number[];
        AgendaAttachments?: number[];
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }

    export namespace MeetingagendarelevantRow {
        export const idProperty = 'AgendaRelevantId';
        export const localTextPrefix = 'Meeting.Meetingagendarelevant';
        export const lookupKey = 'Meeting.Meetingagendarelevant';

        export function getLookup(): Q.Lookup<MeetingagendarelevantRow> {
            return Q.getLookup<MeetingagendarelevantRow>('Meeting.Meetingagendarelevant');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AgendaRelevantId = "AgendaRelevantId",
            AgendaId = "AgendaId",
            ContactId = "ContactId",
            AgendaMeetingId = "AgendaMeetingId",
            AgendaAgendaNumber = "AgendaAgendaNumber",
            AgendaTitle = "AgendaTitle",
            AgendaDescription = "AgendaDescription",
            AgendaAgendaTypeId = "AgendaAgendaTypeId",
            AgendaRequestedByContactId = "AgendaRequestedByContactId",
            AgendaImages = "AgendaImages",
            AgendaAttachments = "AgendaAttachments",
            ContactTitle = "ContactTitle",
            ContactFirstName = "ContactFirstName",
            ContactLastName = "ContactLastName",
            ContactEmail = "ContactEmail",
            ContactIdentityNo = "ContactIdentityNo",
            ContactUserId = "ContactUserId"
        }
    }
}
