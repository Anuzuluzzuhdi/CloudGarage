using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Sales.Columns
{
    [ColumnsScript("Sales.Saledetails")]
    [BasedOnRow(typeof(SaledetailsRow), CheckNames = true)]
    public class SaledetailsColumns
    {
        [EditLink]
        public String ProductName { get; set; }
        public String Description { get; set; }
        [ProductsFormatter]
        public String UnitName { get; set; }
        public Double Quantity { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
    }
}