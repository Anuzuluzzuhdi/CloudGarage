namespace CloudGarage.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleKey: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const BranchId: string;
                export const BrancheName: string;
                export const DisplayName: string;
                export const Email: string;
                export const ImpersonationToken: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const MobilePhoneNumber: string;
                export const MobilePhoneVerified: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TwoFactorAuth: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Bookings {

            namespace Vehiclebookings {
                export const BookingDateTime: string;
                export const BranchName: string;
                export const BranchesId: string;
                export const Customer: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Id: string;
                export const Note: string;
                export const Title: string;
                export const Vehicle: string;
                export const VehicleAssemblyType: string;
                export const VehicleAxles: string;
                export const VehicleBodyStyle: string;
                export const VehicleBrand: string;
                export const VehicleCcRating: string;
                export const VehicleColor: string;
                export const VehicleCountryOfOrigin: string;
                export const VehicleCustomerId: string;
                export const VehicleEngineNo: string;
                export const VehicleFrontAxleGroupRating: string;
                export const VehicleFuelType: string;
                export const VehicleGrossVehicleMass: string;
                export const VehicleMake: string;
                export const VehicleModel: string;
                export const VehicleRearAxleGroupRating: string;
                export const VehicleSeats: string;
                export const VehicleSecondColor: string;
                export const VehicleSubModel: string;
                export const VehicleTareWeight: string;
                export const VehicleVehicleRegistration: string;
                export const VehicleVehicleType: string;
                export const VehicleWheelbase: string;
                export const VehicleYear: string;
            }

            namespace Vehiclecourtesybooking {
                export const BranchName: string;
                export const BranchesId: string;
                export const Customer: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const EndDateTime: string;
                export const Id: string;
                export const Note: string;
                export const StartDateTime: string;
                export const Title: string;
                export const Vehicle: string;
                export const VehicleAssemblyType: string;
                export const VehicleAxles: string;
                export const VehicleBodyStyle: string;
                export const VehicleBrand: string;
                export const VehicleCcRating: string;
                export const VehicleColor: string;
                export const VehicleCountryOfOrigin: string;
                export const VehicleCustomerId: string;
                export const VehicleEngineNo: string;
                export const VehicleFrontAxleGroupRating: string;
                export const VehicleFuelType: string;
                export const VehicleGrossVehicleMass: string;
                export const VehicleMake: string;
                export const VehicleModel: string;
                export const VehicleRearAxleGroupRating: string;
                export const VehicleSeats: string;
                export const VehicleSecondColor: string;
                export const VehicleSubModel: string;
                export const VehicleTareWeight: string;
                export const VehicleVehicleRegistration: string;
                export const VehicleVehicleType: string;
                export const VehicleWheelbase: string;
                export const VehicleYear: string;
            }
        }

        namespace BusinessPartners {

            namespace Customers {
                export const Address: string;
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const CityStateId: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const CountryId: string;
                export const CountryName: string;
                export const CustomerBalance: string;
                export const CustomerGroupDescription: string;
                export const CustomerGroupId: string;
                export const CustomerGroupName: string;
                export const CustomerReceivable: string;
                export const CustomerReceived: string;
                export const Email: string;
                export const EmailAddress: string;
                export const Fax: string;
                export const Id: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const Phone: string;
                export const PostalCode: string;
                export const PreviousCreditBalance: string;
                export const RegionId: string;
                export const RegionName: string;
                export const StateCountryId: string;
                export const StateId: string;
                export const StateName: string;
                export const Website: string;
            }

            namespace Suppliers {
                export const Address: string;
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const CityStateId: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const CountryId: string;
                export const CountryName: string;
                export const Email: string;
                export const EmailAddress: string;
                export const Fax: string;
                export const Id: string;
                export const IsActive: string;
                export const Phone: string;
                export const PostalCode: string;
                export const PreviousCreditBalance: string;
                export const RegionId: string;
                export const RegionName: string;
                export const StateCountryId: string;
                export const StateId: string;
                export const StateName: string;
                export const SupplierBalance: string;
                export const SupplierGroupDescription: string;
                export const SupplierGroupId: string;
                export const SupplierGroupName: string;
                export const SupplierPaid: string;
                export const SupplierPayable: string;
                export const Website: string;
            }
        }

        namespace CashBank {

            namespace Banktransactions {
                export const AccountType: string;
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDeleteDate: string;
                export const CoaDeleteUserId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaInsertDate: string;
                export const CoaInsertUserId: string;
                export const CoaIsActive: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const CoaUpdateDate: string;
                export const CoaUpdateUserId: string;
                export const Credit: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Cashadjustment {
                export const AccountType: string;
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Customerreceive {
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const Remark: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Expenses {
                export const Amount: string;
                export const BranchName: string;
                export const BranchesId: string;
                export const Date: string;
                export const ExpenseTypeId: string;
                export const ExpenseTypeType: string;
                export const HeadCodeName: string;
                export const Id: string;
                export const In: string;
                export const InBy: string;
                export const PaymentAccount: string;
                export const PaymentAccountCustomerId: string;
                export const PaymentAccountDepreciationRate: string;
                export const PaymentAccountHeadCode: string;
                export const PaymentAccountHeadLevel: string;
                export const PaymentAccountHeadName: string;
                export const PaymentAccountHeadType: string;
                export const PaymentAccountIsBudget: string;
                export const PaymentAccountIsDepreciation: string;
                export const PaymentAccountIsGl: string;
                export const PaymentAccountIsTransaction: string;
                export const PaymentAccountPHeadName: string;
                export const PaymentAccountParentHead: string;
                export const PaymentAccountSupplierId: string;
                export const Up: string;
                export const UpBy: string;
                export const VNo: string;
            }

            namespace Supplierpayment {
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const Remark: string;
                export const SupplierAddress: string;
                export const SupplierCityId: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountryId: string;
                export const SupplierEmail: string;
                export const SupplierEmailAddress: string;
                export const SupplierFax: string;
                export const SupplierId: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierPreviousCreditBalance: string;
                export const SupplierRegionId: string;
                export const SupplierStateId: string;
                export const SupplierSupplierGroupId: string;
                export const SupplierWebsite: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }
        }

        namespace Common {

            namespace Userpreferences {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Financial {

            namespace Accounts {
                export const Balance: string;
                export const BranchId: string;
                export const BranchName: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const DeleteDate: string;
                export const DeleteUserId: string;
                export const DepreciationRate: string;
                export const HeadCode: string;
                export const HeadCodeName: string;
                export const HeadLevel: string;
                export const HeadName: string;
                export const HeadType: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsBudget: string;
                export const IsDepreciation: string;
                export const IsGl: string;
                export const IsOpening: string;
                export const IsTransaction: string;
                export const OpeningBalance: string;
                export const PHeadName: string;
                export const ParentHead: string;
                export const ParentHead1: string;
                export const ParentHeadCustomerId: string;
                export const ParentHeadDepreciationRate: string;
                export const ParentHeadHeadCode: string;
                export const ParentHeadHeadLevel: string;
                export const ParentHeadHeadName: string;
                export const ParentHeadHeadType: string;
                export const ParentHeadIsBudget: string;
                export const ParentHeadIsDepreciation: string;
                export const ParentHeadIsGl: string;
                export const ParentHeadIsTransaction: string;
                export const ParentHeadPHeadName: string;
                export const ParentHeadSupplierId: string;
                export const SupplierAddress: string;
                export const SupplierCityId: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountryId: string;
                export const SupplierEmail: string;
                export const SupplierEmailAddress: string;
                export const SupplierFax: string;
                export const SupplierId: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierPreviousCreditBalance: string;
                export const SupplierRegionId: string;
                export const SupplierStateId: string;
                export const SupplierSupplierGroupId: string;
                export const SupplierWebsite: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Contravoucher {
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Creditvoucher {
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const CreditAccountId: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const Remark: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Debitvoucher {
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const Debit: string;
                export const DebitAccountId: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const Remark: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Journalvoucher {
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsPosted: string;
                export const Narration: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }

            namespace Openingbalance {
                export const AccountType: string;
                export const Coa: string;
                export const CoaCustomerId: string;
                export const CoaDepreciationRate: string;
                export const CoaHeadCode: string;
                export const CoaHeadLevel: string;
                export const CoaHeadName: string;
                export const CoaHeadType: string;
                export const CoaId: string;
                export const CoaIsBudget: string;
                export const CoaIsDepreciation: string;
                export const CoaIsGl: string;
                export const CoaIsTransaction: string;
                export const CoaPHeadName: string;
                export const CoaParentHead: string;
                export const CoaSupplierId: string;
                export const Credit: string;
                export const Debit: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsAppove: string;
                export const IsOpening: string;
                export const IsPosted: string;
                export const Narration: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VDate: string;
                export const VNo: string;
                export const Vtype: string;
            }
        }

        namespace HumanResource {

            namespace Attendance {
                export const CheckIn: string;
                export const CheckOut: string;
                export const EmployeeAddress: string;
                export const EmployeeBloodGroup: string;
                export const EmployeeCityId: string;
                export const EmployeeCountryId: string;
                export const EmployeeDepartmentId: string;
                export const EmployeeDesignationId: string;
                export const EmployeeEmail: string;
                export const EmployeeFirstName: string;
                export const EmployeeFullName: string;
                export const EmployeeHoureRateSalary: string;
                export const EmployeeId: string;
                export const EmployeeLastName: string;
                export const EmployeePhone: string;
                export const EmployeePicture: string;
                export const EmployeeRateType: string;
                export const EmployeeRegionId: string;
                export const EmployeeStateId: string;
                export const EmployeeTerritoryId: string;
                export const EmployeeUserId: string;
                export const EmployeeZipCode: string;
                export const Id: string;
                export const StayTime: string;
            }

            namespace Departments {
                export const Department: string;
                export const Description: string;
                export const Id: string;
                export const ParentDepartmentDepartment: string;
                export const ParentDepartmentDescription: string;
                export const ParentDepartmentId: string;
                export const ParentDepartmentParentDepartmentId: string;
            }

            namespace Designations {
                export const Description: string;
                export const Designation: string;
                export const Id: string;
                export const ParentDesignationDescription: string;
                export const ParentDesignationDesignation: string;
                export const ParentDesignationId: string;
                export const ParentDesignationParentDesignationId: string;
            }

            namespace Employees {
                export const Address: string;
                export const BloodGroup: string;
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const CityStateId: string;
                export const CountryId: string;
                export const CountryName: string;
                export const Department: string;
                export const DepartmentDescription: string;
                export const DepartmentId: string;
                export const DepartmentParentDepartmentId: string;
                export const Designation: string;
                export const DesignationDescription: string;
                export const DesignationId: string;
                export const DesignationParentDesignationId: string;
                export const Email: string;
                export const FirstName: string;
                export const HoureRateSalary: string;
                export const Id: string;
                export const LastName: string;
                export const Phone: string;
                export const Picture: string;
                export const RateType: string;
                export const RegionId: string;
                export const RegionName: string;
                export const StateCountryId: string;
                export const StateId: string;
                export const StateName: string;
                export const TerritoryId: string;
                export const TerritoryRegionId: string;
                export const TerritoryTerritoryDescription: string;
                export const TerritoryTerritoryId: string;
                export const UserId: string;
                export const ZipCode: string;
            }
        }

        namespace Inspections {

            namespace Inspectionchecklist {
                export const Id: string;
                export const JobCategory: string;
                export const JobCategoryName: string;
                export const JobType: string;
                export const JobTypeIsInspectionList: string;
                export const JobTypeJobCategory: string;
                export const JobTypeName: string;
                export const JobTypeRate: string;
                export const JobTypeStandardTiming: string;
                export const JobTypes: string;
            }

            namespace Inspectionjobtypes {
                export const Id: string;
                export const InspectionId: string;
                export const InspectionJobCategory: string;
                export const InspectionJobType: string;
                export const JobType: string;
                export const JobTypeIsInspectionList: string;
                export const JobTypeJobCategory: string;
                export const JobTypeName: string;
                export const JobTypeRate: string;
                export const JobTypeStandardTiming: string;
            }

            namespace Inspections {
                export const Checklist: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const Id: string;
                export const IsInspectionList: string;
                export const Name: string;
                export const Rate: string;
                export const StandardTiming: string;
            }
        }

        namespace Inventory {

            namespace Brands {
                export const Description: string;
                export const Id: string;
                export const Name: string;
            }

            namespace Categories {
                export const Description: string;
                export const Id: string;
                export const Name: string;
                export const ParentCategoryDescription: string;
                export const ParentCategoryId: string;
                export const ParentCategoryName: string;
                export const ParentCategoryParentCategoryId: string;
            }

            namespace Damagedproducts {
                export const CategoryDescription: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const CategoryParentCategoryId: string;
                export const Code: string;
                export const Date: string;
                export const Id: string;
                export const Name: string;
                export const Note: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductModel: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const PurchasePrice: string;
                export const Quantity: string;
            }

            namespace Goodsissue {
                export const BranchName: string;
                export const BranchesId: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Date: string;
                export const EmployeenAddress: string;
                export const EmployeenBloodGroup: string;
                export const EmployeenCityId: string;
                export const EmployeenCountryId: string;
                export const EmployeenDepartmentId: string;
                export const EmployeenDesignationId: string;
                export const EmployeenEmail: string;
                export const EmployeenFirstName: string;
                export const EmployeenHoureRateSalary: string;
                export const EmployeenId: string;
                export const EmployeenLastName: string;
                export const EmployeenPhone: string;
                export const EmployeenPicture: string;
                export const EmployeenRateType: string;
                export const EmployeenRegionId: string;
                export const EmployeenStateId: string;
                export const EmployeenTerritoryId: string;
                export const EmployeenUserId: string;
                export const EmployeenZipCode: string;
                export const Id: string;
                export const JournalRemarks: string;
                export const LineItems: string;
                export const Reference: string;
                export const Remarks: string;
                export const SaleChange: string;
                export const SaleCustomerId: string;
                export const SaleDate: string;
                export const SaleDetails: string;
                export const SaleDiscount: string;
                export const SaleDue: string;
                export const SaleGrandTotal: string;
                export const SaleId: string;
                export const SaleInvoice: string;
                export const SaleNetTotal: string;
                export const SaleNoTax: string;
                export const SalePaidAmount: string;
                export const SalePaymentAccount: string;
                export const SaleShippingCost: string;
                export const SaleTotalDiscount: string;
                export const SaleTotalTax: string;
                export const SaleVNo: string;
                export const SaleVat: string;
                export const TotalQuantity: string;
            }

            namespace Goodsissuedetails {
                export const Description: string;
                export const GoodsIssueCustomerId: string;
                export const GoodsIssueDate: string;
                export const GoodsIssueEmployeenId: string;
                export const GoodsIssueId: string;
                export const GoodsIssueJournalRemarks: string;
                export const GoodsIssueReference: string;
                export const GoodsIssueRemarks: string;
                export const GoodsIssueSaleId: string;
                export const GoodsIssueTotalQuantity: string;
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductDeleteDate: string;
                export const ProductDeleteUserId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductModel: string;
                export const ProductName: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const Quantity: string;
                export const WarehouseAddress: string;
                export const WarehouseCityId: string;
                export const WarehouseCountryId: string;
                export const WarehouseDescription: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
                export const WarehousePhone: string;
                export const WarehouseStateId: string;
            }

            namespace Goodsreceipt {
                export const BranchName: string;
                export const BranchesId: string;
                export const Date: string;
                export const EmployeeFullName: string;
                export const EmployeenAddress: string;
                export const EmployeenBloodGroup: string;
                export const EmployeenCityId: string;
                export const EmployeenCountryId: string;
                export const EmployeenDepartmentId: string;
                export const EmployeenDesignationId: string;
                export const EmployeenEmail: string;
                export const EmployeenFirstName: string;
                export const EmployeenHoureRateSalary: string;
                export const EmployeenId: string;
                export const EmployeenLastName: string;
                export const EmployeenPhone: string;
                export const EmployeenPicture: string;
                export const EmployeenRateType: string;
                export const EmployeenRegionId: string;
                export const EmployeenStateId: string;
                export const EmployeenTerritoryId: string;
                export const EmployeenUserId: string;
                export const EmployeenZipCode: string;
                export const Id: string;
                export const JournalRemarks: string;
                export const LineItems: string;
                export const ProductsId: string;
                export const PurchaseBill: string;
                export const PurchaseChange: string;
                export const PurchaseDate: string;
                export const PurchaseDetails: string;
                export const PurchaseDiscount: string;
                export const PurchaseDue: string;
                export const PurchaseGrandTotal: string;
                export const PurchaseId: string;
                export const PurchaseInvoiceNo: string;
                export const PurchaseNetTotal: string;
                export const PurchaseNoTax: string;
                export const PurchasePaidAmount: string;
                export const PurchasePaymentAccount: string;
                export const PurchaseShippingCost: string;
                export const PurchaseSupplierId: string;
                export const PurchaseTotalDiscount: string;
                export const PurchaseTotalTax: string;
                export const PurchaseVNo: string;
                export const PurchaseVat: string;
                export const Reference: string;
                export const Remarks: string;
                export const SupplierAddress: string;
                export const SupplierCityId: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountryId: string;
                export const SupplierEmail: string;
                export const SupplierEmailAddress: string;
                export const SupplierFax: string;
                export const SupplierId: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierPreviousCreditBalance: string;
                export const SupplierRegionId: string;
                export const SupplierStateId: string;
                export const SupplierSupplierGroupId: string;
                export const SupplierWebsite: string;
                export const TotalQuantity: string;
            }

            namespace Goodsreceiptdetails {
                export const Description: string;
                export const GoodsReceiptDescription: string;
                export const GoodsReceiptGoodsReceiptId: string;
                export const GoodsReceiptId: string;
                export const GoodsReceiptProductId: string;
                export const GoodsReceiptProductName: string;
                export const GoodsReceiptQuantity: string;
                export const GoodsReceiptWarehouseId: string;
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductDeleteDate: string;
                export const ProductDeleteUserId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductModel: string;
                export const ProductName: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const Quantity: string;
                export const WarehouseAddress: string;
                export const WarehouseCityId: string;
                export const WarehouseCountryId: string;
                export const WarehouseDescription: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
                export const WarehousePhone: string;
                export const WarehouseStateId: string;
            }

            namespace Products {
                export const Barcode: string;
                export const BranchId: string;
                export const BrandDescription: string;
                export const BrandId: string;
                export const BrandName: string;
                export const CategoryDescription: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const CategoryParentCategoryId: string;
                export const DeleteDate: string;
                export const DeleteUserId: string;
                export const Id: string;
                export const Image: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Model: string;
                export const ProductDetails: string;
                export const ProductName: string;
                export const PurchasePrice: string;
                export const ReorderLevel: string;
                export const Sn: string;
                export const UnitDescription: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Stocks {
                export const BranchAddress: string;
                export const BranchCity: string;
                export const BranchCountry: string;
                export const BranchDeleteDate: string;
                export const BranchDeleteUserId: string;
                export const BranchDescription: string;
                export const BranchEmail: string;
                export const BranchId: string;
                export const BranchInsertDate: string;
                export const BranchInsertUserId: string;
                export const BranchIsActive: string;
                export const BranchLogo: string;
                export const BranchName: string;
                export const BranchPhone1: string;
                export const BranchPhone2: string;
                export const BranchState: string;
                export const BranchUpdateDate: string;
                export const BranchUpdateUserId: string;
                export const BranchUseBranchAddress: string;
                export const BranchVatPercentage: string;
                export const CategoryDescription: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const CategoryParentCategoryId: string;
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductDeleteDate: string;
                export const ProductDeleteUserId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductModel: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const QtyIn: string;
                export const QtyOut: string;
                export const Stock: string;
            }

            namespace Transferdetails {
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductDeleteDate: string;
                export const ProductDeleteUserId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductModel: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const Quantity: string;
                export const TransferFromBranchId: string;
                export const TransferFromWarehouseId: string;
                export const TransferId: string;
                export const TransferStatus: string;
                export const TransferToBranchId: string;
                export const TransferToWarehouseId: string;
                export const TransferTotalQuantity: string;
                export const TransferVNo: string;
                export const UnitPrice: string;
            }

            namespace Transfers {
                export const FromBranchAddress: string;
                export const FromBranchCity: string;
                export const FromBranchCountry: string;
                export const FromBranchDeleteDate: string;
                export const FromBranchDeleteUserId: string;
                export const FromBranchDescription: string;
                export const FromBranchEmail: string;
                export const FromBranchId: string;
                export const FromBranchInsertDate: string;
                export const FromBranchInsertUserId: string;
                export const FromBranchIsActive: string;
                export const FromBranchLogo: string;
                export const FromBranchName: string;
                export const FromBranchPhone1: string;
                export const FromBranchPhone2: string;
                export const FromBranchState: string;
                export const FromBranchUpdateDate: string;
                export const FromBranchUpdateUserId: string;
                export const FromBranchUseBranchAddress: string;
                export const FromBranchVatPercentage: string;
                export const FromWarehouseAddress: string;
                export const FromWarehouseCityId: string;
                export const FromWarehouseCountryId: string;
                export const FromWarehouseDescription: string;
                export const FromWarehouseId: string;
                export const FromWarehouseName: string;
                export const FromWarehousePhone: string;
                export const FromWarehouseStateId: string;
                export const Id: string;
                export const LineItems: string;
                export const Status: string;
                export const ToBranchAddress: string;
                export const ToBranchCity: string;
                export const ToBranchCountry: string;
                export const ToBranchDeleteDate: string;
                export const ToBranchDeleteUserId: string;
                export const ToBranchDescription: string;
                export const ToBranchEmail: string;
                export const ToBranchId: string;
                export const ToBranchInsertDate: string;
                export const ToBranchInsertUserId: string;
                export const ToBranchIsActive: string;
                export const ToBranchLogo: string;
                export const ToBranchName: string;
                export const ToBranchPhone1: string;
                export const ToBranchPhone2: string;
                export const ToBranchState: string;
                export const ToBranchUpdateDate: string;
                export const ToBranchUpdateUserId: string;
                export const ToBranchUseBranchAddress: string;
                export const ToBranchVatPercentage: string;
                export const ToWarehouseAddress: string;
                export const ToWarehouseCityId: string;
                export const ToWarehouseCountryId: string;
                export const ToWarehouseDescription: string;
                export const ToWarehouseId: string;
                export const ToWarehouseName: string;
                export const ToWarehousePhone: string;
                export const ToWarehouseStateId: string;
                export const TotalQuantity: string;
                export const VNo: string;
            }

            namespace Units {
                export const Description: string;
                export const Id: string;
                export const Name: string;
            }

            namespace Updatestocks {
                export const BranchAddress: string;
                export const BranchCity: string;
                export const BranchCountry: string;
                export const BranchDeleteDate: string;
                export const BranchDeleteUserId: string;
                export const BranchDescription: string;
                export const BranchEmail: string;
                export const BranchId: string;
                export const BranchInsertDate: string;
                export const BranchInsertUserId: string;
                export const BranchIsActive: string;
                export const BranchLogo: string;
                export const BranchName: string;
                export const BranchPhone1: string;
                export const BranchPhone2: string;
                export const BranchState: string;
                export const BranchUpdateDate: string;
                export const BranchUpdateUserId: string;
                export const BranchUseBranchAddress: string;
                export const BranchVatPercentage: string;
                export const Id: string;
                export const InsertDate: string;
                export const Mode: string;
                export const Note: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductModel: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const Quantity: string;
                export const Status: string;
                export const StockMode: string;
                export const TransactionType: string;
                export const VNo: string;
                export const WarehouseAddress: string;
                export const WarehouseCityId: string;
                export const WarehouseCountryId: string;
                export const WarehouseDescription: string;
                export const WarehouseId: string;
                export const WarehouseName: string;
                export const WarehousePhone: string;
                export const WarehouseStateId: string;
            }
        }

        namespace JobCards {

            namespace Gatepasses {
                export const BranchName: string;
                export const BranchesId: string;
                export const Customer: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Id: string;
                export const JobCard: string;
                export const JobCardAddress: string;
                export const JobCardCustomer: string;
                export const JobCardDeliveryDatetime: string;
                export const JobCardDetails: string;
                export const JobCardMobile: string;
                export const JobCardPhone: string;
                export const JobCardReference: string;
                export const JobCardScheduleDatetime: string;
                export const JobCardVehicle: string;
                export const JobCardWebsite: string;
                export const JobCardWorkOrderNo: string;
                export const Vehicle: string;
                export const VehicleAssemblyType: string;
                export const VehicleAxles: string;
                export const VehicleBodyStyle: string;
                export const VehicleBrand: string;
                export const VehicleCcRating: string;
                export const VehicleColor: string;
                export const VehicleCountryOfOrigin: string;
                export const VehicleCustomerId: string;
                export const VehicleEngineNo: string;
                export const VehicleFrontAxleGroupRating: string;
                export const VehicleFuelType: string;
                export const VehicleGrossVehicleMass: string;
                export const VehicleMake: string;
                export const VehicleModel: string;
                export const VehicleOutDate: string;
                export const VehicleRearAxleGroupRating: string;
                export const VehicleSeats: string;
                export const VehicleSecondColor: string;
                export const VehicleSubModel: string;
                export const VehicleTareWeight: string;
                export const VehicleVehicleRegistration: string;
                export const VehicleVehicleType: string;
                export const VehicleWheelbase: string;
                export const VehicleYear: string;
            }

            namespace Jobcarddetails {
                export const CustomerNotes: string;
                export const Id: string;
                export const JobOrder: string;
                export const JobOrderAddress: string;
                export const JobOrderCustomer: string;
                export const JobOrderDeliveryDatetime: string;
                export const JobOrderDetails: string;
                export const JobOrderMobile: string;
                export const JobOrderPhone: string;
                export const JobOrderReference: string;
                export const JobOrderScheduleDatetime: string;
                export const JobOrderVehicle: string;
                export const JobOrderWebsite: string;
                export const JobOrderWorkOrderNo: string;
                export const JobType: string;
                export const JobTypeName: string;
                export const Mechanic: string;
                export const MechanicFullName: string;
            }

            namespace Jobcards {
                export const Address: string;
                export const BranchName: string;
                export const BranchesId: string;
                export const Customer: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const DeliveryDatetime: string;
                export const Details: string;
                export const Id: string;
                export const JobCardDetails: string;
                export const Mobile: string;
                export const Phone: string;
                export const Reference: string;
                export const ScheduleDatetime: string;
                export const Vehicle: string;
                export const VehicleAssemblyType: string;
                export const VehicleAxles: string;
                export const VehicleBodyStyle: string;
                export const VehicleBrand: string;
                export const VehicleCcRating: string;
                export const VehicleColor: string;
                export const VehicleCountryOfOrigin: string;
                export const VehicleCustomerId: string;
                export const VehicleEngineNo: string;
                export const VehicleFrontAxleGroupRating: string;
                export const VehicleFuelType: string;
                export const VehicleGrossVehicleMass: string;
                export const VehicleMake: string;
                export const VehicleModel: string;
                export const VehicleRearAxleGroupRating: string;
                export const VehicleSeats: string;
                export const VehicleSecondColor: string;
                export const VehicleSubModel: string;
                export const VehicleTareWeight: string;
                export const VehicleVehicleRegistration: string;
                export const VehicleVehicleType: string;
                export const VehicleWheelbase: string;
                export const VehicleYear: string;
                export const Website: string;
                export const WorkOrderNo: string;
            }
        }

        namespace Masters {

            namespace Agendaitemtypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Assemblytypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Attendancestatuses {
                export const Id: string;
                export const Name: string;
            }

            namespace Attendeetypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Banks {
                export const AcName: string;
                export const AcNumber: string;
                export const BankName: string;
                export const Branch: string;
                export const Id: string;
                export const SignaturePicture: string;
            }

            namespace Branches {
                export const Address: string;
                export const City: string;
                export const CityCountryId: string;
                export const CityName: string;
                export const CityStateId: string;
                export const Country: string;
                export const CountryName: string;
                export const DeleteDate: string;
                export const DeleteUserId: string;
                export const Description: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Logo: string;
                export const Name: string;
                export const Phone1: string;
                export const Phone2: string;
                export const State: string;
                export const StateCountryId: string;
                export const StateName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UseBranchAddress: string;
                export const VatPercentage: string;
            }

            namespace Cities {
                export const CountryCode: string;
                export const CountryId: string;
                export const CountryName: string;
                export const Id: string;
                export const In: string;
                export const InBy: string;
                export const Latitude: string;
                export const Longitude: string;
                export const Name: string;
                export const Notes: string;
                export const StateCode: string;
                export const StateCountryId: string;
                export const StateId: string;
                export const StateName: string;
                export const Up: string;
                export const UpBy: string;
                export const WikiDataId: string;
            }

            namespace Colortypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Companies {
                export const Address: string;
                export const CompanyEmail: string;
                export const CompanyName: string;
                export const CurrencyCurrencyName: string;
                export const CurrencyCurrencySymbol: string;
                export const CurrencyId: string;
                export const CurrencyPosition: string;
                export const Favicon: string;
                export const FooterText: string;
                export const Id: string;
                export const Logo: string;
                export const Phone: string;
                export const SaleLogo: string;
                export const VatPercentage: string;
            }

            namespace Countries {
                export const Capital: string;
                export const Currency: string;
                export const CurrencySymbol: string;
                export const Emoji: string;
                export const EmojiU: string;
                export const Id: string;
                export const In: string;
                export const InBy: string;
                export const Iso2: string;
                export const Iso3: string;
                export const Latitude: string;
                export const Longitude: string;
                export const Name: string;
                export const Native: string;
                export const Notes: string;
                export const NumericCode: string;
                export const PhoneCode: string;
                export const Region: string;
                export const SubRegion: string;
                export const Timezones: string;
                export const Tld: string;
                export const Translations: string;
                export const Up: string;
                export const UpBy: string;
                export const WikiDataId: string;
            }

            namespace Currencies {
                export const CurrencyName: string;
                export const CurrencySymbol: string;
                export const Id: string;
            }

            namespace Customergroups {
                export const Description: string;
                export const Id: string;
                export const Name: string;
            }

            namespace Expensestypes {
                export const Id: string;
                export const Type: string;
            }

            namespace Fueltypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Jobcategories {
                export const Id: string;
                export const Name: string;
            }

            namespace Jobtypes {
                export const Id: string;
                export const IsInspectionList: string;
                export const JobCategory: string;
                export const JobCategoryName: string;
                export const Name: string;
                export const Rate: string;
                export const StandardTiming: string;
            }

            namespace Locations {
                export const Address: string;
                export const CityId: string;
                export const CountryId: string;
                export const Id: string;
                export const Latitude: string;
                export const Longitude: string;
                export const Name: string;
                export const StateId: string;
            }

            namespace Meetingtypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Regions {
                export const Id: string;
                export const Name: string;
            }

            namespace Resolutionstatuses {
                export const Id: string;
                export const Name: string;
            }

            namespace Shippers {
                export const CompanyName: string;
                export const Phone: string;
                export const ShipperId: string;
            }

            namespace States {
                export const CountryCode: string;
                export const CountryId: string;
                export const CountryName: string;
                export const FipsCode: string;
                export const Id: string;
                export const In: string;
                export const InBy: string;
                export const Iso2: string;
                export const Latitude: string;
                export const Longitude: string;
                export const Name: string;
                export const Notes: string;
                export const Up: string;
                export const UpBy: string;
                export const WikiDataId: string;
            }

            namespace Suppliergroups {
                export const Description: string;
                export const Id: string;
                export const Name: string;
            }

            namespace Territories {
                export const Id: string;
                export const RegionId: string;
                export const RegionName: string;
                export const TerritoryDescription: string;
                export const TerritoryId: string;
            }

            namespace Vehiclemakes {
                export const Id: string;
                export const Name: string;
            }

            namespace Vehiclemodels {
                export const Id: string;
                export const Name: string;
            }

            namespace Vehicletypes {
                export const Id: string;
                export const Name: string;
            }

            namespace Warehouses {
                export const Address: string;
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const CityStateId: string;
                export const CountryId: string;
                export const CountryName: string;
                export const Description: string;
                export const Id: string;
                export const Name: string;
                export const Phone: string;
                export const StateCountryId: string;
                export const StateId: string;
                export const StateName: string;
            }
        }

        namespace Meeting {

            namespace Meeting {
                export const EndDate: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LocationAddress: string;
                export const LocationId: string;
                export const LocationLatitude: string;
                export const LocationLongitude: string;
                export const LocationName: string;
                export const MeetingGuid: string;
                export const MeetingId: string;
                export const MeetingName: string;
                export const MeetingNumber: string;
                export const MeetingTypeId: string;
                export const MeetingTypeName: string;
                export const OrganizerContactEmail: string;
                export const OrganizerContactFirstName: string;
                export const OrganizerContactId: string;
                export const OrganizerContactIdentityNo: string;
                export const OrganizerContactLastName: string;
                export const OrganizerContactTitle: string;
                export const OrganizerContactUserId: string;
                export const ReporterContactEmail: string;
                export const ReporterContactFirstName: string;
                export const ReporterContactId: string;
                export const ReporterContactIdentityNo: string;
                export const ReporterContactLastName: string;
                export const ReporterContactTitle: string;
                export const ReporterContactUserId: string;
                export const StartDate: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitParentUnitId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Meetingagenda {
                export const AgendaId: string;
                export const AgendaNumber: string;
                export const AgendaTypeId: string;
                export const AgendaTypeName: string;
                export const Attachments: string;
                export const Description: string;
                export const Images: string;
                export const MeetingEndDate: string;
                export const MeetingId: string;
                export const MeetingInsertDate: string;
                export const MeetingInsertUserId: string;
                export const MeetingLocationId: string;
                export const MeetingMeetingGuid: string;
                export const MeetingMeetingName: string;
                export const MeetingMeetingNumber: string;
                export const MeetingMeetingTypeId: string;
                export const MeetingOrganizerContactId: string;
                export const MeetingReporterContactId: string;
                export const MeetingStartDate: string;
                export const MeetingUnitId: string;
                export const MeetingUpdateDate: string;
                export const MeetingUpdateUserId: string;
                export const RequestedByContactEmail: string;
                export const RequestedByContactFirstName: string;
                export const RequestedByContactId: string;
                export const RequestedByContactIdentityNo: string;
                export const RequestedByContactLastName: string;
                export const RequestedByContactTitle: string;
                export const RequestedByContactUserId: string;
                export const Title: string;
            }

            namespace Meetingagendarelevant {
                export const AgendaAgendaNumber: string;
                export const AgendaAgendaTypeId: string;
                export const AgendaAttachments: string;
                export const AgendaDescription: string;
                export const AgendaId: string;
                export const AgendaImages: string;
                export const AgendaMeetingId: string;
                export const AgendaRelevantId: string;
                export const AgendaRequestedByContactId: string;
                export const AgendaTitle: string;
                export const ContactEmail: string;
                export const ContactFirstName: string;
                export const ContactId: string;
                export const ContactIdentityNo: string;
                export const ContactLastName: string;
                export const ContactTitle: string;
                export const ContactUserId: string;
            }

            namespace Meetingagendatype {
                export const AgendaTypeId: string;
                export const Name: string;
            }

            namespace Meetingattendee {
                export const AttendanceStatus: string;
                export const AttendeeId: string;
                export const AttendeeType: string;
                export const ContactEmail: string;
                export const ContactFirstName: string;
                export const ContactId: string;
                export const ContactIdentityNo: string;
                export const ContactLastName: string;
                export const ContactTitle: string;
                export const ContactUserId: string;
                export const MeetingEndDate: string;
                export const MeetingId: string;
                export const MeetingInsertDate: string;
                export const MeetingInsertUserId: string;
                export const MeetingLocationId: string;
                export const MeetingMeetingGuid: string;
                export const MeetingMeetingName: string;
                export const MeetingMeetingNumber: string;
                export const MeetingMeetingTypeId: string;
                export const MeetingOrganizerContactId: string;
                export const MeetingReporterContactId: string;
                export const MeetingStartDate: string;
                export const MeetingUnitId: string;
                export const MeetingUpdateDate: string;
                export const MeetingUpdateUserId: string;
            }

            namespace Meetingdecision {
                export const AgendaAgendaNumber: string;
                export const AgendaAgendaTypeId: string;
                export const AgendaAttachments: string;
                export const AgendaDescription: string;
                export const AgendaId: string;
                export const AgendaImages: string;
                export const AgendaMeetingId: string;
                export const AgendaRequestedByContactId: string;
                export const AgendaTitle: string;
                export const Attachments: string;
                export const DecisionId: string;
                export const DecisionNumber: string;
                export const DecisionNumberName: string;
                export const Description: string;
                export const DueDate: string;
                export const Images: string;
                export const MeetingEndDate: string;
                export const MeetingId: string;
                export const MeetingInsertDate: string;
                export const MeetingInsertUserId: string;
                export const MeetingLocationId: string;
                export const MeetingMeetingGuid: string;
                export const MeetingMeetingName: string;
                export const MeetingMeetingNumber: string;
                export const MeetingMeetingTypeId: string;
                export const MeetingOrganizerContactId: string;
                export const MeetingReporterContactId: string;
                export const MeetingStartDate: string;
                export const MeetingUnitId: string;
                export const MeetingUpdateDate: string;
                export const MeetingUpdateUserId: string;
                export const ResolutionStatus: string;
                export const ResponsibleContactEmail: string;
                export const ResponsibleContactFirstName: string;
                export const ResponsibleContactId: string;
                export const ResponsibleContactIdentityNo: string;
                export const ResponsibleContactLastName: string;
                export const ResponsibleContactTitle: string;
                export const ResponsibleContactUserId: string;
            }

            namespace Meetingdecisionrelevant {
                export const ContactEmail: string;
                export const ContactFirstName: string;
                export const ContactId: string;
                export const ContactIdentityNo: string;
                export const ContactLastName: string;
                export const ContactTitle: string;
                export const ContactUserId: string;
                export const DecisionAgendaId: string;
                export const DecisionAttachments: string;
                export const DecisionDecisionNumber: string;
                export const DecisionDescription: string;
                export const DecisionDueDate: string;
                export const DecisionId: string;
                export const DecisionImages: string;
                export const DecisionMeetingId: string;
                export const DecisionRelevantId: string;
                export const DecisionResolutionStatus: string;
                export const DecisionResponsibleContactId: string;
            }

            namespace Meetinglocation {
                export const Address: string;
                export const Latitude: string;
                export const LocationId: string;
                export const Longitude: string;
                export const Name: string;
            }

            namespace Meetings {
                export const Department: string;
                export const EndDate: string;
                export const Id: string;
                export const Location: string;
                export const MeetingName: string;
                export const MeetingType: string;
                export const OrganizedBy: string;
                export const Reporter: string;
                export const StartDate: string;
            }
        }

        namespace Note {

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }
        }

        namespace Purchasing {

            namespace Purchase {
                export const BranchName: string;
                export const BranchesId: string;
                export const Change: string;
                export const Date: string;
                export const Details: string;
                export const Discount: string;
                export const Due: string;
                export const GrandTotal: string;
                export const Id: string;
                export const In: string;
                export const InBy: string;
                export const InvoiceNo: string;
                export const LineItems: string;
                export const NetTotal: string;
                export const NoTax: string;
                export const PaidAmount: string;
                export const PaymentAccount: string;
                export const PaymentAccountCustomerId: string;
                export const PaymentAccountDepreciationRate: string;
                export const PaymentAccountHeadCode: string;
                export const PaymentAccountHeadLevel: string;
                export const PaymentAccountHeadName: string;
                export const PaymentAccountHeadType: string;
                export const PaymentAccountIsBudget: string;
                export const PaymentAccountIsDepreciation: string;
                export const PaymentAccountIsGl: string;
                export const PaymentAccountIsTransaction: string;
                export const PaymentAccountPHeadName: string;
                export const PaymentAccountParentHead: string;
                export const PaymentAccountSupplierId: string;
                export const ShippingCost: string;
                export const SupplierAddress: string;
                export const SupplierCityId: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountryId: string;
                export const SupplierEmail: string;
                export const SupplierEmailAddress: string;
                export const SupplierFax: string;
                export const SupplierId: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierPreviousCreditBalance: string;
                export const SupplierRegionId: string;
                export const SupplierStateId: string;
                export const SupplierSupplierGroupId: string;
                export const SupplierWebsite: string;
                export const TotalDiscount: string;
                export const TotalTax: string;
                export const Up: string;
                export const UpBy: string;
                export const VNo: string;
                export const Vat: string;
            }

            namespace Purchasedetails {
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductCategoryId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductModel: string;
                export const ProductName: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const PurchaseId: string;
                export const Quantity: string;
                export const Total: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitPrice: string;
                export const UnitUnitName: string;
            }
        }

        namespace Quotations {

            namespace Quotationdetails {
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductDeleteDate: string;
                export const ProductDeleteUserId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductModel: string;
                export const ProductName: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const Quantity: string;
                export const QuotationCustomerId: string;
                export const QuotationDate: string;
                export const QuotationDetails: string;
                export const QuotationDiscount: string;
                export const QuotationExpiryDate: string;
                export const QuotationGrandTotal: string;
                export const QuotationId: string;
                export const QuotationNetTotal: string;
                export const QuotationShippingCost: string;
                export const QuotationTotalDiscount: string;
                export const QuotationTotalTax: string;
                export const QuotationVat: string;
                export const Total: string;
                export const UnitDeleteDate: string;
                export const UnitDeleteUserId: string;
                export const UnitDescription: string;
                export const UnitId: string;
                export const UnitInsertDate: string;
                export const UnitInsertUserId: string;
                export const UnitIsActive: string;
                export const UnitName: string;
                export const UnitPrice: string;
                export const UnitUnitName: string;
                export const UnitUpdateDate: string;
                export const UnitUpdateUserId: string;
            }

            namespace Quotationjobitems {
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const JobCategory: string;
                export const JobType: string;
                export const JobTypeIsInspectionList: string;
                export const JobTypeName: string;
                export const JobTypeRate: string;
                export const JobTypeStandardTiming: string;
                export const QuotationCustomerId: string;
                export const QuotationDate: string;
                export const QuotationDetails: string;
                export const QuotationDiscount: string;
                export const QuotationExpiryDate: string;
                export const QuotationGrandTotal: string;
                export const QuotationId: string;
                export const QuotationNetTotal: string;
                export const QuotationShippingCost: string;
                export const QuotationTotalDiscount: string;
                export const QuotationTotalTax: string;
                export const QuotationVat: string;
                export const QuotationVehicle: string;
                export const Total: string;
                export const UnitPrice: string;
            }

            namespace Quotations {
                export const BranchName: string;
                export const BranchesId: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Date: string;
                export const Details: string;
                export const Discount: string;
                export const ExpiryDate: string;
                export const GrandTotal: string;
                export const Id: string;
                export const Jobs: string;
                export const LineItems: string;
                export const NetTotal: string;
                export const NoTax: string;
                export const ShippingCost: string;
                export const TotalDiscount: string;
                export const TotalTax: string;
                export const Vat: string;
                export const Vehicle: string;
                export const VehicleAssemblyType: string;
                export const VehicleAxles: string;
                export const VehicleBodyStyle: string;
                export const VehicleBrand: string;
                export const VehicleCcRating: string;
                export const VehicleColor: string;
                export const VehicleCountryOfOrigin: string;
                export const VehicleCustomerId: string;
                export const VehicleEngineNo: string;
                export const VehicleFrontAxleGroupRating: string;
                export const VehicleFuelType: string;
                export const VehicleGrossVehicleMass: string;
                export const VehicleMake: string;
                export const VehicleModel: string;
                export const VehicleRearAxleGroupRating: string;
                export const VehicleSeats: string;
                export const VehicleSecondColor: string;
                export const VehicleSubModel: string;
                export const VehicleTareWeight: string;
                export const VehicleVehicleRegistration: string;
                export const VehicleVehicleType: string;
                export const VehicleWheelbase: string;
                export const VehicleYear: string;
            }
        }

        namespace Reports {

            namespace Dailyclosing {
                export const Adjustment: string;
                export const Amount: string;
                export const BranchId: string;
                export const CashIn: string;
                export const CashOut: string;
                export const Date: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LastClosingAmount: string;
                export const LastClosingDate: string;
                export const LastDayClosing: string;
                export const Status: string;
                export const TodayCashIn: string;
                export const TodayCashOut: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Sales {

            namespace Saledetails {
                export const BranchId: string;
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const ProductBarcode: string;
                export const ProductCategoryId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductModel: string;
                export const ProductName: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const Quantity: string;
                export const SaleBankId: string;
                export const SaleChange: string;
                export const SaleCustomerId: string;
                export const SaleDate: string;
                export const SaleDetails: string;
                export const SaleDiscount: string;
                export const SaleDue: string;
                export const SaleGrandTotal: string;
                export const SaleId: string;
                export const SaleNetTotal: string;
                export const SalePaidAmount: string;
                export const SalePaymentType: string;
                export const SaleShippingCost: string;
                export const SaleTotalDiscount: string;
                export const SaleTotalTax: string;
                export const SaleVat: string;
                export const Total: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitPrice: string;
                export const UnitUnitName: string;
            }

            namespace Sales {
                export const BranchName: string;
                export const BranchesId: string;
                export const Change: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Date: string;
                export const Details: string;
                export const Discount: string;
                export const Due: string;
                export const GrandTotal: string;
                export const Id: string;
                export const In: string;
                export const InBy: string;
                export const LineItems: string;
                export const NetTotal: string;
                export const NoTax: string;
                export const PaidAmount: string;
                export const PaymentAccount: string;
                export const PaymentAccountCustomerId: string;
                export const PaymentAccountDepreciationRate: string;
                export const PaymentAccountHeadCode: string;
                export const PaymentAccountHeadLevel: string;
                export const PaymentAccountHeadName: string;
                export const PaymentAccountHeadType: string;
                export const PaymentAccountIsBudget: string;
                export const PaymentAccountIsDepreciation: string;
                export const PaymentAccountIsGl: string;
                export const PaymentAccountIsTransaction: string;
                export const PaymentAccountPHeadName: string;
                export const PaymentAccountParentHead: string;
                export const PaymentAccountSupplierId: string;
                export const ShippingCost: string;
                export const TotalDiscount: string;
                export const TotalTax: string;
                export const Up: string;
                export const UpBy: string;
                export const VNo: string;
                export const Vat: string;
            }
        }

        namespace Vehicles {

            namespace Vehicle {
                export const AssemblyType: string;
                export const AssemblyTypeName: string;
                export const Axles: string;
                export const BodyStyle: string;
                export const Brand: string;
                export const BrandDescription: string;
                export const BrandName: string;
                export const CcRating: string;
                export const Color: string;
                export const ColorName: string;
                export const CountryOfOrigin: string;
                export const CountryOfOriginName: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const EngineNo: string;
                export const FrontAxleGroupRating: string;
                export const FuelType: string;
                export const FuelTypeName: string;
                export const GrossVehicleMass: string;
                export const Id: string;
                export const Make: string;
                export const MakeName: string;
                export const Model: string;
                export const ModelName: string;
                export const NoteList: string;
                export const RearAxleGroupRating: string;
                export const Seats: string;
                export const SecondColor: string;
                export const SecondColorName: string;
                export const SubModel: string;
                export const TareWeight: string;
                export const VehicleRegistration: string;
                export const VehicleType: string;
                export const VehicleTypeName: string;
                export const Wheelbase: string;
                export const Year: string;
            }
        }

        namespace invoice {

            namespace Invoiceitems {
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const InvoiceChange: string;
                export const InvoiceCustomerId: string;
                export const InvoiceDate: string;
                export const InvoiceDeliveryDatetime: string;
                export const InvoiceDetails: string;
                export const InvoiceDiscount: string;
                export const InvoiceDue: string;
                export const InvoiceGrandTotal: string;
                export const InvoiceId: string;
                export const InvoiceJobcard: string;
                export const InvoiceNetTotal: string;
                export const InvoicePaidAmount: string;
                export const InvoicePaymentAccount: string;
                export const InvoiceScheduleDatetime: string;
                export const InvoiceShippingCost: string;
                export const InvoiceTotalDiscount: string;
                export const InvoiceTotalTax: string;
                export const InvoiceVNo: string;
                export const InvoiceVat: string;
                export const InvoiceVehicle: string;
                export const ProductBarcode: string;
                export const ProductBranchId: string;
                export const ProductBrandId: string;
                export const ProductCategoryId: string;
                export const ProductDeleteDate: string;
                export const ProductDeleteUserId: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductModel: string;
                export const ProductProductDetails: string;
                export const ProductProductName: string;
                export const ProductReorderLevel: string;
                export const ProductSn: string;
                export const ProductUnitId: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const PurchasePrice: string;
                export const Quantity: string;
                export const Total: string;
                export const UnitDescription: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitPrice: string;
            }

            namespace Invoicejobitems {
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const InvoiceChange: string;
                export const InvoiceCustomerId: string;
                export const InvoiceDate: string;
                export const InvoiceDeliveryDatetime: string;
                export const InvoiceDetails: string;
                export const InvoiceDiscount: string;
                export const InvoiceDue: string;
                export const InvoiceGrandTotal: string;
                export const InvoiceJobId: string;
                export const InvoiceJobcard: string;
                export const InvoiceNetTotal: string;
                export const InvoicePaidAmount: string;
                export const InvoicePaymentAccount: string;
                export const InvoiceScheduleDatetime: string;
                export const InvoiceShippingCost: string;
                export const InvoiceTotalDiscount: string;
                export const InvoiceTotalTax: string;
                export const InvoiceVNo: string;
                export const InvoiceVat: string;
                export const InvoiceVehicle: string;
                export const JobType: string;
                export const JobTypeIsInspectionList: string;
                export const JobTypeJobCategory: string;
                export const JobTypeName: string;
                export const JobTypeRate: string;
                export const JobTypeStandardTiming: string;
                export const Total: string;
                export const UnitPrice: string;
            }

            namespace Invoices {
                export const BranchName: string;
                export const BranchesId: string;
                export const Change: string;
                export const CustomerAddress: string;
                export const CustomerCityId: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountryId: string;
                export const CustomerCustomerGroupId: string;
                export const CustomerEmail: string;
                export const CustomerEmailAddress: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerPreviousCreditBalance: string;
                export const CustomerRegionId: string;
                export const CustomerStateId: string;
                export const CustomerWebsite: string;
                export const Date: string;
                export const DeliveryDatetime: string;
                export const Details: string;
                export const Discount: string;
                export const Due: string;
                export const GrandTotal: string;
                export const HeadCodeName: string;
                export const Id: string;
                export const Jobcard: string;
                export const JobcardAddress: string;
                export const JobcardCustomer: string;
                export const JobcardDeliveryDatetime: string;
                export const JobcardDetails: string;
                export const JobcardMobile: string;
                export const JobcardPhone: string;
                export const JobcardReference: string;
                export const JobcardScheduleDatetime: string;
                export const JobcardVehicle: string;
                export const JobcardWebsite: string;
                export const JobcardWorkOrderNo: string;
                export const Jobs: string;
                export const LineItems: string;
                export const NetTotal: string;
                export const NoTax: string;
                export const PaidAmount: string;
                export const PaymentAccount: string;
                export const ScheduleDatetime: string;
                export const ShippingCost: string;
                export const TotalDiscount: string;
                export const TotalTax: string;
                export const VNo: string;
                export const Vat: string;
                export const Vehicle: string;
                export const VehicleAssemblyType: string;
                export const VehicleAxles: string;
                export const VehicleBodyStyle: string;
                export const VehicleBrand: string;
                export const VehicleCcRating: string;
                export const VehicleColor: string;
                export const VehicleCountryOfOrigin: string;
                export const VehicleCustomerId: string;
                export const VehicleEngineNo: string;
                export const VehicleFrontAxleGroupRating: string;
                export const VehicleFuelType: string;
                export const VehicleGrossVehicleMass: string;
                export const VehicleMake: string;
                export const VehicleModel: string;
                export const VehicleRearAxleGroupRating: string;
                export const VehicleSeats: string;
                export const VehicleSecondColor: string;
                export const VehicleSubModel: string;
                export const VehicleTareWeight: string;
                export const VehicleVehicleRegistration: string;
                export const VehicleVehicleType: string;
                export const VehicleWheelbase: string;
                export const VehicleYear: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const GoogleButton: string;
                export const LoginToYourAccount: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Dialogs {
            export const PendingChangesConfirmation: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeAzure: string;
            export const ThemeAzureLight: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeCosmos: string;
            export const ThemeCosmosLight: string;
            export const ThemeGlassy: string;
            export const ThemeGlassyLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    CloudGarage['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{BranchId:1,BrancheName:1,DisplayName:1,Email:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Bookings:{Vehiclebookings:{BookingDateTime:1,BranchName:1,BranchesId:1,Customer:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Id:1,Note:1,Title:1,Vehicle:1,VehicleAssemblyType:1,VehicleAxles:1,VehicleBodyStyle:1,VehicleBrand:1,VehicleCcRating:1,VehicleColor:1,VehicleCountryOfOrigin:1,VehicleCustomerId:1,VehicleEngineNo:1,VehicleFrontAxleGroupRating:1,VehicleFuelType:1,VehicleGrossVehicleMass:1,VehicleMake:1,VehicleModel:1,VehicleRearAxleGroupRating:1,VehicleSeats:1,VehicleSecondColor:1,VehicleSubModel:1,VehicleTareWeight:1,VehicleVehicleRegistration:1,VehicleVehicleType:1,VehicleWheelbase:1,VehicleYear:1},Vehiclecourtesybooking:{BranchName:1,BranchesId:1,Customer:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,EndDateTime:1,Id:1,Note:1,StartDateTime:1,Title:1,Vehicle:1,VehicleAssemblyType:1,VehicleAxles:1,VehicleBodyStyle:1,VehicleBrand:1,VehicleCcRating:1,VehicleColor:1,VehicleCountryOfOrigin:1,VehicleCustomerId:1,VehicleEngineNo:1,VehicleFrontAxleGroupRating:1,VehicleFuelType:1,VehicleGrossVehicleMass:1,VehicleMake:1,VehicleModel:1,VehicleRearAxleGroupRating:1,VehicleSeats:1,VehicleSecondColor:1,VehicleSubModel:1,VehicleTareWeight:1,VehicleVehicleRegistration:1,VehicleVehicleType:1,VehicleWheelbase:1,VehicleYear:1}},BusinessPartners:{Customers:{Address:1,CityCountryId:1,CityId:1,CityName:1,CityStateId:1,ContactName:1,ContactTitle:1,CountryId:1,CountryName:1,CustomerBalance:1,CustomerGroupDescription:1,CustomerGroupId:1,CustomerGroupName:1,CustomerReceivable:1,CustomerReceived:1,Email:1,EmailAddress:1,Fax:1,Id:1,IsActive:1,Name:1,NoteList:1,Phone:1,PostalCode:1,PreviousCreditBalance:1,RegionId:1,RegionName:1,StateCountryId:1,StateId:1,StateName:1,Website:1},Suppliers:{Address:1,CityCountryId:1,CityId:1,CityName:1,CityStateId:1,CompanyName:1,ContactName:1,ContactTitle:1,CountryId:1,CountryName:1,Email:1,EmailAddress:1,Fax:1,Id:1,IsActive:1,Phone:1,PostalCode:1,PreviousCreditBalance:1,RegionId:1,RegionName:1,StateCountryId:1,StateId:1,StateName:1,SupplierBalance:1,SupplierGroupDescription:1,SupplierGroupId:1,SupplierGroupName:1,SupplierPaid:1,SupplierPayable:1,Website:1}},CashBank:{Banktransactions:{AccountType:1,Coa:1,CoaCustomerId:1,CoaDeleteDate:1,CoaDeleteUserId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaInsertDate:1,CoaInsertUserId:1,CoaIsActive:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,CoaUpdateDate:1,CoaUpdateUserId:1,Credit:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsAppove:1,IsPosted:1,Narration:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Cashadjustment:{AccountType:1,Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Customerreceive:{Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,Remark:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Expenses:{Amount:1,BranchName:1,BranchesId:1,Date:1,ExpenseTypeId:1,ExpenseTypeType:1,HeadCodeName:1,Id:1,In:1,InBy:1,PaymentAccount:1,PaymentAccountCustomerId:1,PaymentAccountDepreciationRate:1,PaymentAccountHeadCode:1,PaymentAccountHeadLevel:1,PaymentAccountHeadName:1,PaymentAccountHeadType:1,PaymentAccountIsBudget:1,PaymentAccountIsDepreciation:1,PaymentAccountIsGl:1,PaymentAccountIsTransaction:1,PaymentAccountPHeadName:1,PaymentAccountParentHead:1,PaymentAccountSupplierId:1,Up:1,UpBy:1,VNo:1},Supplierpayment:{Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,Remark:1,SupplierAddress:1,SupplierCityId:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountryId:1,SupplierEmail:1,SupplierEmailAddress:1,SupplierFax:1,SupplierId:1,SupplierPhone:1,SupplierPostalCode:1,SupplierPreviousCreditBalance:1,SupplierRegionId:1,SupplierStateId:1,SupplierSupplierGroupId:1,SupplierWebsite:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1}},Common:{Userpreferences:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Financial:{Accounts:{Balance:1,BranchId:1,BranchName:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,DeleteDate:1,DeleteUserId:1,DepreciationRate:1,HeadCode:1,HeadCodeName:1,HeadLevel:1,HeadName:1,HeadType:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsBudget:1,IsDepreciation:1,IsGl:1,IsOpening:1,IsTransaction:1,OpeningBalance:1,PHeadName:1,ParentHead:1,ParentHead1:1,ParentHeadCustomerId:1,ParentHeadDepreciationRate:1,ParentHeadHeadCode:1,ParentHeadHeadLevel:1,ParentHeadHeadName:1,ParentHeadHeadType:1,ParentHeadIsBudget:1,ParentHeadIsDepreciation:1,ParentHeadIsGl:1,ParentHeadIsTransaction:1,ParentHeadPHeadName:1,ParentHeadSupplierId:1,SupplierAddress:1,SupplierCityId:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountryId:1,SupplierEmail:1,SupplierEmailAddress:1,SupplierFax:1,SupplierId:1,SupplierPhone:1,SupplierPostalCode:1,SupplierPreviousCreditBalance:1,SupplierRegionId:1,SupplierStateId:1,SupplierSupplierGroupId:1,SupplierWebsite:1,UpdateDate:1,UpdateUserId:1},Contravoucher:{Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Creditvoucher:{Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,CreditAccountId:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,Remark:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Debitvoucher:{Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,Debit:1,DebitAccountId:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,Remark:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Journalvoucher:{Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsPosted:1,Narration:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1},Openingbalance:{AccountType:1,Coa:1,CoaCustomerId:1,CoaDepreciationRate:1,CoaHeadCode:1,CoaHeadLevel:1,CoaHeadName:1,CoaHeadType:1,CoaId:1,CoaIsBudget:1,CoaIsDepreciation:1,CoaIsGl:1,CoaIsTransaction:1,CoaPHeadName:1,CoaParentHead:1,CoaSupplierId:1,Credit:1,Debit:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,IsAppove:1,IsOpening:1,IsPosted:1,Narration:1,UpdateDate:1,UpdateUserId:1,VDate:1,VNo:1,Vtype:1}},HumanResource:{Attendance:{CheckIn:1,CheckOut:1,EmployeeAddress:1,EmployeeBloodGroup:1,EmployeeCityId:1,EmployeeCountryId:1,EmployeeDepartmentId:1,EmployeeDesignationId:1,EmployeeEmail:1,EmployeeFirstName:1,EmployeeFullName:1,EmployeeHoureRateSalary:1,EmployeeId:1,EmployeeLastName:1,EmployeePhone:1,EmployeePicture:1,EmployeeRateType:1,EmployeeRegionId:1,EmployeeStateId:1,EmployeeTerritoryId:1,EmployeeUserId:1,EmployeeZipCode:1,Id:1,StayTime:1},Departments:{Department:1,Description:1,Id:1,ParentDepartmentDepartment:1,ParentDepartmentDescription:1,ParentDepartmentId:1,ParentDepartmentParentDepartmentId:1},Designations:{Description:1,Designation:1,Id:1,ParentDesignationDescription:1,ParentDesignationDesignation:1,ParentDesignationId:1,ParentDesignationParentDesignationId:1},Employees:{Address:1,BloodGroup:1,CityCountryId:1,CityId:1,CityName:1,CityStateId:1,CountryId:1,CountryName:1,Department:1,DepartmentDescription:1,DepartmentId:1,DepartmentParentDepartmentId:1,Designation:1,DesignationDescription:1,DesignationId:1,DesignationParentDesignationId:1,Email:1,FirstName:1,HoureRateSalary:1,Id:1,LastName:1,Phone:1,Picture:1,RateType:1,RegionId:1,RegionName:1,StateCountryId:1,StateId:1,StateName:1,TerritoryId:1,TerritoryRegionId:1,TerritoryTerritoryDescription:1,TerritoryTerritoryId:1,UserId:1,ZipCode:1}},Inspections:{Inspectionchecklist:{Id:1,JobCategory:1,JobCategoryName:1,JobType:1,JobTypeIsInspectionList:1,JobTypeJobCategory:1,JobTypeName:1,JobTypeRate:1,JobTypeStandardTiming:1,JobTypes:1},Inspectionjobtypes:{Id:1,InspectionId:1,InspectionJobCategory:1,InspectionJobType:1,JobType:1,JobTypeIsInspectionList:1,JobTypeJobCategory:1,JobTypeName:1,JobTypeRate:1,JobTypeStandardTiming:1},Inspections:{Checklist:1,CustomerId:1,CustomerName:1,Id:1,IsInspectionList:1,Name:1,Rate:1,StandardTiming:1}},Inventory:{Brands:{Description:1,Id:1,Name:1},Categories:{Description:1,Id:1,Name:1,ParentCategoryDescription:1,ParentCategoryId:1,ParentCategoryName:1,ParentCategoryParentCategoryId:1},Damagedproducts:{CategoryDescription:1,CategoryId:1,CategoryName:1,CategoryParentCategoryId:1,Code:1,Date:1,Id:1,Name:1,Note:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductId:1,ProductImage:1,ProductModel:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,PurchasePrice:1,Quantity:1},Goodsissue:{BranchName:1,BranchesId:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Date:1,EmployeenAddress:1,EmployeenBloodGroup:1,EmployeenCityId:1,EmployeenCountryId:1,EmployeenDepartmentId:1,EmployeenDesignationId:1,EmployeenEmail:1,EmployeenFirstName:1,EmployeenHoureRateSalary:1,EmployeenId:1,EmployeenLastName:1,EmployeenPhone:1,EmployeenPicture:1,EmployeenRateType:1,EmployeenRegionId:1,EmployeenStateId:1,EmployeenTerritoryId:1,EmployeenUserId:1,EmployeenZipCode:1,Id:1,JournalRemarks:1,LineItems:1,Reference:1,Remarks:1,SaleChange:1,SaleCustomerId:1,SaleDate:1,SaleDetails:1,SaleDiscount:1,SaleDue:1,SaleGrandTotal:1,SaleId:1,SaleInvoice:1,SaleNetTotal:1,SaleNoTax:1,SalePaidAmount:1,SalePaymentAccount:1,SaleShippingCost:1,SaleTotalDiscount:1,SaleTotalTax:1,SaleVNo:1,SaleVat:1,TotalQuantity:1},Goodsissuedetails:{Description:1,GoodsIssueCustomerId:1,GoodsIssueDate:1,GoodsIssueEmployeenId:1,GoodsIssueId:1,GoodsIssueJournalRemarks:1,GoodsIssueReference:1,GoodsIssueRemarks:1,GoodsIssueSaleId:1,GoodsIssueTotalQuantity:1,Id:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductDeleteDate:1,ProductDeleteUserId:1,ProductId:1,ProductImage:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductModel:1,ProductName:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,ProductUpdateDate:1,ProductUpdateUserId:1,Quantity:1,WarehouseAddress:1,WarehouseCityId:1,WarehouseCountryId:1,WarehouseDescription:1,WarehouseId:1,WarehouseName:1,WarehousePhone:1,WarehouseStateId:1},Goodsreceipt:{BranchName:1,BranchesId:1,Date:1,EmployeeFullName:1,EmployeenAddress:1,EmployeenBloodGroup:1,EmployeenCityId:1,EmployeenCountryId:1,EmployeenDepartmentId:1,EmployeenDesignationId:1,EmployeenEmail:1,EmployeenFirstName:1,EmployeenHoureRateSalary:1,EmployeenId:1,EmployeenLastName:1,EmployeenPhone:1,EmployeenPicture:1,EmployeenRateType:1,EmployeenRegionId:1,EmployeenStateId:1,EmployeenTerritoryId:1,EmployeenUserId:1,EmployeenZipCode:1,Id:1,JournalRemarks:1,LineItems:1,ProductsId:1,PurchaseBill:1,PurchaseChange:1,PurchaseDate:1,PurchaseDetails:1,PurchaseDiscount:1,PurchaseDue:1,PurchaseGrandTotal:1,PurchaseId:1,PurchaseInvoiceNo:1,PurchaseNetTotal:1,PurchaseNoTax:1,PurchasePaidAmount:1,PurchasePaymentAccount:1,PurchaseShippingCost:1,PurchaseSupplierId:1,PurchaseTotalDiscount:1,PurchaseTotalTax:1,PurchaseVNo:1,PurchaseVat:1,Reference:1,Remarks:1,SupplierAddress:1,SupplierCityId:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountryId:1,SupplierEmail:1,SupplierEmailAddress:1,SupplierFax:1,SupplierId:1,SupplierPhone:1,SupplierPostalCode:1,SupplierPreviousCreditBalance:1,SupplierRegionId:1,SupplierStateId:1,SupplierSupplierGroupId:1,SupplierWebsite:1,TotalQuantity:1},Goodsreceiptdetails:{Description:1,GoodsReceiptDescription:1,GoodsReceiptGoodsReceiptId:1,GoodsReceiptId:1,GoodsReceiptProductId:1,GoodsReceiptProductName:1,GoodsReceiptQuantity:1,GoodsReceiptWarehouseId:1,Id:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductDeleteDate:1,ProductDeleteUserId:1,ProductId:1,ProductImage:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductModel:1,ProductName:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,ProductUpdateDate:1,ProductUpdateUserId:1,Quantity:1,WarehouseAddress:1,WarehouseCityId:1,WarehouseCountryId:1,WarehouseDescription:1,WarehouseId:1,WarehouseName:1,WarehousePhone:1,WarehouseStateId:1},Products:{Barcode:1,BranchId:1,BrandDescription:1,BrandId:1,BrandName:1,CategoryDescription:1,CategoryId:1,CategoryName:1,CategoryParentCategoryId:1,DeleteDate:1,DeleteUserId:1,Id:1,Image:1,InsertUserId:1,IsActive:1,Model:1,ProductDetails:1,ProductName:1,PurchasePrice:1,ReorderLevel:1,Sn:1,UnitDescription:1,UnitId:1,UnitName:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,UpdateDate:1,UpdateUserId:1},Stocks:{BranchAddress:1,BranchCity:1,BranchCountry:1,BranchDeleteDate:1,BranchDeleteUserId:1,BranchDescription:1,BranchEmail:1,BranchId:1,BranchInsertDate:1,BranchInsertUserId:1,BranchIsActive:1,BranchLogo:1,BranchName:1,BranchPhone1:1,BranchPhone2:1,BranchState:1,BranchUpdateDate:1,BranchUpdateUserId:1,BranchUseBranchAddress:1,BranchVatPercentage:1,CategoryDescription:1,CategoryId:1,CategoryName:1,CategoryParentCategoryId:1,Id:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductDeleteDate:1,ProductDeleteUserId:1,ProductId:1,ProductImage:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductModel:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,ProductUpdateDate:1,ProductUpdateUserId:1,QtyIn:1,QtyOut:1,Stock:1},Transferdetails:{Id:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductDeleteDate:1,ProductDeleteUserId:1,ProductId:1,ProductImage:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductModel:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,ProductUpdateDate:1,ProductUpdateUserId:1,Quantity:1,TransferFromBranchId:1,TransferFromWarehouseId:1,TransferId:1,TransferStatus:1,TransferToBranchId:1,TransferToWarehouseId:1,TransferTotalQuantity:1,TransferVNo:1,UnitPrice:1},Transfers:{FromBranchAddress:1,FromBranchCity:1,FromBranchCountry:1,FromBranchDeleteDate:1,FromBranchDeleteUserId:1,FromBranchDescription:1,FromBranchEmail:1,FromBranchId:1,FromBranchInsertDate:1,FromBranchInsertUserId:1,FromBranchIsActive:1,FromBranchLogo:1,FromBranchName:1,FromBranchPhone1:1,FromBranchPhone2:1,FromBranchState:1,FromBranchUpdateDate:1,FromBranchUpdateUserId:1,FromBranchUseBranchAddress:1,FromBranchVatPercentage:1,FromWarehouseAddress:1,FromWarehouseCityId:1,FromWarehouseCountryId:1,FromWarehouseDescription:1,FromWarehouseId:1,FromWarehouseName:1,FromWarehousePhone:1,FromWarehouseStateId:1,Id:1,LineItems:1,Status:1,ToBranchAddress:1,ToBranchCity:1,ToBranchCountry:1,ToBranchDeleteDate:1,ToBranchDeleteUserId:1,ToBranchDescription:1,ToBranchEmail:1,ToBranchId:1,ToBranchInsertDate:1,ToBranchInsertUserId:1,ToBranchIsActive:1,ToBranchLogo:1,ToBranchName:1,ToBranchPhone1:1,ToBranchPhone2:1,ToBranchState:1,ToBranchUpdateDate:1,ToBranchUpdateUserId:1,ToBranchUseBranchAddress:1,ToBranchVatPercentage:1,ToWarehouseAddress:1,ToWarehouseCityId:1,ToWarehouseCountryId:1,ToWarehouseDescription:1,ToWarehouseId:1,ToWarehouseName:1,ToWarehousePhone:1,ToWarehouseStateId:1,TotalQuantity:1,VNo:1},Units:{Description:1,Id:1,Name:1},Updatestocks:{BranchAddress:1,BranchCity:1,BranchCountry:1,BranchDeleteDate:1,BranchDeleteUserId:1,BranchDescription:1,BranchEmail:1,BranchId:1,BranchInsertDate:1,BranchInsertUserId:1,BranchIsActive:1,BranchLogo:1,BranchName:1,BranchPhone1:1,BranchPhone2:1,BranchState:1,BranchUpdateDate:1,BranchUpdateUserId:1,BranchUseBranchAddress:1,BranchVatPercentage:1,Id:1,InsertDate:1,Mode:1,Note:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductId:1,ProductImage:1,ProductModel:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,Quantity:1,Status:1,StockMode:1,TransactionType:1,VNo:1,WarehouseAddress:1,WarehouseCityId:1,WarehouseCountryId:1,WarehouseDescription:1,WarehouseId:1,WarehouseName:1,WarehousePhone:1,WarehouseStateId:1}},JobCards:{Gatepasses:{BranchName:1,BranchesId:1,Customer:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Id:1,JobCard:1,JobCardAddress:1,JobCardCustomer:1,JobCardDeliveryDatetime:1,JobCardDetails:1,JobCardMobile:1,JobCardPhone:1,JobCardReference:1,JobCardScheduleDatetime:1,JobCardVehicle:1,JobCardWebsite:1,JobCardWorkOrderNo:1,Vehicle:1,VehicleAssemblyType:1,VehicleAxles:1,VehicleBodyStyle:1,VehicleBrand:1,VehicleCcRating:1,VehicleColor:1,VehicleCountryOfOrigin:1,VehicleCustomerId:1,VehicleEngineNo:1,VehicleFrontAxleGroupRating:1,VehicleFuelType:1,VehicleGrossVehicleMass:1,VehicleMake:1,VehicleModel:1,VehicleOutDate:1,VehicleRearAxleGroupRating:1,VehicleSeats:1,VehicleSecondColor:1,VehicleSubModel:1,VehicleTareWeight:1,VehicleVehicleRegistration:1,VehicleVehicleType:1,VehicleWheelbase:1,VehicleYear:1},Jobcarddetails:{CustomerNotes:1,Id:1,JobOrder:1,JobOrderAddress:1,JobOrderCustomer:1,JobOrderDeliveryDatetime:1,JobOrderDetails:1,JobOrderMobile:1,JobOrderPhone:1,JobOrderReference:1,JobOrderScheduleDatetime:1,JobOrderVehicle:1,JobOrderWebsite:1,JobOrderWorkOrderNo:1,JobType:1,JobTypeName:1,Mechanic:1,MechanicFullName:1},Jobcards:{Address:1,BranchName:1,BranchesId:1,Customer:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,DeliveryDatetime:1,Details:1,Id:1,JobCardDetails:1,Mobile:1,Phone:1,Reference:1,ScheduleDatetime:1,Vehicle:1,VehicleAssemblyType:1,VehicleAxles:1,VehicleBodyStyle:1,VehicleBrand:1,VehicleCcRating:1,VehicleColor:1,VehicleCountryOfOrigin:1,VehicleCustomerId:1,VehicleEngineNo:1,VehicleFrontAxleGroupRating:1,VehicleFuelType:1,VehicleGrossVehicleMass:1,VehicleMake:1,VehicleModel:1,VehicleRearAxleGroupRating:1,VehicleSeats:1,VehicleSecondColor:1,VehicleSubModel:1,VehicleTareWeight:1,VehicleVehicleRegistration:1,VehicleVehicleType:1,VehicleWheelbase:1,VehicleYear:1,Website:1,WorkOrderNo:1}},Masters:{Agendaitemtypes:{Id:1,Name:1},Assemblytypes:{Id:1,Name:1},Attendancestatuses:{Id:1,Name:1},Attendeetypes:{Id:1,Name:1},Banks:{AcName:1,AcNumber:1,BankName:1,Branch:1,Id:1,SignaturePicture:1},Branches:{Address:1,City:1,CityCountryId:1,CityName:1,CityStateId:1,Country:1,CountryName:1,DeleteDate:1,DeleteUserId:1,Description:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,Logo:1,Name:1,Phone1:1,Phone2:1,State:1,StateCountryId:1,StateName:1,UpdateDate:1,UpdateUserId:1,UseBranchAddress:1,VatPercentage:1},Cities:{CountryCode:1,CountryId:1,CountryName:1,Id:1,In:1,InBy:1,Latitude:1,Longitude:1,Name:1,Notes:1,StateCode:1,StateCountryId:1,StateId:1,StateName:1,Up:1,UpBy:1,WikiDataId:1},Colortypes:{Id:1,Name:1},Companies:{Address:1,CompanyEmail:1,CompanyName:1,CurrencyCurrencyName:1,CurrencyCurrencySymbol:1,CurrencyId:1,CurrencyPosition:1,Favicon:1,FooterText:1,Id:1,Logo:1,Phone:1,SaleLogo:1,VatPercentage:1},Countries:{Capital:1,Currency:1,CurrencySymbol:1,Emoji:1,EmojiU:1,Id:1,In:1,InBy:1,Iso2:1,Iso3:1,Latitude:1,Longitude:1,Name:1,Native:1,Notes:1,NumericCode:1,PhoneCode:1,Region:1,SubRegion:1,Timezones:1,Tld:1,Translations:1,Up:1,UpBy:1,WikiDataId:1},Currencies:{CurrencyName:1,CurrencySymbol:1,Id:1},Customergroups:{Description:1,Id:1,Name:1},Expensestypes:{Id:1,Type:1},Fueltypes:{Id:1,Name:1},Jobcategories:{Id:1,Name:1},Jobtypes:{Id:1,IsInspectionList:1,JobCategory:1,JobCategoryName:1,Name:1,Rate:1,StandardTiming:1},Locations:{Address:1,CityId:1,CountryId:1,Id:1,Latitude:1,Longitude:1,Name:1,StateId:1},Meetingtypes:{Id:1,Name:1},Regions:{Id:1,Name:1},Resolutionstatuses:{Id:1,Name:1},Shippers:{CompanyName:1,Phone:1,ShipperId:1},States:{CountryCode:1,CountryId:1,CountryName:1,FipsCode:1,Id:1,In:1,InBy:1,Iso2:1,Latitude:1,Longitude:1,Name:1,Notes:1,Up:1,UpBy:1,WikiDataId:1},Suppliergroups:{Description:1,Id:1,Name:1},Territories:{Id:1,RegionId:1,RegionName:1,TerritoryDescription:1,TerritoryId:1},Vehiclemakes:{Id:1,Name:1},Vehiclemodels:{Id:1,Name:1},Vehicletypes:{Id:1,Name:1},Warehouses:{Address:1,CityCountryId:1,CityId:1,CityName:1,CityStateId:1,CountryId:1,CountryName:1,Description:1,Id:1,Name:1,Phone:1,StateCountryId:1,StateId:1,StateName:1}},Meeting:{Meeting:{EndDate:1,InsertDate:1,InsertUserId:1,LocationAddress:1,LocationId:1,LocationLatitude:1,LocationLongitude:1,LocationName:1,MeetingGuid:1,MeetingId:1,MeetingName:1,MeetingNumber:1,MeetingTypeId:1,MeetingTypeName:1,OrganizerContactEmail:1,OrganizerContactFirstName:1,OrganizerContactId:1,OrganizerContactIdentityNo:1,OrganizerContactLastName:1,OrganizerContactTitle:1,OrganizerContactUserId:1,ReporterContactEmail:1,ReporterContactFirstName:1,ReporterContactId:1,ReporterContactIdentityNo:1,ReporterContactLastName:1,ReporterContactTitle:1,ReporterContactUserId:1,StartDate:1,UnitId:1,UnitName:1,UnitParentUnitId:1,UpdateDate:1,UpdateUserId:1},Meetingagenda:{AgendaId:1,AgendaNumber:1,AgendaTypeId:1,AgendaTypeName:1,Attachments:1,Description:1,Images:1,MeetingEndDate:1,MeetingId:1,MeetingInsertDate:1,MeetingInsertUserId:1,MeetingLocationId:1,MeetingMeetingGuid:1,MeetingMeetingName:1,MeetingMeetingNumber:1,MeetingMeetingTypeId:1,MeetingOrganizerContactId:1,MeetingReporterContactId:1,MeetingStartDate:1,MeetingUnitId:1,MeetingUpdateDate:1,MeetingUpdateUserId:1,RequestedByContactEmail:1,RequestedByContactFirstName:1,RequestedByContactId:1,RequestedByContactIdentityNo:1,RequestedByContactLastName:1,RequestedByContactTitle:1,RequestedByContactUserId:1,Title:1},Meetingagendarelevant:{AgendaAgendaNumber:1,AgendaAgendaTypeId:1,AgendaAttachments:1,AgendaDescription:1,AgendaId:1,AgendaImages:1,AgendaMeetingId:1,AgendaRelevantId:1,AgendaRequestedByContactId:1,AgendaTitle:1,ContactEmail:1,ContactFirstName:1,ContactId:1,ContactIdentityNo:1,ContactLastName:1,ContactTitle:1,ContactUserId:1},Meetingagendatype:{AgendaTypeId:1,Name:1},Meetingattendee:{AttendanceStatus:1,AttendeeId:1,AttendeeType:1,ContactEmail:1,ContactFirstName:1,ContactId:1,ContactIdentityNo:1,ContactLastName:1,ContactTitle:1,ContactUserId:1,MeetingEndDate:1,MeetingId:1,MeetingInsertDate:1,MeetingInsertUserId:1,MeetingLocationId:1,MeetingMeetingGuid:1,MeetingMeetingName:1,MeetingMeetingNumber:1,MeetingMeetingTypeId:1,MeetingOrganizerContactId:1,MeetingReporterContactId:1,MeetingStartDate:1,MeetingUnitId:1,MeetingUpdateDate:1,MeetingUpdateUserId:1},Meetingdecision:{AgendaAgendaNumber:1,AgendaAgendaTypeId:1,AgendaAttachments:1,AgendaDescription:1,AgendaId:1,AgendaImages:1,AgendaMeetingId:1,AgendaRequestedByContactId:1,AgendaTitle:1,Attachments:1,DecisionId:1,DecisionNumber:1,DecisionNumberName:1,Description:1,DueDate:1,Images:1,MeetingEndDate:1,MeetingId:1,MeetingInsertDate:1,MeetingInsertUserId:1,MeetingLocationId:1,MeetingMeetingGuid:1,MeetingMeetingName:1,MeetingMeetingNumber:1,MeetingMeetingTypeId:1,MeetingOrganizerContactId:1,MeetingReporterContactId:1,MeetingStartDate:1,MeetingUnitId:1,MeetingUpdateDate:1,MeetingUpdateUserId:1,ResolutionStatus:1,ResponsibleContactEmail:1,ResponsibleContactFirstName:1,ResponsibleContactId:1,ResponsibleContactIdentityNo:1,ResponsibleContactLastName:1,ResponsibleContactTitle:1,ResponsibleContactUserId:1},Meetingdecisionrelevant:{ContactEmail:1,ContactFirstName:1,ContactId:1,ContactIdentityNo:1,ContactLastName:1,ContactTitle:1,ContactUserId:1,DecisionAgendaId:1,DecisionAttachments:1,DecisionDecisionNumber:1,DecisionDescription:1,DecisionDueDate:1,DecisionId:1,DecisionImages:1,DecisionMeetingId:1,DecisionRelevantId:1,DecisionResolutionStatus:1,DecisionResponsibleContactId:1},Meetinglocation:{Address:1,Latitude:1,LocationId:1,Longitude:1,Name:1},Meetings:{Department:1,EndDate:1,Id:1,Location:1,MeetingName:1,MeetingType:1,OrganizedBy:1,Reporter:1,StartDate:1}},Note:{Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1}},Purchasing:{Purchase:{BranchName:1,BranchesId:1,Change:1,Date:1,Details:1,Discount:1,Due:1,GrandTotal:1,Id:1,In:1,InBy:1,InvoiceNo:1,LineItems:1,NetTotal:1,NoTax:1,PaidAmount:1,PaymentAccount:1,PaymentAccountCustomerId:1,PaymentAccountDepreciationRate:1,PaymentAccountHeadCode:1,PaymentAccountHeadLevel:1,PaymentAccountHeadName:1,PaymentAccountHeadType:1,PaymentAccountIsBudget:1,PaymentAccountIsDepreciation:1,PaymentAccountIsGl:1,PaymentAccountIsTransaction:1,PaymentAccountPHeadName:1,PaymentAccountParentHead:1,PaymentAccountSupplierId:1,ShippingCost:1,SupplierAddress:1,SupplierCityId:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountryId:1,SupplierEmail:1,SupplierEmailAddress:1,SupplierFax:1,SupplierId:1,SupplierPhone:1,SupplierPostalCode:1,SupplierPreviousCreditBalance:1,SupplierRegionId:1,SupplierStateId:1,SupplierSupplierGroupId:1,SupplierWebsite:1,TotalDiscount:1,TotalTax:1,Up:1,UpBy:1,VNo:1,Vat:1},Purchasedetails:{Description:1,Discount:1,Id:1,ProductBarcode:1,ProductCategoryId:1,ProductId:1,ProductImage:1,ProductModel:1,ProductName:1,ProductProductDetails:1,ProductProductName:1,ProductQuantityPerUnit:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,PurchaseId:1,Quantity:1,Total:1,UnitId:1,UnitName:1,UnitPrice:1,UnitUnitName:1}},Quotations:{Quotationdetails:{Description:1,Discount:1,Id:1,ProductBarcode:1,ProductBrandId:1,ProductCategoryId:1,ProductDeleteDate:1,ProductDeleteUserId:1,ProductId:1,ProductImage:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductModel:1,ProductName:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,ProductUpdateDate:1,ProductUpdateUserId:1,Quantity:1,QuotationCustomerId:1,QuotationDate:1,QuotationDetails:1,QuotationDiscount:1,QuotationExpiryDate:1,QuotationGrandTotal:1,QuotationId:1,QuotationNetTotal:1,QuotationShippingCost:1,QuotationTotalDiscount:1,QuotationTotalTax:1,QuotationVat:1,Total:1,UnitDeleteDate:1,UnitDeleteUserId:1,UnitDescription:1,UnitId:1,UnitInsertDate:1,UnitInsertUserId:1,UnitIsActive:1,UnitName:1,UnitPrice:1,UnitUnitName:1,UnitUpdateDate:1,UnitUpdateUserId:1},Quotationjobitems:{Description:1,Discount:1,Id:1,JobCategory:1,JobType:1,JobTypeIsInspectionList:1,JobTypeName:1,JobTypeRate:1,JobTypeStandardTiming:1,QuotationCustomerId:1,QuotationDate:1,QuotationDetails:1,QuotationDiscount:1,QuotationExpiryDate:1,QuotationGrandTotal:1,QuotationId:1,QuotationNetTotal:1,QuotationShippingCost:1,QuotationTotalDiscount:1,QuotationTotalTax:1,QuotationVat:1,QuotationVehicle:1,Total:1,UnitPrice:1},Quotations:{BranchName:1,BranchesId:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Date:1,Details:1,Discount:1,ExpiryDate:1,GrandTotal:1,Id:1,Jobs:1,LineItems:1,NetTotal:1,NoTax:1,ShippingCost:1,TotalDiscount:1,TotalTax:1,Vat:1,Vehicle:1,VehicleAssemblyType:1,VehicleAxles:1,VehicleBodyStyle:1,VehicleBrand:1,VehicleCcRating:1,VehicleColor:1,VehicleCountryOfOrigin:1,VehicleCustomerId:1,VehicleEngineNo:1,VehicleFrontAxleGroupRating:1,VehicleFuelType:1,VehicleGrossVehicleMass:1,VehicleMake:1,VehicleModel:1,VehicleRearAxleGroupRating:1,VehicleSeats:1,VehicleSecondColor:1,VehicleSubModel:1,VehicleTareWeight:1,VehicleVehicleRegistration:1,VehicleVehicleType:1,VehicleWheelbase:1,VehicleYear:1}},Reports:{Dailyclosing:{Adjustment:1,Amount:1,BranchId:1,CashIn:1,CashOut:1,Date:1,Id:1,InsertDate:1,InsertUserId:1,LastClosingAmount:1,LastClosingDate:1,LastDayClosing:1,Status:1,TodayCashIn:1,TodayCashOut:1,UpdateDate:1,UpdateUserId:1}},Sales:{Saledetails:{BranchId:1,Description:1,Discount:1,Id:1,ProductBarcode:1,ProductCategoryId:1,ProductId:1,ProductImage:1,ProductModel:1,ProductName:1,ProductProductDetails:1,ProductProductName:1,ProductQuantityPerUnit:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,Quantity:1,SaleBankId:1,SaleChange:1,SaleCustomerId:1,SaleDate:1,SaleDetails:1,SaleDiscount:1,SaleDue:1,SaleGrandTotal:1,SaleId:1,SaleNetTotal:1,SalePaidAmount:1,SalePaymentType:1,SaleShippingCost:1,SaleTotalDiscount:1,SaleTotalTax:1,SaleVat:1,Total:1,UnitId:1,UnitName:1,UnitPrice:1,UnitUnitName:1},Sales:{BranchName:1,BranchesId:1,Change:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Date:1,Details:1,Discount:1,Due:1,GrandTotal:1,Id:1,In:1,InBy:1,LineItems:1,NetTotal:1,NoTax:1,PaidAmount:1,PaymentAccount:1,PaymentAccountCustomerId:1,PaymentAccountDepreciationRate:1,PaymentAccountHeadCode:1,PaymentAccountHeadLevel:1,PaymentAccountHeadName:1,PaymentAccountHeadType:1,PaymentAccountIsBudget:1,PaymentAccountIsDepreciation:1,PaymentAccountIsGl:1,PaymentAccountIsTransaction:1,PaymentAccountPHeadName:1,PaymentAccountParentHead:1,PaymentAccountSupplierId:1,ShippingCost:1,TotalDiscount:1,TotalTax:1,Up:1,UpBy:1,VNo:1,Vat:1}},Vehicles:{Vehicle:{AssemblyType:1,AssemblyTypeName:1,Axles:1,BodyStyle:1,Brand:1,BrandDescription:1,BrandName:1,CcRating:1,Color:1,ColorName:1,CountryOfOrigin:1,CountryOfOriginName:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,EngineNo:1,FrontAxleGroupRating:1,FuelType:1,FuelTypeName:1,GrossVehicleMass:1,Id:1,Make:1,MakeName:1,Model:1,ModelName:1,NoteList:1,RearAxleGroupRating:1,Seats:1,SecondColor:1,SecondColorName:1,SubModel:1,TareWeight:1,VehicleRegistration:1,VehicleType:1,VehicleTypeName:1,Wheelbase:1,Year:1}},invoice:{Invoiceitems:{Description:1,Discount:1,Id:1,InvoiceChange:1,InvoiceCustomerId:1,InvoiceDate:1,InvoiceDeliveryDatetime:1,InvoiceDetails:1,InvoiceDiscount:1,InvoiceDue:1,InvoiceGrandTotal:1,InvoiceId:1,InvoiceJobcard:1,InvoiceNetTotal:1,InvoicePaidAmount:1,InvoicePaymentAccount:1,InvoiceScheduleDatetime:1,InvoiceShippingCost:1,InvoiceTotalDiscount:1,InvoiceTotalTax:1,InvoiceVNo:1,InvoiceVat:1,InvoiceVehicle:1,ProductBarcode:1,ProductBranchId:1,ProductBrandId:1,ProductCategoryId:1,ProductDeleteDate:1,ProductDeleteUserId:1,ProductId:1,ProductImage:1,ProductInsertUserId:1,ProductIsActive:1,ProductModel:1,ProductProductDetails:1,ProductProductName:1,ProductReorderLevel:1,ProductSn:1,ProductUnitId:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,ProductUpdateDate:1,ProductUpdateUserId:1,PurchasePrice:1,Quantity:1,Total:1,UnitDescription:1,UnitId:1,UnitName:1,UnitPrice:1},Invoicejobitems:{Description:1,Discount:1,Id:1,InvoiceChange:1,InvoiceCustomerId:1,InvoiceDate:1,InvoiceDeliveryDatetime:1,InvoiceDetails:1,InvoiceDiscount:1,InvoiceDue:1,InvoiceGrandTotal:1,InvoiceJobId:1,InvoiceJobcard:1,InvoiceNetTotal:1,InvoicePaidAmount:1,InvoicePaymentAccount:1,InvoiceScheduleDatetime:1,InvoiceShippingCost:1,InvoiceTotalDiscount:1,InvoiceTotalTax:1,InvoiceVNo:1,InvoiceVat:1,InvoiceVehicle:1,JobType:1,JobTypeIsInspectionList:1,JobTypeJobCategory:1,JobTypeName:1,JobTypeRate:1,JobTypeStandardTiming:1,Total:1,UnitPrice:1},Invoices:{BranchName:1,BranchesId:1,Change:1,CustomerAddress:1,CustomerCityId:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountryId:1,CustomerCustomerGroupId:1,CustomerEmail:1,CustomerEmailAddress:1,CustomerFax:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerPostalCode:1,CustomerPreviousCreditBalance:1,CustomerRegionId:1,CustomerStateId:1,CustomerWebsite:1,Date:1,DeliveryDatetime:1,Details:1,Discount:1,Due:1,GrandTotal:1,HeadCodeName:1,Id:1,Jobcard:1,JobcardAddress:1,JobcardCustomer:1,JobcardDeliveryDatetime:1,JobcardDetails:1,JobcardMobile:1,JobcardPhone:1,JobcardReference:1,JobcardScheduleDatetime:1,JobcardVehicle:1,JobcardWebsite:1,JobcardWorkOrderNo:1,Jobs:1,LineItems:1,NetTotal:1,NoTax:1,PaidAmount:1,PaymentAccount:1,ScheduleDatetime:1,ShippingCost:1,TotalDiscount:1,TotalTax:1,VNo:1,Vat:1,Vehicle:1,VehicleAssemblyType:1,VehicleAxles:1,VehicleBodyStyle:1,VehicleBrand:1,VehicleCcRating:1,VehicleColor:1,VehicleCountryOfOrigin:1,VehicleCustomerId:1,VehicleEngineNo:1,VehicleFrontAxleGroupRating:1,VehicleFuelType:1,VehicleGrossVehicleMass:1,VehicleMake:1,VehicleModel:1,VehicleRearAxleGroupRating:1,VehicleSeats:1,VehicleSecondColor:1,VehicleSubModel:1,VehicleTareWeight:1,VehicleVehicleRegistration:1,VehicleVehicleType:1,VehicleWheelbase:1,VehicleYear:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
