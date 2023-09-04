using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Branches")]
    [BasedOnRow(typeof(BranchesRow), CheckNames = true)]
    public class BranchesForm
    {
        public String Name { get; set; }
        [HalfWidth(UntilNext = true)]
        public Int64 Country { get; set; }
        public Int64 State { get; set; }
        public Int64 City { get; set; }
        public Double VatPercentage { get; set; }
        public String Logo { get; set; }
        public String Address { get; set; }
        public String Email { get; set; }
        public String Phone1 { get; set; }
        public String Phone2 { get; set; }
        [BooleanEditor]
        public Boolean UseBranchAddress { get; set; }
        [FullWidth]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Description { get; set; }
    }
}