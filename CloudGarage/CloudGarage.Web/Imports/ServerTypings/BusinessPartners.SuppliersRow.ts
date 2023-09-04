namespace CloudGarage.BusinessPartners {
    export interface SuppliersRow {
        Id?: number;
        CompanyName?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        SupplierGroupId?: number;
        IsActive?: boolean;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        SupplierGroupName?: string;
        SupplierGroupDescription?: string;
        SupplierPayable?: number;
        SupplierPaid?: number;
        SupplierBalance?: number;
    }

    export namespace SuppliersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'BusinessPartners.Suppliers';
        export const lookupKey = 'BusinessPartners.Suppliers';

        export function getLookup(): Q.Lookup<SuppliersRow> {
            return Q.getLookup<SuppliersRow>('BusinessPartners.Suppliers');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            SupplierGroupId = "SupplierGroupId",
            IsActive = "IsActive",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            SupplierGroupName = "SupplierGroupName",
            SupplierGroupDescription = "SupplierGroupDescription",
            SupplierPayable = "SupplierPayable",
            SupplierPaid = "SupplierPaid",
            SupplierBalance = "SupplierBalance"
        }
    }
}
