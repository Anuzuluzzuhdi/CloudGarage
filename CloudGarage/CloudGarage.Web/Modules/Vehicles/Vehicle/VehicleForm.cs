using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace CloudGarage.Vehicles.Forms
{
    [FormScript("Vehicles.Vehicle")]
    [BasedOnRow(typeof(VehicleRow), CheckNames = true)]
    public class VehicleForm
    {
        [HalfWidth(UntilNext = true)]
        public Int64 CustomerId { get; set; }
        public String VehicleRegistration { get; set; }
        public Int64 Make { get; set; }
        public Int32 Year { get; set; }
        public Int32 Seats { get; set; }
        public String CcRating { get; set; }
        public Int64 Model { get; set; }
        public Int64 FuelType { get; set; }
        public Int64 Color { get; set; }
        public Int64 AssemblyType { get; set; }
        public Int64 SecondColor { get; set; }
        public Int64 CountryOfOrigin { get; set; }
        public String SubModel { get; set; }
        public Int32 GrossVehicleMass { get; set; }
        public String BodyStyle { get; set; }
        public String TareWeight { get; set; }
        public String Axles { get; set; }
        public String Wheelbase { get; set; }
        public String EngineNo { get; set; }
        public String FrontAxleGroupRating { get; set; }
        public Int64 VehicleType { get; set; }
        public String RearAxleGroupRating { get; set; }
        public Int64 Brand { get; set; }
        public List<object> NoteList { get; set; }
    }
}