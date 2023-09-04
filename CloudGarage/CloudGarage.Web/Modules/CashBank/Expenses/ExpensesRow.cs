using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using CloudGarage.Masters;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.CashBank
{
    [ConnectionKey("couldgarage"), Module("CashBank"), TableName("expenses")]
    [DisplayName("Expenses"), InstanceName("Expenses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ExpensesRow : Row<ExpensesRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Expense Type"), NotNull, ForeignKey("expensestypes", "Id"), LeftJoin("jExpenseType"), TextualField("ExpenseTypeType")]
        [LookupEditor(typeof(ExpensestypesRow), InplaceAdd = true)]
        public int? ExpenseTypeId
        {
            get => fields.ExpenseTypeId[this];
            set => fields.ExpenseTypeId[this] = value;
        }

        [DisplayName("Branch"), NotNull, ForeignKey("branches", "Id"), LeftJoin("jBranches"), TextualField("BranchName")]
        [LookupEditor(typeof(BranchesRow), InplaceAdd = true)]
        public int? BranchesId
        {
            get => fields.BranchesId[this];
            set => fields.BranchesId[this] = value;
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Payment Account"), NotNull, ForeignKey("accounts", "Id"), LeftJoin("jPaymentAccount"), TextualField("PaymentAccountHeadName")]
        [LookupInclude, LookupEditor(typeof(Financial.AccountsCashLookup), AutoComplete = true)]
        public int? PaymentAccount
        {
            get => fields.PaymentAccount[this];
            set => fields.PaymentAccount[this] = value;
        }

        [DisplayName("HeadCodeName")]
        [Expression("CONCAT(jPaymentAccount.[HeadCode], CONCAT(' ', jPaymentAccount.[HeadName]))"), QuickSearch, NameProperty]
        public string HeadCodeName
        {
            get { return Fields.HeadCodeName[this]; }
            set { Fields.HeadCodeName[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Amount"), NotNull]
        public double? Amount
        {
            get => fields.Amount[this];
            set => fields.Amount[this] = value;
        }
        [DisplayName("In"), Insertable(false), Updatable(false), NotNull]
        public DateTime? In
        {
            get => fields.In[this];
            set => fields.In[this] = value;
        }

        [DisplayName("In By")]
        public int? InBy
        {
            get => fields.InBy[this];
            set => fields.InBy[this] = value;
        }

        [DisplayName("Up"), Insertable(false), Updatable(false), NotNull]
        public DateTime? Up
        {
            get => fields.Up[this];
            set => fields.Up[this] = value;
        }

        [DisplayName("Up By")]
        public int? UpBy
        {
            get => fields.UpBy[this];
            set => fields.UpBy[this] = value;
        }

        [DisplayName("V No")]
        public int? VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("Expense Type Type"), Expression("jExpenseType.[Type]")]
        public string ExpenseTypeType
        {
            get => fields.ExpenseTypeType[this];
            set => fields.ExpenseTypeType[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranches.[Name]")]
        public string BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
        }

        [DisplayName("Payment Account Head Code"), Expression("jPaymentAccount.[HeadCode]")]
        public int? PaymentAccountHeadCode
        {
            get => fields.PaymentAccountHeadCode[this];
            set => fields.PaymentAccountHeadCode[this] = value;
        }

        [DisplayName("Payment Account Head Name"), Expression("jPaymentAccount.[HeadName]")]
        public string PaymentAccountHeadName
        {
            get => fields.PaymentAccountHeadName[this];
            set => fields.PaymentAccountHeadName[this] = value;
        }

        [DisplayName("Payment Account Parent Head"), Expression("jPaymentAccount.[ParentHead]")]
        public int? PaymentAccountParentHead
        {
            get => fields.PaymentAccountParentHead[this];
            set => fields.PaymentAccountParentHead[this] = value;
        }

        [DisplayName("Payment Account P Head Name"), Expression("jPaymentAccount.[PHeadName]")]
        public string PaymentAccountPHeadName
        {
            get => fields.PaymentAccountPHeadName[this];
            set => fields.PaymentAccountPHeadName[this] = value;
        }

        [DisplayName("Payment Account Head Level"), Expression("jPaymentAccount.[HeadLevel]")]
        public int? PaymentAccountHeadLevel
        {
            get => fields.PaymentAccountHeadLevel[this];
            set => fields.PaymentAccountHeadLevel[this] = value;
        }

        [DisplayName("Payment Account Head Type"), Expression("jPaymentAccount.[HeadType]")]
        public string PaymentAccountHeadType
        {
            get => fields.PaymentAccountHeadType[this];
            set => fields.PaymentAccountHeadType[this] = value;
        }

        [DisplayName("Payment Account Is Transaction"), Expression("jPaymentAccount.[IsTransaction]")]
        public short? PaymentAccountIsTransaction
        {
            get => fields.PaymentAccountIsTransaction[this];
            set => fields.PaymentAccountIsTransaction[this] = value;
        }

        [DisplayName("Payment Account Is Gl"), Expression("jPaymentAccount.[IsGl]")]
        public short? PaymentAccountIsGl
        {
            get => fields.PaymentAccountIsGl[this];
            set => fields.PaymentAccountIsGl[this] = value;
        }

        [DisplayName("Payment Account Is Budget"), Expression("jPaymentAccount.[IsBudget]")]
        public short? PaymentAccountIsBudget
        {
            get => fields.PaymentAccountIsBudget[this];
            set => fields.PaymentAccountIsBudget[this] = value;
        }

        [DisplayName("Payment Account Is Depreciation"), Expression("jPaymentAccount.[IsDepreciation]")]
        public short? PaymentAccountIsDepreciation
        {
            get => fields.PaymentAccountIsDepreciation[this];
            set => fields.PaymentAccountIsDepreciation[this] = value;
        }

        [DisplayName("Payment Account Customer Id"), Expression("jPaymentAccount.[CustomerId]")]
        public int? PaymentAccountCustomerId
        {
            get => fields.PaymentAccountCustomerId[this];
            set => fields.PaymentAccountCustomerId[this] = value;
        }

        [DisplayName("Payment Account Supplier Id"), Expression("jPaymentAccount.[SupplierId]")]
        public int? PaymentAccountSupplierId
        {
            get => fields.PaymentAccountSupplierId[this];
            set => fields.PaymentAccountSupplierId[this] = value;
        }

        [DisplayName("Payment Account Depreciation Rate"), Expression("jPaymentAccount.[DepreciationRate]")]
        public double? PaymentAccountDepreciationRate
        {
            get => fields.PaymentAccountDepreciationRate[this];
            set => fields.PaymentAccountDepreciationRate[this] = value;
        }

        public ExpensesRow()
            : base()
        {
        }

        public ExpensesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ExpenseTypeId;
            public Int32Field BranchesId;
            public DateTimeField Date;
            public Int32Field PaymentAccount;
            public DoubleField Amount;
            public Int32Field VNo;
            public StringField HeadCodeName;
            public DateTimeField In;
            public Int32Field InBy;
            public DateTimeField Up;
            public Int32Field UpBy;

            public StringField ExpenseTypeType;
            public StringField BranchName;

            public Int32Field PaymentAccountHeadCode;
            public StringField PaymentAccountHeadName;
            public Int32Field PaymentAccountParentHead;
            public StringField PaymentAccountPHeadName;
            public Int32Field PaymentAccountHeadLevel;
            public StringField PaymentAccountHeadType;
            public Int16Field PaymentAccountIsTransaction;
            public Int16Field PaymentAccountIsGl;
            public Int16Field PaymentAccountIsBudget;
            public Int16Field PaymentAccountIsDepreciation;
            public Int32Field PaymentAccountCustomerId;
            public Int32Field PaymentAccountSupplierId;
            public DoubleField PaymentAccountDepreciationRate;
        }
    }
}
