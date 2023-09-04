namespace CloudGarage.Masters {
    export interface CompaniesRow {
        Id?: number;
        CompanyName?: string;
        CompanyEmail?: string;
        Address?: string;
        Phone?: string;
        CurrencyId?: number;
        VatPercentage?: number;
        Logo?: string;
        SaleLogo?: string;
        Favicon?: string;
        CurrencyPosition?: CurrencyPositionKind;
        FooterText?: string;
        CurrencyCurrencyName?: string;
        CurrencyCurrencySymbol?: string;
    }

    export namespace CompaniesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Masters.Companies';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CompanyEmail = "CompanyEmail",
            Address = "Address",
            Phone = "Phone",
            CurrencyId = "CurrencyId",
            VatPercentage = "VatPercentage",
            Logo = "Logo",
            SaleLogo = "SaleLogo",
            Favicon = "Favicon",
            CurrencyPosition = "CurrencyPosition",
            FooterText = "FooterText",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyCurrencySymbol = "CurrencyCurrencySymbol"
        }
    }
}
