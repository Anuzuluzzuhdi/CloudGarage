using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.States")]
    [BasedOnRow(typeof(StatesRow), CheckNames = true)]
    public class StatesForm
    {
        public string Name { get; set; }
        public int CountryId { get; set; }
        public string CountryCode { get; set; }
        public string FipsCode { get; set; }
        public string Iso2 { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string WikiDataId { get; set; }
        public string Notes { get; set; }
        public byte[] In { get; set; }
        public string InBy { get; set; }
        public byte[] Up { get; set; }
        public string UpBy { get; set; }
    }
}