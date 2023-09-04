namespace CloudGarage.Masters {
    export interface CustomergroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }

    export namespace CustomergroupsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Customergroups';
        export const lookupKey = 'Masters.CustomerGroups';

        export function getLookup(): Q.Lookup<CustomergroupsRow> {
            return Q.getLookup<CustomergroupsRow>('Masters.CustomerGroups');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
