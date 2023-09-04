using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Quotations.Columns
{
    [ColumnsScript("Quotations.Quotationjobitems")]
    [BasedOnRow(typeof(QuotationjobitemsRow), CheckNames = true)]
    public class QuotationjobitemsColumns
    {
        [EditLink,AlignCenter]
        [JobcardFormatter]
        public String JobTypeName { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
    }
}