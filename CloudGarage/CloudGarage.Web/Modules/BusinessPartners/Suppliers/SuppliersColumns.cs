using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.BusinessPartners.Columns
{
    [ColumnsScript("BusinessPartners.Suppliers")]
    [BasedOnRow(typeof(SuppliersRow), CheckNames = true)]
    public class SuppliersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int64 Id { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        [QuickFilter]
        public String CountryName { get; set; }
        [QuickFilter]
        public String StateName { get; set; }
        [QuickFilter]
        public String CityName { get; set; }
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public String Address { get; set; }
        [QuickFilter]
        public String RegionName { get; set; }
        [QuickFilter]
        public String SupplierGroupName { get; set; }
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        [NoHpFormatter]
        public String Fax { get; set; }
        public String Website { get; set; }
        [EmailFormatter, EmailEditor]
        public String Email { get; set; }
        public String EmailAddress { get; set; }
        public Double PreviousCreditBalance { get; set; }
    }
}