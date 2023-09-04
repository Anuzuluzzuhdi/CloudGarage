namespace CloudGarage.Masters {
    export interface FueltypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace FueltypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Fueltypes';
        export const lookupKey = 'Masters.Fueltypes';

        export function getLookup(): Q.Lookup<FueltypesRow> {
            return Q.getLookup<FueltypesRow>('Masters.Fueltypes');
        }
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
