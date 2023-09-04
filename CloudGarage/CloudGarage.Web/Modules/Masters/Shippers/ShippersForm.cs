using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Shippers")]
    [BasedOnRow(typeof(ShippersRow), CheckNames = true)]
    public class ShippersForm
    {
        public string CompanyName { get; set; }
        public string Phone { get; set; }
    }
}