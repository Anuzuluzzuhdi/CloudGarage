using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("banks")]
    [DisplayName("Banks"), InstanceName("Banks")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class BanksRow : Row<BanksRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Bank Name"), Size(255), NotNull, QuickSearch, NameProperty]
        public string BankName
        {
            get => fields.BankName[this];
            set => fields.BankName[this] = value;
        }

        [DisplayName("Ac Name"), Size(255), NotNull]
        public string AcName
        {
            get => fields.AcName[this];
            set => fields.AcName[this] = value;
        }

        [DisplayName("Ac Number"), Size(255), NotNull]
        public string AcNumber
        {
            get => fields.AcNumber[this];
            set => fields.AcNumber[this] = value;
        }

        [DisplayName("Branch"), Size(255), NotNull]
        public string Branch
        {
            get => fields.Branch[this];
            set => fields.Branch[this] = value;
        }

        [DisplayName("Signature Picture"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public string SignaturePicture
        {
            get => fields.SignaturePicture[this];
            set => fields.SignaturePicture[this] = value;
        }

        public BanksRow()
            : base()
        {
        }

        public BanksRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField BankName;
            public StringField AcName;
            public StringField AcNumber;
            public StringField Branch;
            public StringField SignaturePicture;
        }
    }
}
