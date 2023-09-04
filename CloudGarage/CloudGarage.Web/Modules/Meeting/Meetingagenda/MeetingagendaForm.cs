using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetingagenda")]
    [BasedOnRow(typeof(MeetingagendaRow), CheckNames = true)]
    public class MeetingagendaForm
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int AgendaTypeId { get; set; }
        public int RequestedByContactId { get; set; }
        [Placeholder("Leave empty to auto assign next"), Required(false)]
        public int AgendaNumber { get; set; }
        public string Images { get; set; }
        public string Attachments { get; set; }
    }
}