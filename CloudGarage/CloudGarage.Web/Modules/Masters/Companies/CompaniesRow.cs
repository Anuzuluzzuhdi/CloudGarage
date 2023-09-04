using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("companies")]
    [DisplayName("Companies"), InstanceName("Companies")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CompaniesRow : Row<CompaniesRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Company Email"), Size(255)]
        public string CompanyEmail
        {
            get => fields.CompanyEmail[this];
            set => fields.CompanyEmail[this] = value;
        }

        [DisplayName("Address"), Size(255)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Phone"), Size(255)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Currency"), ForeignKey("currencies", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyName")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true, DialogType = "CloudGarage.Masters.Currencies")]
        public int? CurrencyId
        {
            get => fields.CurrencyId[this];
            set => fields.CurrencyId[this] = value;
        }

        [DisplayName("Vat Percentage"), NotNull, LookupInclude]
        public double? VatPercentage
        {
            get => fields.VatPercentage[this];
            set => fields.VatPercentage[this] = value;
        }

        [DisplayName("Logo"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public string Logo
        {
            get => fields.Logo[this];
            set => fields.Logo[this] = value;
        }

        [DisplayName("Sale Logo"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public string SaleLogo
        {
            get => fields.SaleLogo[this];
            set => fields.SaleLogo[this] = value;
        }

        [DisplayName("Favicon"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public string Favicon
        {
            get => fields.Favicon[this];
            set => fields.Favicon[this] = value;
        }

        [DisplayName("Currency Position"), NotNull]
        public CurrencyPositionKind? CurrencyPosition
        {
            get { return (CurrencyPositionKind)Fields.CurrencyPosition[this]; }
            set { Fields.CurrencyPosition[this] = (Int32)value; }
        }

        [DisplayName("Footer Text"), Size(255)]
        public string FooterText
        {
            get => fields.FooterText[this];
            set => fields.FooterText[this] = value;
        }

        [DisplayName("Currency Currency Name"), Expression("jCurrency.[CurrencyName]")]
        public string CurrencyCurrencyName
        {
            get => fields.CurrencyCurrencyName[this];
            set => fields.CurrencyCurrencyName[this] = value;
        }

        [DisplayName("Currency Currency Symbol"), Expression("jCurrency.[CurrencySymbol]")]
        public string CurrencyCurrencySymbol
        {
            get => fields.CurrencyCurrencySymbol[this];
            set => fields.CurrencyCurrencySymbol[this] = value;
        }

        public CompaniesRow()
            : base()
        {
        }

        public CompaniesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CompanyName;
            public StringField CompanyEmail;
            public StringField Address;
            public StringField Phone;
            public Int32Field CurrencyId;
            public DoubleField VatPercentage;
            public StringField Logo;
            public StringField SaleLogo;
            public StringField Favicon;
            public Int32Field CurrencyPosition;
            public StringField FooterText;

            public StringField CurrencyCurrencyName;
            public StringField CurrencyCurrencySymbol;
        }
    }
}
