using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("warehouses")]
    [DisplayName("Warehouses"), InstanceName("Warehouses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class WarehousesRow : Row<WarehousesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(255), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(255)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Country"), ForeignKey("countries", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Countries")]
        public int? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("State"), ForeignKey("states", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.States")]
        public int? StateId
        {
            get => fields.StateId[this];
            set => fields.StateId[this] = value;
        }

        [DisplayName("City"), ForeignKey("cities", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Cities")]
        public int? CityId
        {
            get => fields.CityId[this];
            set => fields.CityId[this] = value;
        }

        [DisplayName("Phone"), Size(255)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Address"), Size(255)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public string CountryName
        {
            get => fields.CountryName[this];
            set => fields.CountryName[this] = value;
        }

        [DisplayName("State Name"), Expression("jState.[Name]")]
        public string StateName
        {
            get => fields.StateName[this];
            set => fields.StateName[this] = value;
        }

        [DisplayName("State Country Id"), Expression("jState.[CountryId]")]
        public int? StateCountryId
        {
            get => fields.StateCountryId[this];
            set => fields.StateCountryId[this] = value;
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public string CityName
        {
            get => fields.CityName[this];
            set => fields.CityName[this] = value;
        }

        [DisplayName("City Country Id"), Expression("jCity.[CountryId]")]
        public int? CityCountryId
        {
            get => fields.CityCountryId[this];
            set => fields.CityCountryId[this] = value;
        }

        [DisplayName("City State Id"), Expression("jCity.[StateId]")]
        public int? CityStateId
        {
            get => fields.CityStateId[this];
            set => fields.CityStateId[this] = value;
        }

        public WarehousesRow()
            : base()
        {
        }

        public WarehousesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public Int32Field CountryId;
            public Int32Field StateId;
            public Int32Field CityId;
            public StringField Phone;
            public StringField Address;

            public StringField CountryName;

            public StringField StateName;
            public Int32Field StateCountryId;

            public StringField CityName;
            public Int32Field CityCountryId;
            public Int32Field CityStateId;
        }
    }
}
