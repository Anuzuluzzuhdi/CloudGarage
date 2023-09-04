using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Territories")]
    [BasedOnRow(typeof(TerritoriesRow), CheckNames = true)]
    public class TerritoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string TerritoryId { get; set; }
        public string TerritoryDescription { get; set; }
        public String RegionName { get; set; }
    }
}