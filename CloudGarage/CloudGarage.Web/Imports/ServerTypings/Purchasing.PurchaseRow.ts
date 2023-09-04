namespace CloudGarage.Purchasing {
    export interface PurchaseRow {
        Id?: number;
        SupplierId?: number;
        InvoiceNo?: string;
        Date?: string;
        PaymentAccount?: number;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        VNo?: number;
        NoTax?: number;
        BranchName?: string;
        BranchesId?: number;
        In?: string;
        InBy?: number;
        Up?: string;
        UpBy?: number;
        LineItems?: PurchasedetailsRow[];
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierSupplierGroupId?: number;
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

    export namespace PurchaseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Purchasing.Purchase';
        export const lookupKey = 'Purchasing.Purchase';

        export function getLookup(): Q.Lookup<PurchaseRow> {
            return Q.getLookup<PurchaseRow>('Purchasing.Purchase');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            InvoiceNo = "InvoiceNo",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            PaidAmount = "PaidAmount",
            Due = "Due",
            Change = "Change",
            Details = "Details",
            VNo = "VNo",
            NoTax = "NoTax",
            BranchName = "BranchName",
            BranchesId = "BranchesId",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            LineItems = "LineItems",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierSupplierGroupId = "SupplierSupplierGroupId",
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
