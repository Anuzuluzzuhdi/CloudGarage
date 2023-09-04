namespace CloudGarage.HumanResource {
    export interface AttendanceRow {
        Id?: number;
        EmployeeId?: number;
        CheckIn?: string;
        CheckOut?: string;
        StayTime?: string;
        EmployeeFirstName?: string;
        EmployeeLastName?: string;
        EmployeeDesignationId?: number;
        EmployeeDepartmentId?: number;
        EmployeeRateType?: number;
        EmployeePhone?: string;
        EmployeeHoureRateSalary?: number;
        EmployeeEmail?: string;
        EmployeeBloodGroup?: number;
        EmployeePicture?: string;
        EmployeeCountryId?: number;
        EmployeeStateId?: number;
        EmployeeCityId?: number;
        EmployeeZipCode?: string;
        EmployeeAddress?: string;
        EmployeeUserId?: number;
        EmployeeRegionId?: number;
        EmployeeTerritoryId?: number;
        EmployeeFullName?: string;
    }

    export namespace AttendanceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeFullName';
        export const localTextPrefix = 'HumanResource.Attendance';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            CheckIn = "CheckIn",
            CheckOut = "CheckOut",
            StayTime = "StayTime",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeLastName = "EmployeeLastName",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeDepartmentId = "EmployeeDepartmentId",
            EmployeeRateType = "EmployeeRateType",
            EmployeePhone = "EmployeePhone",
            EmployeeHoureRateSalary = "EmployeeHoureRateSalary",
            EmployeeEmail = "EmployeeEmail",
            EmployeeBloodGroup = "EmployeeBloodGroup",
            EmployeePicture = "EmployeePicture",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeStateId = "EmployeeStateId",
            EmployeeCityId = "EmployeeCityId",
            EmployeeZipCode = "EmployeeZipCode",
            EmployeeAddress = "EmployeeAddress",
            EmployeeUserId = "EmployeeUserId",
            EmployeeRegionId = "EmployeeRegionId",
            EmployeeTerritoryId = "EmployeeTerritoryId",
            EmployeeFullName = "EmployeeFullName"
        }
    }
}
