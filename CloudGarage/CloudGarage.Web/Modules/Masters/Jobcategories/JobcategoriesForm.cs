using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Jobcategories")]
    [BasedOnRow(typeof(JobcategoriesRow), CheckNames = true)]
    public class JobcategoriesForm
    {
        public string Name { get; set; }
    }
}