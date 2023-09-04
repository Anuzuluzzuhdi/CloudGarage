using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Suppliergroups")]
    [BasedOnRow(typeof(SuppliergroupsRow), CheckNames = true)]
    public class SuppliergroupsForm
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}