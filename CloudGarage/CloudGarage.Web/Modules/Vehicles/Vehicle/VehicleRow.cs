using CloudGarage.Masters;
using CloudGarage.Vehicle;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Vehicles
{
    [ConnectionKey("couldgarage"), Module("Vehicles"), TableName("vehicle")]
    [DisplayName("Vehicle"), InstanceName("Vehicle")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CloudGarage.Vehicles")]
    public sealed class VehicleRow : Row<VehicleRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupInclude,LookupEditor(typeof(BusinessPartners.CustomersRow), InplaceAdd = true)]
        public int? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

   
        [DisplayName("Vehicle Registration"), Size(255), NotNull, QuickSearch, NameProperty]
        public string VehicleRegistration
        {
            get => fields.VehicleRegistration[this];
            set => fields.VehicleRegistration[this] = value;
        }

        [DisplayName("Year")]
        public int? Year
        {
            get => fields.Year[this];
            set => fields.Year[this] = value;
        }

        [DisplayName("Seats")]
        public int? Seats
        {
            get => fields.Seats[this];
            set => fields.Seats[this] = value;
        }

        [DisplayName("Make"), ForeignKey("vehiclemakes", "Id"), LeftJoin("jMake"), TextualField("MakeName")]
        [LookupEditor(typeof(VehiclemakesRow), InplaceAdd = true)]
        public int? Make
        {
            get => fields.Make[this];
            set => fields.Make[this] = value;
        }

        [DisplayName("Cc Rating"), Size(255)]
        public string CcRating
        {
            get => fields.CcRating[this];
            set => fields.CcRating[this] = value;
        }

        [DisplayName("Model"), ForeignKey("vehiclemodels", "Id"), LeftJoin("jModel"), TextualField("ModelName")]
        [LookupEditor(typeof(VehiclemodelsRow), InplaceAdd = true)]
        public int? Model
        {
            get => fields.Model[this];
            set => fields.Model[this] = value;
        }

        [DisplayName("Fuel Type"), ForeignKey("fueltypes", "Id"), LeftJoin("jFuelType"), TextualField("FuelTypeName")]
        [LookupEditor(typeof(FueltypesRow), InplaceAdd = true)]

        public int? FuelType
        {
            get => fields.FuelType[this];
            set => fields.FuelType[this] = value;
        }

        [DisplayName("Color"), ForeignKey("colortypes", "Id"), LeftJoin("jColor"), TextualField("ColorName")]
        [LookupEditor(typeof(ColortypesRow), InplaceAdd = true)]

        public int? Color
        {
            get => fields.Color[this];
            set => fields.Color[this] = value;
        }

        [DisplayName("Assembly Type"), ForeignKey("assemblytypes", "Id"), LeftJoin("jAssemblyType"), TextualField("AssemblyTypeName")]
        [LookupEditor(typeof(AssemblytypesRow), InplaceAdd = true)]

        public int? AssemblyType
        {
            get => fields.AssemblyType[this];
            set => fields.AssemblyType[this] = value;
        }

        [DisplayName("Second Color"), ForeignKey("colortypes", "Id"), LeftJoin("jSecondColor"), TextualField("SecondColorName")]
        [LookupEditor(typeof(ColortypesRow), InplaceAdd = true)]
        public int? SecondColor
        {
            get => fields.SecondColor[this];
            set => fields.SecondColor[this] = value;
        }

        [DisplayName("Second Color"), Expression("jSecondColor.[Name]")]
        public String SecondColorName
        {
            get => fields.SecondColorName[this];
            set => fields.SecondColorName[this] = value;
        }


        [DisplayName("Country Of Origin"), ForeignKey("countries", "Id"), LeftJoin("jCountryOfOrigin"), TextualField("CountryOfOriginName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true), DefaultValue(102)]

        public int? CountryOfOrigin
        {
            get => fields.CountryOfOrigin[this];
            set => fields.CountryOfOrigin[this] = value;
        }

        [DisplayName("Sub Model"), Size(255)]
        public string SubModel
        {
            get => fields.SubModel[this];
            set => fields.SubModel[this] = value;
        }

        [DisplayName("Gross Vehicle Mass")]
        public int? GrossVehicleMass
        {
            get => fields.GrossVehicleMass[this];
            set => fields.GrossVehicleMass[this] = value;
        }

        [DisplayName("Body Style"), Size(255)]
        public string BodyStyle
        {
            get => fields.BodyStyle[this];
            set => fields.BodyStyle[this] = value;
        }

        [DisplayName("Tare Weight"), Size(255)]
        public string TareWeight
        {
            get => fields.TareWeight[this];
            set => fields.TareWeight[this] = value;
        }

        [DisplayName("Axles"), Size(255)]
        public string Axles
        {
            get => fields.Axles[this];
            set => fields.Axles[this] = value;
        }

        [DisplayName("Wheelbase"), Size(255)]
        public string Wheelbase
        {
            get => fields.Wheelbase[this];
            set => fields.Wheelbase[this] = value;
        }

        [DisplayName("Engine No"), Size(255)]
        public string EngineNo
        {
            get => fields.EngineNo[this];
            set => fields.EngineNo[this] = value;
        }

        [DisplayName("Front Axle Group Rating"), Size(255)]
        public string FrontAxleGroupRating
        {
            get => fields.FrontAxleGroupRating[this];
            set => fields.FrontAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Type"), ForeignKey("vehicletypes", "Id"), LeftJoin("jVehicleType"), TextualField("VehicleTypeName")]
        [LookupEditor(typeof(VehicletypesRow), InplaceAdd = true)]

        public int? VehicleType
        {
            get => fields.VehicleType[this];
            set => fields.VehicleType[this] = value;
        }

        [DisplayName("Rear Axle Group Rating"), Size(255)]
        public string RearAxleGroupRating
        {
            get => fields.RearAxleGroupRating[this];
            set => fields.RearAxleGroupRating[this] = value;
        }

        [DisplayName("Brand"), ForeignKey("brands", "Id"), LeftJoin("jBrand"), TextualField("BrandName")]
        [LookupEditor(typeof(Inventory.BrandsRow), InplaceAdd = true)]

        public int? Brand
        {
            get => fields.Brand[this];
            set => fields.Brand[this] = value;
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public string CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public string CustomerContactName
        {
            get => fields.CustomerContactName[this];
            set => fields.CustomerContactName[this] = value;
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public string CustomerContactTitle
        {
            get => fields.CustomerContactTitle[this];
            set => fields.CustomerContactTitle[this] = value;
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public int? CustomerCountryId
        {
            get => fields.CustomerCountryId[this];
            set => fields.CustomerCountryId[this] = value;
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public int? CustomerStateId
        {
            get => fields.CustomerStateId[this];
            set => fields.CustomerStateId[this] = value;
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityId]")]
        public int? CustomerCityId
        {
            get => fields.CustomerCityId[this];
            set => fields.CustomerCityId[this] = value;
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public string CustomerAddress
        {
            get => fields.CustomerAddress[this];
            set => fields.CustomerAddress[this] = value;
        }

        [DisplayName("Customer Region Id"), Expression("jCustomer.[RegionId]")]
        public int? CustomerRegionId
        {
            get => fields.CustomerRegionId[this];
            set => fields.CustomerRegionId[this] = value;
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public string CustomerPostalCode
        {
            get => fields.CustomerPostalCode[this];
            set => fields.CustomerPostalCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public string CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public string CustomerFax
        {
            get => fields.CustomerFax[this];
            set => fields.CustomerFax[this] = value;
        }

        [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
        public string CustomerWebsite
        {
            get => fields.CustomerWebsite[this];
            set => fields.CustomerWebsite[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public string CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Customer Email Address"), Expression("jCustomer.[EmailAddress]")]
        public string CustomerEmailAddress
        {
            get => fields.CustomerEmailAddress[this];
            set => fields.CustomerEmailAddress[this] = value;
        }

        [DisplayName("Customer Previous Credit Balance"), Expression("jCustomer.[PreviousCreditBalance]")]
        public double? CustomerPreviousCreditBalance
        {
            get => fields.CustomerPreviousCreditBalance[this];
            set => fields.CustomerPreviousCreditBalance[this] = value;
        }

        [DisplayName("Customer Customer Group Id"), Expression("jCustomer.[CustomerGroupId]")]
        public int? CustomerCustomerGroupId
        {
            get => fields.CustomerCustomerGroupId[this];
            set => fields.CustomerCustomerGroupId[this] = value;
        }

        [LookupInclude,DisplayName("Make"), Expression("jMake.[Name]")]
        public string MakeName
        {
            get => fields.MakeName[this];
            set => fields.MakeName[this] = value;
        }

        [DisplayName("Model"), Expression("jModel.[Name]")]
        public string ModelName
        {
            get => fields.ModelName[this];
            set => fields.ModelName[this] = value;
        }

        [DisplayName("Fuel Type"), Expression("jFuelType.[Name]")]
        public string FuelTypeName
        {
            get => fields.FuelTypeName[this];
            set => fields.FuelTypeName[this] = value;
        }

        [DisplayName("Color"), Expression("jColor.[Name]")]
        public string ColorName
        {
            get => fields.ColorName[this];
            set => fields.ColorName[this] = value;
        }

        [DisplayName("Assembly Type"), Expression("jAssemblyType.[Name]")]
        public string AssemblyTypeName
        {
            get => fields.AssemblyTypeName[this];
            set => fields.AssemblyTypeName[this] = value;
        }

        [DisplayName("Country"), Expression("jCountryOfOrigin.[Name]")]
        public string CountryOfOriginName
        {
            get => fields.CountryOfOriginName[this];
            set => fields.CountryOfOriginName[this] = value;
        }

        [DisplayName("Vehicle Type"), Expression("jVehicleType.[Name]")]
        public string VehicleTypeName
        {
            get => fields.VehicleTypeName[this];
            set => fields.VehicleTypeName[this] = value;
        }

        [DisplayName("Brand"), Expression("jBrand.[Name]")]
        public string BrandName
        {
            get => fields.BrandName[this];
            set => fields.BrandName[this] = value;
        }

        [DisplayName("Brand Description"), Expression("jBrand.[Description]")]
        public string BrandDescription
        {
            get => fields.BrandDescription[this];
            set => fields.BrandDescription[this] = value;
        }

        [Note.NotesEditor, NotMapped]
        public List<Note.NoteRow> NoteList
        {
            get => fields.NoteList[this];
            set => fields.NoteList[this] = value;
        }

        public VehicleRow()
            : base()
        {
        }

        public VehicleRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CustomerId;
            public StringField VehicleRegistration;
            public Int32Field Year;
            public Int32Field Seats;
            public Int32Field Make;
            public StringField CcRating;
            public Int32Field Model;
            public Int32Field FuelType;
            public Int32Field Color;
            public Int32Field AssemblyType;
            public Int32Field SecondColor;
            public StringField SecondColorName;
            public Int32Field CountryOfOrigin;
            public StringField SubModel;
            public Int32Field GrossVehicleMass;
            public StringField BodyStyle;
            public StringField TareWeight;
            public StringField Axles;
            public StringField Wheelbase;
            public StringField EngineNo;
            public StringField FrontAxleGroupRating;
            public Int32Field VehicleType;
            public StringField RearAxleGroupRating;
            public Int32Field Brand;

            public StringField CustomerName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public Int32Field CustomerCountryId;
            public Int32Field CustomerStateId;
            public Int32Field CustomerCityId;
            public StringField CustomerAddress;
            public Int32Field CustomerRegionId;
            public StringField CustomerPostalCode;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public StringField CustomerWebsite;
            public StringField CustomerEmail;
            public StringField CustomerEmailAddress;
            public DoubleField CustomerPreviousCreditBalance;
            public Int32Field CustomerCustomerGroupId;

            public StringField MakeName;

            public StringField ModelName;

            public StringField FuelTypeName;

            public StringField ColorName;

            public StringField AssemblyTypeName;

            public StringField CountryOfOriginName;
            public StringField VehicleTypeName;

            public StringField BrandName;
            public StringField BrandDescription;

            public RowListField<Note.NoteRow> NoteList;
        }
    }
}
