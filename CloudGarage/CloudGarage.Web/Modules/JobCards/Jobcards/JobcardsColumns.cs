using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.JobCards.Columns
{
    [ColumnsScript("JobCards.Jobcards")]
    [BasedOnRow(typeof(JobcardsRow), CheckNames = true)]
    public class JobcardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public int Id { get; set; }
        [EditLink]
        public String WorkOrderNo { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String BranchName { get; set; }
        
        public String Address { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        public String Phone { get; set; }
        public String Reference { get; set; }
        public String Mobile { get; set; }
        [QuickFilter]
        public DateTime ScheduleDatetime { get; set; }
        public String Website { get; set; }
        [QuickFilter]
        public DateTime DeliveryDatetime { get; set; }
        public String Details { get; set; }
    }
}