using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.HumanResource.Forms
{
    [FormScript("HumanResource.Designations")]
    [BasedOnRow(typeof(DesignationsRow), CheckNames = true)]
    public class DesignationsForm
    {
        public string Designation { get; set; }
        public string Description { get; set; }
        public int ParentDesignationId { get; set; }
    }
}