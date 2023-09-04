using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Attendancestatuses")]
    [BasedOnRow(typeof(AttendancestatusesRow), CheckNames = true)]
    public class AttendancestatusesForm
    {
        public string Name { get; set; }
    }
}