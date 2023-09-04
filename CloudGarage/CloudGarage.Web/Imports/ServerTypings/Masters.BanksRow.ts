namespace CloudGarage.Masters {
    export interface BanksRow {
        Id?: number;
        BankName?: string;
        AcName?: string;
        AcNumber?: string;
        Branch?: string;
        SignaturePicture?: string;
    }

    export namespace BanksRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BankName';
        export const localTextPrefix = 'Masters.Banks';
        export const lookupKey = 'Masters.Banks';

        export function getLookup(): Q.Lookup<BanksRow> {
            return Q.getLookup<BanksRow>('Masters.Banks');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            BankName = "BankName",
            AcName = "AcName",
            AcNumber = "AcNumber",
            Branch = "Branch",
            SignaturePicture = "SignaturePicture"
        }
    }
}
