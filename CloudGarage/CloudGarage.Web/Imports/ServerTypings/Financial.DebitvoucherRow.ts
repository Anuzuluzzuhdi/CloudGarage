namespace CloudGarage.Financial {
    export interface DebitvoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        DebitAccountId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsActive?: boolean;
        IsAppove?: boolean;
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

    export namespace DebitvoucherRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VNo';
        export const localTextPrefix = 'Financial.Debitvoucher';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            DebitAccountId = "DebitAccountId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsActive = "IsActive",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate"
        }
    }
}
