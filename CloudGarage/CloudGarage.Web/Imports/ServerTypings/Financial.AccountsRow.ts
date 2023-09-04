namespace CloudGarage.Financial {
    export interface AccountsRow {
        Id?: number;
        HeadCode?: number;
        HeadName?: string;
        ParentHead?: number;
        PHeadName?: string;
        HeadLevel?: number;
        HeadType?: string;
        IsTransaction?: number;
        IsGl?: number;
        IsBudget?: number;
        IsOpening?: number;
        IsDepreciation?: number;
        CustomerId?: number;
        SupplierId?: number;
        DepreciationRate?: number;
        ParentHeadHeadCode?: number;
        ParentHeadHeadName?: string;
        ParentHead1?: number;
        ParentHeadPHeadName?: string;
        ParentHeadHeadLevel?: number;
        ParentHeadHeadType?: string;
        ParentHeadIsTransaction?: number;
        ParentHeadIsGl?: number;
        ParentHeadIsBudget?: number;
        ParentHeadIsDepreciation?: number;
        ParentHeadCustomerId?: number;
        ParentHeadSupplierId?: number;
        ParentHeadDepreciationRate?: number;
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
        OpeningBalance?: number;
        Balance?: number;
        HeadCodeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
        BranchId?: number;
        BranchName?: string;
    }

    export namespace AccountsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'HeadCode';
        export const localTextPrefix = 'Financial.Accounts';
        export const lookupKey = 'Cloudgarage.Finansiaklll';

        export function getLookup(): Q.Lookup<AccountsRow> {
            return Q.getLookup<AccountsRow>('Cloudgarage.Finansiaklll');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            HeadCode = "HeadCode",
            HeadName = "HeadName",
            ParentHead = "ParentHead",
            PHeadName = "PHeadName",
            HeadLevel = "HeadLevel",
            HeadType = "HeadType",
            IsTransaction = "IsTransaction",
            IsGl = "IsGl",
            IsBudget = "IsBudget",
            IsOpening = "IsOpening",
            IsDepreciation = "IsDepreciation",
            CustomerId = "CustomerId",
            SupplierId = "SupplierId",
            DepreciationRate = "DepreciationRate",
            ParentHeadHeadCode = "ParentHeadHeadCode",
            ParentHeadHeadName = "ParentHeadHeadName",
            ParentHead1 = "ParentHead1",
            ParentHeadPHeadName = "ParentHeadPHeadName",
            ParentHeadHeadLevel = "ParentHeadHeadLevel",
            ParentHeadHeadType = "ParentHeadHeadType",
            ParentHeadIsTransaction = "ParentHeadIsTransaction",
            ParentHeadIsGl = "ParentHeadIsGl",
            ParentHeadIsBudget = "ParentHeadIsBudget",
            ParentHeadIsDepreciation = "ParentHeadIsDepreciation",
            ParentHeadCustomerId = "ParentHeadCustomerId",
            ParentHeadSupplierId = "ParentHeadSupplierId",
            ParentHeadDepreciationRate = "ParentHeadDepreciationRate",
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
            OpeningBalance = "OpeningBalance",
            Balance = "Balance",
            HeadCodeName = "HeadCodeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive",
            BranchId = "BranchId",
            BranchName = "BranchName"
        }
    }
}
