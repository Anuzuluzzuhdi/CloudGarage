using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Forms
{
    [FormScript("HumanResource.Departments")]
    [BasedOnRow(typeof(DepartmentsRow), CheckNames = true)]
    public class DepartmentsForm
    {
        public string Department { get; set; }
        public string Description { get; set; }
        public int ParentDepartmentId { get; set; }
    }
}