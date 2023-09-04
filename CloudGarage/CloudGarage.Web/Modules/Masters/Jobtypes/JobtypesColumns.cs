using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Jobtypes")]
    [BasedOnRow(typeof(JobtypesRow), CheckNames = true)]
    public class JobtypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public int Id { get; set; }
        public String JobCategoryName { get; set; }
        [EditLink]
        public string Name { get; set; }
        public double Rate { get; set; }
        public DateTime StandardTiming { get; set; }
    }
}