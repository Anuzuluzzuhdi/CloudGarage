namespace CloudGarage.Masters {
    export interface RegionsRow {
        Id?: number;
        Name?: string;
    }

    export namespace RegionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Regions';
        export const lookupKey = 'Masters.Regions';

        export function getLookup(): Q.Lookup<RegionsRow> {
            return Q.getLookup<RegionsRow>('Masters.Regions');
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
