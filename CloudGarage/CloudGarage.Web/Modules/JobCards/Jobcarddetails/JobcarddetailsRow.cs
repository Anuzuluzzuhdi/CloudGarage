using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.JobCards
{
    [ConnectionKey("couldgarage"), Module("JobCards"), TableName("jobcarddetails")]
    [DisplayName("Jobcarddetails"), InstanceName("Jobcarddetails")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class JobcarddetailsRow : Row<JobcarddetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("jobtypes", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        [LookupEditor(typeof(Masters.JobtypesRow), InplaceAdd = true)]
        public int? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Job Order"), NotNull, ForeignKey("jobcards", "Id"), LeftJoin("jJobOrder"), TextualField("JobOrderWorkOrderNo"), Updatable(false)]
        public int? JobOrder
        {
            get => fields.JobOrder[this];
            set => fields.JobOrder[this] = value;
        }

        [DisplayName("Mechanic"), NotNull, ForeignKey("employees", "Id"), LeftJoin("jMechanic"), TextualField("MechanicFullName")]
        [LookupEditor(typeof(HumanResource.EmployeesRow), InplaceAdd = true)]
        public int? Mechanic
        {
            get => fields.Mechanic[this];
            set => fields.Mechanic[this] = value;
        }

        [DisplayName("Mechanic"), Expression("jMechanic.[FirstName] +' '+ jMechanic.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String MechanicFullName
        {
            get { return Fields.MechanicFullName[this]; }
            set { Fields.MechanicFullName[this] = value; }
        }

        [DisplayName("Customer Notes"), Size(255), QuickSearch, NameProperty]
        public string CustomerNotes
        {
            get => fields.CustomerNotes[this];
            set => fields.CustomerNotes[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]")]
        public String JobTypeName
        {
            get => fields.JobTypeName[this];
            set => fields.JobTypeName[this] = value;
        }

        [DisplayName("Job Order Customer"), Expression("jJobOrder.[Customer]")]
        public Int64? JobOrderCustomer
        {
            get => fields.JobOrderCustomer[this];
            set => fields.JobOrderCustomer[this] = value;
        }

        [DisplayName("Job Order Work Order No"), Expression("jJobOrder.[WorkOrderNo]")]
        public String JobOrderWorkOrderNo
        {
            get => fields.JobOrderWorkOrderNo[this];
            set => fields.JobOrderWorkOrderNo[this] = value;
        }

        [DisplayName("Job Order Address"), Expression("jJobOrder.[Address]")]
        public String JobOrderAddress
        {
            get => fields.JobOrderAddress[this];
            set => fields.JobOrderAddress[this] = value;
        }

        [DisplayName("Job Order Vehicle"), Expression("jJobOrder.[Vehicle]")]
        public Int64? JobOrderVehicle
        {
            get => fields.JobOrderVehicle[this];
            set => fields.JobOrderVehicle[this] = value;
        }

        [DisplayName("Job Order Phone"), Expression("jJobOrder.[Phone]")]
        public String JobOrderPhone
        {
            get => fields.JobOrderPhone[this];
            set => fields.JobOrderPhone[this] = value;
        }

        [DisplayName("Job Order Reference"), Expression("jJobOrder.[Reference]")]
        public String JobOrderReference
        {
            get => fields.JobOrderReference[this];
            set => fields.JobOrderReference[this] = value;
        }

        [DisplayName("Job Order Mobile"), Expression("jJobOrder.[Mobile]")]
        public String JobOrderMobile
        {
            get => fields.JobOrderMobile[this];
            set => fields.JobOrderMobile[this] = value;
        }

        [DisplayName("Job Order Schedule Datetime"), Expression("jJobOrder.[ScheduleDatetime]")]
        public DateTime? JobOrderScheduleDatetime
        {
            get => fields.JobOrderScheduleDatetime[this];
            set => fields.JobOrderScheduleDatetime[this] = value;
        }

        [DisplayName("Job Order Website"), Expression("jJobOrder.[Website]")]
        public String JobOrderWebsite
        {
            get => fields.JobOrderWebsite[this];
            set => fields.JobOrderWebsite[this] = value;
        }

        [DisplayName("Job Order Delivery Datetime"), Expression("jJobOrder.[DeliveryDatetime]")]
        public DateTime? JobOrderDeliveryDatetime
        {
            get => fields.JobOrderDeliveryDatetime[this];
            set => fields.JobOrderDeliveryDatetime[this] = value;
        }

        [DisplayName("Job Order Details"), Expression("jJobOrder.[Details]")]
        public String JobOrderDetails
        {
            get => fields.JobOrderDetails[this];
            set => fields.JobOrderDetails[this] = value;
        }

        public JobcarddetailsRow()
            : base()
        {
        }

        public JobcarddetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field JobType;
            public Int32Field JobOrder;
            public Int32Field Mechanic;
            public StringField CustomerNotes;
            public StringField MechanicFullName;

            public StringField JobTypeName;

            public Int64Field JobOrderCustomer;
            public StringField JobOrderWorkOrderNo;
            public StringField JobOrderAddress;
            public Int64Field JobOrderVehicle;
            public StringField JobOrderPhone;
            public StringField JobOrderReference;
            public StringField JobOrderMobile;
            public DateTimeField JobOrderScheduleDatetime;
            public StringField JobOrderWebsite;
            public DateTimeField JobOrderDeliveryDatetime;
            public StringField JobOrderDetails;
        }
    }
}
