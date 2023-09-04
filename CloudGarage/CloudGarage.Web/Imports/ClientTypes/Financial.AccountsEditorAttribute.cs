using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CloudGarage.Financial
{
    public partial class AccountsEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "CloudGarage.Financial.AccountsEditor";

        public AccountsEditorAttribute()
            : base(Key)
        {
        }
    }
}
