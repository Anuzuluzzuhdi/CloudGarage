﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Note
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CloudGarage.Note.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
