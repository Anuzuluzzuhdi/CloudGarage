using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Resolutionstatuses")]
    [BasedOnRow(typeof(ResolutionstatusesRow), CheckNames = true)]
    public class ResolutionstatusesForm
    {
        public string Name { get; set; }
    }
}