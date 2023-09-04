using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Forms
{
    [FormScript("Masters.Agendaitemtypes")]
    [BasedOnRow(typeof(AgendaitemtypesRow), CheckNames = true)]
    public class AgendaitemtypesForm
    {
        public string Name { get; set; }
    }
}