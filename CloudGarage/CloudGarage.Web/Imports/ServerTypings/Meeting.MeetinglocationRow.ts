namespace CloudGarage.Meeting {
    export interface MeetinglocationRow {
        LocationId?: number;
        Name?: string;
        Address?: string;
        Latitude?: number;
        Longitude?: number;
    }

    export namespace MeetinglocationRow {
        export const idProperty = 'LocationId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Meeting.Meetinglocation';
        export const lookupKey = 'Meeting.Meetinglocation';

        export function getLookup(): Q.Lookup<MeetinglocationRow> {
            return Q.getLookup<MeetinglocationRow>('Meeting.Meetinglocation');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LocationId = "LocationId",
            Name = "Name",
            Address = "Address",
            Latitude = "Latitude",
            Longitude = "Longitude"
        }
    }
}
