
namespace CloudGarage.Cash/Bank {
    export interface CashadjustmentRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: number;
        IsAppove?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
    }

    export namespace CashadjustmentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VNo';
        export const localTextPrefix = 'Cash/Bank.Cashadjustment';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const VNo;
            export declare const Vtype;
            export declare const VDate;
            export declare const CoaId;
            export declare const Coa;
            export declare const Narration;
            export declare const Debit;
            export declare const Credit;
            export declare const IsPosted;
            export declare const IsAppove;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const CoaHeadCode;
            export declare const CoaHeadName;
            export declare const CoaParentHead;
            export declare const CoaPHeadName;
            export declare const CoaHeadLevel;
            export declare const CoaHeadType;
            export declare const CoaIsTransaction;
            export declare const CoaIsGl;
            export declare const CoaIsBudget;
            export declare const CoaIsDepreciation;
            export declare const CoaCustomerId;
            export declare const CoaSupplierId;
            export declare const CoaDepreciationRate;
        }

        [
            'Id',
            'VNo',
            'Vtype',
            'VDate',
            'CoaId',
            'Coa',
            'Narration',
            'Debit',
            'Credit',
            'IsPosted',
            'IsAppove',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'CoaHeadCode',
            'CoaHeadName',
            'CoaParentHead',
            'CoaPHeadName',
            'CoaHeadLevel',
            'CoaHeadType',
            'CoaIsTransaction',
            'CoaIsGl',
            'CoaIsBudget',
            'CoaIsDepreciation',
            'CoaCustomerId',
            'CoaSupplierId',
            'CoaDepreciationRate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}