using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetings")]
    [DisplayName("Meeting"), InstanceName("Meeting")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingRow : Row<MeetingRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Meeting Id"), Identity, IdProperty]
        public int? MeetingId
        {
            get => fields.MeetingId[this];
            set => fields.MeetingId[this] = value;
        }

        [DisplayName("Meeting Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string MeetingName
        {
            get => fields.MeetingName[this];
            set => fields.MeetingName[this] = value;
        }

        [DisplayName("Meeting Number"), Size(20)]
        public string MeetingNumber
        {
            get => fields.MeetingNumber[this];
            set => fields.MeetingNumber[this] = value;
        }

        [DisplayName("Meeting Guid"), Size(36), NotNull]
        public string MeetingGuid
        {
            get => fields.MeetingGuid[this];
            set => fields.MeetingGuid[this] = value;
        }

        [DisplayName("Meeting Type"), NotNull, ForeignKey("meetingtypes", "MeetingTypeId"), LeftJoin("jMeetingType"), TextualField("MeetingTypeName")]
        public int? MeetingTypeId
        {
            get => fields.MeetingTypeId[this];
            set => fields.MeetingTypeId[this] = value;
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get => fields.EndDate[this];
            set => fields.EndDate[this] = value;
        }

        [DisplayName("Location"), ForeignKey("meetinglocations", "LocationId"), LeftJoin("jLocation"), TextualField("LocationName")]
        public int? LocationId
        {
            get => fields.LocationId[this];
            set => fields.LocationId[this] = value;
        }

        [DisplayName("Unit"), ForeignKey("businessunits", "UnitId"), LeftJoin("jUnit"), TextualField("UnitName")]
        public int? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Organizer Contact"), ForeignKey("contacts", "ContactId"), LeftJoin("jOrganizerContact"), TextualField("OrganizerContactTitle")]
        public int? OrganizerContactId
        {
            get => fields.OrganizerContactId[this];
            set => fields.OrganizerContactId[this] = value;
        }

        [DisplayName("Reporter Contact"), ForeignKey("contacts", "ContactId"), LeftJoin("jReporterContact"), TextualField("ReporterContactTitle")]
        public int? ReporterContactId
        {
            get => fields.ReporterContactId[this];
            set => fields.ReporterContactId[this] = value;
        }

        [DisplayName("Insert User Id"), NotNull]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Meeting Type Name"), Expression("jMeetingType.[Name]")]
        public string MeetingTypeName
        {
            get => fields.MeetingTypeName[this];
            set => fields.MeetingTypeName[this] = value;
        }

        [DisplayName("Location Name"), Expression("jLocation.[Name]")]
        public string LocationName
        {
            get => fields.LocationName[this];
            set => fields.LocationName[this] = value;
        }

        [DisplayName("Location Address"), Expression("jLocation.[Address]")]
        public string LocationAddress
        {
            get => fields.LocationAddress[this];
            set => fields.LocationAddress[this] = value;
        }

        [DisplayName("Location Latitude"), Expression("jLocation.[Latitude]")]
        public decimal? LocationLatitude
        {
            get => fields.LocationLatitude[this];
            set => fields.LocationLatitude[this] = value;
        }

        [DisplayName("Location Longitude"), Expression("jLocation.[Longitude]")]
        public decimal? LocationLongitude
        {
            get => fields.LocationLongitude[this];
            set => fields.LocationLongitude[this] = value;
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public string UnitName
        {
            get => fields.UnitName[this];
            set => fields.UnitName[this] = value;
        }

        [DisplayName("Unit Parent Unit Id"), Expression("jUnit.[ParentUnitId]")]
        public int? UnitParentUnitId
        {
            get => fields.UnitParentUnitId[this];
            set => fields.UnitParentUnitId[this] = value;
        }

        [DisplayName("Organizer Contact Title"), Expression("jOrganizerContact.[Title]")]
        public string OrganizerContactTitle
        {
            get => fields.OrganizerContactTitle[this];
            set => fields.OrganizerContactTitle[this] = value;
        }

        [DisplayName("Organizer Contact First Name"), Expression("jOrganizerContact.[FirstName]")]
        public string OrganizerContactFirstName
        {
            get => fields.OrganizerContactFirstName[this];
            set => fields.OrganizerContactFirstName[this] = value;
        }

        [DisplayName("Organizer Contact Last Name"), Expression("jOrganizerContact.[LastName]")]
        public string OrganizerContactLastName
        {
            get => fields.OrganizerContactLastName[this];
            set => fields.OrganizerContactLastName[this] = value;
        }

        [DisplayName("Organizer Contact Email"), Expression("jOrganizerContact.[Email]")]
        public string OrganizerContactEmail
        {
            get => fields.OrganizerContactEmail[this];
            set => fields.OrganizerContactEmail[this] = value;
        }

        [DisplayName("Organizer Contact Identity No"), Expression("jOrganizerContact.[IdentityNo]")]
        public string OrganizerContactIdentityNo
        {
            get => fields.OrganizerContactIdentityNo[this];
            set => fields.OrganizerContactIdentityNo[this] = value;
        }

        [DisplayName("Organizer Contact User Id"), Expression("jOrganizerContact.[UserId]")]
        public int? OrganizerContactUserId
        {
            get => fields.OrganizerContactUserId[this];
            set => fields.OrganizerContactUserId[this] = value;
        }

        [DisplayName("Reporter Contact Title"), Expression("jReporterContact.[Title]")]
        public string ReporterContactTitle
        {
            get => fields.ReporterContactTitle[this];
            set => fields.ReporterContactTitle[this] = value;
        }

        [DisplayName("Reporter Contact First Name"), Expression("jReporterContact.[FirstName]")]
        public string ReporterContactFirstName
        {
            get => fields.ReporterContactFirstName[this];
            set => fields.ReporterContactFirstName[this] = value;
        }

        [DisplayName("Reporter Contact Last Name"), Expression("jReporterContact.[LastName]")]
        public string ReporterContactLastName
        {
            get => fields.ReporterContactLastName[this];
            set => fields.ReporterContactLastName[this] = value;
        }

        [DisplayName("Reporter Contact Email"), Expression("jReporterContact.[Email]")]
        public string ReporterContactEmail
        {
            get => fields.ReporterContactEmail[this];
            set => fields.ReporterContactEmail[this] = value;
        }

        [DisplayName("Reporter Contact Identity No"), Expression("jReporterContact.[IdentityNo]")]
        public string ReporterContactIdentityNo
        {
            get => fields.ReporterContactIdentityNo[this];
            set => fields.ReporterContactIdentityNo[this] = value;
        }

        [DisplayName("Reporter Contact User Id"), Expression("jReporterContact.[UserId]")]
        public int? ReporterContactUserId
        {
            get => fields.ReporterContactUserId[this];
            set => fields.ReporterContactUserId[this] = value;
        }

        public MeetingRow()
            : base()
        {
        }

        public MeetingRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeetingId;
            public StringField MeetingName;
            public StringField MeetingNumber;
            public StringField MeetingGuid;
            public Int32Field MeetingTypeId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field LocationId;
            public Int32Field UnitId;
            public Int32Field OrganizerContactId;
            public Int32Field ReporterContactId;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;

            public StringField MeetingTypeName;

            public StringField LocationName;
            public StringField LocationAddress;
            public DecimalField LocationLatitude;
            public DecimalField LocationLongitude;

            public StringField UnitName;
            public Int32Field UnitParentUnitId;

            public StringField OrganizerContactTitle;
            public StringField OrganizerContactFirstName;
            public StringField OrganizerContactLastName;
            public StringField OrganizerContactEmail;
            public StringField OrganizerContactIdentityNo;
            public Int32Field OrganizerContactUserId;

            public StringField ReporterContactTitle;
            public StringField ReporterContactFirstName;
            public StringField ReporterContactLastName;
            public StringField ReporterContactEmail;
            public StringField ReporterContactIdentityNo;
            public Int32Field ReporterContactUserId;
        }
    }
}
