using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Forms
{
    [FormScript("HumanResource.Employees")]
    [BasedOnRow(typeof(EmployeesRow), CheckNames = true)]
    public class EmployeesForm
    {
        [HalfWidth(UntilNext = true)]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DesignationId { get; set; }
        public int DepartmentId { get; set; }
        public int RateType { get; set; }
        public string Phone { get; set; }
        public double HoureRateSalary { get; set; }
        public string Email { get; set; }
        public int BloodGroup { get; set; }
        public string Picture { get; set; }
        public int CountryId { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
        public string ZipCode { get; set; }
        public string Address { get; set; }
        public int UserId { get; set; }
        public int RegionId { get; set; }
        public int TerritoryId { get; set; }
    }
}