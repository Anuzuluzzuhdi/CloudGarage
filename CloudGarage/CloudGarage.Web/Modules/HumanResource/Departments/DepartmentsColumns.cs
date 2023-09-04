using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Columns
{
    [ColumnsScript("HumanResource.Departments")]
    [BasedOnRow(typeof(DepartmentsRow), CheckNames = true)]
    public class DepartmentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Department { get; set; }
        public string Description { get; set; }
        public String ParentDepartmentDepartment { get; set; }
    }
}