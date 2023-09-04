using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.JobCards.Forms
{
    [FormScript("JobCards.Jobcarddetails")]
    [BasedOnRow(typeof(JobcarddetailsRow), CheckNames = true)]
    public class JobcarddetailsForm
    {
        public Int64 JobType { get; set; }
        public Int64 Mechanic { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String CustomerNotes { get; set; }
    }
}