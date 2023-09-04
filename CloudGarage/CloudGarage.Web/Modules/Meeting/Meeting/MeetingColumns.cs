using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meeting")]
    [BasedOnRow(typeof(MeetingRow), CheckNames = true)]
    public class MeetingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public int MeetingId { get; set; }
        [EditLink, Width(250)]
        public string MeetingName { get; set; }
        [Width(125)]
        public string MeetingNumber { get; set; }
        [Width(120), QuickFilter]
        public string MeetingTypeName { get; set; }
        [Width(125), DisplayFormat("g")]
        public DateTime StartDate { get; set; }
        [Width(125), DisplayFormat("g")]
        public DateTime EndDate { get; set; }
        [Width(120), QuickFilter]
        public string LocationName { get; set; }
        [Width(150), QuickFilter]
        public string UnitName { get; set; }
        [Width(150), QuickFilter]
        public string OrganizerContactFullName { get; set; }
        [Width(150), QuickFilter]
        public string ReporterContactFullName { get; set; }
    }
}