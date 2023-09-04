using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Colortypes")]
    [BasedOnRow(typeof(ColortypesRow), CheckNames = true)]
    public class ColortypesForm
    {
        public string Name { get; set; }
    }
}