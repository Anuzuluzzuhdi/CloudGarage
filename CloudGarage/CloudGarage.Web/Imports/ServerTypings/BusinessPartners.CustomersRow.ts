namespace CloudGarage.BusinessPartners {
    export interface CustomersRow {
        Id?: number;
        Name?: string;
        ContactName?: string;
        ContactTitle?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        CustomerGroupId?: number;
        IsActive?: number;
        NoteList?: Note.NoteRow[];
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        CustomerGroupName?: string;
        CustomerGroupDescription?: string;
        CustomerReceivable?: number;
        CustomerReceived?: number;
        CustomerBalance?: number;
    }

    export namespace CustomersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'BusinessPartners.Customers';
        export const lookupKey = 'BusinessPartners.Customers';

        export function getLookup(): Q.Lookup<CustomersRow> {
            return Q.getLookup<CustomersRow>('BusinessPartners.Customers');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            CustomerGroupId = "CustomerGroupId",
            IsActive = "IsActive",
            NoteList = "NoteList",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            CustomerGroupName = "CustomerGroupName",
            CustomerGroupDescription = "CustomerGroupDescription",
            CustomerReceivable = "CustomerReceivable",
            CustomerReceived = "CustomerReceived",
            CustomerBalance = "CustomerBalance"
        }
    }
}
