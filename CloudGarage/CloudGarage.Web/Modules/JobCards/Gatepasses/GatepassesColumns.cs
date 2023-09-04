using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.JobCards.Columns
{
    [ColumnsScript("JobCards.Gatepasses")]
    [BasedOnRow(typeof(GatepassesRow), CheckNames = true)]
    public class GatepassesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [QuickFilter]
        public String JobCardWorkOrderNo { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        [QuickFilter]
        public DateTime VehicleOutDate { get; set; }
    }
}