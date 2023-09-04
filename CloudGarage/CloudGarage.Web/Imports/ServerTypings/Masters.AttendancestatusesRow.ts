namespace CloudGarage.Masters {
    export interface AttendancestatusesRow {
        Id?: number;
        Name?: string;
    }

    export namespace AttendancestatusesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Attendancestatuses';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
