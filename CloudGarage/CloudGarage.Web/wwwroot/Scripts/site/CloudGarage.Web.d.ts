/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="serenity.extensions" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.demo.advancedsamples" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace CloudGarage.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace CloudGarage.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        RoleKey: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CloudGarage.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace CloudGarage.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace CloudGarage.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace CloudGarage.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace CloudGarage.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace CloudGarage.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace CloudGarage.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace CloudGarage.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace CloudGarage.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace CloudGarage.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace CloudGarage.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CloudGarage.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace CloudGarage.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace CloudGarage.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace CloudGarage.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace CloudGarage.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace CloudGarage.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace CloudGarage.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        BranchId?: number;
        BrancheName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            BranchId = "BranchId",
            BrancheName = "BrancheName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace CloudGarage.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace CloudGarage.Bookings {
    class VehiclebookingsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Bookings {
    interface VehiclebookingsForm {
        Title: Serenity.StringEditor;
        BookingDateTime: Serenity.DateTimeEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }
    class VehiclebookingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Bookings {
    interface VehiclebookingsRow {
        Id?: number;
        Title?: string;
        BookingDateTime?: string;
        Customer?: number;
        Vehicle?: number;
        Note?: string;
        BranchesId?: number;
        BranchName?: string;
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
    namespace VehiclebookingsRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Bookings.Vehiclebookings";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Title = "Title",
            BookingDateTime = "BookingDateTime",
            Customer = "Customer",
            Vehicle = "Vehicle",
            Note = "Note",
            BranchesId = "BranchesId",
            BranchName = "BranchName",
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
declare namespace CloudGarage.Bookings {
    namespace VehiclebookingsService {
        const baseUrl = "Bookings/Vehiclebookings";
        function Create(request: Serenity.SaveRequest<VehiclebookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehiclebookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclebookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclebookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Bookings/Vehiclebookings/Create",
            Update = "Bookings/Vehiclebookings/Update",
            Delete = "Bookings/Vehiclebookings/Delete",
            Retrieve = "Bookings/Vehiclebookings/Retrieve",
            List = "Bookings/Vehiclebookings/List"
        }
    }
}
declare namespace CloudGarage.Bookings {
    class VehiclecourtesybookingColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Bookings {
    interface VehiclecourtesybookingForm {
        Title: Serenity.StringEditor;
        StartDateTime: Serenity.DateEditor;
        EndDateTime: Serenity.DateEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }
    class VehiclecourtesybookingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Bookings {
    interface VehiclecourtesybookingRow {
        Id?: number;
        Title?: string;
        StartDateTime?: string;
        EndDateTime?: string;
        Customer?: number;
        Vehicle?: number;
        Note?: string;
        BranchesId?: number;
        BranchName?: string;
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
    namespace VehiclecourtesybookingRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Bookings.Vehiclecourtesybooking";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Title = "Title",
            StartDateTime = "StartDateTime",
            EndDateTime = "EndDateTime",
            Customer = "Customer",
            Vehicle = "Vehicle",
            Note = "Note",
            BranchesId = "BranchesId",
            BranchName = "BranchName",
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
declare namespace CloudGarage.Bookings {
    namespace VehiclecourtesybookingService {
        const baseUrl = "Bookings/Vehiclecourtesybooking";
        function Create(request: Serenity.SaveRequest<VehiclecourtesybookingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehiclecourtesybookingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclecourtesybookingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclecourtesybookingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Bookings/Vehiclecourtesybooking/Create",
            Update = "Bookings/Vehiclecourtesybooking/Update",
            Delete = "Bookings/Vehiclecourtesybooking/Delete",
            Retrieve = "Bookings/Vehiclecourtesybooking/Retrieve",
            List = "Bookings/Vehiclecourtesybooking/List"
        }
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomersColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.BusinessPartners {
    interface CustomersForm {
        Name: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        RegionId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        CustomerGroupId: Serenity.LookupEditor;
        PreviousCreditBalance: Serenity.DecimalEditor;
        NoteList: Note.NotesEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.BusinessPartners {
    interface CustomersRow {
        Id?: number;
        Name?: string;
        ContactName?: string;
        ContactTitle?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        CustomerGroupId?: number;
        IsActive?: number;
        NoteList?: Note.NoteRow[];
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        CustomerGroupName?: string;
        CustomerGroupDescription?: string;
        CustomerReceivable?: number;
        CustomerReceived?: number;
        CustomerBalance?: number;
    }
    namespace CustomersRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "BusinessPartners.Customers";
        const lookupKey = "BusinessPartners.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            CustomerGroupId = "CustomerGroupId",
            IsActive = "IsActive",
            NoteList = "NoteList",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            CustomerGroupName = "CustomerGroupName",
            CustomerGroupDescription = "CustomerGroupDescription",
            CustomerReceivable = "CustomerReceivable",
            CustomerReceived = "CustomerReceived",
            CustomerBalance = "CustomerBalance"
        }
    }
}
declare namespace CloudGarage.BusinessPartners {
    namespace CustomersService {
        const baseUrl = "BusinessPartners/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BusinessPartners/Customers/Create",
            Update = "BusinessPartners/Customers/Update",
            Delete = "BusinessPartners/Customers/Delete",
            Retrieve = "BusinessPartners/Customers/Retrieve",
            List = "BusinessPartners/Customers/List"
        }
    }
}
declare namespace CloudGarage.BusinessPartners {
    class SuppliersColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.BusinessPartners {
    interface SuppliersForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        RegionId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        SupplierGroupId: Serenity.LookupEditor;
        PreviousCreditBalance: Serenity.DecimalEditor;
    }
    class SuppliersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.BusinessPartners {
    interface SuppliersRow {
        Id?: number;
        CompanyName?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        RegionId?: number;
        PostalCode?: string;
        Phone?: string;
        Fax?: string;
        Website?: string;
        Email?: string;
        EmailAddress?: string;
        PreviousCreditBalance?: number;
        SupplierGroupId?: number;
        IsActive?: boolean;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        RegionName?: string;
        SupplierGroupName?: string;
        SupplierGroupDescription?: string;
        SupplierPayable?: number;
        SupplierPaid?: number;
        SupplierBalance?: number;
    }
    namespace SuppliersRow {
        const idProperty = "Id";
        const nameProperty = "CompanyName";
        const localTextPrefix = "BusinessPartners.Suppliers";
        const lookupKey = "BusinessPartners.Suppliers";
        function getLookup(): Q.Lookup<SuppliersRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            RegionId = "RegionId",
            PostalCode = "PostalCode",
            Phone = "Phone",
            Fax = "Fax",
            Website = "Website",
            Email = "Email",
            EmailAddress = "EmailAddress",
            PreviousCreditBalance = "PreviousCreditBalance",
            SupplierGroupId = "SupplierGroupId",
            IsActive = "IsActive",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            RegionName = "RegionName",
            SupplierGroupName = "SupplierGroupName",
            SupplierGroupDescription = "SupplierGroupDescription",
            SupplierPayable = "SupplierPayable",
            SupplierPaid = "SupplierPaid",
            SupplierBalance = "SupplierBalance"
        }
    }
}
declare namespace CloudGarage.BusinessPartners {
    namespace SuppliersService {
        const baseUrl = "BusinessPartners/Suppliers";
        function Create(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BusinessPartners/Suppliers/Create",
            Update = "BusinessPartners/Suppliers/Update",
            Delete = "BusinessPartners/Suppliers/Delete",
            Retrieve = "BusinessPartners/Suppliers/Retrieve",
            List = "BusinessPartners/Suppliers/List"
        }
    }
}
declare namespace CloudGarage.CashBank {
    enum AccountKind {
        Debit = 1,
        Credit = 2
    }
}
declare namespace CloudGarage.CashBank {
    class BanktransactionsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.CashBank {
    interface BanktransactionsForm {
        VDate: Serenity.DateEditor;
        AccountType: Serenity.EnumEditor;
        VNo: Serenity.DecimalEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class BanktransactionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.CashBank {
    interface BanktransactionsRow {
        Id?: number;
        VNo?: number;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        AccountType?: AccountKind;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: boolean;
        CoaIsGl?: boolean;
        CoaIsBudget?: boolean;
        CoaIsDepreciation?: boolean;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CoaInsertDate?: string;
        CoaInsertUserId?: number;
        CoaUpdateDate?: string;
        CoaUpdateUserId?: number;
        CoaDeleteDate?: string;
        CoaDeleteUserId?: number;
        CoaIsActive?: number;
    }
    namespace BanktransactionsRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "CashBank.Banktransactions";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            AccountType = "AccountType",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            CoaInsertDate = "CoaInsertDate",
            CoaInsertUserId = "CoaInsertUserId",
            CoaUpdateDate = "CoaUpdateDate",
            CoaUpdateUserId = "CoaUpdateUserId",
            CoaDeleteDate = "CoaDeleteDate",
            CoaDeleteUserId = "CoaDeleteUserId",
            CoaIsActive = "CoaIsActive"
        }
    }
}
declare namespace CloudGarage.CashBank {
    namespace BanktransactionsService {
        const baseUrl = "CashBank/Banktransactions";
        function Create(request: Serenity.SaveRequest<BanktransactionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BanktransactionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BanktransactionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BanktransactionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CashBank/Banktransactions/Create",
            Update = "CashBank/Banktransactions/Update",
            Delete = "CashBank/Banktransactions/Delete",
            Retrieve = "CashBank/Banktransactions/Retrieve",
            List = "CashBank/Banktransactions/List"
        }
    }
}
declare namespace CloudGarage.CashBank {
    class CashadjustmentColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.CashBank {
    interface CashadjustmentForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Coa: Serenity.StringEditor;
        AccountType: Serenity.EnumEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class CashadjustmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.CashBank {
    interface CashadjustmentRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        AccountType?: AccountKind;
    }
    namespace CashadjustmentRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "CashBank.Cashadjustment";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            IsActive = "IsActive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            AccountType = "AccountType"
        }
    }
}
declare namespace CloudGarage.CashBank {
    namespace CashadjustmentService {
        const baseUrl = "CashBank/Cashadjustment";
        function Create(request: Serenity.SaveRequest<CashadjustmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashadjustmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashadjustmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashadjustmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CashBank/Cashadjustment/Create",
            Update = "CashBank/Cashadjustment/Update",
            Delete = "CashBank/Cashadjustment/Delete",
            Retrieve = "CashBank/Cashadjustment/Retrieve",
            List = "CashBank/Cashadjustment/List"
        }
    }
}
declare namespace CloudGarage.CashBank {
    class CustomerreceiveColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.CashBank {
    interface CustomerreceiveForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CustomerId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class CustomerreceiveForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.CashBank {
    interface CustomerreceiveRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        CustomerId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
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
    }
    namespace CustomerreceiveRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "CashBank.Customerreceive";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            CustomerId = "CustomerId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            IsActive = "IsActive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
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
            CustomerCustomerGroupId = "CustomerCustomerGroupId"
        }
    }
}
declare namespace CloudGarage.CashBank {
    namespace CustomerreceiveService {
        const baseUrl = "CashBank/Customerreceive";
        function Create(request: Serenity.SaveRequest<CustomerreceiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerreceiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerreceiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerreceiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CashBank/Customerreceive/Create",
            Update = "CashBank/Customerreceive/Update",
            Delete = "CashBank/Customerreceive/Delete",
            Retrieve = "CashBank/Customerreceive/Retrieve",
            List = "CashBank/Customerreceive/List"
        }
    }
}
declare namespace CloudGarage.CashBank {
    class ExpensesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.CashBank {
    interface ExpensesForm {
        ExpenseTypeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }
    class ExpensesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.CashBank {
    interface ExpensesRow {
        Id?: number;
        ExpenseTypeId?: number;
        BranchesId?: number;
        Date?: string;
        PaymentAccount?: number;
        Amount?: number;
        VNo?: number;
        HeadCodeName?: string;
        In?: string;
        InBy?: number;
        Up?: string;
        UpBy?: number;
        ExpenseTypeType?: string;
        BranchName?: string;
        PaymentAccountHeadCode?: number;
        PaymentAccountHeadName?: string;
        PaymentAccountParentHead?: number;
        PaymentAccountPHeadName?: string;
        PaymentAccountHeadLevel?: number;
        PaymentAccountHeadType?: string;
        PaymentAccountIsTransaction?: number;
        PaymentAccountIsGl?: number;
        PaymentAccountIsBudget?: number;
        PaymentAccountIsDepreciation?: number;
        PaymentAccountCustomerId?: number;
        PaymentAccountSupplierId?: number;
        PaymentAccountDepreciationRate?: number;
    }
    namespace ExpensesRow {
        const idProperty = "Id";
        const nameProperty = "HeadCodeName";
        const localTextPrefix = "CashBank.Expenses";
        const lookupKey = "CashBank.Expenses";
        function getLookup(): Q.Lookup<ExpensesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ExpenseTypeId = "ExpenseTypeId",
            BranchesId = "BranchesId",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Amount = "Amount",
            VNo = "VNo",
            HeadCodeName = "HeadCodeName",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            ExpenseTypeType = "ExpenseTypeType",
            BranchName = "BranchName",
            PaymentAccountHeadCode = "PaymentAccountHeadCode",
            PaymentAccountHeadName = "PaymentAccountHeadName",
            PaymentAccountParentHead = "PaymentAccountParentHead",
            PaymentAccountPHeadName = "PaymentAccountPHeadName",
            PaymentAccountHeadLevel = "PaymentAccountHeadLevel",
            PaymentAccountHeadType = "PaymentAccountHeadType",
            PaymentAccountIsTransaction = "PaymentAccountIsTransaction",
            PaymentAccountIsGl = "PaymentAccountIsGl",
            PaymentAccountIsBudget = "PaymentAccountIsBudget",
            PaymentAccountIsDepreciation = "PaymentAccountIsDepreciation",
            PaymentAccountCustomerId = "PaymentAccountCustomerId",
            PaymentAccountSupplierId = "PaymentAccountSupplierId",
            PaymentAccountDepreciationRate = "PaymentAccountDepreciationRate"
        }
    }
}
declare namespace CloudGarage.CashBank {
    namespace ExpensesService {
        const baseUrl = "CashBank/Expenses";
        function Create(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CashBank/Expenses/Create",
            Update = "CashBank/Expenses/Update",
            Delete = "CashBank/Expenses/Delete",
            Retrieve = "CashBank/Expenses/Retrieve",
            List = "CashBank/Expenses/List"
        }
    }
}
declare namespace CloudGarage.CashBank {
    class SupplierpaymentColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.CashBank {
    interface SupplierpaymentForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        SupplierId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class SupplierpaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.CashBank {
    interface SupplierpaymentRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        SupplierId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsAppove?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierSupplierGroupId?: number;
        Remark?: string;
    }
    namespace SupplierpaymentRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "CashBank.Supplierpayment";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            SupplierId = "SupplierId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsAppove = "IsAppove",
            IsActive = "IsActive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierSupplierGroupId = "SupplierSupplierGroupId",
            Remark = "Remark"
        }
    }
}
declare namespace CloudGarage.CashBank {
    namespace SupplierpaymentService {
        const baseUrl = "CashBank/Supplierpayment";
        function Create(request: Serenity.SaveRequest<SupplierpaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierpaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierpaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierpaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CashBank/Supplierpayment/Create",
            Update = "CashBank/Supplierpayment/Update",
            Delete = "CashBank/Supplierpayment/Delete",
            Retrieve = "CashBank/Supplierpayment/Retrieve",
            List = "CashBank/Supplierpayment/List"
        }
    }
}
declare namespace CloudGarage.Common {
    class UserpreferencesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Common {
    interface UserpreferencesForm {
        UserId: Serenity.StringEditor;
        PreferenceType: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }
    class UserpreferencesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Common {
    interface UserpreferencesRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: number[];
    }
    namespace UserpreferencesRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "PreferenceType";
        const localTextPrefix = "Common.Userpreferences";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace CloudGarage.Common {
    namespace UserpreferencesService {
        const baseUrl = "Common/Userpreferences";
        function Create(request: Serenity.SaveRequest<UserpreferencesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserpreferencesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserpreferencesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserpreferencesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Common/Userpreferences/Create",
            Update = "Common/Userpreferences/Update",
            Delete = "Common/Userpreferences/Delete",
            Retrieve = "Common/Userpreferences/Retrieve",
            List = "Common/Userpreferences/List"
        }
    }
}
declare namespace CloudGarage.Financial {
    class AccountsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Financial {
    interface AccountsForm {
        HeadName: Serenity.StringEditor;
        HeadCode: Serenity.IntegerEditor;
        ParentHead: AccountsEditor;
        PHeadName: Serenity.StringEditor;
        HeadLevel: Serenity.IntegerEditor;
        HeadType: Serenity.StringEditor;
        IsTransaction: Serenity.BooleanEditor;
        IsGl: Serenity.BooleanEditor;
    }
    class AccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Financial {
    interface AccountsRow {
        Id?: number;
        HeadCode?: number;
        HeadName?: string;
        ParentHead?: number;
        PHeadName?: string;
        HeadLevel?: number;
        HeadType?: string;
        IsTransaction?: number;
        IsGl?: number;
        IsBudget?: number;
        IsOpening?: number;
        IsDepreciation?: number;
        CustomerId?: number;
        SupplierId?: number;
        DepreciationRate?: number;
        ParentHeadHeadCode?: number;
        ParentHeadHeadName?: string;
        ParentHead1?: number;
        ParentHeadPHeadName?: string;
        ParentHeadHeadLevel?: number;
        ParentHeadHeadType?: string;
        ParentHeadIsTransaction?: number;
        ParentHeadIsGl?: number;
        ParentHeadIsBudget?: number;
        ParentHeadIsDepreciation?: number;
        ParentHeadCustomerId?: number;
        ParentHeadSupplierId?: number;
        ParentHeadDepreciationRate?: number;
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
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierSupplierGroupId?: number;
        OpeningBalance?: number;
        Balance?: number;
        HeadCodeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
        BranchId?: number;
        BranchName?: string;
    }
    namespace AccountsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "HeadCode";
        const localTextPrefix = "Financial.Accounts";
        const lookupKey = "Cloudgarage.Finansiaklll";
        function getLookup(): Q.Lookup<AccountsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            HeadCode = "HeadCode",
            HeadName = "HeadName",
            ParentHead = "ParentHead",
            PHeadName = "PHeadName",
            HeadLevel = "HeadLevel",
            HeadType = "HeadType",
            IsTransaction = "IsTransaction",
            IsGl = "IsGl",
            IsBudget = "IsBudget",
            IsOpening = "IsOpening",
            IsDepreciation = "IsDepreciation",
            CustomerId = "CustomerId",
            SupplierId = "SupplierId",
            DepreciationRate = "DepreciationRate",
            ParentHeadHeadCode = "ParentHeadHeadCode",
            ParentHeadHeadName = "ParentHeadHeadName",
            ParentHead1 = "ParentHead1",
            ParentHeadPHeadName = "ParentHeadPHeadName",
            ParentHeadHeadLevel = "ParentHeadHeadLevel",
            ParentHeadHeadType = "ParentHeadHeadType",
            ParentHeadIsTransaction = "ParentHeadIsTransaction",
            ParentHeadIsGl = "ParentHeadIsGl",
            ParentHeadIsBudget = "ParentHeadIsBudget",
            ParentHeadIsDepreciation = "ParentHeadIsDepreciation",
            ParentHeadCustomerId = "ParentHeadCustomerId",
            ParentHeadSupplierId = "ParentHeadSupplierId",
            ParentHeadDepreciationRate = "ParentHeadDepreciationRate",
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
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierSupplierGroupId = "SupplierSupplierGroupId",
            OpeningBalance = "OpeningBalance",
            Balance = "Balance",
            HeadCodeName = "HeadCodeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive",
            BranchId = "BranchId",
            BranchName = "BranchName"
        }
    }
}
declare namespace CloudGarage.Financial {
    namespace AccountsService {
        const baseUrl = "Financial/Accounts";
        function Create(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Financial/Accounts/Create",
            Update = "Financial/Accounts/Update",
            Delete = "Financial/Accounts/Delete",
            Retrieve = "Financial/Accounts/Retrieve",
            List = "Financial/Accounts/List"
        }
    }
}
declare namespace CloudGarage.Financial {
    class ContravoucherColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Financial {
    interface ContravoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class ContravoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Financial {
    interface ContravoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsActive?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
    }
    namespace ContravoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Financial.Contravoucher";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsActive = "IsActive",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate"
        }
    }
}
declare namespace CloudGarage.Financial {
    namespace ContravoucherService {
        const baseUrl = "Financial/Contravoucher";
        function Create(request: Serenity.SaveRequest<ContravoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContravoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContravoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContravoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Financial/Contravoucher/Create",
            Update = "Financial/Contravoucher/Update",
            Delete = "Financial/Contravoucher/Delete",
            Retrieve = "Financial/Contravoucher/Retrieve",
            List = "Financial/Contravoucher/List"
        }
    }
}
declare namespace CloudGarage.Financial {
    class CreditvoucherColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Financial {
    interface CreditvoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        CreditAccountId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class CreditvoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Financial {
    interface CreditvoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        CreditAccountId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsActive?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
    }
    namespace CreditvoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Financial.Creditvoucher";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            CreditAccountId = "CreditAccountId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsActive = "IsActive",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate"
        }
    }
}
declare namespace CloudGarage.Financial {
    namespace CreditvoucherService {
        const baseUrl = "Financial/Creditvoucher";
        function Create(request: Serenity.SaveRequest<CreditvoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CreditvoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CreditvoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CreditvoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Financial/Creditvoucher/Create",
            Update = "Financial/Creditvoucher/Update",
            Delete = "Financial/Creditvoucher/Delete",
            Retrieve = "Financial/Creditvoucher/Retrieve",
            List = "Financial/Creditvoucher/List"
        }
    }
}
declare namespace CloudGarage.Financial {
    class DebitvoucherColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Financial {
    interface DebitvoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }
    class DebitvoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Financial {
    interface DebitvoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        DebitAccountId?: number;
        Coa?: string;
        Narration?: string;
        Remark?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsActive?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
    }
    namespace DebitvoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Financial.Debitvoucher";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            DebitAccountId = "DebitAccountId",
            Coa = "Coa",
            Narration = "Narration",
            Remark = "Remark",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsActive = "IsActive",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate"
        }
    }
}
declare namespace CloudGarage.Financial {
    namespace DebitvoucherService {
        const baseUrl = "Financial/Debitvoucher";
        function Create(request: Serenity.SaveRequest<DebitvoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DebitvoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DebitvoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DebitvoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Financial/Debitvoucher/Create",
            Update = "Financial/Debitvoucher/Update",
            Delete = "Financial/Debitvoucher/Delete",
            Retrieve = "Financial/Debitvoucher/Retrieve",
            List = "Financial/Debitvoucher/List"
        }
    }
}
declare namespace CloudGarage.Financial {
    class JournalvoucherColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Financial {
    interface JournalvoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class JournalvoucherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Financial {
    interface JournalvoucherRow {
        Id?: number;
        VNo?: string;
        Vtype?: VoucherType;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsActive?: boolean;
        IsAppove?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
    }
    namespace JournalvoucherRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Financial.Journalvoucher";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsActive = "IsActive",
            IsAppove = "IsAppove",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate"
        }
    }
}
declare namespace CloudGarage.Financial {
    namespace JournalvoucherService {
        const baseUrl = "Financial/Journalvoucher";
        function Create(request: Serenity.SaveRequest<JournalvoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JournalvoucherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JournalvoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JournalvoucherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Financial/Journalvoucher/Create",
            Update = "Financial/Journalvoucher/Update",
            Delete = "Financial/Journalvoucher/Delete",
            Retrieve = "Financial/Journalvoucher/Retrieve",
            List = "Financial/Journalvoucher/List"
        }
    }
}
declare namespace CloudGarage.Financial {
    class OpeningbalanceColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Financial {
    interface OpeningbalanceForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        AccountType: Serenity.EnumEditor;
        Debit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }
    class OpeningbalanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Financial {
    interface OpeningbalanceRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: boolean;
        IsActive?: boolean;
        IsAppove?: boolean;
        IsOpening?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        AccountType?: CashBank.AccountKind;
    }
    namespace OpeningbalanceRow {
        const idProperty = "Id";
        const nameProperty = "VNo";
        const localTextPrefix = "Financial.Openingbalance";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VNo = "VNo",
            Vtype = "Vtype",
            VDate = "VDate",
            CoaId = "CoaId",
            Coa = "Coa",
            Narration = "Narration",
            Debit = "Debit",
            Credit = "Credit",
            IsPosted = "IsPosted",
            IsActive = "IsActive",
            IsAppove = "IsAppove",
            IsOpening = "IsOpening",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            CoaHeadCode = "CoaHeadCode",
            CoaHeadName = "CoaHeadName",
            CoaParentHead = "CoaParentHead",
            CoaPHeadName = "CoaPHeadName",
            CoaHeadLevel = "CoaHeadLevel",
            CoaHeadType = "CoaHeadType",
            CoaIsTransaction = "CoaIsTransaction",
            CoaIsGl = "CoaIsGl",
            CoaIsBudget = "CoaIsBudget",
            CoaIsDepreciation = "CoaIsDepreciation",
            CoaCustomerId = "CoaCustomerId",
            CoaSupplierId = "CoaSupplierId",
            CoaDepreciationRate = "CoaDepreciationRate",
            AccountType = "AccountType"
        }
    }
}
declare namespace CloudGarage.Financial {
    namespace OpeningbalanceService {
        const baseUrl = "Financial/Openingbalance";
        function Create(request: Serenity.SaveRequest<OpeningbalanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpeningbalanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpeningbalanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpeningbalanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Financial/Openingbalance/Create",
            Update = "Financial/Openingbalance/Update",
            Delete = "Financial/Openingbalance/Delete",
            Retrieve = "Financial/Openingbalance/Retrieve",
            List = "Financial/Openingbalance/List"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    class AttendanceColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.HumanResource {
    interface AttendanceForm {
        EmployeeId: Serenity.LookupEditor;
        CheckIn: Serenity.DateTimeEditor;
        CheckOut: Serenity.DateTimeEditor;
    }
    class AttendanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.HumanResource {
    interface AttendanceRow {
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
    namespace AttendanceRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeFullName";
        const localTextPrefix = "HumanResource.Attendance";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.HumanResource {
    namespace AttendanceService {
        const baseUrl = "HumanResource/Attendance";
        function Create(request: Serenity.SaveRequest<AttendanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Attendance/Create",
            Update = "HumanResource/Attendance/Update",
            Delete = "HumanResource/Attendance/Delete",
            Retrieve = "HumanResource/Attendance/Retrieve",
            List = "HumanResource/Attendance/List"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    enum BloodGroupKind {
        APositive = 1,
        ANegative = 2,
        BPositive = 3,
        BNegative = 4,
        ABPsitive = 5,
        ABNegative = 6,
        OPositive = 7,
        ONegative = 8
    }
}
declare namespace CloudGarage.HumanResource {
    class DepartmentsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.HumanResource {
    interface DepartmentsForm {
        Department: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentDepartmentId: DepartmentsEditor;
    }
    class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.HumanResource {
    interface DepartmentsRow {
        Id?: number;
        Department?: string;
        Description?: string;
        ParentDepartmentId?: number;
        ParentDepartmentDepartment?: string;
        ParentDepartmentDescription?: string;
        ParentDepartmentParentDepartmentId?: number;
    }
    namespace DepartmentsRow {
        const idProperty = "Id";
        const nameProperty = "Department";
        const localTextPrefix = "HumanResource.Departments";
        const lookupKey = "HumanResource.Departments";
        function getLookup(): Q.Lookup<DepartmentsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Department = "Department",
            Description = "Description",
            ParentDepartmentId = "ParentDepartmentId",
            ParentDepartmentDepartment = "ParentDepartmentDepartment",
            ParentDepartmentDescription = "ParentDepartmentDescription",
            ParentDepartmentParentDepartmentId = "ParentDepartmentParentDepartmentId"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    namespace DepartmentsService {
        const baseUrl = "HumanResource/Departments";
        function Create(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Departments/Create",
            Update = "HumanResource/Departments/Update",
            Delete = "HumanResource/Departments/Delete",
            Retrieve = "HumanResource/Departments/Retrieve",
            List = "HumanResource/Departments/List"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    class DesignationsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.HumanResource {
    interface DesignationsForm {
        Designation: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentDesignationId: DesignationsEditor;
    }
    class DesignationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.HumanResource {
    interface DesignationsRow {
        Id?: number;
        Designation?: string;
        Description?: string;
        ParentDesignationId?: number;
        ParentDesignationDesignation?: string;
        ParentDesignationDescription?: string;
        ParentDesignationParentDesignationId?: number;
    }
    namespace DesignationsRow {
        const idProperty = "Id";
        const nameProperty = "Designation";
        const localTextPrefix = "HumanResource.Designations";
        const lookupKey = "HumanResource.Designations";
        function getLookup(): Q.Lookup<DesignationsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Designation = "Designation",
            Description = "Description",
            ParentDesignationId = "ParentDesignationId",
            ParentDesignationDesignation = "ParentDesignationDesignation",
            ParentDesignationDescription = "ParentDesignationDescription",
            ParentDesignationParentDesignationId = "ParentDesignationParentDesignationId"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    namespace DesignationsService {
        const baseUrl = "HumanResource/Designations";
        function Create(request: Serenity.SaveRequest<DesignationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DesignationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Designations/Create",
            Update = "HumanResource/Designations/Update",
            Delete = "HumanResource/Designations/Delete",
            Retrieve = "HumanResource/Designations/Retrieve",
            List = "HumanResource/Designations/List"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    class EmployeesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.HumanResource {
    interface EmployeesForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        DesignationId: DesignationsEditor;
        DepartmentId: DepartmentsEditor;
        RateType: Serenity.EnumEditor;
        Phone: Serenity.StringEditor;
        HoureRateSalary: Serenity.DecimalEditor;
        Email: Serenity.StringEditor;
        BloodGroup: Serenity.EnumEditor;
        Picture: Serenity.ImageUploadEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        ZipCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        UserId: Serenity.LookupEditor;
        RegionId: Serenity.LookupEditor;
        TerritoryId: Serenity.LookupEditor;
    }
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.HumanResource {
    interface EmployeesRow {
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
    namespace EmployeesRow {
        const idProperty = "Id";
        const nameProperty = "FirstName";
        const localTextPrefix = "HumanResource.Employees";
        const lookupKey = "HumanResource.Employees";
        function getLookup(): Q.Lookup<EmployeesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.HumanResource {
    namespace EmployeesService {
        const baseUrl = "HumanResource/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "HumanResource/Employees/Create",
            Update = "HumanResource/Employees/Update",
            Delete = "HumanResource/Employees/Delete",
            Retrieve = "HumanResource/Employees/Retrieve",
            List = "HumanResource/Employees/List"
        }
    }
}
declare namespace CloudGarage.HumanResource {
    enum RateKind {
        Hourly = 1,
        Salary = 2
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionchecklistColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inspections {
    interface InspectionchecklistForm {
        JobCategory: Serenity.LookupEditor;
        JobTypes: Serenity.LookupEditor;
    }
    class InspectionchecklistForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inspections {
    interface InspectionchecklistRow {
        Id?: number;
        JobCategory?: number;
        JobType?: number;
        JobCategoryName?: string;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: number;
        JobTypes?: number[];
    }
    namespace InspectionchecklistRow {
        const idProperty = "Id";
        const localTextPrefix = "Inspections.Inspectionchecklist";
        const lookupKey = "Inspections.Inspectionchecklist";
        function getLookup(): Q.Lookup<InspectionchecklistRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            JobCategory = "JobCategory",
            JobType = "JobType",
            JobCategoryName = "JobCategoryName",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            JobTypes = "JobTypes"
        }
    }
}
declare namespace CloudGarage.Inspections {
    namespace InspectionchecklistService {
        const baseUrl = "Inspections/Inspectionchecklist";
        function Create(request: Serenity.SaveRequest<InspectionchecklistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InspectionchecklistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InspectionchecklistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InspectionchecklistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inspections/Inspectionchecklist/Create",
            Update = "Inspections/Inspectionchecklist/Update",
            Delete = "Inspections/Inspectionchecklist/Delete",
            Retrieve = "Inspections/Inspectionchecklist/Retrieve",
            List = "Inspections/Inspectionchecklist/List"
        }
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionjobtypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inspections {
    interface InspectionjobtypesForm {
        InspectionId: Serenity.IntegerEditor;
        JobType: Serenity.IntegerEditor;
    }
    class InspectionjobtypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inspections {
    interface InspectionjobtypesRow {
        Id?: number;
        InspectionId?: number;
        JobType?: number;
        InspectionJobCategory?: number;
        InspectionJobType?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: number;
    }
    namespace InspectionjobtypesRow {
        const idProperty = "Id";
        const localTextPrefix = "Inspections.Inspectionjobtypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            InspectionId = "InspectionId",
            JobType = "JobType",
            InspectionJobCategory = "InspectionJobCategory",
            InspectionJobType = "InspectionJobType",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList"
        }
    }
}
declare namespace CloudGarage.Inspections {
    namespace InspectionjobtypesService {
        const baseUrl = "Inspections/Inspectionjobtypes";
        function Create(request: Serenity.SaveRequest<InspectionjobtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InspectionjobtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InspectionjobtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InspectionjobtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inspections/Inspectionjobtypes/Create",
            Update = "Inspections/Inspectionjobtypes/Update",
            Delete = "Inspections/Inspectionjobtypes/Delete",
            Retrieve = "Inspections/Inspectionjobtypes/Retrieve",
            List = "Inspections/Inspectionjobtypes/List"
        }
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inspections {
    interface InspectionsForm {
        CustomerId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        StandardTiming: Serenity.MaskedEditor;
        Checklist: InspectionChecklistEditor;
    }
    class InspectionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inspections {
    interface InspectionsRow {
        Id?: number;
        Name?: string;
        Rate?: number;
        StandardTiming?: string;
        IsInspectionList?: boolean;
        Checklist?: InspectionchecklistRow[];
        CustomerName?: string;
        CustomerId?: number;
    }
    namespace InspectionsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Inspections.Inspections";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Rate = "Rate",
            StandardTiming = "StandardTiming",
            IsInspectionList = "IsInspectionList",
            Checklist = "Checklist",
            CustomerName = "CustomerName",
            CustomerId = "CustomerId"
        }
    }
}
declare namespace CloudGarage.Inspections {
    namespace InspectionsService {
        const baseUrl = "Inspections/Inspections";
        function Create(request: Serenity.SaveRequest<InspectionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InspectionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InspectionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InspectionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inspections/Inspections/Create",
            Update = "Inspections/Inspections/Update",
            Delete = "Inspections/Inspections/Delete",
            Retrieve = "Inspections/Inspections/Retrieve",
            List = "Inspections/Inspections/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class BrandsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface BrandsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class BrandsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface BrandsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }
    namespace BrandsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Inventory.Brands";
        const lookupKey = "Inventory.Brands";
        function getLookup(): Q.Lookup<BrandsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace BrandsService {
        const baseUrl = "Inventory/Brands";
        function Create(request: Serenity.SaveRequest<BrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Brands/Create",
            Update = "Inventory/Brands/Update",
            Delete = "Inventory/Brands/Delete",
            Retrieve = "Inventory/Brands/Retrieve",
            List = "Inventory/Brands/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class CategoriesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface CategoriesForm {
        ParentCategoryId: CategoriesEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface CategoriesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        ParentCategoryId?: number;
        ParentCategoryName?: string;
        ParentCategoryDescription?: string;
        ParentCategoryParentCategoryId?: number;
    }
    namespace CategoriesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Inventory.Categories";
        const lookupKey = "Inventory.Categories";
        function getLookup(): Q.Lookup<CategoriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.Inventory {
    namespace CategoriesService {
        const baseUrl = "Inventory/Categories";
        function Create(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Categories/Create",
            Update = "Inventory/Categories/Update",
            Delete = "Inventory/Categories/Delete",
            Retrieve = "Inventory/Categories/Retrieve",
            List = "Inventory/Categories/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class DamagedproductsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface DamagedproductsForm {
        CategoryId: CategoriesEditor;
        ProductId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        PurchasePrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }
    class DamagedproductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface DamagedproductsRow {
        Id?: number;
        Code?: string;
        Name?: string;
        CategoryId?: number;
        PurchasePrice?: number;
        Quantity?: number;
        Date?: string;
        Note?: string;
        ProductId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductBranchId?: number;
    }
    namespace DamagedproductsRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Inventory.Damagedproducts";
        const lookupKey = "Inventory.Damagedproducts";
        function getLookup(): Q.Lookup<DamagedproductsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            CategoryId = "CategoryId",
            PurchasePrice = "PurchasePrice",
            Quantity = "Quantity",
            Date = "Date",
            Note = "Note",
            ProductId = "ProductId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductBranchId = "ProductBranchId"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace DamagedproductsService {
        const baseUrl = "Inventory/Damagedproducts";
        function Create(request: Serenity.SaveRequest<DamagedproductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DamagedproductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DamagedproductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DamagedproductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Damagedproducts/Create",
            Update = "Inventory/Damagedproducts/Update",
            Delete = "Inventory/Damagedproducts/Delete",
            Retrieve = "Inventory/Damagedproducts/Retrieve",
            List = "Inventory/Damagedproducts/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsissueColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsissueForm {
        SaleId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: GoodsIssueDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }
    class GoodsissueForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsissueRow {
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
    namespace GoodsissueRow {
        const idProperty = "Id";
        const nameProperty = "Date";
        const localTextPrefix = "Inventory.Goodsissue";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.Inventory {
    namespace GoodsissueService {
        const baseUrl = "Inventory/Goodsissue";
        function Create(request: Serenity.SaveRequest<GoodsissueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsissueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsissueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsissueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Goodsissue/Create",
            Update = "Inventory/Goodsissue/Update",
            Delete = "Inventory/Goodsissue/Delete",
            Retrieve = "Inventory/Goodsissue/Retrieve",
            List = "Inventory/Goodsissue/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsissuedetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsissuedetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }
    class GoodsissuedetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsissuedetailsRow {
        Id?: number;
        GoodsIssueId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        GoodsIssueCustomerId?: number;
        GoodsIssueSaleId?: number;
        GoodsIssueDate?: string;
        GoodsIssueTotalQuantity?: number;
        GoodsIssueEmployeenId?: number;
        GoodsIssueRemarks?: string;
        GoodsIssueJournalRemarks?: string;
        GoodsIssueReference?: string;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
    }
    namespace GoodsissuedetailsRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Inventory.Goodsissuedetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            GoodsIssueId = "GoodsIssueId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            GoodsIssueCustomerId = "GoodsIssueCustomerId",
            GoodsIssueSaleId = "GoodsIssueSaleId",
            GoodsIssueDate = "GoodsIssueDate",
            GoodsIssueTotalQuantity = "GoodsIssueTotalQuantity",
            GoodsIssueEmployeenId = "GoodsIssueEmployeenId",
            GoodsIssueRemarks = "GoodsIssueRemarks",
            GoodsIssueJournalRemarks = "GoodsIssueJournalRemarks",
            GoodsIssueReference = "GoodsIssueReference",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace GoodsissuedetailsService {
        const baseUrl = "Inventory/Goodsissuedetails";
        function Create(request: Serenity.SaveRequest<GoodsissuedetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsissuedetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsissuedetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsissuedetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Goodsissuedetails/Create",
            Update = "Inventory/Goodsissuedetails/Update",
            Delete = "Inventory/Goodsissuedetails/Delete",
            Retrieve = "Inventory/Goodsissuedetails/Retrieve",
            List = "Inventory/Goodsissuedetails/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsreceiptColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsreceiptForm {
        PurchaseId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: GoodsReceiptDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }
    class GoodsreceiptForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsreceiptRow {
        Id?: number;
        SupplierId?: number;
        PurchaseId?: number;
        Date?: string;
        TotalQuantity?: number;
        EmployeenId?: number;
        Remarks?: string;
        JournalRemarks?: string;
        Reference?: string;
        PurchaseBill?: string;
        BranchesId?: number;
        BranchName?: string;
        ProductsId?: number;
        EmployeeFullName?: string;
        LineItems?: GoodsreceiptdetailsRow[];
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierSupplierGroupId?: number;
        PurchaseSupplierId?: number;
        PurchaseInvoiceNo?: string;
        PurchaseDate?: string;
        PurchasePaymentAccount?: number;
        PurchaseDiscount?: number;
        PurchaseTotalDiscount?: number;
        PurchaseVat?: number;
        PurchaseTotalTax?: number;
        PurchaseShippingCost?: number;
        PurchaseGrandTotal?: number;
        PurchaseNetTotal?: number;
        PurchasePaidAmount?: number;
        PurchaseDue?: number;
        PurchaseChange?: number;
        PurchaseDetails?: string;
        PurchaseVNo?: number;
        PurchaseNoTax?: number;
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
    namespace GoodsreceiptRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeFullName";
        const localTextPrefix = "Inventory.Goodsreceipt";
        const deletePermission = "Inventory:Goods Receipt:Delete";
        const insertPermission = "Inventory:Goods Receipt:Create";
        const readPermission = "Inventory:Goods Receipt:View";
        const updatePermission = "Inventory:Goods Receipt:Update";
        const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            PurchaseId = "PurchaseId",
            Date = "Date",
            TotalQuantity = "TotalQuantity",
            EmployeenId = "EmployeenId",
            Remarks = "Remarks",
            JournalRemarks = "JournalRemarks",
            Reference = "Reference",
            PurchaseBill = "PurchaseBill",
            BranchesId = "BranchesId",
            BranchName = "BranchName",
            ProductsId = "ProductsId",
            EmployeeFullName = "EmployeeFullName",
            LineItems = "LineItems",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierSupplierGroupId = "SupplierSupplierGroupId",
            PurchaseSupplierId = "PurchaseSupplierId",
            PurchaseInvoiceNo = "PurchaseInvoiceNo",
            PurchaseDate = "PurchaseDate",
            PurchasePaymentAccount = "PurchasePaymentAccount",
            PurchaseDiscount = "PurchaseDiscount",
            PurchaseTotalDiscount = "PurchaseTotalDiscount",
            PurchaseVat = "PurchaseVat",
            PurchaseTotalTax = "PurchaseTotalTax",
            PurchaseShippingCost = "PurchaseShippingCost",
            PurchaseGrandTotal = "PurchaseGrandTotal",
            PurchaseNetTotal = "PurchaseNetTotal",
            PurchasePaidAmount = "PurchasePaidAmount",
            PurchaseDue = "PurchaseDue",
            PurchaseChange = "PurchaseChange",
            PurchaseDetails = "PurchaseDetails",
            PurchaseVNo = "PurchaseVNo",
            PurchaseNoTax = "PurchaseNoTax",
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
declare namespace CloudGarage.Inventory {
    namespace GoodsreceiptService {
        const baseUrl = "Inventory/Goodsreceipt";
        function Create(request: Serenity.SaveRequest<GoodsreceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsreceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsreceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsreceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Goodsreceipt/Create",
            Update = "Inventory/Goodsreceipt/Update",
            Delete = "Inventory/Goodsreceipt/Delete",
            Retrieve = "Inventory/Goodsreceipt/Retrieve",
            List = "Inventory/Goodsreceipt/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsreceiptdetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsreceiptdetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }
    class GoodsreceiptdetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface GoodsreceiptdetailsRow {
        Id?: number;
        GoodsReceiptId?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        Quantity?: number;
        WarehouseId?: number;
        GoodsReceiptGoodsReceiptId?: number;
        GoodsReceiptProductId?: number;
        GoodsReceiptProductName?: string;
        GoodsReceiptDescription?: string;
        GoodsReceiptQuantity?: number;
        GoodsReceiptWarehouseId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
    }
    namespace GoodsreceiptdetailsRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Inventory.Goodsreceiptdetails";
        const deletePermission = "Inventory:Goods Receipt:Delete";
        const insertPermission = "Inventory:Goods Receipt:Create";
        const readPermission = "Inventory:Goods Receipt:View";
        const updatePermission = "Inventory:Goods Receipt:Update";
        const enum Fields {
            Id = "Id",
            GoodsReceiptId = "GoodsReceiptId",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            Quantity = "Quantity",
            WarehouseId = "WarehouseId",
            GoodsReceiptGoodsReceiptId = "GoodsReceiptGoodsReceiptId",
            GoodsReceiptProductId = "GoodsReceiptProductId",
            GoodsReceiptProductName = "GoodsReceiptProductName",
            GoodsReceiptDescription = "GoodsReceiptDescription",
            GoodsReceiptQuantity = "GoodsReceiptQuantity",
            GoodsReceiptWarehouseId = "GoodsReceiptWarehouseId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace GoodsreceiptdetailsService {
        const baseUrl = "Inventory/Goodsreceiptdetails";
        function Create(request: Serenity.SaveRequest<GoodsreceiptdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GoodsreceiptdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsreceiptdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsreceiptdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Goodsreceiptdetails/Create",
            Update = "Inventory/Goodsreceiptdetails/Update",
            Delete = "Inventory/Goodsreceiptdetails/Delete",
            Retrieve = "Inventory/Goodsreceiptdetails/Retrieve",
            List = "Inventory/Goodsreceiptdetails/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace PermissionKeys {
    }
}
declare namespace CloudGarage.Inventory {
    class ProductsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface ProductsForm {
        Barcode: Serenity.StringEditor;
        Sn: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.DecimalEditor;
        UnitsOnOrder: Serenity.DecimalEditor;
        ReorderLevel: Serenity.DecimalEditor;
        CategoryId: CategoriesEditor;
        UnitId: Serenity.LookupEditor;
        BrandId: Serenity.LookupEditor;
        Image: Serenity.ImageUploadEditor;
        ProductDetails: Serenity.TextAreaEditor;
    }
    class ProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface ProductsRow {
        Id?: number;
        Barcode?: string;
        Sn?: string;
        ProductName?: string;
        Model?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        CategoryId?: number;
        UnitId?: number;
        BrandId?: number;
        Image?: string;
        ProductDetails?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        DeleteDate?: string;
        DeleteUserId?: number;
        IsActive?: number;
        BranchId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
        UnitName?: string;
        UnitDescription?: string;
        PurchasePrice?: number;
        BrandName?: string;
        BrandDescription?: string;
    }
    namespace ProductsRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Inventory.Products";
        const lookupKey = "Inventory.Products";
        function getLookup(): Q.Lookup<ProductsRow>;
        const deletePermission = "Inventory:Product:Delete";
        const insertPermission = "Inventory:Product:Create";
        const readPermission = "Inventory:Product:View";
        const updatePermission = "Inventory:Product:Update";
        const enum Fields {
            Id = "Id",
            Barcode = "Barcode",
            Sn = "Sn",
            ProductName = "ProductName",
            Model = "Model",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            CategoryId = "CategoryId",
            UnitId = "UnitId",
            BrandId = "BrandId",
            Image = "Image",
            ProductDetails = "ProductDetails",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            DeleteDate = "DeleteDate",
            DeleteUserId = "DeleteUserId",
            IsActive = "IsActive",
            BranchId = "BranchId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            PurchasePrice = "PurchasePrice",
            BrandName = "BrandName",
            BrandDescription = "BrandDescription"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace ProductsService {
        const baseUrl = "Inventory/Products";
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Products/Create",
            Update = "Inventory/Products/Update",
            Delete = "Inventory/Products/Delete",
            Retrieve = "Inventory/Products/Retrieve",
            List = "Inventory/Products/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    enum StatusKind {
        Pending = 1,
        Complete = 2
    }
}
declare namespace CloudGarage.Inventory {
    enum StatusKindTf {
        Pending = 1,
        Complete = 2
    }
}
declare namespace CloudGarage.Inventory {
    enum StockKind {
        IN = 1,
        OUT = 2
    }
}
declare namespace CloudGarage.Inventory {
    class StocksColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface StocksForm {
        ProductId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        CategoryId: CategoriesEditor;
        QtyIn: Serenity.DecimalEditor;
        QtyOut: Serenity.DecimalEditor;
        Stock: Serenity.DecimalEditor;
    }
    class StocksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface StocksRow {
        Id?: number;
        ProductId?: number;
        BranchId?: number;
        CategoryId?: number;
        QtyIn?: number;
        QtyOut?: number;
        Stock?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        BranchName?: string;
        BranchDescription?: string;
        BranchAddress?: string;
        BranchCity?: number;
        BranchState?: number;
        BranchCountry?: number;
        BranchEmail?: string;
        BranchPhone1?: string;
        BranchPhone2?: string;
        BranchUseBranchAddress?: number;
        BranchVatPercentage?: number;
        BranchLogo?: string;
        BranchInsertUserId?: number;
        BranchInsertDate?: string;
        BranchUpdateUserId?: number;
        BranchUpdateDate?: string;
        BranchDeleteUserId?: number;
        BranchDeleteDate?: string;
        BranchIsActive?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryParentCategoryId?: number;
    }
    namespace StocksRow {
        const idProperty = "Id";
        const localTextPrefix = "Inventory.Stocks";
        const deletePermission = "Inventory:Stocks:View";
        const insertPermission = "Inventory:Stocks:View";
        const readPermission = "Inventory:Stocks:View";
        const updatePermission = "Inventory:Stocks:View";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            BranchId = "BranchId",
            CategoryId = "CategoryId",
            QtyIn = "QtyIn",
            QtyOut = "QtyOut",
            Stock = "Stock",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            BranchName = "BranchName",
            BranchDescription = "BranchDescription",
            BranchAddress = "BranchAddress",
            BranchCity = "BranchCity",
            BranchState = "BranchState",
            BranchCountry = "BranchCountry",
            BranchEmail = "BranchEmail",
            BranchPhone1 = "BranchPhone1",
            BranchPhone2 = "BranchPhone2",
            BranchUseBranchAddress = "BranchUseBranchAddress",
            BranchVatPercentage = "BranchVatPercentage",
            BranchLogo = "BranchLogo",
            BranchInsertUserId = "BranchInsertUserId",
            BranchInsertDate = "BranchInsertDate",
            BranchUpdateUserId = "BranchUpdateUserId",
            BranchUpdateDate = "BranchUpdateDate",
            BranchDeleteUserId = "BranchDeleteUserId",
            BranchDeleteDate = "BranchDeleteDate",
            BranchIsActive = "BranchIsActive",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryParentCategoryId = "CategoryParentCategoryId"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace StocksService {
        const baseUrl = "Inventory/Stocks";
        function Create(request: Serenity.SaveRequest<StocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Stocks/Create",
            Update = "Inventory/Stocks/Update",
            Delete = "Inventory/Stocks/Delete",
            Retrieve = "Inventory/Stocks/Retrieve",
            List = "Inventory/Stocks/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class TransferdetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface TransferdetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
    }
    class TransferdetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface TransferdetailsRow {
        Id?: number;
        TransferId?: number;
        ProductId?: number;
        Quantity?: number;
        UnitPrice?: number;
        TransferVNo?: number;
        TransferFromBranchId?: number;
        TransferToBranchId?: number;
        TransferFromWarehouseId?: number;
        TransferToWarehouseId?: number;
        TransferStatus?: number;
        TransferTotalQuantity?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
    }
    namespace TransferdetailsRow {
        const idProperty = "Id";
        const nameProperty = "ProductId";
        const localTextPrefix = "Inventory.Transferdetails";
        const deletePermission = "Inventory:Transfers:Delete";
        const insertPermission = "Inventory:Transfers:Create";
        const readPermission = "Inventory:Transfers:View";
        const updatePermission = "Inventory:Transfers:Update";
        const enum Fields {
            Id = "Id",
            TransferId = "TransferId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            TransferVNo = "TransferVNo",
            TransferFromBranchId = "TransferFromBranchId",
            TransferToBranchId = "TransferToBranchId",
            TransferFromWarehouseId = "TransferFromWarehouseId",
            TransferToWarehouseId = "TransferToWarehouseId",
            TransferStatus = "TransferStatus",
            TransferTotalQuantity = "TransferTotalQuantity",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace TransferdetailsService {
        const baseUrl = "Inventory/Transferdetails";
        function Create(request: Serenity.SaveRequest<TransferdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransferdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Transferdetails/Create",
            Update = "Inventory/Transferdetails/Update",
            Delete = "Inventory/Transferdetails/Delete",
            Retrieve = "Inventory/Transferdetails/Retrieve",
            List = "Inventory/Transferdetails/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class TransfersColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface TransfersForm {
        FromBranchId: Serenity.LookupEditor;
        ToBranchId: Serenity.LookupEditor;
        FromWarehouseId: Serenity.LookupEditor;
        ToWarehouseId: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        LineItems: TransferDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
    }
    class TransfersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface TransfersRow {
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
    namespace TransfersRow {
        const idProperty = "Id";
        const localTextPrefix = "Inventory.Transfers";
        const deletePermission = "Inventory:Transfers:Delete";
        const insertPermission = "Inventory:Transfers:Create";
        const readPermission = "Inventory:Transfers:View";
        const updatePermission = "Inventory:Transfers:Update";
        const enum Fields {
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
declare namespace CloudGarage.Inventory {
    namespace TransfersService {
        const baseUrl = "Inventory/Transfers";
        function Create(request: Serenity.SaveRequest<TransfersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransfersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransfersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransfersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Transfers/Create",
            Update = "Inventory/Transfers/Update",
            Delete = "Inventory/Transfers/Delete",
            Retrieve = "Inventory/Transfers/Retrieve",
            List = "Inventory/Transfers/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class UnitsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface UnitsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class UnitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface UnitsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }
    namespace UnitsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Inventory.Units";
        const lookupKey = "Inventory.Units";
        function getLookup(): Q.Lookup<UnitsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace UnitsService {
        const baseUrl = "Inventory/Units";
        function Create(request: Serenity.SaveRequest<UnitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Units/Create",
            Update = "Inventory/Units/Update",
            Delete = "Inventory/Units/Delete",
            Retrieve = "Inventory/Units/Retrieve",
            List = "Inventory/Units/List"
        }
    }
}
declare namespace CloudGarage.Inventory {
    class UpdatestocksColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Inventory {
    interface UpdatestocksForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        BranchId: Serenity.LookupEditor;
        WarehouseId: Serenity.LookupEditor;
        StockMode: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
    }
    class UpdatestocksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Inventory {
    interface UpdatestocksRow {
        Id?: number;
        ProductId?: number;
        Quantity?: number;
        VNo?: number;
        BranchId?: number;
        WarehouseId?: number;
        Mode?: string;
        TransactionType?: string;
        Status?: StatusKind;
        Note?: string;
        InsertDate?: string;
        StockMode?: StockKind;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductBranchId?: number;
        BranchName?: string;
        BranchDescription?: string;
        BranchAddress?: string;
        BranchCity?: number;
        BranchState?: number;
        BranchCountry?: number;
        BranchEmail?: string;
        BranchPhone1?: string;
        BranchPhone2?: string;
        BranchUseBranchAddress?: number;
        BranchVatPercentage?: number;
        BranchLogo?: string;
        BranchInsertUserId?: number;
        BranchInsertDate?: string;
        BranchUpdateUserId?: number;
        BranchUpdateDate?: string;
        BranchDeleteUserId?: number;
        BranchDeleteDate?: string;
        BranchIsActive?: number;
        WarehouseName?: string;
        WarehouseDescription?: string;
        WarehouseCountryId?: number;
        WarehouseStateId?: number;
        WarehouseCityId?: number;
        WarehousePhone?: string;
        WarehouseAddress?: string;
    }
    namespace UpdatestocksRow {
        const idProperty = "Id";
        const nameProperty = "Mode";
        const localTextPrefix = "Inventory.Updatestocks";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Quantity = "Quantity",
            VNo = "VNo",
            BranchId = "BranchId",
            WarehouseId = "WarehouseId",
            Mode = "Mode",
            TransactionType = "TransactionType",
            Status = "Status",
            Note = "Note",
            InsertDate = "InsertDate",
            StockMode = "StockMode",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductBranchId = "ProductBranchId",
            BranchName = "BranchName",
            BranchDescription = "BranchDescription",
            BranchAddress = "BranchAddress",
            BranchCity = "BranchCity",
            BranchState = "BranchState",
            BranchCountry = "BranchCountry",
            BranchEmail = "BranchEmail",
            BranchPhone1 = "BranchPhone1",
            BranchPhone2 = "BranchPhone2",
            BranchUseBranchAddress = "BranchUseBranchAddress",
            BranchVatPercentage = "BranchVatPercentage",
            BranchLogo = "BranchLogo",
            BranchInsertUserId = "BranchInsertUserId",
            BranchInsertDate = "BranchInsertDate",
            BranchUpdateUserId = "BranchUpdateUserId",
            BranchUpdateDate = "BranchUpdateDate",
            BranchDeleteUserId = "BranchDeleteUserId",
            BranchDeleteDate = "BranchDeleteDate",
            BranchIsActive = "BranchIsActive",
            WarehouseName = "WarehouseName",
            WarehouseDescription = "WarehouseDescription",
            WarehouseCountryId = "WarehouseCountryId",
            WarehouseStateId = "WarehouseStateId",
            WarehouseCityId = "WarehouseCityId",
            WarehousePhone = "WarehousePhone",
            WarehouseAddress = "WarehouseAddress"
        }
    }
}
declare namespace CloudGarage.Inventory {
    namespace UpdatestocksService {
        const baseUrl = "Inventory/Updatestocks";
        function Create(request: Serenity.SaveRequest<UpdatestocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UpdatestocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UpdatestocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UpdatestocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventory/Updatestocks/Create",
            Update = "Inventory/Updatestocks/Update",
            Delete = "Inventory/Updatestocks/Delete",
            Retrieve = "Inventory/Updatestocks/Retrieve",
            List = "Inventory/Updatestocks/List"
        }
    }
}
declare namespace CloudGarage.JobCards {
    class GatepassesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.JobCards {
    interface GatepassesForm {
        JobCard: Serenity.LookupEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        VehicleOutDate: Serenity.DateEditor;
    }
    class GatepassesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.JobCards {
    interface GatepassesRow {
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
    namespace GatepassesRow {
        const idProperty = "Id";
        const localTextPrefix = "JobCards.Gatepasses";
        const lookupKey = "JobCards.Gatepasses";
        function getLookup(): Q.Lookup<GatepassesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.JobCards {
    namespace GatepassesService {
        const baseUrl = "JobCards/Gatepasses";
        function Create(request: Serenity.SaveRequest<GatepassesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GatepassesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GatepassesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GatepassesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "JobCards/Gatepasses/Create",
            Update = "JobCards/Gatepasses/Update",
            Delete = "JobCards/Gatepasses/Delete",
            Retrieve = "JobCards/Gatepasses/Retrieve",
            List = "JobCards/Gatepasses/List"
        }
    }
}
declare namespace CloudGarage.JobCards {
    class JobcarddetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.JobCards {
    interface JobcarddetailsForm {
        JobType: Serenity.LookupEditor;
        Mechanic: Serenity.LookupEditor;
        CustomerNotes: Serenity.TextAreaEditor;
    }
    class JobcarddetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.JobCards {
    interface JobcarddetailsRow {
        Id?: number;
        JobType?: number;
        JobOrder?: number;
        Mechanic?: number;
        CustomerNotes?: string;
        MechanicFullName?: string;
        JobTypeName?: string;
        JobOrderCustomer?: number;
        JobOrderWorkOrderNo?: string;
        JobOrderAddress?: string;
        JobOrderVehicle?: number;
        JobOrderPhone?: string;
        JobOrderReference?: string;
        JobOrderMobile?: string;
        JobOrderScheduleDatetime?: string;
        JobOrderWebsite?: string;
        JobOrderDeliveryDatetime?: string;
        JobOrderDetails?: string;
    }
    namespace JobcarddetailsRow {
        const idProperty = "Id";
        const nameProperty = "CustomerNotes";
        const localTextPrefix = "JobCards.Jobcarddetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            JobType = "JobType",
            JobOrder = "JobOrder",
            Mechanic = "Mechanic",
            CustomerNotes = "CustomerNotes",
            MechanicFullName = "MechanicFullName",
            JobTypeName = "JobTypeName",
            JobOrderCustomer = "JobOrderCustomer",
            JobOrderWorkOrderNo = "JobOrderWorkOrderNo",
            JobOrderAddress = "JobOrderAddress",
            JobOrderVehicle = "JobOrderVehicle",
            JobOrderPhone = "JobOrderPhone",
            JobOrderReference = "JobOrderReference",
            JobOrderMobile = "JobOrderMobile",
            JobOrderScheduleDatetime = "JobOrderScheduleDatetime",
            JobOrderWebsite = "JobOrderWebsite",
            JobOrderDeliveryDatetime = "JobOrderDeliveryDatetime",
            JobOrderDetails = "JobOrderDetails"
        }
    }
}
declare namespace CloudGarage.JobCards {
    namespace JobcarddetailsService {
        const baseUrl = "JobCards/Jobcarddetails";
        function Create(request: Serenity.SaveRequest<JobcarddetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JobcarddetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JobcarddetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JobcarddetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "JobCards/Jobcarddetails/Create",
            Update = "JobCards/Jobcarddetails/Update",
            Delete = "JobCards/Jobcarddetails/Delete",
            Retrieve = "JobCards/Jobcarddetails/Retrieve",
            List = "JobCards/Jobcarddetails/List"
        }
    }
}
declare namespace CloudGarage.JobCards {
    class JobcardsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.JobCards {
    interface JobcardsForm {
        Customer: Serenity.LookupEditor;
        WorkOrderNo: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Vehicle: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Reference: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        ScheduleDatetime: Serenity.DateEditor;
        Website: Serenity.StringEditor;
        DeliveryDatetime: Serenity.DateTimeEditor;
        BranchesId: Serenity.LookupEditor;
        JobCardDetails: JobCardDetailsEditor;
        Details: Serenity.TextAreaEditor;
    }
    class JobcardsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.JobCards {
    interface JobcardsRow {
        Id?: number;
        Customer?: number;
        WorkOrderNo?: string;
        Address?: string;
        BranchesId?: number;
        Vehicle?: number;
        Phone?: string;
        Reference?: string;
        Mobile?: string;
        ScheduleDatetime?: string;
        Website?: string;
        DeliveryDatetime?: string;
        Details?: string;
        BranchName?: string;
        JobCardDetails?: JobcarddetailsRow[];
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
    namespace JobcardsRow {
        const idProperty = "Id";
        const nameProperty = "WorkOrderNo";
        const localTextPrefix = "JobCards.Jobcards";
        const lookupKey = "JobCards.Jobcards";
        function getLookup(): Q.Lookup<JobcardsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Customer = "Customer",
            WorkOrderNo = "WorkOrderNo",
            Address = "Address",
            BranchesId = "BranchesId",
            Vehicle = "Vehicle",
            Phone = "Phone",
            Reference = "Reference",
            Mobile = "Mobile",
            ScheduleDatetime = "ScheduleDatetime",
            Website = "Website",
            DeliveryDatetime = "DeliveryDatetime",
            Details = "Details",
            BranchName = "BranchName",
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
declare namespace CloudGarage.JobCards {
    namespace JobcardsService {
        const baseUrl = "JobCards/Jobcards";
        function Create(request: Serenity.SaveRequest<JobcardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JobcardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JobcardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JobcardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: Serenity.Extensions.GetNextNumberRequest, onSuccess?: (response: Serenity.Extensions.GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "JobCards/Jobcards/Create",
            Update = "JobCards/Jobcards/Update",
            Delete = "JobCards/Jobcards/Delete",
            Retrieve = "JobCards/Jobcards/Retrieve",
            List = "JobCards/Jobcards/List",
            GetNextNumber = "JobCards/Jobcards/GetNextNumber"
        }
    }
}
declare namespace CloudGarage.Masters {
    class AgendaitemtypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface AgendaitemtypesForm {
        Name: Serenity.StringEditor;
    }
    class AgendaitemtypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface AgendaitemtypesRow {
        Id?: number;
        Name?: string;
    }
    namespace AgendaitemtypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Agendaitemtypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace AgendaitemtypesService {
        const baseUrl = "Masters/Agendaitemtypes";
        function Create(request: Serenity.SaveRequest<AgendaitemtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgendaitemtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgendaitemtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgendaitemtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Agendaitemtypes/Create",
            Update = "Masters/Agendaitemtypes/Update",
            Delete = "Masters/Agendaitemtypes/Delete",
            Retrieve = "Masters/Agendaitemtypes/Retrieve",
            List = "Masters/Agendaitemtypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class AssemblytypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface AssemblytypesForm {
        Name: Serenity.StringEditor;
    }
    class AssemblytypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface AssemblytypesRow {
        Id?: number;
        Name?: string;
    }
    namespace AssemblytypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Assemblytypes";
        const lookupKey = "Masters.Assemblytypes";
        function getLookup(): Q.Lookup<AssemblytypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace AssemblytypesService {
        const baseUrl = "Masters/Assemblytypes";
        function Create(request: Serenity.SaveRequest<AssemblytypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssemblytypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssemblytypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssemblytypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Assemblytypes/Create",
            Update = "Masters/Assemblytypes/Update",
            Delete = "Masters/Assemblytypes/Delete",
            Retrieve = "Masters/Assemblytypes/Retrieve",
            List = "Masters/Assemblytypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class AttendancestatusesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface AttendancestatusesForm {
        Name: Serenity.StringEditor;
    }
    class AttendancestatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface AttendancestatusesRow {
        Id?: number;
        Name?: string;
    }
    namespace AttendancestatusesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Attendancestatuses";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace AttendancestatusesService {
        const baseUrl = "Masters/Attendancestatuses";
        function Create(request: Serenity.SaveRequest<AttendancestatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendancestatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendancestatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendancestatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Attendancestatuses/Create",
            Update = "Masters/Attendancestatuses/Update",
            Delete = "Masters/Attendancestatuses/Delete",
            Retrieve = "Masters/Attendancestatuses/Retrieve",
            List = "Masters/Attendancestatuses/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class AttendeetypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface AttendeetypesForm {
        Name: Serenity.StringEditor;
    }
    class AttendeetypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface AttendeetypesRow {
        Id?: number;
        Name?: string;
    }
    namespace AttendeetypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Attendeetypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace AttendeetypesService {
        const baseUrl = "Masters/Attendeetypes";
        function Create(request: Serenity.SaveRequest<AttendeetypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendeetypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendeetypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendeetypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Attendeetypes/Create",
            Update = "Masters/Attendeetypes/Update",
            Delete = "Masters/Attendeetypes/Delete",
            Retrieve = "Masters/Attendeetypes/Retrieve",
            List = "Masters/Attendeetypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class BanksColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface BanksForm {
        BankName: Serenity.StringEditor;
        AcName: Serenity.StringEditor;
        AcNumber: Serenity.StringEditor;
        Branch: Serenity.StringEditor;
        SignaturePicture: Serenity.ImageUploadEditor;
    }
    class BanksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface BanksRow {
        Id?: number;
        BankName?: string;
        AcName?: string;
        AcNumber?: string;
        Branch?: string;
        SignaturePicture?: string;
    }
    namespace BanksRow {
        const idProperty = "Id";
        const nameProperty = "BankName";
        const localTextPrefix = "Masters.Banks";
        const lookupKey = "Masters.Banks";
        function getLookup(): Q.Lookup<BanksRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            BankName = "BankName",
            AcName = "AcName",
            AcNumber = "AcNumber",
            Branch = "Branch",
            SignaturePicture = "SignaturePicture"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace BanksService {
        const baseUrl = "Masters/Banks";
        function Create(request: Serenity.SaveRequest<BanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Banks/Create",
            Update = "Masters/Banks/Update",
            Delete = "Masters/Banks/Delete",
            Retrieve = "Masters/Banks/Retrieve",
            List = "Masters/Banks/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class BranchesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface BranchesForm {
        Name: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        State: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        VatPercentage: Serenity.DecimalEditor;
        Logo: Serenity.ImageUploadEditor;
        Address: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        UseBranchAddress: Serenity.BooleanEditor;
        Description: Serenity.TextAreaEditor;
    }
    class BranchesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface BranchesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Address?: string;
        City?: number;
        State?: number;
        Country?: number;
        Email?: string;
        Phone1?: string;
        Phone2?: string;
        UseBranchAddress?: number;
        VatPercentage?: number;
        Logo?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
        StateName?: string;
        StateCountryId?: number;
        CountryName?: string;
    }
    namespace BranchesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Branches";
        const lookupKey = "CloudGarage.Masters";
        function getLookup(): Q.Lookup<BranchesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Address = "Address",
            City = "City",
            State = "State",
            Country = "Country",
            Email = "Email",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            UseBranchAddress = "UseBranchAddress",
            VatPercentage = "VatPercentage",
            Logo = "Logo",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CountryName = "CountryName"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace BranchesService {
        const baseUrl = "Masters/Branches";
        function Create(request: Serenity.SaveRequest<BranchesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BranchesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BranchesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BranchesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Branches/Create",
            Update = "Masters/Branches/Update",
            Delete = "Masters/Branches/Delete",
            Retrieve = "Masters/Branches/Retrieve",
            List = "Masters/Branches/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class CitiesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface CitiesForm {
        Name: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        StateCode: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        CountryCode: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        WikiDataId: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        In: Serenity.StringEditor;
        InBy: Serenity.StringEditor;
        Up: Serenity.StringEditor;
        UpBy: Serenity.StringEditor;
    }
    class CitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface CitiesRow {
        Id?: number;
        Name?: string;
        StateId?: number;
        StateCode?: string;
        CountryId?: number;
        CountryCode?: string;
        Latitude?: number;
        Longitude?: number;
        WikiDataId?: string;
        Notes?: string;
        In?: number[];
        InBy?: string;
        Up?: number[];
        UpBy?: string;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
    }
    namespace CitiesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Cities";
        const lookupKey = "Masters.Cities";
        function getLookup(): Q.Lookup<CitiesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            StateId = "StateId",
            StateCode = "StateCode",
            CountryId = "CountryId",
            CountryCode = "CountryCode",
            Latitude = "Latitude",
            Longitude = "Longitude",
            WikiDataId = "WikiDataId",
            Notes = "Notes",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace CitiesService {
        const baseUrl = "Masters/Cities";
        function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Cities/Create",
            Update = "Masters/Cities/Update",
            Delete = "Masters/Cities/Delete",
            Retrieve = "Masters/Cities/Retrieve",
            List = "Masters/Cities/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class ColortypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface ColortypesForm {
        Name: Serenity.StringEditor;
    }
    class ColortypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface ColortypesRow {
        Id?: number;
        Name?: string;
    }
    namespace ColortypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Colortypes";
        const lookupKey = "Masters.Colortypes";
        function getLookup(): Q.Lookup<ColortypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace ColortypesService {
        const baseUrl = "Masters/Colortypes";
        function Create(request: Serenity.SaveRequest<ColortypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ColortypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ColortypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ColortypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Colortypes/Create",
            Update = "Masters/Colortypes/Update",
            Delete = "Masters/Colortypes/Delete",
            Retrieve = "Masters/Colortypes/Retrieve",
            List = "Masters/Colortypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class CompaniesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface CompaniesForm {
        CompanyName: Serenity.StringEditor;
        CompanyEmail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
        VatPercentage: Serenity.DecimalEditor;
        Logo: Serenity.ImageUploadEditor;
        SaleLogo: Serenity.ImageUploadEditor;
        Favicon: Serenity.ImageUploadEditor;
        CurrencyPosition: Serenity.EnumEditor;
        FooterText: Serenity.TextAreaEditor;
    }
    class CompaniesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface CompaniesRow {
        Id?: number;
        CompanyName?: string;
        CompanyEmail?: string;
        Address?: string;
        Phone?: string;
        CurrencyId?: number;
        VatPercentage?: number;
        Logo?: string;
        SaleLogo?: string;
        Favicon?: string;
        CurrencyPosition?: CurrencyPositionKind;
        FooterText?: string;
        CurrencyCurrencyName?: string;
        CurrencyCurrencySymbol?: string;
    }
    namespace CompaniesRow {
        const idProperty = "Id";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Masters.Companies";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            CompanyEmail = "CompanyEmail",
            Address = "Address",
            Phone = "Phone",
            CurrencyId = "CurrencyId",
            VatPercentage = "VatPercentage",
            Logo = "Logo",
            SaleLogo = "SaleLogo",
            Favicon = "Favicon",
            CurrencyPosition = "CurrencyPosition",
            FooterText = "FooterText",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyCurrencySymbol = "CurrencyCurrencySymbol"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace CompaniesService {
        const baseUrl = "Masters/Companies";
        function Create(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Companies/Create",
            Update = "Masters/Companies/Update",
            Delete = "Masters/Companies/Delete",
            Retrieve = "Masters/Companies/Retrieve",
            List = "Masters/Companies/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class CountriesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface CountriesForm {
        Name: Serenity.StringEditor;
        Iso3: Serenity.StringEditor;
        NumericCode: Serenity.StringEditor;
        Iso2: Serenity.StringEditor;
        PhoneCode: Serenity.StringEditor;
        Capital: Serenity.StringEditor;
        Currency: Serenity.StringEditor;
        CurrencySymbol: Serenity.StringEditor;
        Tld: Serenity.StringEditor;
        Native: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        SubRegion: Serenity.StringEditor;
        Timezones: Serenity.StringEditor;
        Translations: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        Emoji: Serenity.StringEditor;
        EmojiU: Serenity.StringEditor;
        WikiDataId: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        In: Serenity.StringEditor;
        InBy: Serenity.StringEditor;
        Up: Serenity.StringEditor;
        UpBy: Serenity.StringEditor;
    }
    class CountriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface CountriesRow {
        Id?: number;
        Name?: string;
        Iso3?: string;
        NumericCode?: string;
        Iso2?: string;
        PhoneCode?: string;
        Capital?: string;
        Currency?: string;
        CurrencySymbol?: string;
        Tld?: string;
        Native?: string;
        Region?: string;
        SubRegion?: string;
        Timezones?: string;
        Translations?: string;
        Latitude?: number;
        Longitude?: number;
        Emoji?: string;
        EmojiU?: string;
        WikiDataId?: string;
        Notes?: string;
        In?: number[];
        InBy?: string;
        Up?: number[];
        UpBy?: string;
    }
    namespace CountriesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Countries";
        const lookupKey = "Masters.Countries";
        function getLookup(): Q.Lookup<CountriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Iso3 = "Iso3",
            NumericCode = "NumericCode",
            Iso2 = "Iso2",
            PhoneCode = "PhoneCode",
            Capital = "Capital",
            Currency = "Currency",
            CurrencySymbol = "CurrencySymbol",
            Tld = "Tld",
            Native = "Native",
            Region = "Region",
            SubRegion = "SubRegion",
            Timezones = "Timezones",
            Translations = "Translations",
            Latitude = "Latitude",
            Longitude = "Longitude",
            Emoji = "Emoji",
            EmojiU = "EmojiU",
            WikiDataId = "WikiDataId",
            Notes = "Notes",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace CountriesService {
        const baseUrl = "Masters/Countries";
        function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Countries/Create",
            Update = "Masters/Countries/Update",
            Delete = "Masters/Countries/Delete",
            Retrieve = "Masters/Countries/Retrieve",
            List = "Masters/Countries/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class CurrenciesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface CurrenciesForm {
        CurrencyName: Serenity.StringEditor;
        CurrencySymbol: Serenity.StringEditor;
    }
    class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface CurrenciesRow {
        Id?: number;
        CurrencyName?: string;
        CurrencySymbol?: string;
    }
    namespace CurrenciesRow {
        const idProperty = "Id";
        const nameProperty = "CurrencyName";
        const localTextPrefix = "Masters.Currencies";
        const lookupKey = "Masters.Currencies";
        function getLookup(): Q.Lookup<CurrenciesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CurrencyName = "CurrencyName",
            CurrencySymbol = "CurrencySymbol"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace CurrenciesService {
        const baseUrl = "Masters/Currencies";
        function Create(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Currencies/Create",
            Update = "Masters/Currencies/Update",
            Delete = "Masters/Currencies/Delete",
            Retrieve = "Masters/Currencies/Retrieve",
            List = "Masters/Currencies/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    enum CurrencyPositionKind {
        Left = 1,
        Right = 2
    }
}
declare namespace CloudGarage.Masters {
    class CustomergroupsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface CustomergroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CustomergroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface CustomergroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }
    namespace CustomergroupsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Customergroups";
        const lookupKey = "Masters.CustomerGroups";
        function getLookup(): Q.Lookup<CustomergroupsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace CustomergroupsService {
        const baseUrl = "Masters/Customergroups";
        function Create(request: Serenity.SaveRequest<CustomergroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomergroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomergroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomergroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Customergroups/Create",
            Update = "Masters/Customergroups/Update",
            Delete = "Masters/Customergroups/Delete",
            Retrieve = "Masters/Customergroups/Retrieve",
            List = "Masters/Customergroups/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class ExpensestypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface ExpensestypesForm {
        Type: Serenity.StringEditor;
    }
    class ExpensestypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface ExpensestypesRow {
        Id?: number;
        Type?: string;
    }
    namespace ExpensestypesRow {
        const idProperty = "Id";
        const nameProperty = "Type";
        const localTextPrefix = "Masters.Expensestypes";
        const lookupKey = "Masters.Expensestypes";
        function getLookup(): Q.Lookup<ExpensestypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Type = "Type"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace ExpensestypesService {
        const baseUrl = "Masters/Expensestypes";
        function Create(request: Serenity.SaveRequest<ExpensestypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpensestypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpensestypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpensestypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Expensestypes/Create",
            Update = "Masters/Expensestypes/Update",
            Delete = "Masters/Expensestypes/Delete",
            Retrieve = "Masters/Expensestypes/Retrieve",
            List = "Masters/Expensestypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class FueltypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface FueltypesForm {
        Name: Serenity.StringEditor;
    }
    class FueltypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface FueltypesRow {
        Id?: number;
        Name?: string;
    }
    namespace FueltypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Fueltypes";
        const lookupKey = "Masters.Fueltypes";
        function getLookup(): Q.Lookup<FueltypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace FueltypesService {
        const baseUrl = "Masters/Fueltypes";
        function Create(request: Serenity.SaveRequest<FueltypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FueltypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FueltypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FueltypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Fueltypes/Create",
            Update = "Masters/Fueltypes/Update",
            Delete = "Masters/Fueltypes/Delete",
            Retrieve = "Masters/Fueltypes/Retrieve",
            List = "Masters/Fueltypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class JobcategoriesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface JobcategoriesForm {
        Name: Serenity.StringEditor;
    }
    class JobcategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface JobcategoriesRow {
        Id?: number;
        Name?: string;
    }
    namespace JobcategoriesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Jobcategories";
        const lookupKey = "Masters.Jobcategories";
        function getLookup(): Q.Lookup<JobcategoriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace JobcategoriesService {
        const baseUrl = "Masters/Jobcategories";
        function Create(request: Serenity.SaveRequest<JobcategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JobcategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JobcategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JobcategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Jobcategories/Create",
            Update = "Masters/Jobcategories/Update",
            Delete = "Masters/Jobcategories/Delete",
            Retrieve = "Masters/Jobcategories/Retrieve",
            List = "Masters/Jobcategories/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class JobtypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface JobtypesForm {
        JobCategory: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        StandardTiming: Serenity.DateEditor;
        IsInspectionList: Serenity.BooleanEditor;
    }
    class JobtypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface JobtypesRow {
        Id?: number;
        JobCategory?: number;
        Name?: string;
        Rate?: number;
        StandardTiming?: string;
        IsInspectionList?: number;
        JobCategoryName?: string;
    }
    namespace JobtypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Jobtypes";
        const lookupKey = "Masters.Jobtypes";
        function getLookup(): Q.Lookup<JobtypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            JobCategory = "JobCategory",
            Name = "Name",
            Rate = "Rate",
            StandardTiming = "StandardTiming",
            IsInspectionList = "IsInspectionList",
            JobCategoryName = "JobCategoryName"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace JobtypesService {
        const baseUrl = "Masters/Jobtypes";
        function Create(request: Serenity.SaveRequest<JobtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JobtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JobtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JobtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Jobtypes/Create",
            Update = "Masters/Jobtypes/Update",
            Delete = "Masters/Jobtypes/Delete",
            Retrieve = "Masters/Jobtypes/Retrieve",
            List = "Masters/Jobtypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class LocationsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface LocationsForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.IntegerEditor;
        StateId: Serenity.IntegerEditor;
        CityId: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Latitude: Serenity.StringEditor;
        Longitude: Serenity.StringEditor;
    }
    class LocationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface LocationsRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        Latitude?: string;
        Longitude?: string;
    }
    namespace LocationsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Locations";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            Latitude = "Latitude",
            Longitude = "Longitude"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace LocationsService {
        const baseUrl = "Masters/Locations";
        function Create(request: Serenity.SaveRequest<LocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Locations/Create",
            Update = "Masters/Locations/Update",
            Delete = "Masters/Locations/Delete",
            Retrieve = "Masters/Locations/Retrieve",
            List = "Masters/Locations/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class MeetingtypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface MeetingtypesForm {
        Name: Serenity.StringEditor;
    }
    class MeetingtypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface MeetingtypesRow {
        Id?: number;
        Name?: string;
    }
    namespace MeetingtypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Meetingtypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace MeetingtypesService {
        const baseUrl = "Masters/Meetingtypes";
        function Create(request: Serenity.SaveRequest<MeetingtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Meetingtypes/Create",
            Update = "Masters/Meetingtypes/Update",
            Delete = "Masters/Meetingtypes/Delete",
            Retrieve = "Masters/Meetingtypes/Retrieve",
            List = "Masters/Meetingtypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class RegionsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface RegionsForm {
        Name: Serenity.StringEditor;
    }
    class RegionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface RegionsRow {
        Id?: number;
        Name?: string;
    }
    namespace RegionsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Regions";
        const lookupKey = "Masters.Regions";
        function getLookup(): Q.Lookup<RegionsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace RegionsService {
        const baseUrl = "Masters/Regions";
        function Create(request: Serenity.SaveRequest<RegionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Regions/Create",
            Update = "Masters/Regions/Update",
            Delete = "Masters/Regions/Delete",
            Retrieve = "Masters/Regions/Retrieve",
            List = "Masters/Regions/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class ResolutionstatusesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface ResolutionstatusesForm {
        Name: Serenity.StringEditor;
    }
    class ResolutionstatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface ResolutionstatusesRow {
        Id?: number;
        Name?: string;
    }
    namespace ResolutionstatusesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Resolutionstatuses";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace ResolutionstatusesService {
        const baseUrl = "Masters/Resolutionstatuses";
        function Create(request: Serenity.SaveRequest<ResolutionstatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ResolutionstatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ResolutionstatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ResolutionstatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Resolutionstatuses/Create",
            Update = "Masters/Resolutionstatuses/Update",
            Delete = "Masters/Resolutionstatuses/Delete",
            Retrieve = "Masters/Resolutionstatuses/Retrieve",
            List = "Masters/Resolutionstatuses/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class ShippersColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface ShippersForm {
        CompanyName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }
    class ShippersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface ShippersRow {
        ShipperId?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShippersRow {
        const idProperty = "ShipperId";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Masters.Shippers";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ShipperId = "ShipperId",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace ShippersService {
        const baseUrl = "Masters/Shippers";
        function Create(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Shippers/Create",
            Update = "Masters/Shippers/Update",
            Delete = "Masters/Shippers/Delete",
            Retrieve = "Masters/Shippers/Retrieve",
            List = "Masters/Shippers/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class StatesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface StatesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        CountryCode: Serenity.StringEditor;
        FipsCode: Serenity.StringEditor;
        Iso2: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        WikiDataId: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        In: Serenity.StringEditor;
        InBy: Serenity.StringEditor;
        Up: Serenity.StringEditor;
        UpBy: Serenity.StringEditor;
    }
    class StatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface StatesRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        CountryCode?: string;
        FipsCode?: string;
        Iso2?: string;
        Latitude?: number;
        Longitude?: number;
        WikiDataId?: string;
        Notes?: string;
        In?: number[];
        InBy?: string;
        Up?: number[];
        UpBy?: string;
        CountryName?: string;
    }
    namespace StatesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.States";
        const lookupKey = "Masters.States";
        function getLookup(): Q.Lookup<StatesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            CountryCode = "CountryCode",
            FipsCode = "FipsCode",
            Iso2 = "Iso2",
            Latitude = "Latitude",
            Longitude = "Longitude",
            WikiDataId = "WikiDataId",
            Notes = "Notes",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            CountryName = "CountryName"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace StatesService {
        const baseUrl = "Masters/States";
        function Create(request: Serenity.SaveRequest<StatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/States/Create",
            Update = "Masters/States/Update",
            Delete = "Masters/States/Delete",
            Retrieve = "Masters/States/Retrieve",
            List = "Masters/States/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class SuppliergroupsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface SuppliergroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class SuppliergroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface SuppliergroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }
    namespace SuppliergroupsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Suppliergroups";
        const lookupKey = "Masters.SupplierGroups";
        function getLookup(): Q.Lookup<SuppliergroupsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace SuppliergroupsService {
        const baseUrl = "Masters/Suppliergroups";
        function Create(request: Serenity.SaveRequest<SuppliergroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuppliergroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliergroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliergroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Suppliergroups/Create",
            Update = "Masters/Suppliergroups/Update",
            Delete = "Masters/Suppliergroups/Delete",
            Retrieve = "Masters/Suppliergroups/Retrieve",
            List = "Masters/Suppliergroups/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class TerritoriesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface TerritoriesForm {
        TerritoryId: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionId: Serenity.LookupEditor;
    }
    class TerritoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface TerritoriesRow {
        Id?: number;
        TerritoryId?: string;
        TerritoryDescription?: string;
        RegionId?: number;
        RegionName?: string;
    }
    namespace TerritoriesRow {
        const idProperty = "Id";
        const nameProperty = "TerritoryId";
        const localTextPrefix = "Masters.Territories";
        const lookupKey = "Masters.Territories";
        function getLookup(): Q.Lookup<TerritoriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            TerritoryId = "TerritoryId",
            TerritoryDescription = "TerritoryDescription",
            RegionId = "RegionId",
            RegionName = "RegionName"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace TerritoriesService {
        const baseUrl = "Masters/Territories";
        function Create(request: Serenity.SaveRequest<TerritoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Territories/Create",
            Update = "Masters/Territories/Update",
            Delete = "Masters/Territories/Delete",
            Retrieve = "Masters/Territories/Retrieve",
            List = "Masters/Territories/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class VehiclemakesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface VehiclemakesForm {
        Name: Serenity.StringEditor;
    }
    class VehiclemakesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface VehiclemakesRow {
        Id?: number;
        Name?: string;
    }
    namespace VehiclemakesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Vehiclemakes";
        const lookupKey = "Masters.Vehiclemakes";
        function getLookup(): Q.Lookup<VehiclemakesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace VehiclemakesService {
        const baseUrl = "Masters/Vehiclemakes";
        function Create(request: Serenity.SaveRequest<VehiclemakesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehiclemakesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclemakesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclemakesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Vehiclemakes/Create",
            Update = "Masters/Vehiclemakes/Update",
            Delete = "Masters/Vehiclemakes/Delete",
            Retrieve = "Masters/Vehiclemakes/Retrieve",
            List = "Masters/Vehiclemakes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class VehiclemodelsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface VehiclemodelsForm {
        Name: Serenity.StringEditor;
    }
    class VehiclemodelsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface VehiclemodelsRow {
        Id?: number;
        Name?: string;
    }
    namespace VehiclemodelsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Vehiclemodels";
        const lookupKey = "Masters.Vehiclemodels";
        function getLookup(): Q.Lookup<VehiclemodelsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace VehiclemodelsService {
        const baseUrl = "Masters/Vehiclemodels";
        function Create(request: Serenity.SaveRequest<VehiclemodelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehiclemodelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclemodelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclemodelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Vehiclemodels/Create",
            Update = "Masters/Vehiclemodels/Update",
            Delete = "Masters/Vehiclemodels/Delete",
            Retrieve = "Masters/Vehiclemodels/Retrieve",
            List = "Masters/Vehiclemodels/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class VehicletypesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface VehicletypesForm {
        Name: Serenity.StringEditor;
    }
    class VehicletypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface VehicletypesRow {
        Id?: number;
        Name?: string;
    }
    namespace VehicletypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Vehicletypes";
        const lookupKey = "Masters.Vehicletypes";
        function getLookup(): Q.Lookup<VehicletypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace VehicletypesService {
        const baseUrl = "Masters/Vehicletypes";
        function Create(request: Serenity.SaveRequest<VehicletypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehicletypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicletypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicletypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Vehicletypes/Create",
            Update = "Masters/Vehicletypes/Update",
            Delete = "Masters/Vehicletypes/Delete",
            Retrieve = "Masters/Vehicletypes/Retrieve",
            List = "Masters/Vehicletypes/List"
        }
    }
}
declare namespace CloudGarage.Masters {
    class WarehousesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Masters {
    interface WarehousesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
    }
    class WarehousesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Masters {
    interface WarehousesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Phone?: string;
        Address?: string;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
    }
    namespace WarehousesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Masters.Warehouses";
        const lookupKey = "Masters.Warehouses";
        function getLookup(): Q.Lookup<WarehousesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Phone = "Phone",
            Address = "Address",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId"
        }
    }
}
declare namespace CloudGarage.Masters {
    namespace WarehousesService {
        const baseUrl = "Masters/Warehouses";
        function Create(request: Serenity.SaveRequest<WarehousesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WarehousesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WarehousesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WarehousesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Masters/Warehouses/Create",
            Update = "Masters/Warehouses/Update",
            Delete = "Masters/Warehouses/Delete",
            Retrieve = "Masters/Warehouses/Retrieve",
            List = "Masters/Warehouses/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingForm {
        MeetingName: Serenity.StringEditor;
        MeetingTypeId: Serenity.IntegerEditor;
        MeetingNumber: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        LocationId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
        OrganizerContactId: Serenity.IntegerEditor;
        ReporterContactId: Serenity.IntegerEditor;
        AttendeeList: Serenity.StringEditor;
    }
    class MeetingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingRow {
        MeetingId?: number;
        MeetingName?: string;
        MeetingNumber?: string;
        MeetingGuid?: string;
        MeetingTypeId?: number;
        StartDate?: string;
        EndDate?: string;
        LocationId?: number;
        UnitId?: number;
        OrganizerContactId?: number;
        ReporterContactId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        MeetingTypeName?: string;
        LocationName?: string;
        LocationAddress?: string;
        LocationLatitude?: number;
        LocationLongitude?: number;
        UnitName?: string;
        UnitParentUnitId?: number;
        OrganizerContactTitle?: string;
        OrganizerContactFirstName?: string;
        OrganizerContactLastName?: string;
        OrganizerContactEmail?: string;
        OrganizerContactIdentityNo?: string;
        OrganizerContactUserId?: number;
        ReporterContactTitle?: string;
        ReporterContactFirstName?: string;
        ReporterContactLastName?: string;
        ReporterContactEmail?: string;
        ReporterContactIdentityNo?: string;
        ReporterContactUserId?: number;
    }
    namespace MeetingRow {
        const idProperty = "MeetingId";
        const nameProperty = "MeetingName";
        const localTextPrefix = "Meeting.Meeting";
        const lookupKey = "Meeting.Meeting";
        function getLookup(): Q.Lookup<MeetingRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MeetingId = "MeetingId",
            MeetingName = "MeetingName",
            MeetingNumber = "MeetingNumber",
            MeetingGuid = "MeetingGuid",
            MeetingTypeId = "MeetingTypeId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            LocationId = "LocationId",
            UnitId = "UnitId",
            OrganizerContactId = "OrganizerContactId",
            ReporterContactId = "ReporterContactId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            MeetingTypeName = "MeetingTypeName",
            LocationName = "LocationName",
            LocationAddress = "LocationAddress",
            LocationLatitude = "LocationLatitude",
            LocationLongitude = "LocationLongitude",
            UnitName = "UnitName",
            UnitParentUnitId = "UnitParentUnitId",
            OrganizerContactTitle = "OrganizerContactTitle",
            OrganizerContactFirstName = "OrganizerContactFirstName",
            OrganizerContactLastName = "OrganizerContactLastName",
            OrganizerContactEmail = "OrganizerContactEmail",
            OrganizerContactIdentityNo = "OrganizerContactIdentityNo",
            OrganizerContactUserId = "OrganizerContactUserId",
            ReporterContactTitle = "ReporterContactTitle",
            ReporterContactFirstName = "ReporterContactFirstName",
            ReporterContactLastName = "ReporterContactLastName",
            ReporterContactEmail = "ReporterContactEmail",
            ReporterContactIdentityNo = "ReporterContactIdentityNo",
            ReporterContactUserId = "ReporterContactUserId"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingService {
        const baseUrl = "Meeting/Meeting";
        function Create(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meeting/Create",
            Update = "Meeting/Meeting/Update",
            Delete = "Meeting/Meeting/Delete",
            Retrieve = "Meeting/Meeting/Retrieve",
            List = "Meeting/Meeting/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendaColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingagendaForm {
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        AgendaTypeId: Serenity.LookupEditor;
        RequestedByContactId: Serenity.IntegerEditor;
        AgendaNumber: Serenity.IntegerEditor;
        Images: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
    }
    class MeetingagendaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingagendaRow {
        AgendaId?: number;
        MeetingId?: number;
        AgendaNumber?: number;
        Title?: string;
        Description?: number[];
        AgendaTypeId?: number;
        RequestedByContactId?: number;
        Images?: number[];
        Attachments?: number[];
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        AgendaTypeName?: string;
        RequestedByContactTitle?: string;
        RequestedByContactFirstName?: string;
        RequestedByContactLastName?: string;
        RequestedByContactEmail?: string;
        RequestedByContactIdentityNo?: string;
        RequestedByContactUserId?: number;
    }
    namespace MeetingagendaRow {
        const idProperty = "AgendaId";
        const nameProperty = "Title";
        const localTextPrefix = "Meeting.Meetingagenda";
        const lookupKey = "Meeting.Meetingagenda";
        function getLookup(): Q.Lookup<MeetingagendaRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AgendaId = "AgendaId",
            MeetingId = "MeetingId",
            AgendaNumber = "AgendaNumber",
            Title = "Title",
            Description = "Description",
            AgendaTypeId = "AgendaTypeId",
            RequestedByContactId = "RequestedByContactId",
            Images = "Images",
            Attachments = "Attachments",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingNumber = "MeetingMeetingNumber",
            MeetingMeetingGuid = "MeetingMeetingGuid",
            MeetingMeetingTypeId = "MeetingMeetingTypeId",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingLocationId = "MeetingLocationId",
            MeetingUnitId = "MeetingUnitId",
            MeetingOrganizerContactId = "MeetingOrganizerContactId",
            MeetingReporterContactId = "MeetingReporterContactId",
            MeetingInsertUserId = "MeetingInsertUserId",
            MeetingInsertDate = "MeetingInsertDate",
            MeetingUpdateUserId = "MeetingUpdateUserId",
            MeetingUpdateDate = "MeetingUpdateDate",
            AgendaTypeName = "AgendaTypeName",
            RequestedByContactTitle = "RequestedByContactTitle",
            RequestedByContactFirstName = "RequestedByContactFirstName",
            RequestedByContactLastName = "RequestedByContactLastName",
            RequestedByContactEmail = "RequestedByContactEmail",
            RequestedByContactIdentityNo = "RequestedByContactIdentityNo",
            RequestedByContactUserId = "RequestedByContactUserId"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingagendaService {
        const baseUrl = "Meeting/Meetingagenda";
        function Create(request: Serenity.SaveRequest<MeetingagendaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingagendaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingagendaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingagendaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetingagenda/Create",
            Update = "Meeting/Meetingagenda/Update",
            Delete = "Meeting/Meetingagenda/Delete",
            Retrieve = "Meeting/Meetingagenda/Retrieve",
            List = "Meeting/Meetingagenda/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendarelevantColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingagendarelevantForm {
        AgendaId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }
    class MeetingagendarelevantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingagendarelevantRow {
        AgendaRelevantId?: number;
        AgendaId?: number;
        ContactId?: number;
        AgendaMeetingId?: number;
        AgendaAgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: number[];
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: number[];
        AgendaAttachments?: number[];
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }
    namespace MeetingagendarelevantRow {
        const idProperty = "AgendaRelevantId";
        const localTextPrefix = "Meeting.Meetingagendarelevant";
        const lookupKey = "Meeting.Meetingagendarelevant";
        function getLookup(): Q.Lookup<MeetingagendarelevantRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AgendaRelevantId = "AgendaRelevantId",
            AgendaId = "AgendaId",
            ContactId = "ContactId",
            AgendaMeetingId = "AgendaMeetingId",
            AgendaAgendaNumber = "AgendaAgendaNumber",
            AgendaTitle = "AgendaTitle",
            AgendaDescription = "AgendaDescription",
            AgendaAgendaTypeId = "AgendaAgendaTypeId",
            AgendaRequestedByContactId = "AgendaRequestedByContactId",
            AgendaImages = "AgendaImages",
            AgendaAttachments = "AgendaAttachments",
            ContactTitle = "ContactTitle",
            ContactFirstName = "ContactFirstName",
            ContactLastName = "ContactLastName",
            ContactEmail = "ContactEmail",
            ContactIdentityNo = "ContactIdentityNo",
            ContactUserId = "ContactUserId"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingagendarelevantService {
        const baseUrl = "Meeting/Meetingagendarelevant";
        function Create(request: Serenity.SaveRequest<MeetingagendarelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingagendarelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingagendarelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingagendarelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetingagendarelevant/Create",
            Update = "Meeting/Meetingagendarelevant/Update",
            Delete = "Meeting/Meetingagendarelevant/Delete",
            Retrieve = "Meeting/Meetingagendarelevant/Retrieve",
            List = "Meeting/Meetingagendarelevant/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendatypeColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingagendatypeForm {
        Name: Serenity.StringEditor;
    }
    class MeetingagendatypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingagendatypeRow {
        AgendaTypeId?: number;
        Name?: string;
    }
    namespace MeetingagendatypeRow {
        const idProperty = "AgendaTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Meeting.Meetingagendatype";
        const lookupKey = "Meeting.Meetingagendatype";
        function getLookup(): Q.Lookup<MeetingagendatypeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AgendaTypeId = "AgendaTypeId",
            Name = "Name"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingagendatypeService {
        const baseUrl = "Meeting/Meetingagendatype";
        function Create(request: Serenity.SaveRequest<MeetingagendatypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingagendatypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingagendatypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingagendatypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetingagendatype/Create",
            Update = "Meeting/Meetingagendatype/Update",
            Delete = "Meeting/Meetingagendatype/Delete",
            Retrieve = "Meeting/Meetingagendatype/Retrieve",
            List = "Meeting/Meetingagendatype/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingattendeeColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingattendeeForm {
        MeetingId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
        AttendeeType: Serenity.IntegerEditor;
        AttendanceStatus: Serenity.IntegerEditor;
    }
    class MeetingattendeeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingattendeeRow {
        AttendeeId?: number;
        MeetingId?: number;
        ContactId?: number;
        AttendeeType?: number;
        AttendanceStatus?: number;
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }
    namespace MeetingattendeeRow {
        const idProperty = "AttendeeId";
        const localTextPrefix = "Meeting.Meetingattendee";
        const lookupKey = "Meeting.Meetingattendee";
        function getLookup(): Q.Lookup<MeetingattendeeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AttendeeId = "AttendeeId",
            MeetingId = "MeetingId",
            ContactId = "ContactId",
            AttendeeType = "AttendeeType",
            AttendanceStatus = "AttendanceStatus",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingNumber = "MeetingMeetingNumber",
            MeetingMeetingGuid = "MeetingMeetingGuid",
            MeetingMeetingTypeId = "MeetingMeetingTypeId",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingLocationId = "MeetingLocationId",
            MeetingUnitId = "MeetingUnitId",
            MeetingOrganizerContactId = "MeetingOrganizerContactId",
            MeetingReporterContactId = "MeetingReporterContactId",
            MeetingInsertUserId = "MeetingInsertUserId",
            MeetingInsertDate = "MeetingInsertDate",
            MeetingUpdateUserId = "MeetingUpdateUserId",
            MeetingUpdateDate = "MeetingUpdateDate",
            ContactTitle = "ContactTitle",
            ContactFirstName = "ContactFirstName",
            ContactLastName = "ContactLastName",
            ContactEmail = "ContactEmail",
            ContactIdentityNo = "ContactIdentityNo",
            ContactUserId = "ContactUserId"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingattendeeService {
        const baseUrl = "Meeting/Meetingattendee";
        function Create(request: Serenity.SaveRequest<MeetingattendeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingattendeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingattendeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingattendeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetingattendee/Create",
            Update = "Meeting/Meetingattendee/Update",
            Delete = "Meeting/Meetingattendee/Delete",
            Retrieve = "Meeting/Meetingattendee/Retrieve",
            List = "Meeting/Meetingattendee/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingdecisionColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingdecisionForm {
        MeetingId: Serenity.IntegerEditor;
        AgendaId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        DecisionNumber: Serenity.IntegerEditor;
        ResponsibleContactId: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        ResolutionStatus: Serenity.IntegerEditor;
        Images: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
    }
    class MeetingdecisionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingdecisionRow {
        DecisionId?: number;
        MeetingId?: number;
        AgendaId?: number;
        Description?: number[];
        DecisionNumber?: number;
        ResponsibleContactId?: number;
        DueDate?: string;
        ResolutionStatus?: number;
        Images?: number[];
        Attachments?: number[];
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        AgendaMeetingId?: number;
        AgendaAgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: number[];
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: number[];
        AgendaAttachments?: number[];
        DecisionNumberName?: string;
        ResponsibleContactTitle?: string;
        ResponsibleContactFirstName?: string;
        ResponsibleContactLastName?: string;
        ResponsibleContactEmail?: string;
        ResponsibleContactIdentityNo?: string;
        ResponsibleContactUserId?: number;
    }
    namespace MeetingdecisionRow {
        const idProperty = "DecisionId";
        const localTextPrefix = "Meeting.Meetingdecision";
        const lookupKey = "Meeting.Meetingdecision";
        function getLookup(): Q.Lookup<MeetingdecisionRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DecisionId = "DecisionId",
            MeetingId = "MeetingId",
            AgendaId = "AgendaId",
            Description = "Description",
            DecisionNumber = "DecisionNumber",
            ResponsibleContactId = "ResponsibleContactId",
            DueDate = "DueDate",
            ResolutionStatus = "ResolutionStatus",
            Images = "Images",
            Attachments = "Attachments",
            MeetingMeetingName = "MeetingMeetingName",
            MeetingMeetingNumber = "MeetingMeetingNumber",
            MeetingMeetingGuid = "MeetingMeetingGuid",
            MeetingMeetingTypeId = "MeetingMeetingTypeId",
            MeetingStartDate = "MeetingStartDate",
            MeetingEndDate = "MeetingEndDate",
            MeetingLocationId = "MeetingLocationId",
            MeetingUnitId = "MeetingUnitId",
            MeetingOrganizerContactId = "MeetingOrganizerContactId",
            MeetingReporterContactId = "MeetingReporterContactId",
            MeetingInsertUserId = "MeetingInsertUserId",
            MeetingInsertDate = "MeetingInsertDate",
            MeetingUpdateUserId = "MeetingUpdateUserId",
            MeetingUpdateDate = "MeetingUpdateDate",
            AgendaMeetingId = "AgendaMeetingId",
            AgendaAgendaNumber = "AgendaAgendaNumber",
            AgendaTitle = "AgendaTitle",
            AgendaDescription = "AgendaDescription",
            AgendaAgendaTypeId = "AgendaAgendaTypeId",
            AgendaRequestedByContactId = "AgendaRequestedByContactId",
            AgendaImages = "AgendaImages",
            AgendaAttachments = "AgendaAttachments",
            DecisionNumberName = "DecisionNumberName",
            ResponsibleContactTitle = "ResponsibleContactTitle",
            ResponsibleContactFirstName = "ResponsibleContactFirstName",
            ResponsibleContactLastName = "ResponsibleContactLastName",
            ResponsibleContactEmail = "ResponsibleContactEmail",
            ResponsibleContactIdentityNo = "ResponsibleContactIdentityNo",
            ResponsibleContactUserId = "ResponsibleContactUserId"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingdecisionService {
        const baseUrl = "Meeting/Meetingdecision";
        function Create(request: Serenity.SaveRequest<MeetingdecisionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingdecisionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingdecisionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingdecisionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetingdecision/Create",
            Update = "Meeting/Meetingdecision/Update",
            Delete = "Meeting/Meetingdecision/Delete",
            Retrieve = "Meeting/Meetingdecision/Retrieve",
            List = "Meeting/Meetingdecision/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingdecisionrelevantColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingdecisionrelevantForm {
        DecisionId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }
    class MeetingdecisionrelevantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingdecisionrelevantRow {
        DecisionRelevantId?: number;
        DecisionId?: number;
        ContactId?: number;
        DecisionMeetingId?: number;
        DecisionAgendaId?: number;
        DecisionDescription?: number[];
        DecisionDecisionNumber?: number;
        DecisionResponsibleContactId?: number;
        DecisionDueDate?: string;
        DecisionResolutionStatus?: number;
        DecisionImages?: number[];
        DecisionAttachments?: number[];
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }
    namespace MeetingdecisionrelevantRow {
        const idProperty = "DecisionRelevantId";
        const localTextPrefix = "Meeting.Meetingdecisionrelevant";
        const lookupKey = "Meeting.Meetingdecisionrelevant";
        function getLookup(): Q.Lookup<MeetingdecisionrelevantRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DecisionRelevantId = "DecisionRelevantId",
            DecisionId = "DecisionId",
            ContactId = "ContactId",
            DecisionMeetingId = "DecisionMeetingId",
            DecisionAgendaId = "DecisionAgendaId",
            DecisionDescription = "DecisionDescription",
            DecisionDecisionNumber = "DecisionDecisionNumber",
            DecisionResponsibleContactId = "DecisionResponsibleContactId",
            DecisionDueDate = "DecisionDueDate",
            DecisionResolutionStatus = "DecisionResolutionStatus",
            DecisionImages = "DecisionImages",
            DecisionAttachments = "DecisionAttachments",
            ContactTitle = "ContactTitle",
            ContactFirstName = "ContactFirstName",
            ContactLastName = "ContactLastName",
            ContactEmail = "ContactEmail",
            ContactIdentityNo = "ContactIdentityNo",
            ContactUserId = "ContactUserId"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingdecisionrelevantService {
        const baseUrl = "Meeting/Meetingdecisionrelevant";
        function Create(request: Serenity.SaveRequest<MeetingdecisionrelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingdecisionrelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingdecisionrelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingdecisionrelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetingdecisionrelevant/Create",
            Update = "Meeting/Meetingdecisionrelevant/Update",
            Delete = "Meeting/Meetingdecisionrelevant/Delete",
            Retrieve = "Meeting/Meetingdecisionrelevant/Retrieve",
            List = "Meeting/Meetingdecisionrelevant/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetinglocationColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetinglocationForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
    }
    class MeetinglocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetinglocationRow {
        LocationId?: number;
        Name?: string;
        Address?: string;
        Latitude?: number;
        Longitude?: number;
    }
    namespace MeetinglocationRow {
        const idProperty = "LocationId";
        const nameProperty = "Name";
        const localTextPrefix = "Meeting.Meetinglocation";
        const lookupKey = "Meeting.Meetinglocation";
        function getLookup(): Q.Lookup<MeetinglocationRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LocationId = "LocationId",
            Name = "Name",
            Address = "Address",
            Latitude = "Latitude",
            Longitude = "Longitude"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetinglocationService {
        const baseUrl = "Meeting/Meetinglocation";
        function Create(request: Serenity.SaveRequest<MeetinglocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetinglocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetinglocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetinglocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetinglocation/Create",
            Update = "Meeting/Meetinglocation/Update",
            Delete = "Meeting/Meetinglocation/Delete",
            Retrieve = "Meeting/Meetinglocation/Retrieve",
            List = "Meeting/Meetinglocation/List"
        }
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingsForm {
        MeetingName: Serenity.StringEditor;
        MeetingType: Serenity.IntegerEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Department: Serenity.IntegerEditor;
        Location: Serenity.IntegerEditor;
        OrganizedBy: Serenity.IntegerEditor;
        Reporter: Serenity.IntegerEditor;
    }
    class MeetingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Meeting {
    interface MeetingsRow {
        Id?: number;
        MeetingName?: string;
        MeetingType?: number;
        StartDate?: string;
        EndDate?: string;
        Department?: number;
        Location?: number;
        OrganizedBy?: number;
        Reporter?: number;
    }
    namespace MeetingsRow {
        const idProperty = "Id";
        const nameProperty = "MeetingName";
        const localTextPrefix = "Meeting.Meetings";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            MeetingName = "MeetingName",
            MeetingType = "MeetingType",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Department = "Department",
            Location = "Location",
            OrganizedBy = "OrganizedBy",
            Reporter = "Reporter"
        }
    }
}
declare namespace CloudGarage.Meeting {
    namespace MeetingsService {
        const baseUrl = "Meeting/Meetings";
        function Create(request: Serenity.SaveRequest<MeetingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meeting/Meetings/Create",
            Update = "Meeting/Meetings/Update",
            Delete = "Meeting/Meetings/Delete",
            Retrieve = "Meeting/Meetings/Retrieve",
            List = "Meeting/Meetings/List"
        }
    }
}
declare namespace CloudGarage.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CloudGarage.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace CloudGarage.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace CloudGarage.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CloudGarage.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace CloudGarage.Note {
    class NoteColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Note {
    interface NoteForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.IntegerEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserDisplayName: Serenity.StringEditor;
    }
    class NoteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Note {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Note.Note";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace CloudGarage.Note {
    namespace NoteService {
        const baseUrl = "Note/Note";
        function Create(request: Serenity.SaveRequest<NoteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NoteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NoteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NoteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Note/Note/Create",
            Update = "Note/Note/Update",
            Delete = "Note/Note/Delete",
            Retrieve = "Note/Note/Retrieve",
            List = "Note/Note/List"
        }
    }
}
declare namespace CloudGarage.Purchasing {
    interface PickOrderForm {
        CustomerId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: PickOrderDetailsEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Purchasing {
    interface PickerOrderFormPurchase {
        CustomerId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: PickerOrderDetailsEditor1;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickerOrderFormPurchase extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchaseColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Purchasing {
    interface PurchaseForm {
        SupplierId: Serenity.LookupEditor;
        InvoiceNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: PickOrderDetailsEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PurchaseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Purchasing {
    interface PurchaseRow {
        Id?: number;
        SupplierId?: number;
        InvoiceNo?: string;
        Date?: string;
        PaymentAccount?: number;
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
        VNo?: number;
        NoTax?: number;
        BranchName?: string;
        BranchesId?: number;
        In?: string;
        InBy?: number;
        Up?: string;
        UpBy?: number;
        LineItems?: PurchasedetailsRow[];
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
        SupplierSupplierGroupId?: number;
        PaymentAccountHeadCode?: number;
        PaymentAccountHeadName?: string;
        PaymentAccountParentHead?: number;
        PaymentAccountPHeadName?: string;
        PaymentAccountHeadLevel?: number;
        PaymentAccountHeadType?: string;
        PaymentAccountIsTransaction?: number;
        PaymentAccountIsGl?: number;
        PaymentAccountIsBudget?: number;
        PaymentAccountIsDepreciation?: number;
        PaymentAccountCustomerId?: number;
        PaymentAccountSupplierId?: number;
        PaymentAccountDepreciationRate?: number;
    }
    namespace PurchaseRow {
        const idProperty = "Id";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Purchasing.Purchase";
        const lookupKey = "Purchasing.Purchase";
        function getLookup(): Q.Lookup<PurchaseRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            InvoiceNo = "InvoiceNo",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
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
            VNo = "VNo",
            NoTax = "NoTax",
            BranchName = "BranchName",
            BranchesId = "BranchesId",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            LineItems = "LineItems",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance",
            SupplierSupplierGroupId = "SupplierSupplierGroupId",
            PaymentAccountHeadCode = "PaymentAccountHeadCode",
            PaymentAccountHeadName = "PaymentAccountHeadName",
            PaymentAccountParentHead = "PaymentAccountParentHead",
            PaymentAccountPHeadName = "PaymentAccountPHeadName",
            PaymentAccountHeadLevel = "PaymentAccountHeadLevel",
            PaymentAccountHeadType = "PaymentAccountHeadType",
            PaymentAccountIsTransaction = "PaymentAccountIsTransaction",
            PaymentAccountIsGl = "PaymentAccountIsGl",
            PaymentAccountIsBudget = "PaymentAccountIsBudget",
            PaymentAccountIsDepreciation = "PaymentAccountIsDepreciation",
            PaymentAccountCustomerId = "PaymentAccountCustomerId",
            PaymentAccountSupplierId = "PaymentAccountSupplierId",
            PaymentAccountDepreciationRate = "PaymentAccountDepreciationRate"
        }
    }
}
declare namespace CloudGarage.Purchasing {
    namespace PurchaseService {
        const baseUrl = "Purchasing/Purchase";
        function Create(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchasing/Purchase/Create",
            Update = "Purchasing/Purchase/Update",
            Delete = "Purchasing/Purchase/Delete",
            Retrieve = "Purchasing/Purchase/Retrieve",
            List = "Purchasing/Purchase/List"
        }
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchasedetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Purchasing {
    interface PurchasedetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class PurchasedetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Purchasing {
    interface PurchasedetailsRow {
        Id?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        UnitId?: number;
        UnitName?: string;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        PurchaseId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductQuantityPerUnit?: number;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        UnitUnitName?: string;
    }
    namespace PurchasedetailsRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Purchasing.Purchasedetails";
        const lookupKey = "Purchasing.Purchasedetails";
        function getLookup(): Q.Lookup<PurchasedetailsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            UnitId = "UnitId",
            UnitName = "UnitName",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            PurchaseId = "PurchaseId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            UnitUnitName = "UnitUnitName"
        }
    }
}
declare namespace CloudGarage.Purchasing {
    namespace PurchasedetailsService {
        const baseUrl = "Purchasing/Purchasedetails";
        function Create(request: Serenity.SaveRequest<PurchasedetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchasedetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchasedetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchasedetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchasing/Purchasedetails/Create",
            Update = "Purchasing/Purchasedetails/Update",
            Delete = "Purchasing/Purchasedetails/Delete",
            Retrieve = "Purchasing/Purchasedetails/Retrieve",
            List = "Purchasing/Purchasedetails/List"
        }
    }
}
declare namespace CloudGarage.Quotations {
    interface PickJobTypeForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.IntegerEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickJobTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Quotations {
    interface PickOrderForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.IntegerEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationdetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Quotations {
    interface QuotationdetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class QuotationdetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Quotations {
    interface QuotationdetailsRow {
        Id?: number;
        ProductId?: number;
        Description?: string;
        ProductName?: string;
        UnitName?: string;
        UnitId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        QuotationId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        UnitUnitName?: string;
        UnitDescription?: string;
        UnitInsertDate?: string;
        UnitInsertUserId?: number;
        UnitUpdateDate?: string;
        UnitUpdateUserId?: number;
        UnitDeleteDate?: string;
        UnitDeleteUserId?: number;
        UnitIsActive?: number;
        QuotationCustomerId?: number;
        QuotationDate?: string;
        QuotationDiscount?: number;
        QuotationTotalDiscount?: number;
        QuotationVat?: number;
        QuotationTotalTax?: number;
        QuotationShippingCost?: number;
        QuotationGrandTotal?: number;
        QuotationNetTotal?: number;
        QuotationDetails?: string;
        QuotationExpiryDate?: string;
    }
    namespace QuotationdetailsRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Quotations.Quotationdetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Description = "Description",
            ProductName = "ProductName",
            UnitName = "UnitName",
            UnitId = "UnitId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            QuotationId = "QuotationId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            UnitUnitName = "UnitUnitName",
            UnitDescription = "UnitDescription",
            UnitInsertDate = "UnitInsertDate",
            UnitInsertUserId = "UnitInsertUserId",
            UnitUpdateDate = "UnitUpdateDate",
            UnitUpdateUserId = "UnitUpdateUserId",
            UnitDeleteDate = "UnitDeleteDate",
            UnitDeleteUserId = "UnitDeleteUserId",
            UnitIsActive = "UnitIsActive",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationDate = "QuotationDate",
            QuotationDiscount = "QuotationDiscount",
            QuotationTotalDiscount = "QuotationTotalDiscount",
            QuotationVat = "QuotationVat",
            QuotationTotalTax = "QuotationTotalTax",
            QuotationShippingCost = "QuotationShippingCost",
            QuotationGrandTotal = "QuotationGrandTotal",
            QuotationNetTotal = "QuotationNetTotal",
            QuotationDetails = "QuotationDetails",
            QuotationExpiryDate = "QuotationExpiryDate"
        }
    }
}
declare namespace CloudGarage.Quotations {
    namespace QuotationdetailsService {
        const baseUrl = "Quotations/Quotationdetails";
        function Create(request: Serenity.SaveRequest<QuotationdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QuotationdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Quotations/Quotationdetails/Create",
            Update = "Quotations/Quotationdetails/Update",
            Delete = "Quotations/Quotationdetails/Delete",
            Retrieve = "Quotations/Quotationdetails/Retrieve",
            List = "Quotations/Quotationdetails/List"
        }
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationjobitemsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Quotations {
    interface QuotationjobitemsForm {
        JobType: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class QuotationjobitemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Quotations {
    interface QuotationjobitemsRow {
        Id?: number;
        JobType?: number;
        Description?: string;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        QuotationId?: number;
        JobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: boolean;
        QuotationCustomerId?: number;
        QuotationVehicle?: number;
        QuotationDate?: string;
        QuotationDiscount?: number;
        QuotationTotalDiscount?: number;
        QuotationVat?: number;
        QuotationTotalTax?: number;
        QuotationShippingCost?: number;
        QuotationGrandTotal?: number;
        QuotationNetTotal?: number;
        QuotationDetails?: string;
        QuotationExpiryDate?: string;
    }
    namespace QuotationjobitemsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Quotations.Quotationjobitems";
        const lookupKey = "Quotations.Quotationjobitems";
        function getLookup(): Q.Lookup<QuotationjobitemsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            JobType = "JobType",
            Description = "Description",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            QuotationId = "QuotationId",
            JobCategory = "JobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationVehicle = "QuotationVehicle",
            QuotationDate = "QuotationDate",
            QuotationDiscount = "QuotationDiscount",
            QuotationTotalDiscount = "QuotationTotalDiscount",
            QuotationVat = "QuotationVat",
            QuotationTotalTax = "QuotationTotalTax",
            QuotationShippingCost = "QuotationShippingCost",
            QuotationGrandTotal = "QuotationGrandTotal",
            QuotationNetTotal = "QuotationNetTotal",
            QuotationDetails = "QuotationDetails",
            QuotationExpiryDate = "QuotationExpiryDate"
        }
    }
}
declare namespace CloudGarage.Quotations {
    namespace QuotationjobitemsService {
        const baseUrl = "Quotations/Quotationjobitems";
        function Create(request: Serenity.SaveRequest<QuotationjobitemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QuotationjobitemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationjobitemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationjobitemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Quotations/Quotationjobitems/Create",
            Update = "Quotations/Quotationjobitems/Update",
            Delete = "Quotations/Quotationjobitems/Delete",
            Retrieve = "Quotations/Quotationjobitems/Retrieve",
            List = "Quotations/Quotationjobitems/List"
        }
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Quotations {
    interface QuotationsForm {
        CustomerId: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        Jobs: QuotationJobItemsEditor;
        LineItems: PickProductDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class QuotationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Quotations {
    interface QuotationsRow {
        Id?: number;
        CustomerId?: number;
        Vehicle?: number;
        Date?: string;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        Details?: string;
        ExpiryDate?: string;
        BranchesId?: number;
        BranchName?: string;
        LineItems?: QuotationdetailsRow[];
        Jobs?: QuotationjobitemsRow[];
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
    namespace QuotationsRow {
        const idProperty = "Id";
        const nameProperty = "Date";
        const localTextPrefix = "Quotations.Quotations";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Vehicle = "Vehicle",
            Date = "Date",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            Details = "Details",
            ExpiryDate = "ExpiryDate",
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
declare namespace CloudGarage.Quotations {
    namespace QuotationsService {
        const baseUrl = "Quotations/Quotations";
        function Create(request: Serenity.SaveRequest<QuotationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QuotationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Quotations/Quotations/Create",
            Update = "Quotations/Quotations/Update",
            Delete = "Quotations/Quotations/Delete",
            Retrieve = "Quotations/Quotations/Retrieve",
            List = "Quotations/Quotations/List"
        }
    }
}
declare namespace CloudGarage.Reports {
    class CustomerReceivableReportColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Reports {
    class DailyclosingColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Reports {
    interface DailyclosingForm {
        Date: Serenity.DateEditor;
        LastDayClosing: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }
    class DailyclosingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Reports {
    interface DailyclosingRow {
        Id?: number;
        LastDayClosing?: number;
        CashIn?: number;
        CashOut?: number;
        Date?: string;
        Amount?: number;
        Adjustment?: number;
        Status?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        BranchId?: number;
        LastClosingAmount?: number;
        TodayCashIn?: number;
        TodayCashOut?: number;
        LastClosingDate?: string;
    }
    namespace DailyclosingRow {
        const idProperty = "Id";
        const localTextPrefix = "Reports.Dailyclosing";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            LastDayClosing = "LastDayClosing",
            CashIn = "CashIn",
            CashOut = "CashOut",
            Date = "Date",
            Amount = "Amount",
            Adjustment = "Adjustment",
            Status = "Status",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            BranchId = "BranchId",
            LastClosingAmount = "LastClosingAmount",
            TodayCashIn = "TodayCashIn",
            TodayCashOut = "TodayCashOut",
            LastClosingDate = "LastClosingDate"
        }
    }
}
declare namespace CloudGarage.Reports {
    namespace DailyclosingService {
        const baseUrl = "Reports/Dailyclosing";
        function Create(request: Serenity.SaveRequest<DailyclosingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DailyclosingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DailyclosingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DailyclosingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Reports/Dailyclosing/Create",
            Update = "Reports/Dailyclosing/Update",
            Delete = "Reports/Dailyclosing/Delete",
            Retrieve = "Reports/Dailyclosing/Retrieve",
            List = "Reports/Dailyclosing/List"
        }
    }
}
declare namespace CloudGarage.Reports {
    class StockReportColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Reports {
    class SupplierPayableReportColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Sales {
    interface PickerOrderForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickerOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Sales {
    class SaledetailsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Sales {
    interface SaledetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class SaledetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Sales {
    interface SaledetailsRow {
        Id?: number;
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        UnitId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        UnitName?: string;
        SaleId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductQuantityPerUnit?: number;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        SaleCustomerId?: number;
        SaleDate?: string;
        SalePaymentType?: number;
        SaleBankId?: number;
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
        UnitUnitName?: string;
        BranchId?: number;
    }
    namespace SaledetailsRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Sales.Saledetails";
        const lookupKey = "Sales.Saledetails";
        function getLookup(): Q.Lookup<SaledetailsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            UnitId = "UnitId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            UnitName = "UnitName",
            SaleId = "SaleId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            SaleCustomerId = "SaleCustomerId",
            SaleDate = "SaleDate",
            SalePaymentType = "SalePaymentType",
            SaleBankId = "SaleBankId",
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
            UnitUnitName = "UnitUnitName",
            BranchId = "BranchId"
        }
    }
}
declare namespace CloudGarage.Sales {
    namespace SaledetailsService {
        const baseUrl = "Sales/Saledetails";
        function Create(request: Serenity.SaveRequest<SaledetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaledetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaledetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaledetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Saledetails/Create",
            Update = "Sales/Saledetails/Update",
            Delete = "Sales/Saledetails/Delete",
            Retrieve = "Sales/Saledetails/Retrieve",
            List = "Sales/Saledetails/List"
        }
    }
}
declare namespace CloudGarage.Sales {
    class SalesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Sales {
    interface SalesForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: PickOrderDetailsEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class SalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Sales {
    interface SalesRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        PaymentAccount?: number;
        BranchesId?: number;
        In?: string;
        InBy?: number;
        Up?: string;
        UpBy?: number;
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
        LineItems?: SaledetailsRow[];
        VNo?: number;
        NoTax?: number;
        BranchName?: string;
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
        PaymentAccountHeadCode?: number;
        PaymentAccountHeadName?: string;
        PaymentAccountParentHead?: number;
        PaymentAccountPHeadName?: string;
        PaymentAccountHeadLevel?: number;
        PaymentAccountHeadType?: string;
        PaymentAccountIsTransaction?: number;
        PaymentAccountIsGl?: number;
        PaymentAccountIsBudget?: number;
        PaymentAccountIsDepreciation?: number;
        PaymentAccountCustomerId?: number;
        PaymentAccountSupplierId?: number;
        PaymentAccountDepreciationRate?: number;
    }
    namespace SalesRow {
        const idProperty = "Id";
        const nameProperty = "Date";
        const localTextPrefix = "Sales.Sales";
        const lookupKey = "Sales.Sales";
        function getLookup(): Q.Lookup<SalesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            BranchesId = "BranchesId",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
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
            LineItems = "LineItems",
            VNo = "VNo",
            NoTax = "NoTax",
            BranchName = "BranchName",
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
            PaymentAccountHeadCode = "PaymentAccountHeadCode",
            PaymentAccountHeadName = "PaymentAccountHeadName",
            PaymentAccountParentHead = "PaymentAccountParentHead",
            PaymentAccountPHeadName = "PaymentAccountPHeadName",
            PaymentAccountHeadLevel = "PaymentAccountHeadLevel",
            PaymentAccountHeadType = "PaymentAccountHeadType",
            PaymentAccountIsTransaction = "PaymentAccountIsTransaction",
            PaymentAccountIsGl = "PaymentAccountIsGl",
            PaymentAccountIsBudget = "PaymentAccountIsBudget",
            PaymentAccountIsDepreciation = "PaymentAccountIsDepreciation",
            PaymentAccountCustomerId = "PaymentAccountCustomerId",
            PaymentAccountSupplierId = "PaymentAccountSupplierId",
            PaymentAccountDepreciationRate = "PaymentAccountDepreciationRate"
        }
    }
}
declare namespace CloudGarage.Sales {
    namespace SalesService {
        const baseUrl = "Sales/Sales";
        function Create(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Sales/Create",
            Update = "Sales/Sales/Update",
            Delete = "Sales/Sales/Delete",
            Retrieve = "Sales/Sales/Retrieve",
            List = "Sales/Sales/List"
        }
    }
}
declare namespace CloudGarage {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace CloudGarage.Texts {
}
declare namespace CloudGarage.Vehicle {
    namespace PermissionKeys {
    }
}
declare namespace CloudGarage.Vehicles {
    class VehicleColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.Vehicles {
    interface VehicleForm {
        CustomerId: Serenity.LookupEditor;
        VehicleRegistration: Serenity.StringEditor;
        Make: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        Seats: Serenity.IntegerEditor;
        CcRating: Serenity.StringEditor;
        Model: Serenity.LookupEditor;
        FuelType: Serenity.LookupEditor;
        Color: Serenity.LookupEditor;
        AssemblyType: Serenity.LookupEditor;
        SecondColor: Serenity.LookupEditor;
        CountryOfOrigin: Serenity.LookupEditor;
        SubModel: Serenity.StringEditor;
        GrossVehicleMass: Serenity.IntegerEditor;
        BodyStyle: Serenity.StringEditor;
        TareWeight: Serenity.StringEditor;
        Axles: Serenity.StringEditor;
        Wheelbase: Serenity.StringEditor;
        EngineNo: Serenity.StringEditor;
        FrontAxleGroupRating: Serenity.StringEditor;
        VehicleType: Serenity.LookupEditor;
        RearAxleGroupRating: Serenity.StringEditor;
        Brand: Serenity.LookupEditor;
        NoteList: Note.NotesEditor;
    }
    class VehicleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.Vehicles {
    interface VehicleRow {
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
    namespace VehicleRow {
        const idProperty = "Id";
        const nameProperty = "VehicleRegistration";
        const localTextPrefix = "Vehicles.Vehicle";
        const lookupKey = "CloudGarage.Vehicles";
        function getLookup(): Q.Lookup<VehicleRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.Vehicles {
    namespace VehicleService {
        const baseUrl = "Vehicles/Vehicle";
        function Create(request: Serenity.SaveRequest<VehicleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehicleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Vehicles/Vehicle/Create",
            Update = "Vehicles/Vehicle/Update",
            Delete = "Vehicles/Vehicle/Delete",
            Retrieve = "Vehicles/Vehicle/Retrieve",
            List = "Vehicles/Vehicle/List"
        }
    }
}
declare namespace CloudGarage {
    enum VoucherType {
        INV = 1,
        Expense = 2,
        Journal = 3,
        Contra = 4,
        CustomerReceive = 5,
        PM = 6,
        DV = 7,
        BankTransaction = 8,
        CV = 9,
        Purchase = 10
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceitemsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.invoice {
    interface InvoiceitemsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class InvoiceitemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.invoice {
    interface InvoiceitemsRow {
        Id?: number;
        ProductId?: number;
        Description?: string;
        UnitId?: number;
        Quantity?: number;
        PurchasePrice?: number;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        InvoiceId?: number;
        ProductBarcode?: string;
        ProductSn?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        ProductBranchId?: number;
        UnitName?: string;
        UnitDescription?: string;
        InvoiceCustomerId?: number;
        InvoiceJobcard?: number;
        InvoiceVehicle?: number;
        InvoiceDate?: string;
        InvoiceDiscount?: number;
        InvoiceTotalDiscount?: number;
        InvoiceVat?: number;
        InvoiceTotalTax?: number;
        InvoiceShippingCost?: number;
        InvoiceGrandTotal?: number;
        InvoiceNetTotal?: number;
        InvoicePaidAmount?: number;
        InvoiceDue?: number;
        InvoiceChange?: number;
        InvoiceDetails?: string;
        InvoicePaymentAccount?: number;
        InvoiceVNo?: number;
        InvoiceScheduleDatetime?: string;
        InvoiceDeliveryDatetime?: string;
    }
    namespace InvoiceitemsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "invoice.Invoiceitems";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            Description = "Description",
            UnitId = "UnitId",
            Quantity = "Quantity",
            PurchasePrice = "PurchasePrice",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            InvoiceId = "InvoiceId",
            ProductBarcode = "ProductBarcode",
            ProductSn = "ProductSn",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            ProductBranchId = "ProductBranchId",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            InvoiceCustomerId = "InvoiceCustomerId",
            InvoiceJobcard = "InvoiceJobcard",
            InvoiceVehicle = "InvoiceVehicle",
            InvoiceDate = "InvoiceDate",
            InvoiceDiscount = "InvoiceDiscount",
            InvoiceTotalDiscount = "InvoiceTotalDiscount",
            InvoiceVat = "InvoiceVat",
            InvoiceTotalTax = "InvoiceTotalTax",
            InvoiceShippingCost = "InvoiceShippingCost",
            InvoiceGrandTotal = "InvoiceGrandTotal",
            InvoiceNetTotal = "InvoiceNetTotal",
            InvoicePaidAmount = "InvoicePaidAmount",
            InvoiceDue = "InvoiceDue",
            InvoiceChange = "InvoiceChange",
            InvoiceDetails = "InvoiceDetails",
            InvoicePaymentAccount = "InvoicePaymentAccount",
            InvoiceVNo = "InvoiceVNo",
            InvoiceScheduleDatetime = "InvoiceScheduleDatetime",
            InvoiceDeliveryDatetime = "InvoiceDeliveryDatetime"
        }
    }
}
declare namespace CloudGarage.invoice {
    namespace InvoiceitemsService {
        const baseUrl = "invoice/Invoiceitems";
        function Create(request: Serenity.SaveRequest<InvoiceitemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceitemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceitemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceitemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "invoice/Invoiceitems/Create",
            Update = "invoice/Invoiceitems/Update",
            Delete = "invoice/Invoiceitems/Delete",
            Retrieve = "invoice/Invoiceitems/Retrieve",
            List = "invoice/Invoiceitems/List"
        }
    }
}
declare namespace CloudGarage.invoice {
    class InvoicejobitemsColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.invoice {
    interface InvoicejobitemsForm {
        JobType: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class InvoicejobitemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.invoice {
    interface InvoicejobitemsRow {
        Id?: number;
        JobType?: number;
        Description?: string;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        InvoiceJobId?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: number;
        InvoiceCustomerId?: number;
        InvoiceJobcard?: number;
        InvoiceVehicle?: number;
        InvoiceDate?: string;
        InvoiceDiscount?: number;
        InvoiceTotalDiscount?: number;
        InvoiceVat?: number;
        InvoiceTotalTax?: number;
        InvoiceShippingCost?: number;
        InvoiceGrandTotal?: number;
        InvoiceNetTotal?: number;
        InvoicePaidAmount?: number;
        InvoiceDue?: number;
        InvoiceChange?: number;
        InvoiceDetails?: string;
        InvoicePaymentAccount?: number;
        InvoiceVNo?: number;
        InvoiceScheduleDatetime?: string;
        InvoiceDeliveryDatetime?: string;
    }
    namespace InvoicejobitemsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "invoice.Invoicejobitems";
        const lookupKey = "invoice.Invoicejobitems";
        function getLookup(): Q.Lookup<InvoicejobitemsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            JobType = "JobType",
            Description = "Description",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            InvoiceJobId = "InvoiceJobId",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            InvoiceCustomerId = "InvoiceCustomerId",
            InvoiceJobcard = "InvoiceJobcard",
            InvoiceVehicle = "InvoiceVehicle",
            InvoiceDate = "InvoiceDate",
            InvoiceDiscount = "InvoiceDiscount",
            InvoiceTotalDiscount = "InvoiceTotalDiscount",
            InvoiceVat = "InvoiceVat",
            InvoiceTotalTax = "InvoiceTotalTax",
            InvoiceShippingCost = "InvoiceShippingCost",
            InvoiceGrandTotal = "InvoiceGrandTotal",
            InvoiceNetTotal = "InvoiceNetTotal",
            InvoicePaidAmount = "InvoicePaidAmount",
            InvoiceDue = "InvoiceDue",
            InvoiceChange = "InvoiceChange",
            InvoiceDetails = "InvoiceDetails",
            InvoicePaymentAccount = "InvoicePaymentAccount",
            InvoiceVNo = "InvoiceVNo",
            InvoiceScheduleDatetime = "InvoiceScheduleDatetime",
            InvoiceDeliveryDatetime = "InvoiceDeliveryDatetime"
        }
    }
}
declare namespace CloudGarage.invoice {
    namespace InvoicejobitemsService {
        const baseUrl = "invoice/Invoicejobitems";
        function Create(request: Serenity.SaveRequest<InvoicejobitemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoicejobitemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicejobitemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicejobitemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "invoice/Invoicejobitems/Create",
            Update = "invoice/Invoicejobitems/Update",
            Delete = "invoice/Invoicejobitems/Delete",
            Retrieve = "invoice/Invoicejobitems/Retrieve",
            List = "invoice/Invoicejobitems/List"
        }
    }
}
declare namespace CloudGarage.invoice {
    class InvoicesColumns {
        static columnsKey: string;
    }
}
declare namespace CloudGarage.invoice {
    interface InvoicesForm {
        CustomerId: Serenity.LookupEditor;
        Jobcard: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ScheduleDatetime: Serenity.DateEditor;
        DeliveryDatetime: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        Jobs: JobItemsEditor;
        LineItems: PickerProductDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class InvoicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.invoice {
    interface InvoicesRow {
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
    namespace InvoicesRow {
        const idProperty = "Id";
        const nameProperty = "HeadCodeName";
        const localTextPrefix = "invoice.Invoices";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace CloudGarage.invoice {
    namespace InvoicesService {
        const baseUrl = "invoice/Invoices";
        function Create(request: Serenity.SaveRequest<InvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "invoice/Invoices/Create",
            Update = "invoice/Invoices/Update",
            Delete = "invoice/Invoices/Delete",
            Retrieve = "invoice/Invoices/Retrieve",
            List = "invoice/Invoices/List"
        }
    }
}
declare namespace CloudGarage.invoice {
    interface PickerJobItemForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickerJobItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage.invoice {
    interface PickerProductForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }
    class PickerProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CloudGarage {
    class NoHpFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace CloudGarage.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace CloudGarage.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace CloudGarage.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace CloudGarage.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace CloudGarage.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace CloudGarage.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace CloudGarage.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace CloudGarage.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace CloudGarage.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogButtons(): ({
            text: string;
            cssClass: string;
            click: (e: any) => void;
        } | {
            text: string;
            click: () => void;
            cssClass?: undefined;
        })[];
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace CloudGarage.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace CloudGarage.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogButtons(): Serenity.DialogButton[];
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace CloudGarage.Bookings {
    class VehiclebookingsDialog extends Serenity.EntityDialog<VehiclebookingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehiclebookingsForm;
    }
}
declare namespace CloudGarage.Bookings {
    class VehiclebookingsGrid extends Serenity.EntityGrid<VehiclebookingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehiclebookingsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Bookings {
    class VehiclecourtesybookingDialog extends Serenity.EntityDialog<VehiclecourtesybookingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehiclecourtesybookingForm;
    }
}
declare namespace CloudGarage.Bookings {
    class VehiclecourtesybookingGrid extends Serenity.EntityGrid<VehiclecourtesybookingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehiclecourtesybookingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage {
    class EmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage {
    class NoHpFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionsDialog extends Serenity.EntityDialog<InspectionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InspectionsForm;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomerInspectionsDialog extends Inspections.InspectionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionsGrid extends Serenity.EntityGrid<InspectionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InspectionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomerInspectionsGrid extends Inspections.InspectionsGrid {
        protected getDialogType(): typeof CustomerInspectionsDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _CustomerId;
        get CustomerId(): number;
        set CustomerId(value: number);
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomerOrderDialog extends Bookings.VehiclebookingsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomerOrdersGrid extends Bookings.VehiclebookingsGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Customer;
        get Customer(): number;
        set CustomerId(value: number);
    }
}
declare namespace CloudGarage.Vehicles {
    class VehicleDialog extends Serenity.EntityDialog<VehicleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehicleForm;
        private inspectionsGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        A: any;
        loadResponse(data: any): void;
        loadEntity(entity: VehicleRow): void;
        onSaveSuccess(response: any): void;
        getTemplate(): string;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomerVehicleDialog extends Vehicles.VehicleDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace CloudGarage.Vehicles {
    class VehicleGrid extends Serenity.EntityGrid<VehicleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomerVehicleGrid extends Vehicles.VehicleGrid {
        protected getDialogType(): typeof CustomerVehicleDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _CustomerId;
        get CustomerId(): number;
        set CustomerId(value: number);
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
        private transactionsGrid;
        private vehicleGrid;
        private inspectionsGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        A: any;
        loadResponse(data: any): void;
        loadEntity(entity: CustomersRow): void;
        onSaveSuccess(response: any): void;
        getTemplate(): string;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage {
    class EmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage {
    class WaFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuppliersForm;
    }
}
declare namespace CloudGarage.BusinessPartners {
    class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.CashBank {
    class BanktransactionsDialog extends Serenity.EntityDialog<BanktransactionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BanktransactionsForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.CashBank {
    class BanktransactionsGrid extends Serenity.EntityGrid<BanktransactionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BanktransactionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.CashBank {
    class CashadjustmentDialog extends Serenity.EntityDialog<CashadjustmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashadjustmentForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.CashBank {
    class CashadjustmentGrid extends Serenity.EntityGrid<CashadjustmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashadjustmentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.CashBank {
    class CustomerreceiveDialog extends Serenity.EntityDialog<CustomerreceiveRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerreceiveForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.CashBank {
    class CustomerreceiveGrid extends Serenity.EntityGrid<CustomerreceiveRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerreceiveDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.CashBank {
    class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpensesForm;
    }
}
declare namespace CloudGarage.CashBank {
    class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpensesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.CashBank {
    class SupplierpaymentDialog extends Serenity.EntityDialog<SupplierpaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SupplierpaymentForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.CashBank {
    class SupplierpaymentGrid extends Serenity.EntityGrid<SupplierpaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierpaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace CloudGarage.LanguageList {
    function getValue(): string[][];
}
declare namespace CloudGarage.ScriptInitialization {
}
declare namespace CloudGarage.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace CloudGarage.Common {
    class UserpreferencesDialog extends Serenity.EntityDialog<UserpreferencesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserpreferencesForm;
    }
}
declare namespace CloudGarage.Common {
    class UserpreferencesGrid extends Serenity.EntityGrid<UserpreferencesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserpreferencesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Financial {
    class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountsForm;
        constructor();
        private UpdateAccountfields;
        private setTabIndexSelect2;
        dialogOpen(asPanel?: boolean): void;
    }
}
declare namespace CloudGarage.Financial {
    class AccountsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, AccountsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: AccountsRow, lookup: Q.Lookup<AccountsRow>): string;
    }
}
declare namespace CloudGarage.Financial {
    class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected subDialogDataChange(): void;
        protected usePager(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Financial {
    class ContravoucherDialog extends Serenity.EntityDialog<ContravoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContravoucherForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.Financial {
    class ContravoucherGrid extends Serenity.EntityGrid<ContravoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContravoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Financial {
    class CreditvoucherDialog extends Serenity.EntityDialog<CreditvoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CreditvoucherForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.Financial {
    class CreditvoucherGrid extends Serenity.EntityGrid<CreditvoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CreditvoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Financial {
    class DebitvoucherDialog extends Serenity.EntityDialog<DebitvoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DebitvoucherForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.Financial {
    class DebitvoucherGrid extends Serenity.EntityGrid<DebitvoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DebitvoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Financial {
    class JournalvoucherDialog extends Serenity.EntityDialog<JournalvoucherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JournalvoucherForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CloudGarage.Financial {
    class JournalvoucherGrid extends Serenity.EntityGrid<JournalvoucherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JournalvoucherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Financial {
    class OpeningbalanceDialog extends Serenity.EntityDialog<OpeningbalanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OpeningbalanceForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace CloudGarage.Financial {
    class OpeningbalanceGrid extends Serenity.EntityGrid<OpeningbalanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpeningbalanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.HumanResource {
    class AttendanceDialog extends Serenity.EntityDialog<AttendanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendanceForm;
    }
}
declare namespace CloudGarage.HumanResource {
    class AttendanceGrid extends Serenity.EntityGrid<AttendanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.HumanResource {
    class DepartmentsDialog extends Serenity.EntityDialog<DepartmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartmentsForm;
    }
}
declare namespace CloudGarage.HumanResource {
    class DepartmentsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, DepartmentsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: DepartmentsRow, lookup: Q.Lookup<DepartmentsRow>): string;
    }
}
declare namespace CloudGarage.HumanResource {
    class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.HumanResource {
    class DesignationsDialog extends Serenity.EntityDialog<DesignationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DesignationsForm;
    }
}
declare namespace CloudGarage.HumanResource {
    class DesignationsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, DesignationsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: DesignationsRow, lookup: Q.Lookup<DesignationsRow>): string;
    }
}
declare namespace CloudGarage.HumanResource {
    class DesignationsGrid extends Serenity.EntityGrid<DesignationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DesignationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.HumanResource {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeesForm;
    }
}
declare namespace CloudGarage.HumanResource {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionchecklistDialog extends Serenity.EntityDialog<InspectionchecklistRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InspectionchecklistForm;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionchecklistGrid extends Serenity.EntityGrid<InspectionchecklistRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InspectionchecklistDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inspections {
    class JobTypeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionjobtypesDialog extends Serenity.EntityDialog<InspectionjobtypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InspectionjobtypesForm;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionjobtypesGrid extends Serenity.EntityGrid<InspectionjobtypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InspectionjobtypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionChecklistEditor extends Serenity.Extensions.GridEditorBase<Inspections.InspectionchecklistRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InspectionsDetailEditorDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<InspectionchecklistRow>;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        private inputsChange;
        private setSaveButtonState;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Inspections {
    class InspectionsDetailEditorDialog extends Serenity.Extensions.GridEditorDialog<Inspections.InspectionchecklistRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: Inspections.InspectionchecklistForm;
        constructor();
    }
}
declare namespace CloudGarage.Inventory {
    class BrandsDialog extends Serenity.EntityDialog<BrandsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BrandsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class BrandsGrid extends Serenity.EntityGrid<BrandsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BrandsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoriesForm;
    }
}
declare namespace CloudGarage.Inventory {
    class CategoriesEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoriesRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: CategoriesRow, lookup: Q.Lookup<CategoriesRow>): string;
    }
}
declare namespace CloudGarage.Inventory {
    class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected subDialogDataChange(): void;
        protected usePager(): boolean;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Inventory {
    class DamagedproductsDialog extends Serenity.EntityDialog<DamagedproductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DamagedproductsForm;
        constructor();
    }
}
declare namespace CloudGarage.Inventory {
    class DamagedproductsGrid extends Serenity.EntityGrid<DamagedproductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DamagedproductsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsIssueDetailEditor extends Serenity.Extensions.GridEditorBase<Inventory.GoodsissuedetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof GoodsIssueDetailEditDialog;
        private pendingChanges;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<GoodsissuedetailsRow>;
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsIssueDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsissuedetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: GoodsissuedetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsissueDialog extends Serenity.EntityDialog<GoodsissueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsissueForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsissueGrid extends Serenity.EntityGrid<GoodsissueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsissueDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsissuedetailsDialog extends Serenity.EntityDialog<GoodsissuedetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsissuedetailsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsissuedetailsGrid extends Serenity.EntityGrid<GoodsissuedetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsissuedetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsReceiptDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsreceiptdetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: GoodsreceiptdetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsReceiptDetailEditor extends Serenity.Extensions.GridEditorBase<GoodsreceiptdetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof GoodsReceiptDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<GoodsreceiptdetailsRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsreceiptDialog extends Serenity.EntityDialog<GoodsreceiptRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsreceiptForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsreceiptGrid extends Serenity.EntityGrid<GoodsreceiptRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsreceiptDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsreceiptdetailsDialog extends Serenity.EntityDialog<GoodsreceiptdetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GoodsreceiptdetailsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class GoodsreceiptdetailsGrid extends Serenity.EntityGrid<GoodsreceiptdetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GoodsreceiptdetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class ProductsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Inventory {
    class WarehaouseFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Inventory {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Inventory {
    class StocksDialog extends Serenity.EntityDialog<StocksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StocksForm;
    }
}
declare namespace CloudGarage.Inventory {
    class StocksGrid extends Serenity.EntityGrid<StocksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StocksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class ProductsTFFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Inventory {
    class TransferdetailsDialog extends Serenity.EntityDialog<TransferdetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TransferdetailsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class TransferdetailsGrid extends Serenity.EntityGrid<TransferdetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferdetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class TransferdetailsDialog extends Serenity.EntityDialog<TransferdetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TransferdetailsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class TransferDetailEditDialog extends Serenity.Extensions.GridEditorDialog<TransferdetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: TransferdetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Inventory {
    class TransfersDialog extends Serenity.EntityDialog<TransfersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TransfersForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
        protected beforeLoadEntity(entity: TransfersRow): void;
    }
}
declare namespace CloudGarage.Inventory {
    class TransfersGrid extends Serenity.EntityGrid<TransfersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransfersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class TransferDetailEditor extends Serenity.Extensions.GridEditorBase<TransferdetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof TransferDetailEditDialog;
        private pendingChanges;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<TransferdetailsRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Inventory {
    class UnitsDialog extends Serenity.EntityDialog<UnitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnitsForm;
    }
}
declare namespace CloudGarage.Inventory {
    class UnitsGrid extends Serenity.EntityGrid<UnitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Inventory {
    class UpdatestocksDialog extends Serenity.EntityDialog<UpdatestocksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UpdatestocksForm;
    }
}
declare namespace CloudGarage.Inventory {
    class UpdatestocksGrid extends Serenity.EntityGrid<UpdatestocksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UpdatestocksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.JobCards {
    class GatepassesDialog extends Serenity.EntityDialog<GatepassesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GatepassesForm;
        constructor();
    }
}
declare namespace CloudGarage.JobCards {
    class GatepassesGrid extends Serenity.EntityGrid<GatepassesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GatepassesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.JobCards {
    class JobFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.JobCards {
    class JobcardFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.JobCards {
    class JobcarddetailsDialog extends Serenity.EntityDialog<JobcarddetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JobcarddetailsForm;
    }
}
declare namespace CloudGarage.JobCards {
    class JobcarddetailsGrid extends Serenity.EntityGrid<JobcarddetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JobcarddetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.JobCards {
    class JobCardDetailsEditDialog extends Serenity.Extensions.GridEditorDialog<JobCards.JobcarddetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: JobCards.JobcarddetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.JobCards {
    class JobCardDetailsEditor extends Serenity.Extensions.GridEditorBase<JobCards.JobcarddetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JobCardDetailsEditDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<JobcarddetailsRow>;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.JobCards {
    class JobcardsDialog extends Serenity.EntityDialog<JobcardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JobcardsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace CloudGarage.JobCards {
    class JobcardsGrid extends Serenity.EntityGrid<JobcardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JobcardsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage {
    class VehicleEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Vehicles.VehicleRow> {
        constructor(hidden: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace CloudGarage.Masters {
    class AgendaitemtypesDialog extends Serenity.EntityDialog<AgendaitemtypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AgendaitemtypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class AgendaitemtypesGrid extends Serenity.EntityGrid<AgendaitemtypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AgendaitemtypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class AssemblytypesDialog extends Serenity.EntityDialog<AssemblytypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssemblytypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class AssemblytypesGrid extends Serenity.EntityGrid<AssemblytypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssemblytypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class AttendancestatusesDialog extends Serenity.EntityDialog<AttendancestatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendancestatusesForm;
    }
}
declare namespace CloudGarage.Masters {
    class AttendancestatusesGrid extends Serenity.EntityGrid<AttendancestatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendancestatusesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class AttendeetypesDialog extends Serenity.EntityDialog<AttendeetypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendeetypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class AttendeetypesGrid extends Serenity.EntityGrid<AttendeetypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendeetypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class BanksDialog extends Serenity.EntityDialog<BanksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BanksForm;
    }
}
declare namespace CloudGarage.Masters {
    class BanksGrid extends Serenity.EntityGrid<BanksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BanksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class BranchesDialog extends Serenity.EntityDialog<BranchesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BranchesForm;
    }
}
declare namespace CloudGarage.Masters {
    class BranchesGrid extends Serenity.EntityGrid<BranchesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BranchesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CitiesForm;
    }
}
declare namespace CloudGarage.Masters {
    class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class ColortypesDialog extends Serenity.EntityDialog<ColortypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ColortypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class ColortypesGrid extends Serenity.EntityGrid<ColortypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ColortypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CompaniesForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace CloudGarage.Masters {
    class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompaniesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountriesForm;
    }
}
declare namespace CloudGarage.Masters {
    class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrenciesForm;
    }
}
declare namespace CloudGarage.Masters {
    class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrenciesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class CustomergroupsDialog extends Serenity.EntityDialog<CustomergroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomergroupsForm;
    }
}
declare namespace CloudGarage.Masters {
    class CustomergroupsGrid extends Serenity.EntityGrid<CustomergroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomergroupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class ExpensestypesDialog extends Serenity.EntityDialog<ExpensestypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpensestypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class ExpensestypesGrid extends Serenity.EntityGrid<ExpensestypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpensestypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class FueltypesDialog extends Serenity.EntityDialog<FueltypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FueltypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class FueltypesGrid extends Serenity.EntityGrid<FueltypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FueltypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class JobcategoriesDialog extends Serenity.EntityDialog<JobcategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JobcategoriesForm;
    }
}
declare namespace CloudGarage.Masters {
    class JobcategoriesGrid extends Serenity.EntityGrid<JobcategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JobcategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class JobtypesDialog extends Serenity.EntityDialog<JobtypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JobtypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class JobtypesGrid extends Serenity.EntityGrid<JobtypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JobtypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class LocationsDialog extends Serenity.EntityDialog<LocationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LocationsForm;
    }
}
declare namespace CloudGarage.Masters {
    class LocationsGrid extends Serenity.EntityGrid<LocationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class MeetingtypesDialog extends Serenity.EntityDialog<MeetingtypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingtypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class MeetingtypesGrid extends Serenity.EntityGrid<MeetingtypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingtypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class RegionsDialog extends Serenity.EntityDialog<RegionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RegionsForm;
    }
}
declare namespace CloudGarage.Masters {
    class RegionsGrid extends Serenity.EntityGrid<RegionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class ResolutionstatusesDialog extends Serenity.EntityDialog<ResolutionstatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ResolutionstatusesForm;
    }
}
declare namespace CloudGarage.Masters {
    class ResolutionstatusesGrid extends Serenity.EntityGrid<ResolutionstatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ResolutionstatusesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class ShippersDialog extends Serenity.EntityDialog<ShippersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ShippersForm;
    }
}
declare namespace CloudGarage.Masters {
    class ShippersGrid extends Serenity.EntityGrid<ShippersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShippersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class StatesDialog extends Serenity.EntityDialog<StatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StatesForm;
    }
}
declare namespace CloudGarage.Masters {
    class StatesGrid extends Serenity.EntityGrid<StatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class SuppliergroupsDialog extends Serenity.EntityDialog<SuppliergroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuppliergroupsForm;
    }
}
declare namespace CloudGarage.Masters {
    class SuppliergroupsGrid extends Serenity.EntityGrid<SuppliergroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliergroupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class TerritoriesDialog extends Serenity.EntityDialog<TerritoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TerritoriesForm;
    }
}
declare namespace CloudGarage.Masters {
    class TerritoriesGrid extends Serenity.EntityGrid<TerritoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TerritoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class VehiclemakesDialog extends Serenity.EntityDialog<VehiclemakesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehiclemakesForm;
    }
}
declare namespace CloudGarage.Masters {
    class VehiclemakesGrid extends Serenity.EntityGrid<VehiclemakesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehiclemakesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class VehiclemodelsDialog extends Serenity.EntityDialog<VehiclemodelsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehiclemodelsForm;
    }
}
declare namespace CloudGarage.Masters {
    class VehiclemodelsGrid extends Serenity.EntityGrid<VehiclemodelsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehiclemodelsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class VehicletypesDialog extends Serenity.EntityDialog<VehicletypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehicletypesForm;
    }
}
declare namespace CloudGarage.Masters {
    class VehicletypesGrid extends Serenity.EntityGrid<VehicletypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicletypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Masters {
    class WarehousesDialog extends Serenity.EntityDialog<WarehousesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WarehousesForm;
    }
}
declare namespace CloudGarage.Masters {
    class WarehousesGrid extends Serenity.EntityGrid<WarehousesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WarehousesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingForm;
        private agendaGrid;
        private decisionGrid;
        constructor();
        protected arrange(): void;
        loadEntity(entity: MeetingRow): void;
        getTemplate(): string;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingGrid extends Serenity.EntityGrid<MeetingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingAgendaEditor extends Serenity.Select2Editor<any, MeetingagendaRow> {
        constructor(hidden: JQuery);
        private _meetingId;
        get meetingId(): number;
        set meetingId(value: number);
        protected updateItems(): void;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendaDialog extends Serenity.EntityDialog<MeetingagendaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingagendaForm;
        protected getSaveEntity(): MeetingagendaRow;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendaGrid extends Serenity.EntityGrid<MeetingagendaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingagendaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _meetingId;
        get meetingId(): number;
        set meetingId(value: number);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendarelevantDialog extends Serenity.EntityDialog<MeetingagendarelevantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingagendarelevantForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendarelevantGrid extends Serenity.EntityGrid<MeetingagendarelevantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingagendarelevantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendatypeDialog extends Serenity.EntityDialog<MeetingagendatypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingagendatypeForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingagendatypeGrid extends Serenity.EntityGrid<MeetingagendatypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingagendatypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingAttendeeEditor extends Serenity.Extensions.GridEditorBase<MeetingattendeeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingattendeeDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingattendeeDialog extends Serenity.EntityDialog<MeetingattendeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingattendeeForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingattendeeGrid extends Serenity.EntityGrid<MeetingattendeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingattendeeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingdecisionDialog extends Serenity.EntityDialog<MeetingdecisionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingdecisionForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingdecisionGrid extends Serenity.EntityGrid<MeetingdecisionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingdecisionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingdecisionrelevantDialog extends Serenity.EntityDialog<MeetingdecisionrelevantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingdecisionrelevantForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingdecisionrelevantGrid extends Serenity.EntityGrid<MeetingdecisionrelevantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingdecisionrelevantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetinglocationDialog extends Serenity.EntityDialog<MeetinglocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetinglocationForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetinglocationGrid extends Serenity.EntityGrid<MeetinglocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetinglocationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingsDialog extends Serenity.EntityDialog<MeetingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingsForm;
    }
}
declare namespace CloudGarage.Meeting {
    class MeetingsGrid extends Serenity.EntityGrid<MeetingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace CloudGarage.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace CloudGarage.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Note {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get text(): string;
        set text(value: string);
        okClick: () => void;
    }
}
declare namespace CloudGarage.Note {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        get value(): NoteRow[];
        set value(value: NoteRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace CloudGarage.Note {
    class NoteGrid extends Serenity.EntityGrid<NoteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NoteDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Purchasing {
    class PickOrderDialog extends Serenity.EntityDialog<PurchasedetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.Purchasing {
    class PickOrderGrid extends Inventory.ProductsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.Purchasing {
    class PickOrderDetailsEditor extends Serenity.Extensions.GridEditorBase<PurchasedetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasedetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Purchasing {
    class PickerOrderDialog extends Serenity.EntityDialog<Inventory.ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.Purchasing {
    class PickerOrderGrid extends Inventory.ProductsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.Purchasing {
    class PickerOrderDetailsEditor1 extends Serenity.Extensions.GridEditorBase<PurchasedetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasedetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Purchasing {
    interface ProductPickerOptions {
        hideProducts?: number[];
    }
    class ProductCheckGrid extends Serenity.EntityGrid<Inventory.ProductsRow, ProductPickerOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickerOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): Inventory.ProductsRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.Purchasing {
    class ProductPickDialog extends Serenity.TemplatedDialog<ProductPickOptions> {
        private checkGrid;
        constructor(opt: ProductPickOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Inventory.ProductsRow[];
        onSuccess: (selected: Inventory.ProductsRow[]) => boolean;
    }
}
declare namespace CloudGarage.Purchasing {
    class ProductPickerDialog extends Serenity.TemplatedDialog<ProductPickerOptions> {
        private checkGrid;
        constructor(opt: ProductPickerOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Inventory.ProductsRow[];
        onSuccess: (selected: Inventory.ProductsRow[]) => boolean;
    }
}
declare namespace CloudGarage.Purchasing {
    interface ProductPickOptions {
        hideProducts?: number[];
    }
    class ProductsCheckGrid extends Serenity.EntityGrid<Inventory.ProductsRow, ProductPickOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): Inventory.ProductsRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchaseDetailEditDialog extends Serenity.Extensions.GridEditorDialog<PurchasedetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchasedetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchaseDetailEditor extends Serenity.Extensions.GridEditorBase<PurchasedetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof PurchaseDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: PurchasedetailsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchaseDialog extends Serenity.EntityDialog<PurchaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchaseGrid extends Serenity.EntityGrid<PurchaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Purchasing {
    class ProductFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchasedetailsDialog extends Serenity.Extensions.GridEditorDialog<PurchasedetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchasedetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Purchasing {
    class PurchasedetailsGrid extends Serenity.EntityGrid<PurchasedetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasedetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Quotations {
    class ProductsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationdetailsDialog extends Serenity.Extensions.GridEditorDialog<QuotationdetailsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QuotationdetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationdetailsGrid extends Serenity.EntityGrid<QuotationdetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationdetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Quotations {
    class JobcardFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationjobitemsDialog extends Serenity.Extensions.GridEditorDialog<QuotationjobitemsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QuotationjobitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationjobitemsGrid extends Serenity.EntityGrid<QuotationjobitemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationjobitemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Quotations {
    interface ProductPickOptions {
        hideProducts?: number[];
    }
    class JobItemsCheckGrid extends Serenity.EntityGrid<QuotationjobitemsRow, ProductPickOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): QuotationjobitemsRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationJobItemsEditor extends Serenity.Extensions.GridEditorBase<QuotationjobitemsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof JobItemsPickEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: QuotationjobitemsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Quotations {
    class JobItemsPickDialog extends Serenity.TemplatedDialog<ProductPickOptions> {
        private checkGrid;
        constructor(opt: ProductPickOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): QuotationjobitemsRow[];
        onSuccess: (selected: QuotationjobitemsRow[]) => boolean;
    }
}
declare namespace CloudGarage.Quotations {
    class JobItemsPickEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationjobitemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: QuotationjobitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class PickJobTypeDialog extends Serenity.EntityDialog<QuotationjobitemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class PickJobTypeGrid extends QuotationjobitemsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.Quotations {
    class PickOrderDialog extends Serenity.EntityDialog<QuotationdetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class PickOrderGrid extends Inventory.ProductsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.Quotations {
    class PickProductDetailEditor extends Serenity.Extensions.GridEditorBase<QuotationdetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationdetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Quotations {
    interface ProductPickOptions {
        hideProducts?: number[];
    }
    class ProductCheckGrid extends Serenity.EntityGrid<Inventory.ProductsRow, ProductPickOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): Inventory.ProductsRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.Quotations {
    class ProductPickDialog extends Serenity.TemplatedDialog<ProductPickOptions> {
        private checkGrid;
        constructor(opt: ProductPickOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Inventory.ProductsRow[];
        onSuccess: (selected: Inventory.ProductsRow[]) => boolean;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationJobItemsEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationjobitemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: QuotationjobitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationJobItemsEditor extends Serenity.Extensions.GridEditorBase<QuotationjobitemsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof QuotationJobItemsEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<QuotationjobitemsRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationsDetailEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationdetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: QuotationdetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationsDetailEditor extends Serenity.Extensions.GridEditorBase<QuotationdetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof QuotationsDetailEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<QuotationdetailsRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationsDialog extends Serenity.EntityDialog<QuotationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QuotationsForm;
        constructor();
        private updateExpiryDate;
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace CloudGarage.Quotations {
    class QuotationsGrid extends Serenity.EntityGrid<QuotationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage {
    class CurrencyFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        contractAmount: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace CloudGarage.Reports {
    class CustomerReceivableReportGrid extends Serenity.EntityGrid<BusinessPartners.CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessPartners.CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Reports {
    class DailyclosingDialog extends Serenity.EntityDialog<DailyclosingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DailyclosingForm;
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace CloudGarage.Reports {
    class DailyclosingGrid extends Serenity.EntityGrid<DailyclosingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DailyclosingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Reports {
    class StockReport extends Serenity.EntityGrid<CloudGarage.Inventory.StocksRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Reports {
    class SupplierPayableReportGrid extends Serenity.EntityGrid<BusinessPartners.SuppliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessPartners.SuppliersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Sales {
    class ProductsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.Sales {
    class SaledetailsDialog extends Serenity.Extensions.GridEditorDialog<SaledetailsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SaledetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Sales {
    class SaledetailsGrid extends Serenity.EntityGrid<SaledetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaledetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.Sales {
    class PickerOrderDialog extends Serenity.EntityDialog<SaledetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.Sales {
    class PickerOrderGrid extends Inventory.ProductsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.Sales {
    class PickOrderDetailsEditor extends Serenity.Extensions.GridEditorBase<SaledetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaledetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.Sales {
    interface ProductPickerOptions {
        hideProducts?: number[];
    }
    class ProductsCheckGrid extends Serenity.EntityGrid<Inventory.ProductsRow, ProductPickerOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickerOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): Inventory.ProductsRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.Sales {
    class ProductPickDialog extends Serenity.TemplatedDialog<ProductPickerOptions> {
        private checkGrid;
        constructor(opt: ProductPickerOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Inventory.ProductsRow[];
        onSuccess: (selected: Inventory.ProductsRow[]) => boolean;
    }
}
declare namespace CloudGarage.Sales {
    class SalesDetailEditDialog extends Common.GridEditorDialog<SaledetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: SaledetailsForm;
        constructor();
    }
}
declare namespace CloudGarage.Sales {
    class SalesDetailEditor extends Common.GridEditorBase<SaledetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof SalesDetailEditDialog;
        private pendingChanges;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<SaledetailsRow>;
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
    }
}
declare namespace CloudGarage.Sales {
    class SalesDialog extends Serenity.EntityDialog<SalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace CloudGarage.Sales {
    class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.Vehicles {
    class CustomerInspectionsDialog extends Inspections.InspectionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace CloudGarage.Vehicles {
    class VehicleInspectionsGrid extends Inspections.InspectionsGrid {
        protected getDialogType(): typeof CustomerInspectionsDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _CustomerId;
        get CustomerId(): number;
        set CustomerId(value: number);
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceitemsDialog extends Serenity.Extensions.GridEditorDialog<InvoiceitemsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceitemsGrid extends Serenity.EntityGrid<InvoiceitemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceitemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.invoice {
    class UnitNameFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.invoice {
    class UnitnameFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.invoice {
    class InvoicejobitemsDialog extends Serenity.EntityDialog<InvoicejobitemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoicejobitemsForm;
    }
}
declare namespace CloudGarage.invoice {
    class InvoicejobitemsGrid extends Serenity.EntityGrid<InvoicejobitemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoicejobitemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CloudGarage.invoice {
    class JobTypeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.invoice {
    class JobtypenameFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceItemsEditDialog extends Serenity.Extensions.GridEditorDialog<InvoiceitemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoiceitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceItemsEditor extends Serenity.Extensions.GridEditorBase<InvoiceitemsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof InvoiceItemsEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<InvoiceitemsRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceJobItemsEditDialog extends Serenity.Extensions.GridEditorDialog<InvoicejobitemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoicejobitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.invoice {
    class InvoiceJobItemsEditor extends Serenity.Extensions.GridEditorBase<InvoicejobitemsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof InvoiceJobItemsEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        disableAddButton(): void;
        protected onViewProcessData(response: any): Serenity.ListResponse<InvoicejobitemsRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CloudGarage.invoice {
    class InvoicesDialog extends Serenity.EntityDialog<InvoicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoicesForm;
        constructor();
        dialogOpen(asPanel?: boolean): void;
        protected afterLoadEntity(): void;
        private doCalculation;
    }
}
declare namespace CloudGarage.invoice {
    class InvoicesGrid extends Serenity.EntityGrid<InvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace CloudGarage.invoice {
    interface ProductPickerOptions {
        hideProducts?: number[];
    }
    class JobItemCheckGrid extends Serenity.EntityGrid<Masters.JobtypesRow, ProductPickerOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickerOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): Masters.JobtypesRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.invoice {
    class JobItemPickerDialog extends Serenity.TemplatedDialog<ProductPickerOptions> {
        private checkGrid;
        constructor(opt: ProductPickerOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Masters.JobtypesRow[];
        onSuccess: (selected: invoice.InvoicejobitemsRow[]) => boolean;
    }
}
declare namespace CloudGarage.invoice {
    class JobItemsPickEditDialog extends Serenity.Extensions.GridEditorDialog<InvoicejobitemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoicejobitemsForm;
        constructor();
    }
}
declare namespace CloudGarage.invoice {
    class JobItemsEditor extends Serenity.Extensions.GridEditorBase<InvoicejobitemsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof JobItemsPickEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: InvoicejobitemsRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.invoice {
    class PickerJobItemDialog extends Serenity.EntityDialog<invoice.InvoicejobitemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.invoice {
    class PickerJobItemGrid extends Inventory.ProductsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.invoice {
    class PickerProductDetailEditor extends Serenity.Extensions.GridEditorBase<InvoiceitemsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceitemsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CloudGarage.invoice {
    class PickerProductDialog extends Serenity.EntityDialog<InvoiceitemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace CloudGarage.invoice {
    class PickerProductGrid extends Inventory.ProductsGrid {
        protected getDialogType(): any;
    }
}
declare namespace CloudGarage.invoice {
    interface ProductPickerOptions {
        hideProducts?: number[];
    }
    class ProductsCheckGrid extends Serenity.EntityGrid<Inventory.ProductsRow, ProductPickerOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickerOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        get selectedItems(): Inventory.ProductsRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace CloudGarage.invoice {
    class ProductPickerDialog extends Serenity.TemplatedDialog<ProductPickerOptions> {
        private checkGrid;
        constructor(opt: ProductPickerOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Inventory.ProductsRow[];
        onSuccess: (selected: Inventory.ProductsRow[]) => boolean;
    }
}
