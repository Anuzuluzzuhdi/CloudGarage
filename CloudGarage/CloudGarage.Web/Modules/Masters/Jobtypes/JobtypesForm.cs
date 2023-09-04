using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Jobtypes")]
    [BasedOnRow(typeof(JobtypesRow), CheckNames = true)]
    public class JobtypesForm
    {
        public int JobCategory { get; set; }
        public string Name { get; set; }
        public double Rate { get; set; }
        public DateTime StandardTiming { get; set; }
        public Boolean IsInspectionList { get; set; }
    }
}