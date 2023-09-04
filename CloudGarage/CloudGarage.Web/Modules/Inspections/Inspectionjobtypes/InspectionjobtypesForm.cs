using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inspections.Forms
{
    [FormScript("Inspections.Inspectionjobtypes")]
    [BasedOnRow(typeof(InspectionjobtypesRow), CheckNames = true)]
    public class InspectionjobtypesForm
    {
        public int InspectionId { get; set; }
        public int JobType { get; set; }
    }
}