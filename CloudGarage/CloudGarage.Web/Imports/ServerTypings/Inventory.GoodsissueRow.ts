namespace CloudGarage.Inventory {
    export interface GoodsissueRow {
        Id?: number;
        CustomerId?: number;
        SaleId?: number;
        Date?: string;
        TotalQuantity?: number;
        EmployeenId?: number;
        Remarks?: string;
        JournalRemarks?: string;
        Reference?: string;
        SaleInvoice?: string;
        BranchesId?: number;
        BranchName?: string;
        LineItems?: GoodsissuedetailsRow[];
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
        SaleCustomerId?: number;
        SaleDate?: string;
        SalePaymentAccount?: number;
        SaleDiscount?: number;
        SaleTotalDiscount?: number;
        SaleVat?: number;
        SaleTotalTax?: number;
        SaleShippingCost?: number;
        SaleGrandTotal?: number;
        SaleNetTotal?: number;
        SalePaidAmount?: number;
        SaleDue?: number;
        SaleChange?: number;
        SaleDetails?: string;
        SaleVNo?: number;
        SaleNoTax?: number;
        EmployeenFirstName?: string;
        EmployeenLastName?: string;
        EmployeenDesignationId?: number;
        EmployeenDepartmentId?: number;
        EmployeenRateType?: number;
        EmployeenPhone?: string;
        EmployeenHoureRateSalary?: number;
        EmployeenEmail?: string;
        EmployeenBloodGroup?: number;
        EmployeenPicture?: string;
        EmployeenCountryId?: number;
        EmployeenStateId?: number;
        EmployeenCityId?: number;
        EmployeenZipCode?: string;
        EmployeenAddress?: string;
        EmployeenUserId?: number;
        EmployeenRegionId?: number;
        EmployeenTerritoryId?: number;
    }

    export namespace GoodsissueRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Date';
        export const localTextPrefix = 'Inventory.Goodsissue';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            SaleId = "SaleId",
            Date = "Date",
            TotalQuantity = "TotalQuantity",
            EmployeenId = "EmployeenId",
            Remarks = "Remarks",
            JournalRemarks = "JournalRemarks",
            Reference = "Reference",
            SaleInvoice = "SaleInvoice",
            BranchesId = "BranchesId",
            BranchName = "BranchName",
            LineItems = "LineItems",
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
            SaleCustomerId = "SaleCustomerId",
            SaleDate = "SaleDate",
            SalePaymentAccount = "SalePaymentAccount",
            SaleDiscount = "SaleDiscount",
            SaleTotalDiscount = "SaleTotalDiscount",
            SaleVat = "SaleVat",
            SaleTotalTax = "SaleTotalTax",
            SaleShippingCost = "SaleShippingCost",
            SaleGrandTotal = "SaleGrandTotal",
            SaleNetTotal = "SaleNetTotal",
            SalePaidAmount = "SalePaidAmount",
            SaleDue = "SaleDue",
            SaleChange = "SaleChange",
            SaleDetails = "SaleDetails",
            SaleVNo = "SaleVNo",
            SaleNoTax = "SaleNoTax",
            EmployeenFirstName = "EmployeenFirstName",
            EmployeenLastName = "EmployeenLastName",
            EmployeenDesignationId = "EmployeenDesignationId",
            EmployeenDepartmentId = "EmployeenDepartmentId",
            EmployeenRateType = "EmployeenRateType",
            EmployeenPhone = "EmployeenPhone",
            EmployeenHoureRateSalary = "EmployeenHoureRateSalary",
            EmployeenEmail = "EmployeenEmail",
            EmployeenBloodGroup = "EmployeenBloodGroup",
            EmployeenPicture = "EmployeenPicture",
            EmployeenCountryId = "EmployeenCountryId",
            EmployeenStateId = "EmployeenStateId",
            EmployeenCityId = "EmployeenCityId",
            EmployeenZipCode = "EmployeenZipCode",
            EmployeenAddress = "EmployeenAddress",
            EmployeenUserId = "EmployeenUserId",
            EmployeenRegionId = "EmployeenRegionId",
            EmployeenTerritoryId = "EmployeenTerritoryId"
        }
    }
}
