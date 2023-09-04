using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Financial
{
    [ConnectionKey("couldgarage"), Module("Financial"), TableName("journalvoucher")]
    [DisplayName("Journalvoucher"), InstanceName("Journalvoucher")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class JournalvoucherRow : Row<JournalvoucherRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Voucher No"), Size(255), QuickSearch, NameProperty]
        public string VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("Voucher Type"), NotNull, QuickFilter]
        public VoucherType? Vtype
        {
            get => (VoucherType?)fields.Vtype[this];
            set => fields.Vtype[this] = (Int32)value;
        }

        [DisplayName("Voucher Date"), NotNull]
        public DateTime? VDate
        {
            get => fields.VDate[this];
            set => fields.VDate[this] = value;
        }

        [DisplayName("Account"), NotNull, ForeignKey("accounts", "Id"), LeftJoin("jCoa"), TextualField("CoaHeadName")]
        [LookupInclude, LookupEditor(typeof(AccountsCashLookup), AutoComplete = true)]
        public int? CoaId
        {
            get => fields.CoaId[this];
            set => fields.CoaId[this] = value;
        }

        [DisplayName("Coa"), Size(255)]
        public string Coa
        {
            get => fields.Coa[this];
            set => fields.Coa[this] = value;
        }

        [DisplayName("Remark"), Size(255)]
        public string Narration
        {
            get => fields.Narration[this];
            set => fields.Narration[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Debit"), NotNull]
        public double? Debit
        {
            get => fields.Debit[this];
            set => fields.Debit[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Credit")]
        public double? Credit
        {
            get => fields.Credit[this];
            set => fields.Credit[this] = value;
        }

        [DisplayName("Is Posted")]
        public Boolean? IsPosted
        {
            get => fields.IsPosted[this];
            set => fields.IsPosted[this] = value;
        }

        [DisplayName("Is Appove")]
        public Boolean? IsAppove
        {
            get => fields.IsAppove[this];
            set => fields.IsAppove[this] = value;
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Insert User Id")]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Coa Head Code"), Expression("jCoa.[HeadCode]")]
        public int? CoaHeadCode
        {
            get => fields.CoaHeadCode[this];
            set => fields.CoaHeadCode[this] = value;
        }

        [DisplayName("Coa Head Name"), Expression("jCoa.[HeadName]")]
        public string CoaHeadName
        {
            get => fields.CoaHeadName[this];
            set => fields.CoaHeadName[this] = value;
        }

        [DisplayName("Coa Parent Head"), Expression("jCoa.[ParentHead]")]
        public int? CoaParentHead
        {
            get => fields.CoaParentHead[this];
            set => fields.CoaParentHead[this] = value;
        }

        [DisplayName("Coa P Head Name"), Expression("jCoa.[PHeadName]")]
        public string CoaPHeadName
        {
            get => fields.CoaPHeadName[this];
            set => fields.CoaPHeadName[this] = value;
        }

        [DisplayName("Coa Head Level"), Expression("jCoa.[HeadLevel]")]
        public int? CoaHeadLevel
        {
            get => fields.CoaHeadLevel[this];
            set => fields.CoaHeadLevel[this] = value;
        }

        [DisplayName("Coa Head Type"), Expression("jCoa.[HeadType]")]
        public string CoaHeadType
        {
            get => fields.CoaHeadType[this];
            set => fields.CoaHeadType[this] = value;
        }

        [DisplayName("Coa Is Transaction"), Expression("jCoa.[IsTransaction]")]
        public short? CoaIsTransaction
        {
            get => fields.CoaIsTransaction[this];
            set => fields.CoaIsTransaction[this] = value;
        }

        [DisplayName("Coa Is Gl"), Expression("jCoa.[IsGl]")]
        public short? CoaIsGl
        {
            get => fields.CoaIsGl[this];
            set => fields.CoaIsGl[this] = value;
        }

        [DisplayName("Coa Is Budget"), Expression("jCoa.[IsBudget]")]
        public short? CoaIsBudget
        {
            get => fields.CoaIsBudget[this];
            set => fields.CoaIsBudget[this] = value;
        }

        [DisplayName("Coa Is Depreciation"), Expression("jCoa.[IsDepreciation]")]
        public short? CoaIsDepreciation
        {
            get => fields.CoaIsDepreciation[this];
            set => fields.CoaIsDepreciation[this] = value;
        }

        [DisplayName("Coa Customer Id"), Expression("jCoa.[CustomerId]")]
        public int? CoaCustomerId
        {
            get => fields.CoaCustomerId[this];
            set => fields.CoaCustomerId[this] = value;
        }

        [DisplayName("Coa Supplier Id"), Expression("jCoa.[SupplierId]")]
        public int? CoaSupplierId
        {
            get => fields.CoaSupplierId[this];
            set => fields.CoaSupplierId[this] = value;
        }

        [DisplayName("Coa Depreciation Rate"), Expression("jCoa.[DepreciationRate]")]
        public double? CoaDepreciationRate
        {
            get => fields.CoaDepreciationRate[this];
            set => fields.CoaDepreciationRate[this] = value;
        }

        [DisplayName("Is Active")]
        public Boolean? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        public JournalvoucherRow()
            : base()
        {
        }

        public JournalvoucherRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField VNo;
            public Int32Field Vtype;
            public DateTimeField VDate;
            public Int32Field CoaId;
            public StringField Coa;
            public StringField Narration;
            public DoubleField Debit;
            public DoubleField Credit;
            public BooleanField IsPosted;
            public BooleanField IsActive;
            public BooleanField IsAppove;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;

            public Int32Field CoaHeadCode;
            public StringField CoaHeadName;
            public Int32Field CoaParentHead;
            public StringField CoaPHeadName;
            public Int32Field CoaHeadLevel;
            public StringField CoaHeadType;
            public Int16Field CoaIsTransaction;
            public Int16Field CoaIsGl;
            public Int16Field CoaIsBudget;
            public Int16Field CoaIsDepreciation;
            public Int32Field CoaCustomerId;
            public Int32Field CoaSupplierId;
            public DoubleField CoaDepreciationRate;
        }
    }
}
