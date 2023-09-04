
namespace CloudGarage.Cash/Bank {
    export interface ExpensesRow {
        Id?: number;
        ExpenseTypeId?: number;
        Date?: string;
        PaymentAccount?: number;
        Amount?: number;
        VNo?: number;
        ExpenseTypeType?: string;
        PaymentAccountHeadCode?: number;
        PaymentAccountHeadName?: string;
        PaymentAccountParentHead?: number;
        PaymentAccountPHeadName?: string;
        PaymentAccountHeadLevel?: number;
        PaymentAccountHeadType?: string;
        PaymentAccountIsTransaction?: number;
        PaymentAccountIsGl?: number;
        PaymentAccountIsBudget?: number;
        PaymentAccountIsDepreciation?: number;
        PaymentAccountCustomerId?: number;
        PaymentAccountSupplierId?: number;
        PaymentAccountDepreciationRate?: number;
    }

    export namespace ExpensesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Cash/Bank.Expenses';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const ExpenseTypeId;
            export declare const Date;
            export declare const PaymentAccount;
            export declare const Amount;
            export declare const VNo;
            export declare const ExpenseTypeType;
            export declare const PaymentAccountHeadCode;
            export declare const PaymentAccountHeadName;
            export declare const PaymentAccountParentHead;
            export declare const PaymentAccountPHeadName;
            export declare const PaymentAccountHeadLevel;
            export declare const PaymentAccountHeadType;
            export declare const PaymentAccountIsTransaction;
            export declare const PaymentAccountIsGl;
            export declare const PaymentAccountIsBudget;
            export declare const PaymentAccountIsDepreciation;
            export declare const PaymentAccountCustomerId;
            export declare const PaymentAccountSupplierId;
            export declare const PaymentAccountDepreciationRate;
        }

        [
            'Id',
            'ExpenseTypeId',
            'Date',
            'PaymentAccount',
            'Amount',
            'VNo',
            'ExpenseTypeType',
            'PaymentAccountHeadCode',
            'PaymentAccountHeadName',
            'PaymentAccountParentHead',
            'PaymentAccountPHeadName',
            'PaymentAccountHeadLevel',
            'PaymentAccountHeadType',
            'PaymentAccountIsTransaction',
            'PaymentAccountIsGl',
            'PaymentAccountIsBudget',
            'PaymentAccountIsDepreciation',
            'PaymentAccountCustomerId',
            'PaymentAccountSupplierId',
            'PaymentAccountDepreciationRate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}