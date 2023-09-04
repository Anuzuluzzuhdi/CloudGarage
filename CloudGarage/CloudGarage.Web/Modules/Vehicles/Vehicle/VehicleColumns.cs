using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Vehicles.Columns
{
    [ColumnsScript("Vehicles.Vehicle")]
    [BasedOnRow(typeof(VehicleRow), CheckNames = true)]
    public class VehicleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [EditLink]
        public String VehicleRegistration { get; set; }
        public Int32 Year { get; set; }
        public Int32 Seats { get; set; }
        [QuickFilter]
        public String MakeName { get; set; }
        public String CcRating { get; set; }
        [QuickFilter]
        public String ModelName { get; set; }
        [QuickFilter]
        public String FuelTypeName { get; set; }
        [QuickFilter]
        public String ColorName { get; set; }
        [QuickFilter]
        public String AssemblyTypeName { get; set; }
        [QuickFilter]
        public String SecondColorName { get; set; }
        [QuickFilter]
        public String CountryOfOriginName { get; set; }
        public String SubModel { get; set; }
        public Int32 GrossVehicleMass { get; set; }
        public String BodyStyle { get; set; }
        public String TareWeight { get; set; }
        public String Axles { get; set; }
        public String Wheelbase { get; set; }
        public String EngineNo { get; set; }
        public String FrontAxleGroupRating { get; set; }
        [QuickFilter]
        public String VehicleTypeName { get; set; }
        public String RearAxleGroupRating { get; set; }
        [QuickFilter]
        public String BrandName { get; set; }
    }
}