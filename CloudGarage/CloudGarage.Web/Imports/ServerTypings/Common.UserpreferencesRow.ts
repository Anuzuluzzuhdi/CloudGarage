namespace CloudGarage.Common {
    export interface UserpreferencesRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: number[];
    }

    export namespace UserpreferencesRow {
        export const idProperty = 'UserPreferenceId';
        export const nameProperty = 'PreferenceType';
        export const localTextPrefix = 'Common.Userpreferences';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
