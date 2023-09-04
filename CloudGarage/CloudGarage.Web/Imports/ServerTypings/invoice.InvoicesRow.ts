namespace CloudGarage.invoice {
    export interface InvoicesRow {
        Id?: number;
        CustomerId?: number;
        Jobcard?: number;
        Vehicle?: number;
        Date?: string;
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
        PaymentAccount?: number;
        HeadCodeName?: string;
        VNo?: number;
        ScheduleDatetime?: string;
        DeliveryDatetime?: string;
        BranchesId?: number;
        BranchName?: string;
        LineItems?: InvoiceitemsRow[];
        Jobs?: InvoicejobitemsRow[];
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
        JobcardCustomer?: number;
        JobcardWorkOrderNo?: string;
        JobcardAddress?: string;
        JobcardVehicle?: number;
        JobcardPhone?: string;
        JobcardReference?: string;
        JobcardMobile?: string;
        JobcardScheduleDatetime?: string;
        JobcardWebsite?: string;
        JobcardDeliveryDatetime?: string;
        JobcardDetails?: string;
        VehicleCustomerId?: number;
        VehicleVehicleRegistration?: string;
        VehicleYear?: number;
        VehicleSeats?: number;
        VehicleMake?: number;
        VehicleCcRating?: string;
        VehicleModel?: number;
        VehicleFuelType?: number;
        VehicleColor?: number;
        VehicleAssemblyType?: number;
        VehicleSecondColor?: number;
        VehicleCountryOfOrigin?: number;
        VehicleSubModel?: string;
        VehicleGrossVehicleMass?: number;
        VehicleBodyStyle?: string;
        VehicleTareWeight?: string;
        VehicleAxles?: string;
        VehicleWheelbase?: string;
        VehicleEngineNo?: string;
        VehicleFrontAxleGroupRating?: string;
        VehicleVehicleType?: number;
        VehicleRearAxleGroupRating?: string;
        VehicleBrand?: number;
        NoTax?: boolean;
    }

    export namespace InvoicesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'HeadCodeName';
        export const localTextPrefix = 'invoice.Invoices';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Jobcard = "Jobcard",
            Vehicle = "Vehicle",
            Date = "Date",
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
            PaymentAccount = "PaymentAccount",
            HeadCodeName = "HeadCodeName",
            VNo = "VNo",
            ScheduleDatetime = "ScheduleDatetime",
            DeliveryDatetime = "DeliveryDatetime",
            BranchesId = "BranchesId",
            BranchName = "BranchName",
            LineItems = "LineItems",
            Jobs = "Jobs",
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
            JobcardCustomer = "JobcardCustomer",
            JobcardWorkOrderNo = "JobcardWorkOrderNo",
            JobcardAddress = "JobcardAddress",
            JobcardVehicle = "JobcardVehicle",
            JobcardPhone = "JobcardPhone",
            JobcardReference = "JobcardReference",
            JobcardMobile = "JobcardMobile",
            JobcardScheduleDatetime = "JobcardScheduleDatetime",
            JobcardWebsite = "JobcardWebsite",
            JobcardDeliveryDatetime = "JobcardDeliveryDatetime",
            JobcardDetails = "JobcardDetails",
            VehicleCustomerId = "VehicleCustomerId",
            VehicleVehicleRegistration = "VehicleVehicleRegistration",
            VehicleYear = "VehicleYear",
            VehicleSeats = "VehicleSeats",
            VehicleMake = "VehicleMake",
            VehicleCcRating = "VehicleCcRating",
            VehicleModel = "VehicleModel",
            VehicleFuelType = "VehicleFuelType",
            VehicleColor = "VehicleColor",
            VehicleAssemblyType = "VehicleAssemblyType",
            VehicleSecondColor = "VehicleSecondColor",
            VehicleCountryOfOrigin = "VehicleCountryOfOrigin",
            VehicleSubModel = "VehicleSubModel",
            VehicleGrossVehicleMass = "VehicleGrossVehicleMass",
            VehicleBodyStyle = "VehicleBodyStyle",
            VehicleTareWeight = "VehicleTareWeight",
            VehicleAxles = "VehicleAxles",
            VehicleWheelbase = "VehicleWheelbase",
            VehicleEngineNo = "VehicleEngineNo",
            VehicleFrontAxleGroupRating = "VehicleFrontAxleGroupRating",
            VehicleVehicleType = "VehicleVehicleType",
            VehicleRearAxleGroupRating = "VehicleRearAxleGroupRating",
            VehicleBrand = "VehicleBrand",
            NoTax = "NoTax"
        }
    }
}
