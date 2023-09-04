using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inspections.Columns
{
    [ColumnsScript("Inspections.Inspectionchecklist")]
    [BasedOnRow(typeof(InspectionchecklistRow), CheckNames = true)]
    public class InspectionchecklistColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public int Id { get; set; }
        [EditLink, InspectionFormatter]
        public String JobCategoryName { get; set; }
        [Width(500), JobTypeListFormatter]
        public List<Int32> JobTypes { get; set; }
    }
}