using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Meeting.Forms
{
    [FormScript("Meeting.Meetinglocation")]
    [BasedOnRow(typeof(MeetinglocationRow), CheckNames = true)]
    public class MeetinglocationForm
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
    }
}