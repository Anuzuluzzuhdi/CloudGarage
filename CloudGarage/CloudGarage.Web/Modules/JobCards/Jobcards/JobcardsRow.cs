using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.JobCards
{
    [ConnectionKey("couldgarage"), Module("JobCards"), TableName("jobcards")]
    [DisplayName("Job Cards"), InstanceName("Job Cards")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class JobcardsRow : Row<JobcardsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupInclude,LookupEditor(typeof(BusinessPartners.CustomersRow), InplaceAdd = true, DialogType = "CloudGarage.BusinessPartners.Customers")]
        public int? Customer
        {
            get => fields.Customer[this];
            set => fields.Customer[this] = value;
        }

        [DisplayName("Work Order No"), Size(50), QuickSearch, NameProperty]
        public string WorkOrderNo
        {
            get => fields.WorkOrderNo[this];
            set => fields.WorkOrderNo[this] = value;
        }

        [DisplayName("Address"), Size(100)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Vehicle"), NotNull, ForeignKey("vehicle", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleRegistration")]
        [LookupEditor(typeof(Vehicles.VehicleRow), InplaceAdd = true, CascadeField = "CustomerId", CascadeFrom = "Customer"), LookupInclude]
        //[VehicleEditor]
        public int? Vehicle
        {
            get => fields.Vehicle[this];
            set => fields.Vehicle[this] = value;
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

        [DisplayName("Phone"), Size(50), NotNull]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Reference"), Size(50)]
        public string Reference
        {
            get => fields.Reference[this];
            set => fields.Reference[this] = value;
        }

        [DisplayName("Mobile"), Size(50)]
        public string Mobile
        {
            get => fields.Mobile[this];
            set => fields.Mobile[this] = value;
        }

        [DisplayName("Schedule Datetime")]
        public DateTime? ScheduleDatetime
        {
            get => fields.ScheduleDatetime[this];
            set => fields.ScheduleDatetime[this] = value;
        }

        [DisplayName("Website"), Size(255)]
        public string Website
        {
            get => fields.Website[this];
            set => fields.Website[this] = value;
        }

        [DisplayName("Delivery Datetime"), DateTimeEditor, DefaultValue("now")]
        public DateTime? DeliveryDatetime
        {
            get => fields.DeliveryDatetime[this];
            set => fields.DeliveryDatetime[this] = value;
        }

        [DisplayName("Details"), Size(255)]
        public string Details
        {
            get => fields.Details[this];
            set => fields.Details[this] = value;
        }

        [DisplayName("Customer"), Expression("jCustomer.[Name]"), LookupInclude]
        public String CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public String CustomerContactName
        {
            get => fields.CustomerContactName[this];
            set => fields.CustomerContactName[this] = value;
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public String CustomerContactTitle
        {
            get => fields.CustomerContactTitle[this];
            set => fields.CustomerContactTitle[this] = value;
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public Int64? CustomerCountryId
        {
            get => fields.CustomerCountryId[this];
            set => fields.CustomerCountryId[this] = value;
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public Int64? CustomerStateId
        {
            get => fields.CustomerStateId[this];
            set => fields.CustomerStateId[this] = value;
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityId]")]
        public Int64? CustomerCityId
        {
            get => fields.CustomerCityId[this];
            set => fields.CustomerCityId[this] = value;
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get => fields.CustomerAddress[this];
            set => fields.CustomerAddress[this] = value;
        }

        [DisplayName("Customer Region Id"), Expression("jCustomer.[RegionId]")]
        public Int64? CustomerRegionId
        {
            get => fields.CustomerRegionId[this];
            set => fields.CustomerRegionId[this] = value;
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public String CustomerPostalCode
        {
            get => fields.CustomerPostalCode[this];
            set => fields.CustomerPostalCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get => fields.CustomerFax[this];
            set => fields.CustomerFax[this] = value;
        }

        [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
        public String CustomerWebsite
        {
            get => fields.CustomerWebsite[this];
            set => fields.CustomerWebsite[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Customer Email Address"), Expression("jCustomer.[EmailAddress]")]
        public String CustomerEmailAddress
        {
            get => fields.CustomerEmailAddress[this];
            set => fields.CustomerEmailAddress[this] = value;
        }

        [DisplayName("Customer Previous Credit Balance"), Expression("jCustomer.[PreviousCreditBalance]")]
        public Double? CustomerPreviousCreditBalance
        {
            get => fields.CustomerPreviousCreditBalance[this];
            set => fields.CustomerPreviousCreditBalance[this] = value;
        }

        //[DisplayName("Customer Insert Date"), Expression("jCustomer.[InsertDate]")]
        //public DateTime? CustomerInsertDate
        //{
        //    get => fields.CustomerInsertDate[this];
        //    set => fields.CustomerInsertDate[this] = value;
        //}

        //[DisplayName("Customer Insert User Id"), Expression("jCustomer.[InsertUserId]")]
        //public Int32? CustomerInsertUserId
        //{
        //    get => fields.CustomerInsertUserId[this];
        //    set => fields.CustomerInsertUserId[this] = value;
        //}

        //[DisplayName("Customer Update Date"), Expression("jCustomer.[UpdateDate]")]
        //public DateTime? CustomerUpdateDate
        //{
        //    get => fields.CustomerUpdateDate[this];
        //    set => fields.CustomerUpdateDate[this] = value;
        //}

        //[DisplayName("Customer Update User Id"), Expression("jCustomer.[UpdateUserId]")]
        //public Int32? CustomerUpdateUserId
        //{
        //    get => fields.CustomerUpdateUserId[this];
        //    set => fields.CustomerUpdateUserId[this] = value;
        //}

        //[DisplayName("Customer Delete Date"), Expression("jCustomer.[DeleteDate]")]
        //public DateTime? CustomerDeleteDate
        //{
        //    get => fields.CustomerDeleteDate[this];
        //    set => fields.CustomerDeleteDate[this] = value;
        //}

        //[DisplayName("Customer Delete User Id"), Expression("jCustomer.[DeleteUserId]")]
        //public Int32? CustomerDeleteUserId
        //{
        //    get => fields.CustomerDeleteUserId[this];
        //    set => fields.CustomerDeleteUserId[this] = value;
        //}

        //[DisplayName("Customer Is Active"), Expression("jCustomer.[IsActive]")]
        //public Int32? CustomerIsActive
        //{
        //    get => fields.CustomerIsActive[this];
        //    set => fields.CustomerIsActive[this] = value;
        //}

        [DisplayName("Customer Customer Group Id"), Expression("jCustomer.[CustomerGroupId]")]
        public Int64? CustomerCustomerGroupId
        {
            get => fields.CustomerCustomerGroupId[this];
            set => fields.CustomerCustomerGroupId[this] = value;
        }

        [DisplayName("Vehicle Customer Id"), Expression("jVehicle.[CustomerId]")]
        public Int64? VehicleCustomerId
        {
            get => fields.VehicleCustomerId[this];
            set => fields.VehicleCustomerId[this] = value;
        }

        [DisplayName("Vehicle"), Expression("jVehicle.[VehicleRegistration]"), LookupInclude]
        public String VehicleVehicleRegistration
        {
            get => fields.VehicleVehicleRegistration[this];
            set => fields.VehicleVehicleRegistration[this] = value;
        }

        [DisplayName("Vehicle Year"), Expression("jVehicle.[Year]")]
        public Int32? VehicleYear
        {
            get => fields.VehicleYear[this];
            set => fields.VehicleYear[this] = value;
        }

        [DisplayName("Vehicle Seats"), Expression("jVehicle.[Seats]")]
        public Int32? VehicleSeats
        {
            get => fields.VehicleSeats[this];
            set => fields.VehicleSeats[this] = value;
        }

        [DisplayName("Vehicle Make"), Expression("jVehicle.[Make]")]
        public Int64? VehicleMake
        {
            get => fields.VehicleMake[this];
            set => fields.VehicleMake[this] = value;
        }

        [DisplayName("Vehicle Cc Rating"), Expression("jVehicle.[CCRating]")]
        public String VehicleCcRating
        {
            get => fields.VehicleCcRating[this];
            set => fields.VehicleCcRating[this] = value;
        }

        [DisplayName("Vehicle Model"), Expression("jVehicle.[Model]")]
        public Int64? VehicleModel
        {
            get => fields.VehicleModel[this];
            set => fields.VehicleModel[this] = value;
        }

        [DisplayName("Vehicle Fuel Type"), Expression("jVehicle.[FuelType]")]
        public Int64? VehicleFuelType
        {
            get => fields.VehicleFuelType[this];
            set => fields.VehicleFuelType[this] = value;
        }

        [DisplayName("Vehicle Color"), Expression("jVehicle.[Color]")]
        public Int64? VehicleColor
        {
            get => fields.VehicleColor[this];
            set => fields.VehicleColor[this] = value;
        }

        [DisplayName("Vehicle Assembly Type"), Expression("jVehicle.[AssemblyType]")]
        public Int64? VehicleAssemblyType
        {
            get => fields.VehicleAssemblyType[this];
            set => fields.VehicleAssemblyType[this] = value;
        }

        [DisplayName("Vehicle Second Color"), Expression("jVehicle.[SecondColor]")]
        public Int64? VehicleSecondColor
        {
            get => fields.VehicleSecondColor[this];
            set => fields.VehicleSecondColor[this] = value;
        }

        [DisplayName("Vehicle Country Of Origin"), Expression("jVehicle.[CountryOfOrigin]")]
        public Int64? VehicleCountryOfOrigin
        {
            get => fields.VehicleCountryOfOrigin[this];
            set => fields.VehicleCountryOfOrigin[this] = value;
        }

        [DisplayName("Vehicle Sub Model"), Expression("jVehicle.[SubModel]")]
        public String VehicleSubModel
        {
            get => fields.VehicleSubModel[this];
            set => fields.VehicleSubModel[this] = value;
        }

        [DisplayName("Vehicle Gross Vehicle Mass"), Expression("jVehicle.[GrossVehicleMass]")]
        public Int32? VehicleGrossVehicleMass
        {
            get => fields.VehicleGrossVehicleMass[this];
            set => fields.VehicleGrossVehicleMass[this] = value;
        }

        [DisplayName("Vehicle Body Style"), Expression("jVehicle.[BodyStyle]")]
        public String VehicleBodyStyle
        {
            get => fields.VehicleBodyStyle[this];
            set => fields.VehicleBodyStyle[this] = value;
        }

        [DisplayName("Vehicle Tare Weight"), Expression("jVehicle.[TareWeight]")]
        public String VehicleTareWeight
        {
            get => fields.VehicleTareWeight[this];
            set => fields.VehicleTareWeight[this] = value;
        }


        [DisplayName("Vehicle Axles"), Expression("jVehicle.[Axles]")]
        public String VehicleAxles
        {
            get => fields.VehicleAxles[this];
            set => fields.VehicleAxles[this] = value;
        }

        [DisplayName("Vehicle Wheelbase"), Expression("jVehicle.[Wheelbase]")]
        public String VehicleWheelbase
        {
            get => fields.VehicleWheelbase[this];
            set => fields.VehicleWheelbase[this] = value;
        }

        [DisplayName("Vehicle Engine No"), Expression("jVehicle.[EngineNo]")]
        public String VehicleEngineNo
        {
            get => fields.VehicleEngineNo[this];
            set => fields.VehicleEngineNo[this] = value;
        }

        [DisplayName("Vehicle Front Axle Group Rating"), Expression("jVehicle.[FrontAxleGroupRating]")]
        public String VehicleFrontAxleGroupRating
        {
            get => fields.VehicleFrontAxleGroupRating[this];
            set => fields.VehicleFrontAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Vehicle Type"), Expression("jVehicle.[VehicleType]")]
        public Int64? VehicleVehicleType
        {
            get => fields.VehicleVehicleType[this];
            set => fields.VehicleVehicleType[this] = value;
        }

        [DisplayName("Vehicle Rear Axle Group Rating"), Expression("jVehicle.[RearAxleGroupRating]")]
        public String VehicleRearAxleGroupRating
        {
            get => fields.VehicleRearAxleGroupRating[this];
            set => fields.VehicleRearAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Brand"), Expression("jVehicle.[Brand]")]
        public Int64? VehicleBrand
        {
            get => fields.VehicleBrand[this];
            set => fields.VehicleBrand[this] = value;
        }


        [MasterDetailRelation(foreignKey: "JobOrder")]
        [DisplayName("Job Card Details"), NotMapped]
        public List<JobcarddetailsRow> JobCardDetails
        {
            get { return Fields.JobCardDetails[this]; }
            set { Fields.JobCardDetails[this] = value; }
        }

        public JobcardsRow()
            : base()
        {
        }

        public JobcardsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Customer;
            public StringField WorkOrderNo;
            public StringField Address;
            public Int32Field BranchesId;
            public Int32Field Vehicle;
            public StringField Phone;
            public StringField Reference;
            public StringField Mobile;
            public DateTimeField ScheduleDatetime;
            public StringField Website;
            public DateTimeField DeliveryDatetime;
            public StringField Details;
            public StringField BranchName;
            public readonly RowListField<JobcarddetailsRow> JobCardDetails;



            public StringField CustomerName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public Int64Field CustomerCountryId;
            public Int64Field CustomerStateId;
            public Int64Field CustomerCityId;
            public StringField CustomerAddress;
            public Int64Field CustomerRegionId;
            public StringField CustomerPostalCode;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public StringField CustomerWebsite;
            public StringField CustomerEmail;
            public StringField CustomerEmailAddress;
            public DoubleField CustomerPreviousCreditBalance;
            //public DateTimeField CustomerInsertDate;
            //public Int32Field CustomerInsertUserId;
            //public DateTimeField CustomerUpdateDate;
            //public Int32Field CustomerUpdateUserId;
            //public DateTimeField CustomerDeleteDate;
            //public Int32Field CustomerDeleteUserId;
            //public Int32Field CustomerIsActive;
            public Int64Field CustomerCustomerGroupId;

            public Int64Field VehicleCustomerId;
            public StringField VehicleVehicleRegistration;
            public Int32Field VehicleYear;
            public Int32Field VehicleSeats;
            public Int64Field VehicleMake;
            public StringField VehicleCcRating;
            public Int64Field VehicleModel;
            public Int64Field VehicleFuelType;
            public Int64Field VehicleColor;
            public Int64Field VehicleAssemblyType;
            public Int64Field VehicleSecondColor;
            public Int64Field VehicleCountryOfOrigin;
            public StringField VehicleSubModel;
            public Int32Field VehicleGrossVehicleMass;
            public StringField VehicleBodyStyle;
            public StringField VehicleTareWeight;
            public StringField VehicleAxles;
            public StringField VehicleWheelbase;
            public StringField VehicleEngineNo;
            public StringField VehicleFrontAxleGroupRating;
            public Int64Field VehicleVehicleType;
            public StringField VehicleRearAxleGroupRating;
            public Int64Field VehicleBrand;
        }
    }
}
