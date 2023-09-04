using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Shippers")]
    [BasedOnRow(typeof(ShippersRow), CheckNames = true)]
    public class ShippersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int ShipperId { get; set; }
        [EditLink]
        public string CompanyName { get; set; }
        public string Phone { get; set; }
    }
}