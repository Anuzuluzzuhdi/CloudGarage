using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetingagendatypes")]
    [DisplayName("Meetingagendatype"), InstanceName("Meetingagendatype")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingagendatypeRow : Row<MeetingagendatypeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Agenda Type Id"), Identity, IdProperty]
        public int? AgendaTypeId
        {
            get => fields.AgendaTypeId[this];
            set => fields.AgendaTypeId[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        public MeetingagendatypeRow()
            : base()
        {
        }

        public MeetingagendatypeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgendaTypeId;
            public StringField Name;
        }
    }
}
