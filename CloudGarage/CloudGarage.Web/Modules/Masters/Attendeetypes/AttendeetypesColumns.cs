﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Masters.Columns
{
    [ColumnsScript("Masters.Attendeetypes")]
    [BasedOnRow(typeof(AttendeetypesRow), CheckNames = true)]
    public class AttendeetypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Name { get; set; }
    }
}