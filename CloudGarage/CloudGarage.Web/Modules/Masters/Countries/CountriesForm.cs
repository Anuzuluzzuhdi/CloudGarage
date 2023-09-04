using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Countries")]
    [BasedOnRow(typeof(CountriesRow), CheckNames = true)]
    public class CountriesForm
    {
        public string Name { get; set; }
        public string Iso3 { get; set; }
        public string NumericCode { get; set; }
        public string Iso2 { get; set; }
        public string PhoneCode { get; set; }
        public string Capital { get; set; }
        public string Currency { get; set; }
        public string CurrencySymbol { get; set; }
        public string Tld { get; set; }
        public string Native { get; set; }
        public string Region { get; set; }
        public string SubRegion { get; set; }
        public string Timezones { get; set; }
        public string Translations { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string Emoji { get; set; }
        public string EmojiU { get; set; }
        public string WikiDataId { get; set; }
        public string Notes { get; set; }
        public byte[] In { get; set; }
        public string InBy { get; set; }
        public byte[] Up { get; set; }
        public string UpBy { get; set; }
    }
}