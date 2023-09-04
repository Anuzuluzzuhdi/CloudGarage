using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Meeting
{
    public partial class MeetingAgendaEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Meeting.MeetingAgendaEditor";

        public MeetingAgendaEditorAttribute()
            : base(Key)
        {
        }
    }
}
