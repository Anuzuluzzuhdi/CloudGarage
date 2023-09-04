using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inspections.Columns
{
    [ColumnsScript("Inspections.Inspections")]
    [BasedOnRow(typeof(InspectionsRow), CheckNames = true)]
    public class InspectionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public int Id { get; set; }
        [EditLink]
        public string Name { get; set; }
        public double Rate { get; set; }
        [TimeEditor]
        public TimeSpan StandardTiming { get; set; }
        public Boolean IsInspectionList { get; set; }
    }
}