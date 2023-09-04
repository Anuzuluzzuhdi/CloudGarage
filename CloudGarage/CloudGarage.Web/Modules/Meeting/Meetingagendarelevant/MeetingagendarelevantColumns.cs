using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetingagendarelevant")]
    [BasedOnRow(typeof(MeetingagendarelevantRow), CheckNames = true)]
    public class MeetingagendarelevantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int AgendaRelevantId { get; set; }
        public String AgendaTitle { get; set; }
        public String ContactTitle { get; set; }
    }
}