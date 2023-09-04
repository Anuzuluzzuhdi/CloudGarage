using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Common.Columns
{
    [ColumnsScript("Common.Userpreferences")]
    [BasedOnRow(typeof(UserpreferencesRow), CheckNames = true)]
    public class UserpreferencesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int UserPreferenceId { get; set; }
        public long UserId { get; set; }
        [EditLink]
        public string PreferenceType { get; set; }
        public string Name { get; set; }
        public Stream Value { get; set; }
    }
}