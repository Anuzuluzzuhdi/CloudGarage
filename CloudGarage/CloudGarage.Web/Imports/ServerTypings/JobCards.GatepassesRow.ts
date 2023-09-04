namespace CloudGarage.JobCards {
    export interface GatepassesRow {
        Id?: number;
        JobCard?: number;
        Customer?: number;
        Vehicle?: number;
        VehicleOutDate?: string;
        BranchName?: string;
        BranchesId?: number;
        JobCardCustomer?: number;
        JobCardWorkOrderNo?: string;
        JobCardAddress?: string;
        JobCardVehicle?: number;
        JobCardPhone?: string;
        JobCardReference?: string;
        JobCardMobile?: string;
        JobCardScheduleDatetime?: string;
        JobCardWebsite?: string;
        JobCardDeliveryDatetime?: string;
        JobCardDetails?: string;
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
    }

    export namespace GatepassesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'JobCards.Gatepasses';
        export const lookupKey = 'JobCards.Gatepasses';

        export function getLookup(): Q.Lookup<GatepassesRow> {
            return Q.getLookup<GatepassesRow>('JobCards.Gatepasses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            JobCard = "JobCard",
            Customer = "Customer",
            Vehicle = "Vehicle",
            VehicleOutDate = "VehicleOutDate",
            BranchName = "BranchName",
            BranchesId = "BranchesId",
            JobCardCustomer = "JobCardCustomer",
            JobCardWorkOrderNo = "JobCardWorkOrderNo",
            JobCardAddress = "JobCardAddress",
            JobCardVehicle = "JobCardVehicle",
            JobCardPhone = "JobCardPhone",
            JobCardReference = "JobCardReference",
            JobCardMobile = "JobCardMobile",
            JobCardScheduleDatetime = "JobCardScheduleDatetime",
            JobCardWebsite = "JobCardWebsite",
            JobCardDeliveryDatetime = "JobCardDeliveryDatetime",
            JobCardDetails = "JobCardDetails",
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
            VehicleBrand = "VehicleBrand"
        }
    }
}
