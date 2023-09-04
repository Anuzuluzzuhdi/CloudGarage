namespace CloudGarage.Masters {
    export interface ColortypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace ColortypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Colortypes';
        export const lookupKey = 'Masters.Colortypes';

        export function getLookup(): Q.Lookup<ColortypesRow> {
            return Q.getLookup<ColortypesRow>('Masters.Colortypes');
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
