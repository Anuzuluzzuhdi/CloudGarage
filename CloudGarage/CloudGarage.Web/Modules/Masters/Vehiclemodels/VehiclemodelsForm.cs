using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Vehiclemodels")]
    [BasedOnRow(typeof(VehiclemodelsRow), CheckNames = true)]
    public class VehiclemodelsForm
    {
        public string Name { get; set; }
    }
}