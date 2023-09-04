using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetingattendees")]
    [DisplayName("Meetingattendee"), InstanceName("Meetingattendee")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingattendeeRow : Row<MeetingattendeeRow.RowFields>, IIdRow
    {
        [DisplayName("Attendee Id"), Identity, IdProperty]
        public int? AttendeeId
        {
            get => fields.AttendeeId[this];
            set => fields.AttendeeId[this] = value;
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("meetings", "MeetingId"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName")]
        public int? MeetingId
        {
            get => fields.MeetingId[this];
            set => fields.MeetingId[this] = value;
        }

        [DisplayName("Contact"), NotNull, ForeignKey("contacts", "ContactId"), LeftJoin("jContact"), TextualField("ContactTitle")]
        public int? ContactId
        {
            get => fields.ContactId[this];
            set => fields.ContactId[this] = value;
        }

        [DisplayName("Attendee Type"), NotNull]
        public int? AttendeeType
        {
            get => fields.AttendeeType[this];
            set => fields.AttendeeType[this] = value;
        }

        [DisplayName("Attendance Status"), NotNull]
        public int? AttendanceStatus
        {
            get => fields.AttendanceStatus[this];
            set => fields.AttendanceStatus[this] = value;
        }

        [DisplayName("Meeting Meeting Name"), Expression("jMeeting.[MeetingName]")]
        public string MeetingMeetingName
        {
            get => fields.MeetingMeetingName[this];
            set => fields.MeetingMeetingName[this] = value;
        }

        [DisplayName("Meeting Meeting Number"), Expression("jMeeting.[MeetingNumber]")]
        public string MeetingMeetingNumber
        {
            get => fields.MeetingMeetingNumber[this];
            set => fields.MeetingMeetingNumber[this] = value;
        }

        [DisplayName("Meeting Meeting Guid"), Expression("jMeeting.[MeetingGuid]")]
        public string MeetingMeetingGuid
        {
            get => fields.MeetingMeetingGuid[this];
            set => fields.MeetingMeetingGuid[this] = value;
        }

        [DisplayName("Meeting Meeting Type Id"), Expression("jMeeting.[MeetingTypeId]")]
        public int? MeetingMeetingTypeId
        {
            get => fields.MeetingMeetingTypeId[this];
            set => fields.MeetingMeetingTypeId[this] = value;
        }

        [DisplayName("Meeting Start Date"), Expression("jMeeting.[StartDate]")]
        public DateTime? MeetingStartDate
        {
            get => fields.MeetingStartDate[this];
            set => fields.MeetingStartDate[this] = value;
        }

        [DisplayName("Meeting End Date"), Expression("jMeeting.[EndDate]")]
        public DateTime? MeetingEndDate
        {
            get => fields.MeetingEndDate[this];
            set => fields.MeetingEndDate[this] = value;
        }

        [DisplayName("Meeting Location Id"), Expression("jMeeting.[LocationId]")]
        public int? MeetingLocationId
        {
            get => fields.MeetingLocationId[this];
            set => fields.MeetingLocationId[this] = value;
        }

        [DisplayName("Meeting Unit Id"), Expression("jMeeting.[UnitId]")]
        public int? MeetingUnitId
        {
            get => fields.MeetingUnitId[this];
            set => fields.MeetingUnitId[this] = value;
        }

        [DisplayName("Meeting Organizer Contact Id"), Expression("jMeeting.[OrganizerContactId]")]
        public int? MeetingOrganizerContactId
        {
            get => fields.MeetingOrganizerContactId[this];
            set => fields.MeetingOrganizerContactId[this] = value;
        }

        [DisplayName("Meeting Reporter Contact Id"), Expression("jMeeting.[ReporterContactId]")]
        public int? MeetingReporterContactId
        {
            get => fields.MeetingReporterContactId[this];
            set => fields.MeetingReporterContactId[this] = value;
        }

        [DisplayName("Meeting Insert User Id"), Expression("jMeeting.[InsertUserId]")]
        public int? MeetingInsertUserId
        {
            get => fields.MeetingInsertUserId[this];
            set => fields.MeetingInsertUserId[this] = value;
        }

        [DisplayName("Meeting Insert Date"), Expression("jMeeting.[InsertDate]")]
        public DateTime? MeetingInsertDate
        {
            get => fields.MeetingInsertDate[this];
            set => fields.MeetingInsertDate[this] = value;
        }

        [DisplayName("Meeting Update User Id"), Expression("jMeeting.[UpdateUserId]")]
        public int? MeetingUpdateUserId
        {
            get => fields.MeetingUpdateUserId[this];
            set => fields.MeetingUpdateUserId[this] = value;
        }

        [DisplayName("Meeting Update Date"), Expression("jMeeting.[UpdateDate]")]
        public DateTime? MeetingUpdateDate
        {
            get => fields.MeetingUpdateDate[this];
            set => fields.MeetingUpdateDate[this] = value;
        }

        [DisplayName("Contact Title"), Expression("jContact.[Title]")]
        public string ContactTitle
        {
            get => fields.ContactTitle[this];
            set => fields.ContactTitle[this] = value;
        }

        [DisplayName("Contact First Name"), Expression("jContact.[FirstName]")]
        public string ContactFirstName
        {
            get => fields.ContactFirstName[this];
            set => fields.ContactFirstName[this] = value;
        }

        [DisplayName("Contact Last Name"), Expression("jContact.[LastName]")]
        public string ContactLastName
        {
            get => fields.ContactLastName[this];
            set => fields.ContactLastName[this] = value;
        }

        [DisplayName("Contact Email"), Expression("jContact.[Email]")]
        public string ContactEmail
        {
            get => fields.ContactEmail[this];
            set => fields.ContactEmail[this] = value;
        }

        [DisplayName("Contact Identity No"), Expression("jContact.[IdentityNo]")]
        public string ContactIdentityNo
        {
            get => fields.ContactIdentityNo[this];
            set => fields.ContactIdentityNo[this] = value;
        }

        [DisplayName("Contact User Id"), Expression("jContact.[UserId]")]
        public int? ContactUserId
        {
            get => fields.ContactUserId[this];
            set => fields.ContactUserId[this] = value;
        }

        public MeetingattendeeRow()
            : base()
        {
        }

        public MeetingattendeeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AttendeeId;
            public Int32Field MeetingId;
            public Int32Field ContactId;
            public Int32Field AttendeeType;
            public Int32Field AttendanceStatus;

            public StringField MeetingMeetingName;
            public StringField MeetingMeetingNumber;
            public StringField MeetingMeetingGuid;
            public Int32Field MeetingMeetingTypeId;
            public DateTimeField MeetingStartDate;
            public DateTimeField MeetingEndDate;
            public Int32Field MeetingLocationId;
            public Int32Field MeetingUnitId;
            public Int32Field MeetingOrganizerContactId;
            public Int32Field MeetingReporterContactId;
            public Int32Field MeetingInsertUserId;
            public DateTimeField MeetingInsertDate;
            public Int32Field MeetingUpdateUserId;
            public DateTimeField MeetingUpdateDate;

            public StringField ContactTitle;
            public StringField ContactFirstName;
            public StringField ContactLastName;
            public StringField ContactEmail;
            public StringField ContactIdentityNo;
            public Int32Field ContactUserId;
        }
    }
}
