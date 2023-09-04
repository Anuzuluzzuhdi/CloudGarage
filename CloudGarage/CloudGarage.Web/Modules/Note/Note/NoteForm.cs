using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Note.Forms
{
    [FormScript("Note.Note")]
    [BasedOnRow(typeof(NoteRow), CheckNames = true)]
    public class NoteForm
    {
        public string EntityType { get; set; }
        public int EntityId { get; set; }
        public string Text { get; set; }
        public int InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public string InsertUserDisplayName { get; set; }
    }
}