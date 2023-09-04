using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetingagendatype")]
    [BasedOnRow(typeof(MeetingagendatypeRow), CheckNames = true)]
    public class MeetingagendatypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int AgendaTypeId { get; set; }
        [EditLink]
        public string Name { get; set; }
    }
}