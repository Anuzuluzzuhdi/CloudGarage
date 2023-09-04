using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("locations")]
    [DisplayName("Locations"), InstanceName("Locations")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LocationsRow : Row<LocationsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Country Id")]
        public int? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("State Id")]
        public int? StateId
        {
            get => fields.StateId[this];
            set => fields.StateId[this] = value;
        }

        [DisplayName("City Id")]
        public int? CityId
        {
            get => fields.CityId[this];
            set => fields.CityId[this] = value;
        }

        [DisplayName("Address"), Size(100)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Latitude"), Size(255)]
        public string Latitude
        {
            get => fields.Latitude[this];
            set => fields.Latitude[this] = value;
        }

        [DisplayName("Longitude"), Size(255)]
        public string Longitude
        {
            get => fields.Longitude[this];
            set => fields.Longitude[this] = value;
        }

        public LocationsRow()
            : base()
        {
        }

        public LocationsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public Int32Field CountryId;
            public Int32Field StateId;
            public Int32Field CityId;
            public StringField Address;
            public StringField Latitude;
            public StringField Longitude;
        }
    }
}
