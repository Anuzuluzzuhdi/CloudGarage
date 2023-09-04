using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetingattendee")]
    [BasedOnRow(typeof(MeetingattendeeRow), CheckNames = true)]
    public class MeetingattendeeForm
    {
        public int MeetingId { get; set; }
        public int ContactId { get; set; }
        public int AttendeeType { get; set; }
        public int AttendanceStatus { get; set; }
    }
}