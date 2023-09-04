using CloudGarage.Masters;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.BusinessPartners
{
    [ConnectionKey("couldgarage"), Module("BusinessPartners"), TableName("suppliers")]
    [DisplayName("Suppliers"), InstanceName("Suppliers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SuppliersRow : Row<SuppliersRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Company Name"), Size(255), NotNull, QuickSearch, NameProperty]
        public string CompanyName
        {
            get => fields.CompanyName[this];
            set => fields.CompanyName[this] = value;
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

        [DisplayName("Phone"), Size(15)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Fax"), Size(15)]
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

        [DisplayName("Is Active")]
        public Boolean? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Previous Credit Balance"), NotNull]
        public double? PreviousCreditBalance
        {
            get => fields.PreviousCreditBalance[this];
            set => fields.PreviousCreditBalance[this] = value;
        }
        [DisplayName("Supplier Group"), ForeignKey("suppliergroups", "Id"), LeftJoin("jSupplierGroup"), TextualField("SupplierGroupName")]
        [LookupEditor(typeof(SuppliergroupsRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Suppliergroups")]
        public int? SupplierGroupId
        {
            get => fields.SupplierGroupId[this];
            set => fields.SupplierGroupId[this] = value;
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

        [DisplayName("Supplier Group"), Expression("jSupplierGroup.[Name]")]
        public string SupplierGroupName
        {
            get => fields.SupplierGroupName[this];
            set => fields.SupplierGroupName[this] = value;
        }

        [DisplayName("Supplier Group Description"), Expression("jSupplierGroup.[Description]")]
        public string SupplierGroupDescription
        {
            get => fields.SupplierGroupDescription[this];
            set => fields.SupplierGroupDescription[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Supplier Payable"), Column("SupplierPayable"), Expression("(select COALESCE(sum(Debit),0) from transactions where CoaId in (SELECT Id FROM accounts where accounts.SupplierId=t0.Id))"), LookupInclude]
        public double? SupplierPayable
        {
            get { return Fields.SupplierPayable[this]; }
            set { Fields.SupplierPayable[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Supplier Paid"), Column("SupplierPaid"), Expression("(select COALESCE(sum(Credit),0) from transactions where CoaId in (SELECT Id FROM accounts where accounts.SupplierId=t0.Id))"), LookupInclude]
        public double? SupplierPaid
        {
            get { return Fields.SupplierPaid[this]; }
            set { Fields.SupplierPaid[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Supplier Balance"), Column("SupplierBalance"), Expression("(select (COALESCE(sum(Debit),0) - COALESCE(sum(Credit),0)) from transactions where CoaId in (SELECT Id FROM accounts where accounts.SupplierId=t0.Id))"), LookupInclude]
        public double? SupplierBalance
        {
            get { return Fields.SupplierBalance[this]; }
            set { Fields.SupplierBalance[this] = value; }
        }

        public SuppliersRow()
            : base()
        {
        }

        public SuppliersRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CompanyName;
            public Int32Field CountryId;
            public Int32Field StateId;
            public Int32Field CityId;
            public StringField ContactName;
            public StringField ContactTitle;
            public StringField Address;
            public Int32Field RegionId;
            public StringField PostalCode;
            public StringField Phone;
            public StringField Fax;
            public StringField Website;
            public StringField Email;
            public StringField EmailAddress;
            public DoubleField PreviousCreditBalance;
            public Int32Field SupplierGroupId;   
            public BooleanField IsActive;

            public StringField CountryName;

            public StringField StateName;
            public Int32Field StateCountryId;

            public StringField CityName;
            public Int32Field CityCountryId;
            public Int32Field CityStateId;

            public StringField RegionName;

            public StringField SupplierGroupName;
            public StringField SupplierGroupDescription;

            public DoubleField SupplierPayable;
            public DoubleField SupplierPaid;
            public DoubleField SupplierBalance;
        }
    }
}