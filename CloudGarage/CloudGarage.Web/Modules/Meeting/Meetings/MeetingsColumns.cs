using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetings")]
    [BasedOnRow(typeof(MeetingsRow), CheckNames = true)]
    public class MeetingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string MeetingName { get; set; }
        public int MeetingType { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Department { get; set; }
        public int Location { get; set; }
        public int OrganizedBy { get; set; }
        public int Reporter { get; set; }
    }
}