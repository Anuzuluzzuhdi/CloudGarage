using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("states")]
    [DisplayName("States"), InstanceName("States")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class StatesRow : Row<StatesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty, LookupInclude]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Country Id"), NotNull, ForeignKey("countries", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupInclude, LookupEditor(typeof(CountriesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Countries")]
        public int? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public string CountryName
        {
            get => fields.CountryName[this];
            set => fields.CountryName[this] = value;
        }

        [DisplayName("Country Code"), Size(2), NotNull]
        public string CountryCode
        {
            get => fields.CountryCode[this];
            set => fields.CountryCode[this] = value;
        }

        [DisplayName("Fips Code"), Size(8)]
        public string FipsCode
        {
            get => fields.FipsCode[this];
            set => fields.FipsCode[this] = value;
        }

        [DisplayName("Iso2"), Size(6)]
        public string Iso2
        {
            get => fields.Iso2[this];
            set => fields.Iso2[this] = value;
        }

        [DisplayName("Latitude"), Size(10), Scale(8)]
        public decimal? Latitude
        {
            get => fields.Latitude[this];
            set => fields.Latitude[this] = value;
        }

        [DisplayName("Longitude"), Size(11), Scale(8)]
        public decimal? Longitude
        {
            get => fields.Longitude[this];
            set => fields.Longitude[this] = value;
        }

        [DisplayName("Wiki Data Id"), Size(10)]
        public string WikiDataId
        {
            get => fields.WikiDataId[this];
            set => fields.WikiDataId[this] = value;
        }

        [DisplayName("Notes"), Size(255)]
        public string Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("In"), Insertable(false), Updatable(false), NotNull]
        public byte[] In
        {
            get => fields.In[this];
            set => fields.In[this] = value;
        }

        [DisplayName("In By"), Size(100)]
        public string InBy
        {
            get => fields.InBy[this];
            set => fields.InBy[this] = value;
        }

        [DisplayName("Up"), Insertable(false), Updatable(false), NotNull]
        public byte[] Up
        {
            get => fields.Up[this];
            set => fields.Up[this] = value;
        }

        [DisplayName("Up By"), Size(100)]
        public string UpBy
        {
            get => fields.UpBy[this];
            set => fields.UpBy[this] = value;
        }

        public StatesRow()
            : base()
        {
        }

        public StatesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public Int32Field CountryId;
            public StringField CountryCode;
            public StringField FipsCode;
            public StringField Iso2;
            public DecimalField Latitude;
            public DecimalField Longitude;
            public StringField WikiDataId;
            public StringField Notes;
            public ByteArrayField In;
            public StringField InBy;
            public ByteArrayField Up;
            public StringField UpBy;

            public StringField CountryName;
        }
    }
}
