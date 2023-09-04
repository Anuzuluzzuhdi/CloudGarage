using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Meetingtypes")]
    [BasedOnRow(typeof(MeetingtypesRow), CheckNames = true)]
    public class MeetingtypesForm
    {
        public string Name { get; set; }
    }
}