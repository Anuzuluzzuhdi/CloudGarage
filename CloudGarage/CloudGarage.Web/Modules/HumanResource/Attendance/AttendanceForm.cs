using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Forms
{
    [FormScript("HumanResource.Attendance")]
    [BasedOnRow(typeof(AttendanceRow), CheckNames = true)]
    public class AttendanceForm
    {
        public Int64 EmployeeId { get; set; }
        [DateTimeEditor, DefaultValue("now")]
        public DateTime CheckIn { get; set; }
        [DateTimeEditor, DefaultValue("now")]
        public DateTime CheckOut { get; set; }
    }
}