namespace CloudGarage.Masters {
    export interface CurrenciesRow {
        Id?: number;
        CurrencyName?: string;
        CurrencySymbol?: string;
    }

    export namespace CurrenciesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CurrencyName';
        export const localTextPrefix = 'Masters.Currencies';
        export const lookupKey = 'Masters.Currencies';

        export function getLookup(): Q.Lookup<CurrenciesRow> {
            return Q.getLookup<CurrenciesRow>('Masters.Currencies');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CurrencyName = "CurrencyName",
            CurrencySymbol = "CurrencySymbol"
        }
    }
}
