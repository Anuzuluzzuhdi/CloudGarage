using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetingdecision")]
    [BasedOnRow(typeof(MeetingdecisionRow), CheckNames = true)]
    public class MeetingdecisionForm
    {
        public int MeetingId { get; set; }
        public int AgendaId { get; set; }
        public Stream Description { get; set; }
        public int DecisionNumber { get; set; }
        public int ResponsibleContactId { get; set; }
        public DateTime DueDate { get; set; }
        public int ResolutionStatus { get; set; }
        public Stream Images { get; set; }
        public Stream Attachments { get; set; }
    }
}