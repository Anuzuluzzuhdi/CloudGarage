
namespace CloudGarage.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.CustomerReceivableReport")]
    [BasedOnRow(typeof(BusinessPartners.CustomersRow), CheckNames = false)]
    public class CustomerReceivableReportColumns
    {
        public String Name { get; set; }
        [AlignRight]
        [DisplayName("Receivable")]
        public double CustomerReceivable { get; set; }
        [DisplayName("Received")]
        public double CustomerReceived { get; set; }
        [DisplayName("Balance")]
        public double CustomerBalance { get; set; }

    }
}