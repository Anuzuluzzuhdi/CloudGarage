using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("countries")]
    [DisplayName("Countries"), InstanceName("Countries")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class CountriesRow : Row<CountriesRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Iso3"), Size(3)]
        public string Iso3
        {
            get => fields.Iso3[this];
            set => fields.Iso3[this] = value;
        }

        [DisplayName("Numeric Code"), Size(3)]
        public string NumericCode
        {
            get => fields.NumericCode[this];
            set => fields.NumericCode[this] = value;
        }

        [DisplayName("Iso2"), Size(2)]
        public string Iso2
        {
            get => fields.Iso2[this];
            set => fields.Iso2[this] = value;
        }

        [DisplayName("Phone Code"), Size(20)]
        public string PhoneCode
        {
            get => fields.PhoneCode[this];
            set => fields.PhoneCode[this] = value;
        }

        [DisplayName("Capital"), Size(100)]
        public string Capital
        {
            get => fields.Capital[this];
            set => fields.Capital[this] = value;
        }

        [DisplayName("Currency"), Size(3)]
        public string Currency
        {
            get => fields.Currency[this];
            set => fields.Currency[this] = value;
        }

        [DisplayName("Currency Symbol"), Size(6)]
        public string CurrencySymbol
        {
            get => fields.CurrencySymbol[this];
            set => fields.CurrencySymbol[this] = value;
        }

        [DisplayName("Tld"), Size(4)]
        public string Tld
        {
            get => fields.Tld[this];
            set => fields.Tld[this] = value;
        }

        [DisplayName("Native"), Size(100)]
        public string Native
        {
            get => fields.Native[this];
            set => fields.Native[this] = value;
        }

        [DisplayName("Region"), Size(30)]
        public string Region
        {
            get => fields.Region[this];
            set => fields.Region[this] = value;
        }

        [DisplayName("Sub Region"), Size(50)]
        public string SubRegion
        {
            get => fields.SubRegion[this];
            set => fields.SubRegion[this] = value;
        }

        [DisplayName("Timezones")]
        public string Timezones
        {
            get => fields.Timezones[this];
            set => fields.Timezones[this] = value;
        }

        [DisplayName("Translations")]
        public string Translations
        {
            get => fields.Translations[this];
            set => fields.Translations[this] = value;
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

        [DisplayName("Emoji"), Size(30)]
        public string Emoji
        {
            get => fields.Emoji[this];
            set => fields.Emoji[this] = value;
        }

        [DisplayName("Emoji U"), Size(30)]
        public string EmojiU
        {
            get => fields.EmojiU[this];
            set => fields.EmojiU[this] = value;
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

        public CountriesRow()
            : base()
        {
        }

        public CountriesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Iso3;
            public StringField NumericCode;
            public StringField Iso2;
            public StringField PhoneCode;
            public StringField Capital;
            public StringField Currency;
            public StringField CurrencySymbol;
            public StringField Tld;
            public StringField Native;
            public StringField Region;
            public StringField SubRegion;
            public StringField Timezones;
            public StringField Translations;
            public DecimalField Latitude;
            public DecimalField Longitude;
            public StringField Emoji;
            public StringField EmojiU;
            public StringField WikiDataId;
            public StringField Notes;
            public ByteArrayField In;
            public StringField InBy;
            public ByteArrayField Up;
            public StringField UpBy;
        }
    }
}
