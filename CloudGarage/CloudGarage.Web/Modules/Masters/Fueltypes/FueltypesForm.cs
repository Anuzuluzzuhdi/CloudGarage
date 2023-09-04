using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Fueltypes")]
    [BasedOnRow(typeof(FueltypesRow), CheckNames = true)]
    public class FueltypesForm
    {
        public string Name { get; set; }
    }
}