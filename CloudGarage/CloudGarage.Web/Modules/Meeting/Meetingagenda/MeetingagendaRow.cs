using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetingagendas")]
    [DisplayName("Meetingagenda"), InstanceName("Meetingagenda")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingagendaRow : Row<MeetingagendaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Agenda Id"), Identity, IdProperty]
        public int? AgendaId
        {
            get => fields.AgendaId[this];
            set => fields.AgendaId[this] = value;
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("meetings", "MeetingId"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName")]
        public int? MeetingId
        {
            get => fields.MeetingId[this];
            set => fields.MeetingId[this] = value;
        }

        [DisplayName("Sequence No"), NotNull]
        public int? AgendaNumber
        {
            get => fields.AgendaNumber[this];
            set => fields.AgendaNumber[this] = value;
        }

        [DisplayName("Title"), Size(2000), NotNull, QuickSearch, NameProperty]
        public string Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("Description")]
        public Stream Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Agenda Type"), NotNull, ForeignKey("meetingagendatypes", "AgendaTypeId"), LeftJoin("jAgendaType"), TextualField("AgendaTypeName")]
        [LookupEditor(typeof(MeetingagendatypeRow), InplaceAdd = true, InplaceAddPermission = "Administration:General"), DefaultValue(1)]
        public int? AgendaTypeId
        {
            get => fields.AgendaTypeId[this];
            set => fields.AgendaTypeId[this] = value;
        }

        [DisplayName("Requested By Contact"), ForeignKey("contacts", "ContactId"), LeftJoin("jRequestedByContact"), TextualField("RequestedByContactTitle")]
        //[LookupEditor(typeof(Organization.ContactRow), InplaceAdd = true, InplaceAddPermission = Organization.PermissionKeys.Contacts.Management)]
        public int? RequestedByContactId
        {
            get => fields.RequestedByContactId[this];
            set => fields.RequestedByContactId[this] = value;
        }

        [DisplayName("Images")]
        public Stream Images
        {
            get => fields.Images[this];
            set => fields.Images[this] = value;
        }

        [DisplayName("Attachments")]
        public Stream Attachments
        {
            get => fields.Attachments[this];
            set => fields.Attachments[this] = value;
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

        [DisplayName("Agenda Type Name"), Expression("jAgendaType.[Name]")]
        public string AgendaTypeName
        {
            get => fields.AgendaTypeName[this];
            set => fields.AgendaTypeName[this] = value;
        }

        [DisplayName("Requested By Contact Title"), Expression("jRequestedByContact.[Title]")]
        public string RequestedByContactTitle
        {
            get => fields.RequestedByContactTitle[this];
            set => fields.RequestedByContactTitle[this] = value;
        }

        [DisplayName("Requested By Contact First Name"), Expression("jRequestedByContact.[FirstName]")]
        public string RequestedByContactFirstName
        {
            get => fields.RequestedByContactFirstName[this];
            set => fields.RequestedByContactFirstName[this] = value;
        }

        [DisplayName("Requested By Contact Last Name"), Expression("jRequestedByContact.[LastName]")]
        public string RequestedByContactLastName
        {
            get => fields.RequestedByContactLastName[this];
            set => fields.RequestedByContactLastName[this] = value;
        }

        [DisplayName("Requested By Contact Email"), Expression("jRequestedByContact.[Email]")]
        public string RequestedByContactEmail
        {
            get => fields.RequestedByContactEmail[this];
            set => fields.RequestedByContactEmail[this] = value;
        }

        [DisplayName("Requested By Contact Identity No"), Expression("jRequestedByContact.[IdentityNo]")]
        public string RequestedByContactIdentityNo
        {
            get => fields.RequestedByContactIdentityNo[this];
            set => fields.RequestedByContactIdentityNo[this] = value;
        }

        [DisplayName("Requested By Contact User Id"), Expression("jRequestedByContact.[UserId]")]
        public int? RequestedByContactUserId
        {
            get => fields.RequestedByContactUserId[this];
            set => fields.RequestedByContactUserId[this] = value;
        }

        public MeetingagendaRow()
            : base()
        {
        }

        public MeetingagendaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgendaId;
            public Int32Field MeetingId;
            public Int32Field AgendaNumber;
            public StringField Title;
            public StreamField Description;
            public Int32Field AgendaTypeId;
            public Int32Field RequestedByContactId;
            public StreamField Images;
            public StreamField Attachments;

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

            public StringField AgendaTypeName;

            public StringField RequestedByContactTitle;
            public StringField RequestedByContactFirstName;
            public StringField RequestedByContactLastName;
            public StringField RequestedByContactEmail;
            public StringField RequestedByContactIdentityNo;
            public Int32Field RequestedByContactUserId;
        }
    }
}
