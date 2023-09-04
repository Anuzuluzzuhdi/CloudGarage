using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetings")]
    [BasedOnRow(typeof(MeetingsRow), CheckNames = true)]
    public class MeetingsForm
    {
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