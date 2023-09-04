using CloudGarage.Masters;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.BusinessPartners
{
    [ConnectionKey("couldgarage"), Module("BusinessPartners"), TableName("customers")]
    [DisplayName("Customers"), InstanceName("Customer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class CustomersRow : Row<CustomersRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty, LookupInclude]
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

        [DisplayName("Contact Name"), Size(255)]
        public string ContactName
        {
            get => fields.ContactName[this];
            set => fields.ContactName[this] = value;
        }

        [DisplayName("Contact Title"), Size(255)]
        public string ContactTitle
        {
            get => fields.ContactTitle[this];
            set => fields.ContactTitle[this] = value;
        }

        [DisplayName("Country"), ForeignKey("countries", "Id"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Countries"), DefaultValue(102)]
        public int? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("State"), ForeignKey("states", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true, CascadeField = "CountryId", CascadeFrom = "CountryId", DialogType = "CloudGarage.Masters.States"), DefaultValue(1827)]
        public int? StateId
        {
            get => fields.StateId[this];
            set => fields.StateId[this] = value;
        }

        [DisplayName("City"), ForeignKey("cities", "Id"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), InplaceAdd = true, CascadeField = "StateId", CascadeFrom = "StateId", DialogType = "CloudGarage.Masters.Cities"), DefaultValue(56856)]
        public int? CityId
        {
            get => fields.CityId[this];
            set => fields.CityId[this] = value;
        }

        [DisplayName("Address"), Size(255)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Region"), ForeignKey("regions", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
        [LookupEditor(typeof(RegionsRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Regions")]
        public int? RegionId
        {
            get => fields.RegionId[this];
            set => fields.RegionId[this] = value;
        }

        [DisplayName("Postal Code"), Size(255)]
        public string PostalCode
        {
            get => fields.PostalCode[this];
            set => fields.PostalCode[this] = value;
        }

        [DisplayName("Phone"), Size(255)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Fax"), Size(255)]
        public string Fax
        {
            get => fields.Fax[this];
            set => fields.Fax[this] = value;
        }

        [DisplayName("Website"), Size(255)]
        public string Website
        {
            get => fields.Website[this];
            set => fields.Website[this] = value;
        }

        [DisplayName("Email"), Size(255)]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Email Address"), Size(255)]
        public string EmailAddress
        {
            get => fields.EmailAddress[this];
            set => fields.EmailAddress[this] = value;
        }

        [DisplayName("Previous Credit Balance"), NotNull]
        public double? PreviousCreditBalance
        {
            get => fields.PreviousCreditBalance[this];
            set => fields.PreviousCreditBalance[this] = value;
        }

        [DisplayName("Is Active")]
        public int? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [Note.NotesEditor, NotMapped]
        public List<Note.NoteRow> NoteList
        {
            get => fields.NoteList[this];
            set => fields.NoteList[this] = value;
        }

        [DisplayName("Customer Group"), ForeignKey("customergroups", "Id"), LeftJoin("jCustomerGroup"), TextualField("CustomerGroupName")]
        [LookupEditor(typeof(CustomergroupsRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Customergroups")]
        public int? CustomerGroupId
        {
            get => fields.CustomerGroupId[this];
            set => fields.CustomerGroupId[this] = value;
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

        [DisplayName("Region Name"), Expression("jRegion.[Name]")]
        public string RegionName
        {
            get => fields.RegionName[this];
            set => fields.RegionName[this] = value;
        }

        [DisplayName("Customer Group"), Expression("jCustomerGroup.[Name]")]
        public string CustomerGroupName
        {
            get => fields.CustomerGroupName[this];
            set => fields.CustomerGroupName[this] = value;
        }

        [DisplayName("Customer Group Description"), Expression("jCustomerGroup.[Description]")]
        public string CustomerGroupDescription
        {
            get => fields.CustomerGroupDescription[this];
            set => fields.CustomerGroupDescription[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Customer Receivable"), Column("CustomerReceivable"), Expression("(select COALESCE(sum(Debit),0) from transactions where CoaId in (SELECT Id FROM accounts where accounts.CustomerId=t0.Id))")]
        public double? CustomerReceivable
        {
            get { return Fields.CustomerReceivable[this]; }
            set { Fields.CustomerReceivable[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Customer Received"), Column("CustomerReceived"), Expression("(select COALESCE(sum(Credit),0) from transactions where CoaId in (SELECT Id FROM accounts where accounts.CustomerId=t0.Id))")]
        public double? CustomerReceived
        {
            get { return Fields.CustomerReceived[this]; }
            set { Fields.CustomerReceived[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Customer Balance"), Column("CustomerBalance"), Expression("(select (COALESCE(sum(Debit),0) - COALESCE(sum(Credit),0)) from transactions where CoaId in (SELECT Id FROM accounts where accounts.CustomerId=t0.Id))")]
        public double? CustomerBalance
        {
            get { return Fields.CustomerBalance[this]; }
            set { Fields.CustomerBalance[this] = value; }
        }

        public CustomersRow()
            : base()
        {
        }

        public CustomersRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField ContactName;
            public StringField ContactTitle;
            public Int32Field CountryId;
            public Int32Field StateId;
            public Int32Field CityId;
            public StringField Address;
            public Int32Field RegionId;
            public StringField PostalCode;
            public StringField Phone;
            public StringField Fax;
            public StringField Website;
            public StringField Email;
            public StringField EmailAddress;
            public DoubleField PreviousCreditBalance;
            public Int32Field CustomerGroupId; 
            public Int32Field IsActive;

            public RowListField<Note.NoteRow> NoteList;

            public StringField CountryName;

            public StringField StateName;
            public Int32Field StateCountryId;

            public StringField CityName;
            public Int32Field CityCountryId;
            public Int32Field CityStateId;

            public StringField RegionName;

            public StringField CustomerGroupName;
            public StringField CustomerGroupDescription;

            public DoubleField CustomerReceivable;
            public DoubleField CustomerReceived;
            public DoubleField CustomerBalance;
        }
    }
}
