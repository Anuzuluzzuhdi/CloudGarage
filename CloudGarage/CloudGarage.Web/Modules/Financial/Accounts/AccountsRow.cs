using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using CloudGarage;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Financial
{
    [ConnectionKey("couldgarage"), Module("Financial"), TableName("accounts")]
    [DisplayName("Accounts"), InstanceName("Accounts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Cloudgarage.Finansiaklll")]
    public sealed class AccountsRow : Common.LoggingAllBranchRow<AccountsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Head Code"), NotNull, QuickSearch,  LookupInclude, NameProperty]
        [Updatable(false)]
        public int? HeadCode
        {
            get => fields.HeadCode[this];
            set => fields.HeadCode[this] = value;
        }

        [DisplayName("Head Name"), Size(100), NotNull, LookupInclude]
        public string HeadName
        {
            get => fields.HeadName[this];
            set => fields.HeadName[this] = value;
        }

        [DisplayName("Parent Head"), ForeignKey("accounts", "Id"), LeftJoin("jParentHead"), TextualField("ParentHeadHeadName")]
        [Updatable(false), LookupInclude, AccountsEditor]
        public int? ParentHead
        {
            get => fields.ParentHead[this];
            set => fields.ParentHead[this] = value;
        }

        [DisplayName("P Head Name"), Size(100), LookupInclude]
        public string PHeadName
        {
            get => fields.PHeadName[this];
            set => fields.PHeadName[this] = value;
        }
        [DisplayName("Head Code Name")]
        [Expression("CONCAT(T0.[HeadCode], CONCAT('', T0.[HeadName]))"), QuickSearch, LookupInclude]
        public string HeadCodeName
        {
            get { return Fields.HeadCodeName[this]; }
            set { Fields.HeadCodeName[this] = value; }
        }

        [DisplayName("Head Level"), NotNull, LookupInclude]
        [Updatable(false)]
        public int? HeadLevel
        {
            get => fields.HeadLevel[this];
            set => fields.HeadLevel[this] = value;
        }

        [DisplayName("Head Type"), Size(255), NotNull, LookupInclude]
        [Updatable(false)]
        public string HeadType
        {
            get => fields.HeadType[this];
            set => fields.HeadType[this] = value;
        }

        [DisplayName("Is Transaction"), NotNull]
        public short? IsTransaction
        {
            get => fields.IsTransaction[this];
            set => fields.IsTransaction[this] = value;
        }

        [DisplayName("Is Opening")]
        public short? IsOpening
        {
           get => fields.IsOpening[this];
           set => fields.IsOpening[this] = value;
        }

        [DisplayName("Is Gl"), NotNull]
        public short? IsGl
        {
            get => fields.IsGl[this];
            set => fields.IsGl[this] = value;
        }

        [DisplayName("Is Budget")]
        public short? IsBudget
        {
            get => fields.IsBudget[this];
            set => fields.IsBudget[this] = value;
        }

        [DisplayName("Is Depreciation")]
        public short? IsDepreciation
        {
            get => fields.IsDepreciation[this];
            set => fields.IsDepreciation[this] = value;
        }

        [DisplayName("Customer"), ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        public int? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Supplier"), ForeignKey("suppliers", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        public int? SupplierId
        {
            get => fields.SupplierId[this];
            set => fields.SupplierId[this] = value;
        }

        [DisplayName("Depreciation Rate")]
        public double? DepreciationRate
        {
            get => fields.DepreciationRate[this];
            set => fields.DepreciationRate[this] = value;
        }

        [DisplayName("Parent Head Head Code"), Expression("jParentHead.[HeadCode]"), LookupInclude]
        public int? ParentHeadHeadCode
        {
            get => fields.ParentHeadHeadCode[this];
            set => fields.ParentHeadHeadCode[this] = value;
        }

        [DisplayName("Parent Head Head Name"), Expression("jParentHead.[HeadName]")]
        public string ParentHeadHeadName
        {
            get => fields.ParentHeadHeadName[this];
            set => fields.ParentHeadHeadName[this] = value;
        }

        [DisplayName("Parent Head"), Expression("jParentHead.[ParentHead]")]
        public int? ParentHead1
        {
            get => fields.ParentHead1[this];
            set => fields.ParentHead1[this] = value;
        }

        [DisplayName("Parent Head P Head Name"), Expression("jParentHead.[PHeadName]")]
        public string ParentHeadPHeadName
        {
            get => fields.ParentHeadPHeadName[this];
            set => fields.ParentHeadPHeadName[this] = value;
        }

        [DisplayName("Parent Head Head Level"), Expression("jParentHead.[HeadLevel]"), LookupInclude]
        public int? ParentHeadHeadLevel
        {
            get => fields.ParentHeadHeadLevel[this];
            set => fields.ParentHeadHeadLevel[this] = value;
        }

        [DisplayName("Parent Head Head Type"), Expression("jParentHead.[HeadType]")]
        public string ParentHeadHeadType
        {
            get => fields.ParentHeadHeadType[this];
            set => fields.ParentHeadHeadType[this] = value;
        }

        [DisplayName("Parent Head Is Transaction"), Expression("jParentHead.[IsTransaction]")]
        public short? ParentHeadIsTransaction
        {
            get => fields.ParentHeadIsTransaction[this];
            set => fields.ParentHeadIsTransaction[this] = value;
        }

        [DisplayName("Parent Head Is Gl"), Expression("jParentHead.[IsGl]")]
        public short? ParentHeadIsGl
        {
            get => fields.ParentHeadIsGl[this];
            set => fields.ParentHeadIsGl[this] = value;
        }

        [DisplayName("Parent Head Is Budget"), Expression("jParentHead.[IsBudget]")]
        public short? ParentHeadIsBudget
        {
            get => fields.ParentHeadIsBudget[this];
            set => fields.ParentHeadIsBudget[this] = value;
        }

        [DisplayName("Parent Head Is Depreciation"), Expression("jParentHead.[IsDepreciation]")]
        public short? ParentHeadIsDepreciation
        {
            get => fields.ParentHeadIsDepreciation[this];
            set => fields.ParentHeadIsDepreciation[this] = value;
        }

        [DisplayName("Parent Head Customer Id"), Expression("jParentHead.[CustomerId]")]
        public int? ParentHeadCustomerId
        {
            get => fields.ParentHeadCustomerId[this];
            set => fields.ParentHeadCustomerId[this] = value;
        }

        [DisplayName("Parent Head Supplier Id"), Expression("jParentHead.[SupplierId]")]
        public int? ParentHeadSupplierId
        {
            get => fields.ParentHeadSupplierId[this];
            set => fields.ParentHeadSupplierId[this] = value;
        }

        [DisplayName("Parent Head Depreciation Rate"), Expression("jParentHead.[DepreciationRate]")]
        public double? ParentHeadDepreciationRate
        {
            get => fields.ParentHeadDepreciationRate[this];
            set => fields.ParentHeadDepreciationRate[this] = value;
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public string CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public string CustomerContactName
        {
            get => fields.CustomerContactName[this];
            set => fields.CustomerContactName[this] = value;
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public string CustomerContactTitle
        {
            get => fields.CustomerContactTitle[this];
            set => fields.CustomerContactTitle[this] = value;
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public int? CustomerCountryId
        {
            get => fields.CustomerCountryId[this];
            set => fields.CustomerCountryId[this] = value;
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public int? CustomerStateId
        {
            get => fields.CustomerStateId[this];
            set => fields.CustomerStateId[this] = value;
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityId]")]
        public int? CustomerCityId
        {
            get => fields.CustomerCityId[this];
            set => fields.CustomerCityId[this] = value;
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public string CustomerAddress
        {
            get => fields.CustomerAddress[this];
            set => fields.CustomerAddress[this] = value;
        }

        [DisplayName("Customer Region Id"), Expression("jCustomer.[RegionId]")]
        public int? CustomerRegionId
        {
            get => fields.CustomerRegionId[this];
            set => fields.CustomerRegionId[this] = value;
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public string CustomerPostalCode
        {
            get => fields.CustomerPostalCode[this];
            set => fields.CustomerPostalCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public string CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public string CustomerFax
        {
            get => fields.CustomerFax[this];
            set => fields.CustomerFax[this] = value;
        }

        [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
        public string CustomerWebsite
        {
            get => fields.CustomerWebsite[this];
            set => fields.CustomerWebsite[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public string CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Customer Email Address"), Expression("jCustomer.[EmailAddress]")]
        public string CustomerEmailAddress
        {
            get => fields.CustomerEmailAddress[this];
            set => fields.CustomerEmailAddress[this] = value;
        }

        [DisplayName("Customer Previous Credit Balance"), Expression("jCustomer.[PreviousCreditBalance]")]
        public double? CustomerPreviousCreditBalance
        {
            get => fields.CustomerPreviousCreditBalance[this];
            set => fields.CustomerPreviousCreditBalance[this] = value;
        }

        [DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        public string SupplierCompanyName
        {
            get => fields.SupplierCompanyName[this];
            set => fields.SupplierCompanyName[this] = value;
        }

        [DisplayName("Supplier Country Id"), Expression("jSupplier.[CountryId]")]
        public int? SupplierCountryId
        {
            get => fields.SupplierCountryId[this];
            set => fields.SupplierCountryId[this] = value;
        }

        [DisplayName("Supplier State Id"), Expression("jSupplier.[StateId]")]
        public int? SupplierStateId
        {
            get => fields.SupplierStateId[this];
            set => fields.SupplierStateId[this] = value;
        }

        [DisplayName("Supplier City Id"), Expression("jSupplier.[CityId]")]
        public int? SupplierCityId
        {
            get => fields.SupplierCityId[this];
            set => fields.SupplierCityId[this] = value;
        }

        [DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        public string SupplierContactName
        {
            get => fields.SupplierContactName[this];
            set => fields.SupplierContactName[this] = value;
        }

        [DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        public string SupplierContactTitle
        {
            get => fields.SupplierContactTitle[this];
            set => fields.SupplierContactTitle[this] = value;
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public string SupplierAddress
        {
            get => fields.SupplierAddress[this];
            set => fields.SupplierAddress[this] = value;
        }

        [DisplayName("Supplier Region Id"), Expression("jSupplier.[RegionId]")]
        public int? SupplierRegionId
        {
            get => fields.SupplierRegionId[this];
            set => fields.SupplierRegionId[this] = value;
        }

        [DisplayName("Supplier Postal Code"), Expression("jSupplier.[PostalCode]")]
        public string SupplierPostalCode
        {
            get => fields.SupplierPostalCode[this];
            set => fields.SupplierPostalCode[this] = value;
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public string SupplierPhone
        {
            get => fields.SupplierPhone[this];
            set => fields.SupplierPhone[this] = value;
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public string SupplierFax
        {
            get => fields.SupplierFax[this];
            set => fields.SupplierFax[this] = value;
        }

        [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
        public string SupplierWebsite
        {
            get => fields.SupplierWebsite[this];
            set => fields.SupplierWebsite[this] = value;
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public string SupplierEmail
        {
            get => fields.SupplierEmail[this];
            set => fields.SupplierEmail[this] = value;
        }

        [DisplayName("Supplier Email Address"), Expression("jSupplier.[EmailAddress]")]
        public string SupplierEmailAddress
        {
            get => fields.SupplierEmailAddress[this];
            set => fields.SupplierEmailAddress[this] = value;
        }

        [DisplayName("Supplier Previous Credit Balance"), Expression("jSupplier.[PreviousCreditBalance]")]
        public double? SupplierPreviousCreditBalance
        {
            get => fields.SupplierPreviousCreditBalance[this];
            set => fields.SupplierPreviousCreditBalance[this] = value;
        }

        [DisplayName("Supplier Supplier Group Id"), Expression("jSupplier.[SupplierGroupId]")]
        public int? SupplierSupplierGroupId
        {
            get => fields.SupplierSupplierGroupId[this];
            set => fields.SupplierSupplierGroupId[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Opening Balance"), Column("OpeningBalance"), Expression("(SELECT COALESCE (SUM(Debit) - SUM(Credit), 0) FROM transactions where IsAppove=1 AND IsPosted=1 AND  IsOpening=1 and Coa= t0.HeadCode or IsAppove=1 AND IsPosted=1 and  IsOpening=1 AND Coa in (select HeadCode from accounts where ParentHead = t0.HeadCode))")]
        public Double? OpeningBalance
        {
            get { return Fields.OpeningBalance[this]; }
            set { Fields.OpeningBalance[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Balance"), Column("Balance"), Expression("(SELECT SUM(Debit) - SUM(Credit) FROM transactions where IsAppove=1 AND IsPosted=1 and Coa= t0.HeadCode or IsAppove=1 AND IsPosted=1 and Coa in (select HeadCode from accounts where ParentHead = t0.HeadCode))")]
        public Double? Balance
        {
           get { return Fields.Balance[this]; }
           set { Fields.Balance[this] = value; }
        }

        public AccountsRow()
            : base()
        {
        }

        public AccountsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : Common.LoggingAllBranchRowFields
        {
            public Int32Field Id;
            public Int32Field HeadCode;
            public StringField HeadName;
            public Int32Field ParentHead;
            public StringField PHeadName;
            public Int32Field HeadLevel;
            public StringField HeadType;
            public Int16Field IsTransaction;
            public Int16Field IsGl;
            public Int16Field IsBudget;
            public Int16Field IsOpening;
            public Int16Field IsDepreciation;
            public Int32Field CustomerId;
            public Int32Field SupplierId;
            public DoubleField DepreciationRate;

            public Int32Field ParentHeadHeadCode;
            public StringField ParentHeadHeadName;
            public Int32Field ParentHead1;
            public StringField ParentHeadPHeadName;
            public Int32Field ParentHeadHeadLevel;
            public StringField ParentHeadHeadType;
            public Int16Field ParentHeadIsTransaction;
            public Int16Field ParentHeadIsGl;
            public Int16Field ParentHeadIsBudget;
            public Int16Field ParentHeadIsDepreciation;
            public Int32Field ParentHeadCustomerId;
            public Int32Field ParentHeadSupplierId;
            public DoubleField ParentHeadDepreciationRate;

            public StringField CustomerName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public Int32Field CustomerCountryId;
            public Int32Field CustomerStateId;
            public Int32Field CustomerCityId;
            public StringField CustomerAddress;
            public Int32Field CustomerRegionId;
            public StringField CustomerPostalCode;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public StringField CustomerWebsite;
            public StringField CustomerEmail;
            public StringField CustomerEmailAddress;
            public DoubleField CustomerPreviousCreditBalance;

            public StringField SupplierCompanyName;
            public Int32Field SupplierCountryId;
            public Int32Field SupplierStateId;
            public Int32Field SupplierCityId;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierAddress;
            public Int32Field SupplierRegionId;
            public StringField SupplierPostalCode;
            public StringField SupplierPhone;
            public StringField SupplierFax;
            public StringField SupplierWebsite;
            public StringField SupplierEmail;
            public StringField SupplierEmailAddress;
            public DoubleField SupplierPreviousCreditBalance;
            public Int32Field SupplierSupplierGroupId;

            public DoubleField OpeningBalance;
            public DoubleField Balance;
            public StringField HeadCodeName;
        }
    }
}
