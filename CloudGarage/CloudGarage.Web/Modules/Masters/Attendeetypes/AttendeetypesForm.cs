using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Attendeetypes")]
    [BasedOnRow(typeof(AttendeetypesRow), CheckNames = true)]
    public class AttendeetypesForm
    {
        public string Name { get; set; }
    }
}