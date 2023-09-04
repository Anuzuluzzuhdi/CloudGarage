using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Assemblytypes")]
    [BasedOnRow(typeof(AssemblytypesRow), CheckNames = true)]
    public class AssemblytypesForm
    {
        public string Name { get; set; }
    }
}