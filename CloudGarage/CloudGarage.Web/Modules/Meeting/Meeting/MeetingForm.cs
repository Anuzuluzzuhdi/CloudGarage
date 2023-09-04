using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using CloudGarage.Meeting;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meeting")]
    [BasedOnRow(typeof(MeetingRow), CheckNames = true)]
    public class MeetingForm
    {
        public string MeetingName { get; set; }
        [HalfWidth(UntilNext = true)]
        public int MeetingTypeId { get; set; }
        public string MeetingNumber { get; set; }
        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [DefaultValue("now")]
        public DateTime EndDate { get; set; }
        public int LocationId { get; set; }
        public int UnitId { get; set; }
        public int OrganizerContactId { get; set; }
        public int ReporterContactId { get; set; }
        [ResetFormWidth]
        public List<MeetingattendeeRow> AttendeeList { get; set; }
    }
}