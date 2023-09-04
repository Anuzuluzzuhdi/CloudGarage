using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetingattendee")]
    [BasedOnRow(typeof(MeetingattendeeRow), CheckNames = true)]
    public class MeetingattendeeColumns
    {
        [Width(280), Sortable(false)]
        public int ContactFullName { get; set; }
        //[Width(180), Sortable(false), Serenity.Extensions.EnumSelectFormatter(EnumKey = "Meeting.MeetingAttendeeType", AllowClear = false)]
        //public MeetingAttendeeType AttendeeType { get; set; }
        //[Width(180), Sortable(false), Serenity.Extensions.EnumSelectFormatter(EnumKey = "Meeting.MeetingAttendanceStatus", AllowClear = false)]
        //public MeetingAttendanceStatus AttendanceStatus { get; set; }
    }
}