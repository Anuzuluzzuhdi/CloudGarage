using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetingdecisionrelevant")]
    [BasedOnRow(typeof(MeetingdecisionrelevantRow), CheckNames = true)]
    public class MeetingdecisionrelevantForm
    {
        public int DecisionId { get; set; }
        public int ContactId { get; set; }
    }
}