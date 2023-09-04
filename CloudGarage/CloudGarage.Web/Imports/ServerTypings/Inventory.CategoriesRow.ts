namespace CloudGarage.Inventory {
    export interface CategoriesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        ParentCategoryId?: number;
        ParentCategoryName?: string;
        ParentCategoryDescription?: string;
        ParentCategoryParentCategoryId?: number;
    }

    export namespace CategoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Categories';
        export const lookupKey = 'Inventory.Categories';

        export function getLookup(): Q.Lookup<CategoriesRow> {
            return Q.getLookup<CategoriesRow>('Inventory.Categories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            ParentCategoryId = "ParentCategoryId",
            ParentCategoryName = "ParentCategoryName",
            ParentCategoryDescription = "ParentCategoryDescription",
            ParentCategoryParentCategoryId = "ParentCategoryParentCategoryId"
        }
    }
}
