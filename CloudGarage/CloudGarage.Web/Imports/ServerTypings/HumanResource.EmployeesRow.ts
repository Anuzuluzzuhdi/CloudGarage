namespace CloudGarage.HumanResource {
    export interface EmployeesRow {
        Id?: number;
        FirstName?: string;
        LastName?: string;
        DesignationId?: number;
        DepartmentId?: number;
        RateType?: RateKind;
        Phone?: string;
        HoureRateSalary?: number;
        Email?: string;
        BloodGroup?: BloodGroupKind;
        Picture?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ZipCode?: string;
        Address?: string;
        UserId?: number;
        RegionId?: number;
        TerritoryId?: number;
        Designation?: string;
        DesignationDescription?: string;
        DesignationParentDesignationId?: number;
        Department?: string;
        DepartmentDescription?: string;
        DepartmentParentDepartmentId?: number;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        TerritoryTerritoryId?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionId?: number;
    }

    export namespace EmployeesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FirstName';
        export const localTextPrefix = 'HumanResource.Employees';
        export const lookupKey = 'HumanResource.Employees';

        export function getLookup(): Q.Lookup<EmployeesRow> {
            return Q.getLookup<EmployeesRow>('HumanResource.Employees');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            FirstName = "FirstName",
            LastName = "LastName",
            DesignationId = "DesignationId",
            DepartmentId = "DepartmentId",
            RateType = "RateType",
            Phone = "Phone",
            HoureRateSalary = "HoureRateSalary",
            Email = "Email",
            BloodGroup = "BloodGroup",
            Picture = "Picture",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ZipCode = "ZipCode",
            Address = "Address",
            UserId = "UserId",
            RegionId = "RegionId",
            TerritoryId = "TerritoryId",
            Designation = "Designation",
            DesignationDescription = "DesignationDescription",
            DesignationParentDesignationId = "DesignationParentDesignationId",
            Department = "Department",
            DepartmentDescription = "DepartmentDescription",
            DepartmentParentDepartmentId = "DepartmentParentDepartmentId",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            TerritoryTerritoryId = "TerritoryTerritoryId",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionId = "TerritoryRegionId"
        }
    }
}
