namespace CloudGarage.CashBank {
    export interface ExpensesRow {
        Id?: number;
        ExpenseTypeId?: number;
        BranchesId?: number;
        Date?: string;
        PaymentAccount?: number;
        Amount?: number;
        VNo?: number;
        HeadCodeName?: string;
        In?: string;
        InBy?: number;
        Up?: string;
        UpBy?: number;
        ExpenseTypeType?: string;
        BranchName?: string;
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
        export const nameProperty = 'HeadCodeName';
        export const localTextPrefix = 'CashBank.Expenses';
        export const lookupKey = 'CashBank.Expenses';

        export function getLookup(): Q.Lookup<ExpensesRow> {
            return Q.getLookup<ExpensesRow>('CashBank.Expenses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ExpenseTypeId = "ExpenseTypeId",
            BranchesId = "BranchesId",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Amount = "Amount",
            VNo = "VNo",
            HeadCodeName = "HeadCodeName",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            ExpenseTypeType = "ExpenseTypeType",
            BranchName = "BranchName",
            PaymentAccountHeadCode = "PaymentAccountHeadCode",
            PaymentAccountHeadName = "PaymentAccountHeadName",
            PaymentAccountParentHead = "PaymentAccountParentHead",
            PaymentAccountPHeadName = "PaymentAccountPHeadName",
            PaymentAccountHeadLevel = "PaymentAccountHeadLevel",
            PaymentAccountHeadType = "PaymentAccountHeadType",
            PaymentAccountIsTransaction = "PaymentAccountIsTransaction",
            PaymentAccountIsGl = "PaymentAccountIsGl",
            PaymentAccountIsBudget = "PaymentAccountIsBudget",
            PaymentAccountIsDepreciation = "PaymentAccountIsDepreciation",
            PaymentAccountCustomerId = "PaymentAccountCustomerId",
            PaymentAccountSupplierId = "PaymentAccountSupplierId",
            PaymentAccountDepreciationRate = "PaymentAccountDepreciationRate"
        }
    }
}
