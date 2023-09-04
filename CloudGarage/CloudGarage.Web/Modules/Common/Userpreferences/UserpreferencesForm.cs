using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Common.Forms
{
    [FormScript("Common.Userpreferences")]
    [BasedOnRow(typeof(UserpreferencesRow), CheckNames = true)]
    public class UserpreferencesForm
    {
        public long UserId { get; set; }
        public string PreferenceType { get; set; }
        public string Name { get; set; }
        public Stream Value { get; set; }
    }
}