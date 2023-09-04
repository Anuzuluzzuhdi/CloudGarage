namespace CloudGarage.Inventory {
    export interface TransfersRow {
        Id?: number;
        VNo?: number;
        FromBranchId?: number;
        ToBranchId?: number;
        FromWarehouseId?: number;
        ToWarehouseId?: number;
        Status?: StatusKindTf;
        TotalQuantity?: number;
        LineItems?: TransferdetailsRow[];
        FromBranchName?: string;
        FromBranchDescription?: string;
        FromBranchAddress?: string;
        FromBranchCity?: number;
        FromBranchState?: number;
        FromBranchCountry?: number;
        FromBranchEmail?: string;
        FromBranchPhone1?: string;
        FromBranchPhone2?: string;
        FromBranchUseBranchAddress?: number;
        FromBranchVatPercentage?: number;
        FromBranchLogo?: string;
        FromBranchInsertUserId?: number;
        FromBranchInsertDate?: string;
        FromBranchUpdateUserId?: number;
        FromBranchUpdateDate?: string;
        FromBranchDeleteUserId?: number;
        FromBranchDeleteDate?: string;
        FromBranchIsActive?: number;
        ToBranchName?: string;
        ToBranchDescription?: string;
        ToBranchAddress?: string;
        ToBranchCity?: number;
        ToBranchState?: number;
        ToBranchCountry?: number;
        ToBranchEmail?: string;
        ToBranchPhone1?: string;
        ToBranchPhone2?: string;
        ToBranchUseBranchAddress?: number;
        ToBranchVatPercentage?: number;
        ToBranchLogo?: string;
        ToBranchInsertUserId?: number;
        ToBranchInsertDate?: string;
        ToBranchUpdateUserId?: number;
        ToBranchUpdateDate?: string;
        ToBranchDeleteUserId?: number;
        ToBranchDeleteDate?: string;
        ToBranchIsActive?: number;
        FromWarehouseName?: string;
        FromWarehouseDescription?: string;
        FromWarehouseCountryId?: number;
        FromWarehouseStateId?: number;
        FromWarehouseCityId?: number;
        FromWarehousePhone?: string;
        FromWarehouseAddress?: string;
        ToWarehouseName?: string;
        ToWarehouseDescription?: string;
        ToWarehouseCountryId?: number;
        ToWarehouseStateId?: number;
        ToWarehouseCityId?: number;
        ToWarehousePhone?: string;
        ToWarehouseAddress?: string;
    }

    export namespace TransfersRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inventory.Transfers';
        export const deletePermission = 'Inventory:Transfers:Delete';
        export const insertPermission = 'Inventory:Transfers:Create';
        export const readPermission = 'Inventory:Transfers:View';
        export const updatePermission = 'Inventory:Transfers:Update';

        export declare const enum Fields {
            Id = "Id",
            VNo = "VNo",
            FromBranchId = "FromBranchId",
            ToBranchId = "ToBranchId",
            FromWarehouseId = "FromWarehouseId",
            ToWarehouseId = "ToWarehouseId",
            Status = "Status",
            TotalQuantity = "TotalQuantity",
            LineItems = "LineItems",
            FromBranchName = "FromBranchName",
            FromBranchDescription = "FromBranchDescription",
            FromBranchAddress = "FromBranchAddress",
            FromBranchCity = "FromBranchCity",
            FromBranchState = "FromBranchState",
            FromBranchCountry = "FromBranchCountry",
            FromBranchEmail = "FromBranchEmail",
            FromBranchPhone1 = "FromBranchPhone1",
            FromBranchPhone2 = "FromBranchPhone2",
            FromBranchUseBranchAddress = "FromBranchUseBranchAddress",
            FromBranchVatPercentage = "FromBranchVatPercentage",
            FromBranchLogo = "FromBranchLogo",
            FromBranchInsertUserId = "FromBranchInsertUserId",
            FromBranchInsertDate = "FromBranchInsertDate",
            FromBranchUpdateUserId = "FromBranchUpdateUserId",
            FromBranchUpdateDate = "FromBranchUpdateDate",
            FromBranchDeleteUserId = "FromBranchDeleteUserId",
            FromBranchDeleteDate = "FromBranchDeleteDate",
            FromBranchIsActive = "FromBranchIsActive",
            ToBranchName = "ToBranchName",
            ToBranchDescription = "ToBranchDescription",
            ToBranchAddress = "ToBranchAddress",
            ToBranchCity = "ToBranchCity",
            ToBranchState = "ToBranchState",
            ToBranchCountry = "ToBranchCountry",
            ToBranchEmail = "ToBranchEmail",
            ToBranchPhone1 = "ToBranchPhone1",
            ToBranchPhone2 = "ToBranchPhone2",
            ToBranchUseBranchAddress = "ToBranchUseBranchAddress",
            ToBranchVatPercentage = "ToBranchVatPercentage",
            ToBranchLogo = "ToBranchLogo",
            ToBranchInsertUserId = "ToBranchInsertUserId",
            ToBranchInsertDate = "ToBranchInsertDate",
            ToBranchUpdateUserId = "ToBranchUpdateUserId",
            ToBranchUpdateDate = "ToBranchUpdateDate",
            ToBranchDeleteUserId = "ToBranchDeleteUserId",
            ToBranchDeleteDate = "ToBranchDeleteDate",
            ToBranchIsActive = "ToBranchIsActive",
            FromWarehouseName = "FromWarehouseName",
            FromWarehouseDescription = "FromWarehouseDescription",
            FromWarehouseCountryId = "FromWarehouseCountryId",
            FromWarehouseStateId = "FromWarehouseStateId",
            FromWarehouseCityId = "FromWarehouseCityId",
            FromWarehousePhone = "FromWarehousePhone",
            FromWarehouseAddress = "FromWarehouseAddress",
            ToWarehouseName = "ToWarehouseName",
            ToWarehouseDescription = "ToWarehouseDescription",
            ToWarehouseCountryId = "ToWarehouseCountryId",
            ToWarehouseStateId = "ToWarehouseStateId",
            ToWarehouseCityId = "ToWarehouseCityId",
            ToWarehousePhone = "ToWarehousePhone",
            ToWarehouseAddress = "ToWarehouseAddress"
        }
    }
}
