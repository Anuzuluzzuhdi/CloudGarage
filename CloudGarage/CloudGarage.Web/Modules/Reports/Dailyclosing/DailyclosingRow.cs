using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Reports
{
    [ConnectionKey("couldgarage"), Module("Reports"), TableName("dailyclosing")]
    [DisplayName("Dailyclosing"), InstanceName("Dailyclosing")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DailyclosingRow : Row<DailyclosingRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Last Day Closing")]
        public double? LastDayClosing
        {
            get => fields.LastDayClosing[this];
            set => fields.LastDayClosing[this] = value;
        }

        [DisplayName("Receive")]
        public double? CashIn
        {
            get => fields.CashIn[this];
            set => fields.CashIn[this] = value;
        }

        [DisplayName("Payment")]
        public double? CashOut
        {
            get => fields.CashOut[this];
            set => fields.CashOut[this] = value;
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Balance"), Size(10), Scale(2)]
        public decimal? Amount
        {
            get => fields.Amount[this];
            set => fields.Amount[this] = value;
        }

        [DisplayName("Adjustment")]
        public double? Adjustment
        {
            get => fields.Adjustment[this];
            set => fields.Adjustment[this] = value;
        }

        [DisplayName("Status")]
        public int? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
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

        [Insertable(false), Updatable(false), LookupInclude]
        public Int64? BranchId
        {
            get => fields.BranchId[this];
        }

        [DisplayName("Last Closing Amount"), Column("LastClosingAmount"), Expression("(ISNULL((SELECT TOP 1 [Amount] FROM [dailyclosing] WHERE [Date] = (SELECT MAX([Date]) FROM [dailyclosing] where [BranchId]=t0.[BranchId]) AND [BranchId]=t0.[BranchId] ORDER BY [Id] DESC),0))"), LookupInclude]
        public Double? LastClosingAmount
        {
            get { return Fields.LastClosingAmount[this]; }
            set { Fields.LastClosingAmount[this] = value; }
        }

        [DisplayName("Today Cash In"), Column("TodayCashIn"), Expression("( ISNULL((SELECT SUM(t.[Debit]) FROM [transactions] t where t.[Coa]='1020101' and t.[VDate]=getDate() AND [BranchId]=t0.[BranchId]),0))"), LookupInclude]
        public Double? TodayCashIn
        {
            get { return Fields.TodayCashIn[this]; }
            set { Fields.TodayCashIn[this] = value; }
        }
        [DisplayName("Today Cash Out"), Column("TodayCashOut"), Expression("( ISNULL((SELECT SUM(t.[Credit]) FROM [transactions] t where t.[Coa]='1020101' and t.[VDate]=getDate()  AND [BranchId]=t0.[BranchId]),0))"), LookupInclude]
        public Double? TodayCashOut
        {
            get { return Fields.TodayCashOut[this]; }
            set { Fields.TodayCashOut[this] = value; }
        }
        [DisplayName("Last Closing Date"), Column("LastClosingDate"), Expression("(SELECT MAX([Date]) FROM [dailyclosing] where  [BranchId]=t0.[BranchId])"), LookupInclude]
        public DateTime? LastClosingDate
        {
            get { return Fields.LastClosingDate[this]; }
            set { Fields.LastClosingDate[this] = value; }
        }

        public DailyclosingRow()
            : base()
        {
        }

        public DailyclosingRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DoubleField LastDayClosing;
            public DoubleField CashIn;
            public DoubleField CashOut;
            public DateTimeField Date;
            public DecimalField Amount;
            public DoubleField Adjustment;
            public Int32Field Status;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field BranchId;

            public DoubleField LastClosingAmount;
            public DoubleField TodayCashIn;
            public DoubleField TodayCashOut;
            public DateTimeField LastClosingDate;
        }
    }
}
