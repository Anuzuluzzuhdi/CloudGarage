using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Customergroups")]
    [BasedOnRow(typeof(CustomergroupsRow), CheckNames = true)]
    public class CustomergroupsForm
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}