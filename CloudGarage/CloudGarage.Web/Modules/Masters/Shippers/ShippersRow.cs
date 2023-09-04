using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("Northwind"), Module("Masters"), TableName("shippers")]
    [DisplayName("Shippers"), InstanceName("Shippers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ShippersRow : Row<ShippersRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Shipper Id"), Column("ShipperID"), Identity, IdProperty]
        public int? ShipperId
        {
            get => fields.ShipperId[this];
            set => fields.ShipperId[this] = value;
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch, NameProperty]
        public string CompanyName
        {
            get => fields.CompanyName[this];
            set => fields.CompanyName[this] = value;
        }

        [DisplayName("Phone"), Size(24)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        public ShippersRow()
            : base()
        {
        }

        public ShippersRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShipperId;
            public StringField CompanyName;
            public StringField Phone;
        }
    }
}
