using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Banks")]
    [BasedOnRow(typeof(BanksRow), CheckNames = true)]
    public class BanksForm
    {
        public string BankName { get; set; }
        public string AcName { get; set; }
        public string AcNumber { get; set; }
        public string Branch { get; set; }
        public string SignaturePicture { get; set; }
    }
}