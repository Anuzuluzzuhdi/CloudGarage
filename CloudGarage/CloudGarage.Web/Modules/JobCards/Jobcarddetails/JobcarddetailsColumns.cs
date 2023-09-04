using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.JobCards.Columns
{
    [ColumnsScript("JobCards.Jobcarddetails")]
    [BasedOnRow(typeof(JobcarddetailsRow), CheckNames = true)]
    public class JobcarddetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [JobcardFormatter]
        public String JobTypeName { get; set; }
        [JobFormatter]
        public string MechanicFullName { get; set; }
        [EditLink]
        public String CustomerNotes { get; set; }
    }
}