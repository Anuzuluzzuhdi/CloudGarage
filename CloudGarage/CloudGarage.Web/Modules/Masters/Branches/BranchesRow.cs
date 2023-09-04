using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("branches")]
    [DisplayName("Branches"), InstanceName("Branches")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")] 
    [LookupScript("CloudGarage.Masters")]
    public sealed class BranchesRow : Row<BranchesRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Address"), Size(255)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("City"), ForeignKey("cities", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Cities")]
        public int? City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), ForeignKey("states", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.States")]
        public int? State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Country"), ForeignKey("countries", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Countries")]
        public int? Country
        {
            get => fields.Country[this];
            set => fields.Country[this] = value;
        }

        [DisplayName("Email"), Size(255)]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Phone1"), Size(255)]
        public string Phone1
        {
            get => fields.Phone1[this];
            set => fields.Phone1[this] = value;
        }

        [DisplayName("Phone2"), Size(255)]
        public string Phone2
        {
            get => fields.Phone2[this];
            set => fields.Phone2[this] = value;
        }

        [DisplayName("Use Branch Address"), NotNull]
        public short? UseBranchAddress
        {
            get => fields.UseBranchAddress[this];
            set => fields.UseBranchAddress[this] = value;
        }

        [DisplayName("Vat Percentage"), NotNull, LookupInclude]
        public double? VatPercentage
        {
            get => fields.VatPercentage[this];
            set => fields.VatPercentage[this] = value;
        }

        [DisplayName("Logo"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true), LookupInclude]
        public string Logo
        {
            get => fields.Logo[this];
            set => fields.Logo[this] = value;
        }

        [DisplayName("Insert User Id")]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Delete User Id")]
        public int? DeleteUserId
        {
            get => fields.DeleteUserId[this];
            set => fields.DeleteUserId[this] = value;
        }

        [DisplayName("Delete Date")]
        public DateTime? DeleteDate
        {
            get => fields.DeleteDate[this];
            set => fields.DeleteDate[this] = value;
        }

        [NotNull, Insertable(false), Updatable(true), DefaultValue(1), LookupInclude, Hidden, IntegerEditor(MinValue = -1, MaxValue = 1)]
        public int? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
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

        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public string CountryName
        {
            get => fields.CountryName[this];
            set => fields.CountryName[this] = value;
        }

        public BranchesRow()
            : base()
        {
        }

        public BranchesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public StringField Address;
            public Int32Field City;
            public Int32Field State;
            public Int32Field Country;
            public StringField Email;
            public StringField Phone1;
            public StringField Phone2;
            public Int16Field UseBranchAddress;
            public DoubleField VatPercentage;
            public StringField Logo;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int32Field DeleteUserId;
            public DateTimeField DeleteDate;
            public Int32Field IsActive;

            public StringField CityName;
            public Int32Field CityCountryId;
            public Int32Field CityStateId;

            public StringField StateName;
            public Int32Field StateCountryId;

            public StringField CountryName;
        }
    }
}
