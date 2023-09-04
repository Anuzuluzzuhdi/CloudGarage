using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Attendancestatuses")]
    [BasedOnRow(typeof(AttendancestatusesRow), CheckNames = true)]
    public class AttendancestatusesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Name { get; set; }
    }
}