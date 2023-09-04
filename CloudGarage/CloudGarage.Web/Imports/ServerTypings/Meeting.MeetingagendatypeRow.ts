namespace CloudGarage.Meeting {
    export interface MeetingagendatypeRow {
        AgendaTypeId?: number;
        Name?: string;
    }

    export namespace MeetingagendatypeRow {
        export const idProperty = 'AgendaTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Meeting.Meetingagendatype';
        export const lookupKey = 'Meeting.Meetingagendatype';

        export function getLookup(): Q.Lookup<MeetingagendatypeRow> {
            return Q.getLookup<MeetingagendatypeRow>('Meeting.Meetingagendatype');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AgendaTypeId = "AgendaTypeId",
            Name = "Name"
        }
    }
}
