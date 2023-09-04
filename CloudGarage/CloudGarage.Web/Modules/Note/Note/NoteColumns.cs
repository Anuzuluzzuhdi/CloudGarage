using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Note.Columns
{
    [ColumnsScript("Note.Note")]
    [BasedOnRow(typeof(NoteRow), CheckNames = true)]
    public class NoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int NoteId { get; set; }
        [EditLink]
        public string EntityType { get; set; }
        public int EntityId { get; set; }
        public string Text { get; set; }
        public int InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public string InsertUserDisplayName { get; set; }
    }
}