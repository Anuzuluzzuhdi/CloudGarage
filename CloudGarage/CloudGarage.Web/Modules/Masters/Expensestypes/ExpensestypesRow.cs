using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("expensestypes")]
    [DisplayName("Expenses Types"), InstanceName("Expensestypes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ExpensestypesRow : Row<ExpensestypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Type"), Size(255), NotNull, QuickSearch, NameProperty]
        public string Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        public ExpensestypesRow()
            : base()
        {
        }

        public ExpensestypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Type;
        }
    }
}
