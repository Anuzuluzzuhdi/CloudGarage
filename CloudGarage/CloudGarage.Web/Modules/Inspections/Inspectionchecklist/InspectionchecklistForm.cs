using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inspections.Forms
{
    [FormScript("Inspections.Inspectionchecklist")]
    [BasedOnRow(typeof(InspectionchecklistRow), CheckNames = true)]
    public class InspectionchecklistForm
    {
        public int JobCategory { get; set; }
        public List<Int32> JobTypes { get; set; }
    }
}