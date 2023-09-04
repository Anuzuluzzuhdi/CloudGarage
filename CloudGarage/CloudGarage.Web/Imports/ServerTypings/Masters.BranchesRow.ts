namespace CloudGarage.Masters {
    export interface BranchesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Address?: string;
        City?: number;
        State?: number;
        Country?: number;
        Email?: string;
        Phone1?: string;
        Phone2?: string;
        UseBranchAddress?: number;
        VatPercentage?: number;
        Logo?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        StateName?: string;
        StateCountryId?: number;
        CountryName?: string;
    }

    export namespace BranchesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Branches';
        export const lookupKey = 'CloudGarage.Masters';

        export function getLookup(): Q.Lookup<BranchesRow> {
            return Q.getLookup<BranchesRow>('CloudGarage.Masters');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Address = "Address",
            City = "City",
            State = "State",
            Country = "Country",
            Email = "Email",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            UseBranchAddress = "UseBranchAddress",
            VatPercentage = "VatPercentage",
            Logo = "Logo",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CountryName = "CountryName"
        }
    }
}
