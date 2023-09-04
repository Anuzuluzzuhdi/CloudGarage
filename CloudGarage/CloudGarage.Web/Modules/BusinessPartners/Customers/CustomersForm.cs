using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.BusinessPartners.Forms
{
    [FormScript("BusinessPartners.Customers")]
    [BasedOnRow(typeof(CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        [Category("General"),HalfWidth]      
        public String Name { get; set; }
        [Category("Contact"),HalfWidth(UntilNext = true)]
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        [Category("Address"),HalfWidth(UntilNext = true)]
        public String Address { get; set; }
        public Int64 CountryId { get; set; }
        public Int64 StateId { get; set; }
        public Int64 CityId { get; set; }
        public Int64 RegionId { get; set; }
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        [Category("Details"), HalfWidth(UntilNext = true)]
        public String Email { get; set; }
        public String Website { get; set; }
        public Int64 CustomerGroupId { get; set; }
        [DefaultValue(0)]
        public Double PreviousCreditBalance { get; set; }
        public List<object> NoteList { get; set; }
    }
}