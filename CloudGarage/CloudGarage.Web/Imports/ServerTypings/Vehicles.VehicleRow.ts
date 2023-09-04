namespace CloudGarage.Vehicles {
    export interface VehicleRow {
        Id?: number;
        CustomerId?: number;
        VehicleRegistration?: string;
        Year?: number;
        Seats?: number;
        Make?: number;
        CcRating?: string;
        Model?: number;
        FuelType?: number;
        Color?: number;
        AssemblyType?: number;
        SecondColor?: number;
        SecondColorName?: string;
        CountryOfOrigin?: number;
        SubModel?: string;
        GrossVehicleMass?: number;
        BodyStyle?: string;
        TareWeight?: string;
        Axles?: string;
        Wheelbase?: string;
        EngineNo?: string;
        FrontAxleGroupRating?: string;
        VehicleType?: number;
        RearAxleGroupRating?: string;
        Brand?: number;
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
        MakeName?: string;
        ModelName?: string;
        FuelTypeName?: string;
        ColorName?: string;
        AssemblyTypeName?: string;
        CountryOfOriginName?: string;
        VehicleTypeName?: string;
        BrandName?: string;
        BrandDescription?: string;
        NoteList?: Note.NoteRow[];
    }

    export namespace VehicleRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VehicleRegistration';
        export const localTextPrefix = 'Vehicles.Vehicle';
        export const lookupKey = 'CloudGarage.Vehicles';

        export function getLookup(): Q.Lookup<VehicleRow> {
            return Q.getLookup<VehicleRow>('CloudGarage.Vehicles');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            VehicleRegistration = "VehicleRegistration",
            Year = "Year",
            Seats = "Seats",
            Make = "Make",
            CcRating = "CcRating",
            Model = "Model",
            FuelType = "FuelType",
            Color = "Color",
            AssemblyType = "AssemblyType",
            SecondColor = "SecondColor",
            SecondColorName = "SecondColorName",
            CountryOfOrigin = "CountryOfOrigin",
            SubModel = "SubModel",
            GrossVehicleMass = "GrossVehicleMass",
            BodyStyle = "BodyStyle",
            TareWeight = "TareWeight",
            Axles = "Axles",
            Wheelbase = "Wheelbase",
            EngineNo = "EngineNo",
            FrontAxleGroupRating = "FrontAxleGroupRating",
            VehicleType = "VehicleType",
            RearAxleGroupRating = "RearAxleGroupRating",
            Brand = "Brand",
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
            MakeName = "MakeName",
            ModelName = "ModelName",
            FuelTypeName = "FuelTypeName",
            ColorName = "ColorName",
            AssemblyTypeName = "AssemblyTypeName",
            CountryOfOriginName = "CountryOfOriginName",
            VehicleTypeName = "VehicleTypeName",
            BrandName = "BrandName",
            BrandDescription = "BrandDescription",
            NoteList = "NoteList"
        }
    }
}
