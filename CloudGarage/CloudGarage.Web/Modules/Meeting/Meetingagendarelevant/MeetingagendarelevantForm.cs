using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetingagendarelevant")]
    [BasedOnRow(typeof(MeetingagendarelevantRow), CheckNames = true)]
    public class MeetingagendarelevantForm
    {
        public int AgendaId { get; set; }
        public int ContactId { get; set; }
    }
}