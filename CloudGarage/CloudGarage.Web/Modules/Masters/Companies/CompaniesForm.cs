using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Companies")]
    [BasedOnRow(typeof(CompaniesRow), CheckNames = true)]
    public class CompaniesForm
    {
        public string CompanyName { get; set; }
        public string CompanyEmail { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int CurrencyId { get; set; }
        public double VatPercentage { get; set; }
        public string Logo { get; set; }
        public string SaleLogo { get; set; }
        public string Favicon { get; set; }
        public int CurrencyPosition { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public string FooterText { get; set; }
    }
}