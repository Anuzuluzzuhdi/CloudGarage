using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetingdecisionrelevant")]
    [BasedOnRow(typeof(MeetingdecisionrelevantRow), CheckNames = true)]
    public class MeetingdecisionrelevantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int DecisionRelevantId { get; set; }
        public int DecisionId { get; set; }
        public String ContactTitle { get; set; }
    }
}