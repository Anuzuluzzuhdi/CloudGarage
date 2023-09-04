using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inspections.Forms
{
    [FormScript("Inspections.Inspections")]
    [BasedOnRow(typeof(InspectionsRow), CheckNames = true)]
    public class InspectionsForm
    {
        public Int32 CustomerId { get; set; }
        public string Name { get; set; }
        public double Rate { get; set; }
        [MaskedEditor(Mask = "99:99:99")]
        public TimeSpan StandardTiming { get; set; }
        [InspectionChecklistEditor]
        public List<InspectionchecklistRow> Checklist { get; set; }
    }
}