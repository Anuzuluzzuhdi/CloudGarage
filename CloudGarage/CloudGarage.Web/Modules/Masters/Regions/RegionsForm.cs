using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Regions")]
    [BasedOnRow(typeof(RegionsRow), CheckNames = true)]
    public class RegionsForm
    {
        public string Name { get; set; }
    }
}