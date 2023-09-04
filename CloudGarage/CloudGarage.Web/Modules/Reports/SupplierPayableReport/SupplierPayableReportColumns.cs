
namespace CloudGarage.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.SupplierPayableReport")]
    [BasedOnRow(typeof(BusinessPartners.SuppliersRow), CheckNames = true)]
    public class SupplierPayableReportColumns
    {
        public String CompanyName { get; set; }
        [DisplayName("Payable"), AlignRight]
        public double SupplierPayable { get; set; }
        [DisplayName("Paid"), AlignRight]
        public double SupplierPaid { get; set; }
        [DisplayName("Balance"), AlignRight]
        public double SupplierBalance { get; set; }

    }
}