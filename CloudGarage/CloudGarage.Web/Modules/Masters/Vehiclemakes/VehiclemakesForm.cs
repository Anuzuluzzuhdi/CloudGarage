using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Vehiclemakes")]
    [BasedOnRow(typeof(VehiclemakesRow), CheckNames = true)]
    public class VehiclemakesForm
    {
        public string Name { get; set; }
    }
}