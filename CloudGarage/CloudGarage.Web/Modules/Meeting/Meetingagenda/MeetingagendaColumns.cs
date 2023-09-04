using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetingagenda")]
    [BasedOnRow(typeof(MeetingagendaRow), CheckNames = true)]
    public class MeetingagendaColumns
    {
        [EditLink, DisplayName("S.No"), AlignCenter]
        public int AgendaNumber { get; set; }
        [EditLink, Width(250)]
        public string Title { get; set; }
        [Width(350), Serenity.Extensions.SingleLineTextFormatter]
        public string Description { get; set; }
        [Width(130)]
        public string AgendaTypeName { get; set; }
        [Width(130)]
        public int RequestedByContactFullName { get; set; }
    }
}