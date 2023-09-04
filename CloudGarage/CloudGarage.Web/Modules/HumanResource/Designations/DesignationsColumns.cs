using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Columns
{
    [ColumnsScript("HumanResource.Designations")]
    [BasedOnRow(typeof(DesignationsRow), CheckNames = true)]
    public class DesignationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Designation { get; set; }
        public string Description { get; set; }
        public String ParentDesignationDesignation { get; set; }
    }
}