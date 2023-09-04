using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetingagendatype")]
    [BasedOnRow(typeof(MeetingagendatypeRow), CheckNames = true)]
    public class MeetingagendatypeForm
    {
        public string Name { get; set; }
    }
}