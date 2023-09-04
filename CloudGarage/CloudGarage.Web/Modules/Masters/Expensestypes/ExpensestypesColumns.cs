using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Expensestypes")]
    [BasedOnRow(typeof(ExpensestypesRow), CheckNames = true)]
    public class ExpensestypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Type { get; set; }
    }
}