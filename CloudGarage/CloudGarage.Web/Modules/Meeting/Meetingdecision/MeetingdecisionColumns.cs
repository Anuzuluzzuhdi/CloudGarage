using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetingdecision")]
    [BasedOnRow(typeof(MeetingdecisionRow), CheckNames = true)]
    public class MeetingdecisionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int DecisionId { get; set; }
        public String MeetingMeetingName { get; set; }
        public String AgendaTitle { get; set; }
        public Stream Description { get; set; }
        public String DecisionNumberName { get; set; }
        public String ResponsibleContactTitle { get; set; }
        public DateTime DueDate { get; set; }
        public int ResolutionStatus { get; set; }
        public Stream Images { get; set; }
        public Stream Attachments { get; set; }
    }
}