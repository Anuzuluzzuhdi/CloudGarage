using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Note
{
    [ConnectionKey("couldgarage"), Module("Note"), TableName("note")]
    [DisplayName("Note"), InstanceName("Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NoteRow : Row<NoteRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Note Id"), Identity, IdProperty]
        public int? NoteId
        {
            get => fields.NoteId[this];
            set => fields.NoteId[this] = value;
        }

        [DisplayName("Entity Type"), Size(255), QuickSearch, NameProperty, Updatable(false)]
        public string EntityType
        {
            get => fields.EntityType[this];
            set => fields.EntityType[this] = value;
        }

        [DisplayName("Entity Id"), Updatable(false)]
        public int? EntityId
        {
            get => fields.EntityId[this];
            set => fields.EntityId[this] = value;
        }

        [DisplayName("Text"), NotNull, QuickSearch]
        public string Text
        {
            get => fields.Text[this];
            set => fields.Text[this] = value;
        }

        [DisplayName("Insert User Id"), Insertable(false), Updatable(false)]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert Date"), Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Insert User Display Name"), Size(255), NotMapped]
        public string InsertUserDisplayName
        {
            get => fields.InsertUserDisplayName[this];
            set => fields.InsertUserDisplayName[this] = value;
        }

        public NoteRow()
            : base()
        {
        }

        public NoteRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NoteId;
            public StringField EntityType;
            public Int32Field EntityId;
            public StringField Text;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public StringField InsertUserDisplayName;
        }
    }
}
