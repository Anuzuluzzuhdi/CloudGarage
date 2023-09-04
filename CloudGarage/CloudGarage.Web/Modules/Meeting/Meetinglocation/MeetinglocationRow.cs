using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetinglocations")]
    [DisplayName("Meetinglocation"), InstanceName("Meetinglocation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetinglocationRow : Row<MeetinglocationRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Location Id"), Identity, IdProperty]
        public int? LocationId
        {
            get => fields.LocationId[this];
            set => fields.LocationId[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Address"), Size(300)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Latitude"), Size(14), Scale(6)]
        public decimal? Latitude
        {
            get => fields.Latitude[this];
            set => fields.Latitude[this] = value;
        }

        [DisplayName("Longitude"), Size(14), Scale(6)]
        public decimal? Longitude
        {
            get => fields.Longitude[this];
            set => fields.Longitude[this] = value;
        }

        public MeetinglocationRow()
            : base()
        {
        }

        public MeetinglocationRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LocationId;
            public StringField Name;
            public StringField Address;
            public DecimalField Latitude;
            public DecimalField Longitude;
        }
    }
}
