using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inspections.Columns
{
    [ColumnsScript("Inspections.Inspectionjobtypes")]
    [BasedOnRow(typeof(InspectionjobtypesRow), CheckNames = true)]
    public class InspectionjobtypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        public int InspectionId { get; set; }
        public String JobTypeName { get; set; }
    }
}