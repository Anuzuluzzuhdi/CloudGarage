using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Inventory.Forms
{
    [FormScript("Inventory.Transferdetails")]
    [BasedOnRow(typeof(TransferdetailsRow), CheckNames = true)]
    public class TransferdetailsForm
    {
        public Int64 ProductId { get; set; }
        public Double Quantity { get; set; }
        [Hidden]
        public Double UnitPrice { get; set; }
    }
}