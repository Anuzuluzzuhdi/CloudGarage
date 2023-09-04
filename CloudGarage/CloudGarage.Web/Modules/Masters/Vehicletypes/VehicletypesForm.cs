using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Vehicletypes")]
    [BasedOnRow(typeof(VehicletypesRow), CheckNames = true)]
    public class VehicletypesForm
    {
        public string Name { get; set; }
    }
}