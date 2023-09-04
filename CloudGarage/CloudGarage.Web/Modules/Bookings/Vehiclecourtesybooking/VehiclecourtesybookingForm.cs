using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Bookings.Forms
{
    [FormScript("Bookings.Vehiclecourtesybooking")]
    [BasedOnRow(typeof(VehiclecourtesybookingRow), CheckNames = true)]
    public class VehiclecourtesybookingForm
    {
        public string Title { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public int Customer { get; set; }
        public int Vehicle { get; set; }
        public int BranchesId { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public string Note { get; set; }
    }
}