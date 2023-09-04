using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.HumanResource
{
    [ConnectionKey("couldgarage"), Module("HumanResource"), TableName("attendance")]
    [DisplayName("Attendance"), InstanceName("Attendance")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AttendanceRow : Row<AttendanceRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("employees", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeFirstName")]
        [LookupInclude, LookupEditor(typeof(EmployeesRow), AutoComplete = true, InplaceAdd = true)]
        public int? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee")]
        [Expression("CONCAT(jEmployee.[FirstName], CONCAT(' ', jEmployee.[LastName]))"), QuickSearch, NameProperty]
        public string EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }

        [DisplayName("Check In")]
        public DateTime? CheckIn
        {
            get => fields.CheckIn[this];
            set => fields.CheckIn[this] = value;
        }

        [DisplayName("Check Out")]
        public DateTime? CheckOut
        {
            get => fields.CheckOut[this];
            set => fields.CheckOut[this] = value;
        }

        [DisplayName("Stay Time"), Expression("CONCAT(EXTRACT(hour from CheckOut) - EXTRACT(hour from CheckIn), CONCAT(' Hours & ', EXTRACT(minute from CheckOut) - EXTRACT(minute from CheckIn), CONCAT(' Minutes')))")]
        public string StayTime
        {
            get { return Fields.StayTime[this]; }
            set { Fields.StayTime[this] = value; }
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public string EmployeeFirstName
        {
            get => fields.EmployeeFirstName[this];
            set => fields.EmployeeFirstName[this] = value;
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public string EmployeeLastName
        {
            get => fields.EmployeeLastName[this];
            set => fields.EmployeeLastName[this] = value;
        }

        [DisplayName("Employee Designation Id"), Expression("jEmployee.[DesignationId]")]
        public int? EmployeeDesignationId
        {
            get => fields.EmployeeDesignationId[this];
            set => fields.EmployeeDesignationId[this] = value;
        }

        [DisplayName("Employee Department Id"), Expression("jEmployee.[DepartmentId]")]
        public int? EmployeeDepartmentId
        {
            get => fields.EmployeeDepartmentId[this];
            set => fields.EmployeeDepartmentId[this] = value;
        }

        [DisplayName("Employee Rate Type"), Expression("jEmployee.[RateType]")]
        public int? EmployeeRateType
        {
            get => fields.EmployeeRateType[this];
            set => fields.EmployeeRateType[this] = value;
        }

        [DisplayName("Employee Phone"), Expression("jEmployee.[Phone]")]
        public string EmployeePhone
        {
            get => fields.EmployeePhone[this];
            set => fields.EmployeePhone[this] = value;
        }

        [DisplayName("Employee Houre Rate Salary"), Expression("jEmployee.[HoureRateSalary]")]
        public double? EmployeeHoureRateSalary
        {
            get => fields.EmployeeHoureRateSalary[this];
            set => fields.EmployeeHoureRateSalary[this] = value;
        }

        [DisplayName("Employee Email"), Expression("jEmployee.[Email]")]
        public string EmployeeEmail
        {
            get => fields.EmployeeEmail[this];
            set => fields.EmployeeEmail[this] = value;
        }

        [DisplayName("Employee Blood Group"), Expression("jEmployee.[BloodGroup]")]
        public int? EmployeeBloodGroup
        {
            get => fields.EmployeeBloodGroup[this];
            set => fields.EmployeeBloodGroup[this] = value;
        }

        [DisplayName("Employee Picture"), Expression("jEmployee.[Picture]")]
        public string EmployeePicture
        {
            get => fields.EmployeePicture[this];
            set => fields.EmployeePicture[this] = value;
        }

        [DisplayName("Employee Country Id"), Expression("jEmployee.[CountryId]")]
        public int? EmployeeCountryId
        {
            get => fields.EmployeeCountryId[this];
            set => fields.EmployeeCountryId[this] = value;
        }

        [DisplayName("Employee State Id"), Expression("jEmployee.[StateId]")]
        public int? EmployeeStateId
        {
            get => fields.EmployeeStateId[this];
            set => fields.EmployeeStateId[this] = value;
        }

        [DisplayName("Employee City Id"), Expression("jEmployee.[CityId]")]
        public int? EmployeeCityId
        {
            get => fields.EmployeeCityId[this];
            set => fields.EmployeeCityId[this] = value;
        }

        [DisplayName("Employee Zip Code"), Expression("jEmployee.[ZipCode]")]
        public string EmployeeZipCode
        {
            get => fields.EmployeeZipCode[this];
            set => fields.EmployeeZipCode[this] = value;
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public string EmployeeAddress
        {
            get => fields.EmployeeAddress[this];
            set => fields.EmployeeAddress[this] = value;
        }

        [DisplayName("Employee User Id"), Expression("jEmployee.[UserId]")]
        public int? EmployeeUserId
        {
            get => fields.EmployeeUserId[this];
            set => fields.EmployeeUserId[this] = value;
        }

        [DisplayName("Employee Region Id"), Expression("jEmployee.[RegionId]")]
        public int? EmployeeRegionId
        {
            get => fields.EmployeeRegionId[this];
            set => fields.EmployeeRegionId[this] = value;
        }

        [DisplayName("Employee Territory Id"), Expression("jEmployee.[TerritoryId]")]
        public int? EmployeeTerritoryId
        {
            get => fields.EmployeeTerritoryId[this];
            set => fields.EmployeeTerritoryId[this] = value;
        }

        public AttendanceRow()
            : base()
        {
        }

        public AttendanceRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public DateTimeField CheckIn;
            public DateTimeField CheckOut;
            public StringField StayTime;

            public StringField EmployeeFirstName;
            public StringField EmployeeLastName;
            public Int32Field EmployeeDesignationId;
            public Int32Field EmployeeDepartmentId;
            public Int32Field EmployeeRateType;
            public StringField EmployeePhone;
            public DoubleField EmployeeHoureRateSalary;
            public StringField EmployeeEmail;
            public Int32Field EmployeeBloodGroup;
            public StringField EmployeePicture;
            public Int32Field EmployeeCountryId;
            public Int32Field EmployeeStateId;
            public Int32Field EmployeeCityId;
            public StringField EmployeeZipCode;
            public StringField EmployeeAddress;
            public Int32Field EmployeeUserId;
            public Int32Field EmployeeRegionId;
            public Int32Field EmployeeTerritoryId;

            public StringField EmployeeFullName;
        }
    }
}
