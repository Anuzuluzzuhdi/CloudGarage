using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.CashBank.Columns
{
    [ColumnsScript("CashBank.Expenses")]
    [BasedOnRow(typeof(ExpensesRow), CheckNames = true)]
    public class ExpensesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [QuickFilter]
        public string ExpenseTypeType { get; set; }
        [QuickFilter]
        public string BranchName { get; set; }
        public DateTime Date { get; set; }
        public int PaymentAccount { get; set; }
        public double Amount { get; set; }
    }
}