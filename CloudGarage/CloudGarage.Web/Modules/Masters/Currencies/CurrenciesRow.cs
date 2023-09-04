using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("currencies")]
    [DisplayName("Currencies"), InstanceName("Currencies")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class CurrenciesRow : Row<CurrenciesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Currency Name"), Size(255), NotNull, QuickSearch, NameProperty]
        public string CurrencyName
        {
            get => fields.CurrencyName[this];
            set => fields.CurrencyName[this] = value;
        }

        [DisplayName("Currency Symbol"), Size(255), NotNull]
        public string CurrencySymbol
        {
            get => fields.CurrencySymbol[this];
            set => fields.CurrencySymbol[this] = value;
        }

        public CurrenciesRow()
            : base()
        {
        }

        public CurrenciesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CurrencyName;
            public StringField CurrencySymbol;
        }
    }
}
