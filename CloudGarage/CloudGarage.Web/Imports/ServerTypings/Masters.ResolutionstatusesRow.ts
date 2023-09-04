namespace CloudGarage.Masters {
    export interface ResolutionstatusesRow {
        Id?: number;
        Name?: string;
    }

    export namespace ResolutionstatusesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Resolutionstatuses';
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
