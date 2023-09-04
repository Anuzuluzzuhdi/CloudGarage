namespace CloudGarage.Meeting {
    export interface MeetingdecisionrelevantRow {
        DecisionRelevantId?: number;
        DecisionId?: number;
        ContactId?: number;
        DecisionMeetingId?: number;
        DecisionAgendaId?: number;
        DecisionDescription?: number[];
        DecisionDecisionNumber?: number;
        DecisionResponsibleContactId?: number;
        DecisionDueDate?: string;
        DecisionResolutionStatus?: number;
        DecisionImages?: number[];
        DecisionAttachments?: number[];
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }

    export namespace MeetingdecisionrelevantRow {
        export const idProperty = 'DecisionRelevantId';
        export const localTextPrefix = 'Meeting.Meetingdecisionrelevant';
        export const lookupKey = 'Meeting.Meetingdecisionrelevant';

        export function getLookup(): Q.Lookup<MeetingdecisionrelevantRow> {
            return Q.getLookup<MeetingdecisionrelevantRow>('Meeting.Meetingdecisionrelevant');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DecisionRelevantId = "DecisionRelevantId",
            DecisionId = "DecisionId",
            ContactId = "ContactId",
            DecisionMeetingId = "DecisionMeetingId",
            DecisionAgendaId = "DecisionAgendaId",
            DecisionDescription = "DecisionDescription",
            DecisionDecisionNumber = "DecisionDecisionNumber",
            DecisionResponsibleContactId = "DecisionResponsibleContactId",
            DecisionDueDate = "DecisionDueDate",
            DecisionResolutionStatus = "DecisionResolutionStatus",
            DecisionImages = "DecisionImages",
            DecisionAttachments = "DecisionAttachments",
            ContactTitle = "ContactTitle",
            ContactFirstName = "ContactFirstName",
            ContactLastName = "ContactLastName",
            ContactEmail = "ContactEmail",
            ContactIdentityNo = "ContactIdentityNo",
            ContactUserId = "ContactUserId"
        }
    }
}
