using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Cities")]
    [BasedOnRow(typeof(CitiesRow), CheckNames = true)]
    public class CitiesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Name { get; set; }
        public int StateId { get; set; }
        public String StateName { get; set; }
        public string StateCode { get; set; }
        public int CountryId { get; set; }
        public string CountryCode { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string WikiDataId { get; set; }
        public string Notes { get; set; }
        public byte[] In { get; set; }
        public string InBy { get; set; }
        public byte[] Up { get; set; }
        public string UpBy { get; set; }
    }
}