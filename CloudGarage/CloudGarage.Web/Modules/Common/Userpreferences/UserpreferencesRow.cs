using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Common
{
    [ConnectionKey("Default"), Module("Common"), TableName("userpreferences")]
    [DisplayName("Userpreferences"), InstanceName("Userpreferences")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserpreferencesRow : Row<UserpreferencesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("User Preference Id"), Identity, IdProperty]
        public int? UserPreferenceId
        {
            get => fields.UserPreferenceId[this];
            set => fields.UserPreferenceId[this] = value;
        }

        [DisplayName("User Id"), NotNull]
        public long? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Preference Type"), Size(100), NotNull, QuickSearch, NameProperty]
        public string PreferenceType
        {
            get => fields.PreferenceType[this];
            set => fields.PreferenceType[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Value")]
        public Stream Value
        {
            get => fields.Value[this];
            set => fields.Value[this] = value;
        }

        public UserpreferencesRow()
            : base()
        {
        }

        public UserpreferencesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserPreferenceId;
            public Int64Field UserId;
            public StringField PreferenceType;
            public StringField Name;
            public StreamField Value;
        }
    }
}
