using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Columns
{
    [ColumnsScript("Meeting.Meetinglocation")]
    [BasedOnRow(typeof(MeetinglocationRow), CheckNames = true)]
    public class MeetinglocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int LocationId { get; set; }
        [EditLink]
        public string Name { get; set; }
        public string Address { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
    }
}