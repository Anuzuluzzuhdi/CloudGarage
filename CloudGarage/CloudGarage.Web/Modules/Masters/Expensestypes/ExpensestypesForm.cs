using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Expensestypes")]
    [BasedOnRow(typeof(ExpensestypesRow), CheckNames = true)]
    public class ExpensestypesForm
    {
        public string Type { get; set; }
    }
}