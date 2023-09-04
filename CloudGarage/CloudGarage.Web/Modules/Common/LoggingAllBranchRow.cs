using CloudGarage;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using CloudGarage.Financial;
using System;
using System.ComponentModel;

namespace CloudGarage.Common
{
    public abstract class LoggingAllBranchRow<TFields> : Row<TFields>, ILoggingRow, IDeleteLogRow, IIsActiveDeletedRow, IIsActiveRow, IAllBranchRow
        where TFields : LoggingAllBranchRowFields
    {
        protected LoggingAllBranchRow(TFields fields) : base(fields) { }
        protected LoggingAllBranchRow() : base() { }

        [NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [Insertable(false), Updatable(false)]
        public Int32? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [Insertable(false), Updatable(false)]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [Insertable(false), Updatable(false)]
        public Int32? DeleteUserId
        {
            get => fields.DeleteUserId[this];
            set => fields.DeleteUserId[this] = value;
        }


        [Insertable(false), Updatable(false)]
        public DateTime? DeleteDate
        {
            get => fields.DeleteDate[this];
            set => fields.DeleteDate[this] = value;
        }

        [NotNull, Insertable(false), Updatable(true), DefaultValue(1), LookupInclude, Hidden, IntegerEditor(MinValue = -1, MaxValue = 1)]
        public Int16? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }
        [Insertable(false), Updatable(false), LookupInclude]
        [DisplayName("Branch"), NotNull]
        [ForeignKey("Branches", "Id"), LeftJoin("brn"), TextualField("BranchName")]
        [LookupEditor(typeof(Masters.BranchesRow))]
        public Int64? BranchId
        {
            get => fields.BranchId[this];
        }
        [DisplayName("Branch"), Expression("brn.[Name]")]
        public String BranchName
        {
            get { return Fields.BranchName[this]; }
            set { Fields.BranchName[this] = value; }
        }

        Field IInsertLogRow.InsertUserIdField => fields.InsertUserId;
        Field IUpdateLogRow.UpdateUserIdField => fields.UpdateUserId;
        DateTimeField IInsertLogRow.InsertDateField => fields.InsertDate;
        DateTimeField IUpdateLogRow.UpdateDateField => fields.UpdateDate;

        Field IDeleteLogRow.DeleteUserIdField => fields.DeleteUserId;
        DateTimeField IDeleteLogRow.DeleteDateField => fields.DeleteDate;

        Int16Field IIsActiveRow.IsActiveField => fields.IsActive;
        Int64Field IAllBranchRow.BranchIdField => fields.BranchId;
    }

    public class LoggingAllBranchRowFields : RowFieldsBase
    {
        public Int32Field InsertUserId;
        public DateTimeField InsertDate;
        public Int32Field UpdateUserId;
        public DateTimeField UpdateDate;

        public Int32Field DeleteUserId;
        public DateTimeField DeleteDate;

        public Int16Field IsActive;
        public Int64Field BranchId;
        public StringField BranchName;

        public LoggingAllBranchRowFields(string tableName = null, string fieldPrefix = null)
            : base(tableName, fieldPrefix)
        {
        }
    }
}
