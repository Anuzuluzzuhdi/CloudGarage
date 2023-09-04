using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.JobCards.Forms
{
    [FormScript("JobCards.Gatepasses")]
    [BasedOnRow(typeof(GatepassesRow), CheckNames = true)]
    public class GatepassesForm
    {
        public Int64 JobCard { get; set; }
        [ReadOnly(true)]
        public Int64 Customer { get; set; }
        [ReadOnly(true)]
        public Int64 Vehicle { get; set; }
        [DefaultValue("now")]
        public DateTime VehicleOutDate { get; set; }
    }
}