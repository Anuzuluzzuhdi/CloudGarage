using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.HumanResource
{
    [ConnectionKey("couldgarage"), Module("HumanResource"), TableName("employees")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class EmployeesRow : Row<EmployeesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("First Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("Last Name"), Size(100), NotNull]
        public string LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
        }

        [DisplayName("Designation"), NotNull, ForeignKey("designations", "Id"), LeftJoin("jDesignation"), TextualField("Designation")]
        [HumanResource.DesignationsEditor(InplaceAdd = true, DialogType = "CloudGarage.HumanResource.Designations")]
        public int? DesignationId
        {
            get => fields.DesignationId[this];
            set => fields.DesignationId[this] = value;
        }

        [DisplayName("Department"), NotNull, ForeignKey("departments", "Id"), LeftJoin("jDepartment"), TextualField("Department")]
        [HumanResource.DepartmentsEditor(InplaceAdd = true, DialogType = "CloudGarage.HumanResource.Departments")]
        public int? DepartmentId
        {
            get => fields.DepartmentId[this];
            set => fields.DepartmentId[this] = value;
        }

        [DisplayName("Rate Type"), NotNull]
        public RateKind? RateType
        {
            get { return (RateKind)Fields.RateType[this]; }
            set { Fields.RateType[this] = (Int32)value; }
        }

        [DisplayName("Phone"), Size(255), NotNull]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Houre Rate Salary"), NotNull]
        public double? HoureRateSalary
        {
            get => fields.HoureRateSalary[this];
            set => fields.HoureRateSalary[this] = value;
        }

        [DisplayName("Email"), Size(255)]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Blood Group")]
        public BloodGroupKind? BloodGroup
        {
            get { return (BloodGroupKind)Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = (Int32)value; }
        }

        [DisplayName("Picture"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public string Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [DisplayName("Country"), NotNull, ForeignKey("countries", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(Masters.CountriesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Countries")]
        public int? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("State"), NotNull, ForeignKey("states", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(Masters.StatesRow), InplaceAdd = true, CascadeField = "CountryId", CascadeFrom = "CountryId", DialogType = "CloudGarage.Masters.States")]
        public int? StateId
        {
            get => fields.StateId[this];
            set => fields.StateId[this] = value;
        }

        [DisplayName("City"), NotNull, ForeignKey("cities", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(Masters.CitiesRow), InplaceAdd = true, CascadeField = "StateId", CascadeFrom = "StateId", DialogType = "CloudGarage.Masters.Cities")]
        public int? CityId
        {
            get => fields.CityId[this];
            set => fields.CityId[this] = value;
        }

        [DisplayName("Zip Code"), Size(50)]
        public string ZipCode
        {
            get => fields.ZipCode[this];
            set => fields.ZipCode[this] = value;
        }

        [DisplayName("Address"), Size(255), NotNull]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("User")]
        [LookupEditor(typeof(Administration.UserRow))]
        public int? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Region"), ForeignKey("regions", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
        [LookupEditor(typeof(Masters.RegionsRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Regions")]
        public int? RegionId
        {
            get => fields.RegionId[this];
            set => fields.RegionId[this] = value;
        }

        [DisplayName("Territory"), ForeignKey("territories", "Id"), LeftJoin("jTerritory"), TextualField("TerritoryTerritoryId")]
        [LookupEditor(typeof(Masters.TerritoriesRow), InplaceAdd = true, CascadeField = "RegionId", CascadeFrom = "RegionId", DialogType = "CloudGarage.Masters.Territories")]
        public int? TerritoryId
        {
            get => fields.TerritoryId[this];
            set => fields.TerritoryId[this] = value;
        }

        [DisplayName("Designation"), Expression("jDesignation.[Designation]")]
        public string Designation
        {
            get => fields.Designation[this];
            set => fields.Designation[this] = value;
        }

        [DisplayName("Designation Description"), Expression("jDesignation.[Description]")]
        public string DesignationDescription
        {
            get => fields.DesignationDescription[this];
            set => fields.DesignationDescription[this] = value;
        }

        [DisplayName("Designation Parent Designation Id"), Expression("jDesignation.[ParentDesignationId]")]
        public int? DesignationParentDesignationId
        {
            get => fields.DesignationParentDesignationId[this];
            set => fields.DesignationParentDesignationId[this] = value;
        }

        [DisplayName("Department"), Expression("jDepartment.[Department]")]
        public string Department
        {
            get => fields.Department[this];
            set => fields.Department[this] = value;
        }

        [DisplayName("Department Description"), Expression("jDepartment.[Description]")]
        public string DepartmentDescription
        {
            get => fields.DepartmentDescription[this];
            set => fields.DepartmentDescription[this] = value;
        }

        [DisplayName("Department Parent Department Id"), Expression("jDepartment.[ParentDepartmentId]")]
        public int? DepartmentParentDepartmentId
        {
            get => fields.DepartmentParentDepartmentId[this];
            set => fields.DepartmentParentDepartmentId[this] = value;
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public string CountryName
        {
            get => fields.CountryName[this];
            set => fields.CountryName[this] = value;
        }

        [DisplayName("State Name"), Expression("jState.[Name]")]
        public string StateName
        {
            get => fields.StateName[this];
            set => fields.StateName[this] = value;
        }

        [DisplayName("State Country Id"), Expression("jState.[CountryId]")]
        public int? StateCountryId
        {
            get => fields.StateCountryId[this];
            set => fields.StateCountryId[this] = value;
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public string CityName
        {
            get => fields.CityName[this];
            set => fields.CityName[this] = value;
        }

        [DisplayName("City Country Id"), Expression("jCity.[CountryId]")]
        public int? CityCountryId
        {
            get => fields.CityCountryId[this];
            set => fields.CityCountryId[this] = value;
        }

        [DisplayName("City State Id"), Expression("jCity.[StateId]")]
        public int? CityStateId
        {
            get => fields.CityStateId[this];
            set => fields.CityStateId[this] = value;
        }

        [DisplayName("Region Name"), Expression("jRegion.[Name]")]
        public string RegionName
        {
            get => fields.RegionName[this];
            set => fields.RegionName[this] = value;
        }

        [DisplayName("Territory Territory Id"), Expression("jTerritory.[TerritoryId]")]
        public string TerritoryTerritoryId
        {
            get => fields.TerritoryTerritoryId[this];
            set => fields.TerritoryTerritoryId[this] = value;
        }

        [DisplayName("Territory Territory Description"), Expression("jTerritory.[TerritoryDescription]")]
        public string TerritoryTerritoryDescription
        {
            get => fields.TerritoryTerritoryDescription[this];
            set => fields.TerritoryTerritoryDescription[this] = value;
        }

        [DisplayName("Territory Region Id"), Expression("jTerritory.[RegionId]")]
        public int? TerritoryRegionId
        {
            get => fields.TerritoryRegionId[this];
            set => fields.TerritoryRegionId[this] = value;
        }

        public EmployeesRow()
            : base()
        {
        }

        public EmployeesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField FirstName;
            public StringField LastName;
            public Int32Field DesignationId;
            public Int32Field DepartmentId;
            public Int32Field RateType;
            public StringField Phone;
            public DoubleField HoureRateSalary;
            public StringField Email;
            public Int32Field BloodGroup;
            public StringField Picture;
            public Int32Field CountryId;
            public Int32Field StateId;
            public Int32Field CityId;
            public StringField ZipCode;
            public StringField Address;
            public Int32Field UserId;
            public Int32Field RegionId;
            public Int32Field TerritoryId;

            public StringField Designation;
            public StringField DesignationDescription;
            public Int32Field DesignationParentDesignationId;

            public StringField Department;
            public StringField DepartmentDescription;
            public Int32Field DepartmentParentDepartmentId;

            public StringField CountryName;

            public StringField StateName;
            public Int32Field StateCountryId;

            public StringField CityName;
            public Int32Field CityCountryId;
            public Int32Field CityStateId;

            public StringField RegionName;

            public StringField TerritoryTerritoryId;
            public StringField TerritoryTerritoryDescription;
            public Int32Field TerritoryRegionId;
        }
    }
}
