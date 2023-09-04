using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Quotations
{
    [ConnectionKey("couldgarage"), Module("Quotations"), TableName("quotations")]
    [DisplayName("Quotations"), InstanceName("Quotations")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class QuotationsRow : Row<QuotationsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(BusinessPartners.CustomersRow), InplaceAdd = true, DialogType = "CloudGarage.BusinessPartners.Customers")]
        public int? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Vehicle"), NotNull, ForeignKey("vehicle", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleRegistration")]
        [LookupEditor(typeof(Vehicles.VehicleRow), InplaceAdd = true, CascadeField = "CustomerId", CascadeFrom = "CustomerId")]
        public int? Vehicle
        {
            get => fields.Vehicle[this];
            set => fields.Vehicle[this] = value;
        }

        [DisplayName("Date"), NotNull, NameProperty]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Total Discount"), NotNull]
        public double? TotalDiscount
        {
            get => fields.TotalDiscount[this];
            set => fields.TotalDiscount[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Vat"), NotNull]
        public double? Vat
        {
            get => fields.Vat[this];
            set => fields.Vat[this] = value;
        }

        [DisplayName("Total Tax"), NotNull]
        public double? TotalTax
        {
            get => fields.TotalTax[this];
            set => fields.TotalTax[this] = value;
        }

        [DisplayName("Shipping Cost"), Size(10), Scale(2), NotNull]
        public decimal? ShippingCost
        {
            get => fields.ShippingCost[this];
            set => fields.ShippingCost[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Grand Total"), NotNull]
        public double? GrandTotal
        {
            get => fields.GrandTotal[this];
            set => fields.GrandTotal[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Net Total"), NotNull]
        public double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "QuotationId"), NotMapped]
        public List<QuotationdetailsRow> LineItems
        {
            get => fields.LineItems[this];
            set => fields.LineItems[this] = value;
        }

        [MasterDetailRelation(foreignKey: "QuotationId")]
        [DisplayName("Jobs List"), NotMapped]
        public List<QuotationjobitemsRow> Jobs
        {
            get { return Fields.Jobs[this]; }
            set { Fields.Jobs[this] = value; }
        }

        [DisplayName("Branch"), ForeignKey("branches", "Id"), LeftJoin("jBranches"), TextualField("BranchName")]
        [LookupEditor(typeof(Masters.BranchesRow), InplaceAdd = true)]
        public int? BranchesId
        {
            get => fields.BranchesId[this];
            set => fields.BranchesId[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranches.[Name]")]
        public string BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
        }

        [DisplayName("Details"), Size(255), QuickSearch]
        public string Details
        {
            get => fields.Details[this];
            set => fields.Details[this] = value;
        }

        [DisplayName("Expiry Date"), NotNull]
        public DateTime? ExpiryDate
        {
            get => fields.ExpiryDate[this];
            set => fields.ExpiryDate[this] = value;
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

        [DisplayName("Vehicle Customer Id"), Expression("jVehicle.[CustomerId]")]
        public int? VehicleCustomerId
        {
            get => fields.VehicleCustomerId[this];
            set => fields.VehicleCustomerId[this] = value;
        }

        [DisplayName("Vehicle Vehicle Registration"), Expression("jVehicle.[VehicleRegistration]")]
        public string VehicleVehicleRegistration
        {
            get => fields.VehicleVehicleRegistration[this];
            set => fields.VehicleVehicleRegistration[this] = value;
        }

        [DisplayName("Vehicle Year"), Expression("jVehicle.[Year]")]
        public int? VehicleYear
        {
            get => fields.VehicleYear[this];
            set => fields.VehicleYear[this] = value;
        }

        [DisplayName("Vehicle Seats"), Expression("jVehicle.[Seats]")]
        public int? VehicleSeats
        {
            get => fields.VehicleSeats[this];
            set => fields.VehicleSeats[this] = value;
        }

        [DisplayName("Vehicle Make"), Expression("jVehicle.[Make]")]
        public int? VehicleMake
        {
            get => fields.VehicleMake[this];
            set => fields.VehicleMake[this] = value;
        }

        [DisplayName("Vehicle Cc Rating"), Expression("jVehicle.[CcRating]")]
        public string VehicleCcRating
        {
            get => fields.VehicleCcRating[this];
            set => fields.VehicleCcRating[this] = value;
        }

        [DisplayName("Vehicle Model"), Expression("jVehicle.[Model]")]
        public int? VehicleModel
        {
            get => fields.VehicleModel[this];
            set => fields.VehicleModel[this] = value;
        }

        [DisplayName("Vehicle Fuel Type"), Expression("jVehicle.[FuelType]")]
        public int? VehicleFuelType
        {
            get => fields.VehicleFuelType[this];
            set => fields.VehicleFuelType[this] = value;
        }

        [DisplayName("Vehicle Color"), Expression("jVehicle.[Color]")]
        public int? VehicleColor
        {
            get => fields.VehicleColor[this];
            set => fields.VehicleColor[this] = value;
        }

        [DisplayName("Vehicle Assembly Type"), Expression("jVehicle.[AssemblyType]")]
        public int? VehicleAssemblyType
        {
            get => fields.VehicleAssemblyType[this];
            set => fields.VehicleAssemblyType[this] = value;
        }

        [DisplayName("Vehicle Second Color"), Expression("jVehicle.[SecondColor]")]
        public int? VehicleSecondColor
        {
            get => fields.VehicleSecondColor[this];
            set => fields.VehicleSecondColor[this] = value;
        }

        [DisplayName("Vehicle Country Of Origin"), Expression("jVehicle.[CountryOfOrigin]")]
        public int? VehicleCountryOfOrigin
        {
            get => fields.VehicleCountryOfOrigin[this];
            set => fields.VehicleCountryOfOrigin[this] = value;
        }

        [DisplayName("Vehicle Sub Model"), Expression("jVehicle.[SubModel]")]
        public string VehicleSubModel
        {
            get => fields.VehicleSubModel[this];
            set => fields.VehicleSubModel[this] = value;
        }

        [DisplayName("Vehicle Gross Vehicle Mass"), Expression("jVehicle.[GrossVehicleMass]")]
        public int? VehicleGrossVehicleMass
        {
            get => fields.VehicleGrossVehicleMass[this];
            set => fields.VehicleGrossVehicleMass[this] = value;
        }

        [DisplayName("Vehicle Body Style"), Expression("jVehicle.[BodyStyle]")]
        public string VehicleBodyStyle
        {
            get => fields.VehicleBodyStyle[this];
            set => fields.VehicleBodyStyle[this] = value;
        }

        [DisplayName("Vehicle Tare Weight"), Expression("jVehicle.[TareWeight]")]
        public string VehicleTareWeight
        {
            get => fields.VehicleTareWeight[this];
            set => fields.VehicleTareWeight[this] = value;
        }

        [DisplayName("Vehicle Axles"), Expression("jVehicle.[Axles]")]
        public string VehicleAxles
        {
            get => fields.VehicleAxles[this];
            set => fields.VehicleAxles[this] = value;
        }

        [DisplayName("Vehicle Wheelbase"), Expression("jVehicle.[Wheelbase]")]
        public string VehicleWheelbase
        {
            get => fields.VehicleWheelbase[this];
            set => fields.VehicleWheelbase[this] = value;
        }

        [DisplayName("Vehicle Engine No"), Expression("jVehicle.[EngineNo]")]
        public string VehicleEngineNo
        {
            get => fields.VehicleEngineNo[this];
            set => fields.VehicleEngineNo[this] = value;
        }

        [DisplayName("Vehicle Front Axle Group Rating"), Expression("jVehicle.[FrontAxleGroupRating]")]
        public string VehicleFrontAxleGroupRating
        {
            get => fields.VehicleFrontAxleGroupRating[this];
            set => fields.VehicleFrontAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Vehicle Type"), Expression("jVehicle.[VehicleType]")]
        public int? VehicleVehicleType
        {
            get => fields.VehicleVehicleType[this];
            set => fields.VehicleVehicleType[this] = value;
        }

        [DisplayName("Vehicle Rear Axle Group Rating"), Expression("jVehicle.[RearAxleGroupRating]")]
        public string VehicleRearAxleGroupRating
        {
            get => fields.VehicleRearAxleGroupRating[this];
            set => fields.VehicleRearAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Brand"), Expression("jVehicle.[Brand]")]
        public int? VehicleBrand
        {
            get => fields.VehicleBrand[this];
            set => fields.VehicleBrand[this] = value;
        }

        [DisplayName("No Tax"), NotNull, DefaultValue(false)]
        public Boolean? NoTax
        {
            get { return Fields.NoTax[this]; }
            set { Fields.NoTax[this] = value; }
        }

        public QuotationsRow()
            : base()
        {
        }

        public QuotationsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CustomerId;
            public Int32Field Vehicle;
            public DateTimeField Date;
            public DoubleField Discount;
            public DoubleField TotalDiscount;
            public DoubleField Vat;
            public DoubleField TotalTax;
            public DecimalField ShippingCost;
            public DoubleField GrandTotal;
            public DoubleField NetTotal;
            public StringField Details;
            public DateTimeField ExpiryDate;
            public Int32Field BranchesId;
            public StringField BranchName;
            public readonly RowListField<QuotationdetailsRow> LineItems;
            public readonly RowListField<QuotationjobitemsRow> Jobs;

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

            public Int32Field VehicleCustomerId;
            public StringField VehicleVehicleRegistration;
            public Int32Field VehicleYear;
            public Int32Field VehicleSeats;
            public Int32Field VehicleMake;
            public StringField VehicleCcRating;
            public Int32Field VehicleModel;
            public Int32Field VehicleFuelType;
            public Int32Field VehicleColor;
            public Int32Field VehicleAssemblyType;
            public Int32Field VehicleSecondColor;
            public Int32Field VehicleCountryOfOrigin;
            public StringField VehicleSubModel;
            public Int32Field VehicleGrossVehicleMass;
            public StringField VehicleBodyStyle;
            public StringField VehicleTareWeight;
            public StringField VehicleAxles;
            public StringField VehicleWheelbase;
            public StringField VehicleEngineNo;
            public StringField VehicleFrontAxleGroupRating;
            public Int32Field VehicleVehicleType;
            public StringField VehicleRearAxleGroupRating;
            public Int32Field VehicleBrand;

            public BooleanField NoTax;
        }
    }
}
