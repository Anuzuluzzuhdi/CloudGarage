namespace CloudGarage.Reports {
    export interface DailyclosingRow {
        Id?: number;
        LastDayClosing?: number;
        CashIn?: number;
        CashOut?: number;
        Date?: string;
        Amount?: number;
        Adjustment?: number;
        Status?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        BranchId?: number;
        LastClosingAmount?: number;
        TodayCashIn?: number;
        TodayCashOut?: number;
        LastClosingDate?: string;
    }

    export namespace DailyclosingRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Reports.Dailyclosing';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            LastDayClosing = "LastDayClosing",
            CashIn = "CashIn",
            CashOut = "CashOut",
            Date = "Date",
            Amount = "Amount",
            Adjustment = "Adjustment",
            Status = "Status",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            BranchId = "BranchId",
            LastClosingAmount = "LastClosingAmount",
            TodayCashIn = "TodayCashIn",
            TodayCashOut = "TodayCashOut",
            LastClosingDate = "LastClosingDate"
        }
    }
}
