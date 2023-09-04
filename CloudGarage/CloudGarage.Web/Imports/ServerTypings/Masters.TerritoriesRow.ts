namespace CloudGarage.Masters {
    export interface TerritoriesRow {
        Id?: number;
        TerritoryId?: string;
        TerritoryDescription?: string;
        RegionId?: number;
        RegionName?: string;
    }

    export namespace TerritoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TerritoryId';
        export const localTextPrefix = 'Masters.Territories';
        export const lookupKey = 'Masters.Territories';

        export function getLookup(): Q.Lookup<TerritoriesRow> {
            return Q.getLookup<TerritoriesRow>('Masters.Territories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            TerritoryId = "TerritoryId",
            TerritoryDescription = "TerritoryDescription",
            RegionId = "RegionId",
            RegionName = "RegionName"
        }
    }
}
