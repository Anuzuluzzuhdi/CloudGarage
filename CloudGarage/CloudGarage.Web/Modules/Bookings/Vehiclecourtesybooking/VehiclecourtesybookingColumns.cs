using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Bookings.Columns
{
    [ColumnsScript("Bookings.Vehiclecourtesybooking")]
    [BasedOnRow(typeof(VehiclecourtesybookingRow), CheckNames = true)]
    public class VehiclecourtesybookingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        [QuickFilter]
        public DateTime StartDateTime { get; set; }
        [QuickFilter]
        public DateTime EndDateTime { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        public String Note { get; set; }
    }
}