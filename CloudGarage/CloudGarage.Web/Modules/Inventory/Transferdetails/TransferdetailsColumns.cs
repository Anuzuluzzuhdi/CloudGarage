using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Columns
{
    [ColumnsScript("Inventory.Transferdetails")]
    [BasedOnRow(typeof(TransferdetailsRow), CheckNames = true)]
    public class TransferdetailsColumns
    {
        [EditLink, DisplayName("Product")]  
        [ProductsTFFormatter]
        public String ProductProductName { get; set; }
        public Double Quantity { get; set; }
    }
}