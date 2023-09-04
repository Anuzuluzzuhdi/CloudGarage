using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Columns
{
    [ColumnsScript("HumanResource.Employees")]
    [BasedOnRow(typeof(EmployeesRow), CheckNames = true)]
    public class EmployeesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public String FirstName { get; set; }
        public String LastName { get; set; }
        [QuickFilter]
        public String Designation { get; set; }
        [QuickFilter]
        public String Department { get; set; }
        [QuickFilter]
        public Int32 RateType { get; set; }
        [NoHpFormatter]
        public String Phone { get; set; }
        public Double HoureRateSalary { get; set; }
        [EmailFormatter, EmailEditor]
        public String Email { get; set; }
        [QuickFilter]
        public Int32 BloodGroup { get; set; }
        [QuickFilter]
        public String CountryName { get; set; }
        [QuickFilter]
        public String StateName { get; set; }
        [QuickFilter]
        public String CityName { get; set; }
        public String ZipCode { get; set; }
        public String Address { get; set; }
        public Int32 UserId { get; set; }
        [QuickFilter]
        public String RegionName { get; set; }
        [QuickFilter]
        public String TerritoryTerritoryDescription { get; set; }
    }
}