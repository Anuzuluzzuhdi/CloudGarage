namespace CloudGarage.Sales {
    export interface SalesRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        PaymentAccount?: number;
        BranchesId?: number;
        In?: string;
        InBy?: number;
        Up?: string;
        UpBy?: number;
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
        LineItems?: SaledetailsRow[];
        VNo?: number;
        NoTax?: number;
        BranchName?: string;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerCustomerGroupId?: number;
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

    export namespace SalesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Date';
        export const localTextPrefix = 'Sales.Sales';
        export const lookupKey = 'Sales.Sales';

        export function getLookup(): Q.Lookup<SalesRow> {
            return Q.getLookup<SalesRow>('Sales.Sales');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            BranchesId = "BranchesId",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
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
            LineItems = "LineItems",
            VNo = "VNo",
            NoTax = "NoTax",
            BranchName = "BranchName",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerCustomerGroupId = "CustomerCustomerGroupId",
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
