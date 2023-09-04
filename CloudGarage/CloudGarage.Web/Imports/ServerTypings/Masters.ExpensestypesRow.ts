namespace CloudGarage.Masters {
    export interface ExpensestypesRow {
        Id?: number;
        Type?: string;
    }

    export namespace ExpensestypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Type';
        export const localTextPrefix = 'Masters.Expensestypes';
        export const lookupKey = 'Masters.Expensestypes';

        export function getLookup(): Q.Lookup<ExpensestypesRow> {
            return Q.getLookup<ExpensestypesRow>('Masters.Expensestypes');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type"
        }
    }
}
