using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Branches")]
    [BasedOnRow(typeof(BranchesRow), CheckNames = true)]
    public class BranchesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String CountryName { get; set; }
        public String StateName { get; set; }
        public String CityName { get; set; }
        public String Description { get; set; }
        public String Address { get; set; }
        public Double VatPercentage { get; set; }
        public String Email { get; set; }
        public String Phone1 { get; set; }
        public String Phone2 { get; set; }
        public Boolean UseBranchAddress { get; set; }
    }
}