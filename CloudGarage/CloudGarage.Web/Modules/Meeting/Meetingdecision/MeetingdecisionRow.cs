using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetingdecisions")]
    [DisplayName("Meetingdecision"), InstanceName("Meetingdecision")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingdecisionRow : Row<MeetingdecisionRow.RowFields>, IIdRow
    {
        [DisplayName("Decision Id"), Identity, IdProperty]
        public int? DecisionId
        {
            get => fields.DecisionId[this];
            set => fields.DecisionId[this] = value;
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("meetings", "MeetingId"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName")]
        public int? MeetingId
        {
            get => fields.MeetingId[this];
            set => fields.MeetingId[this] = value;
        }

        [DisplayName("Agenda"), ForeignKey("meetingagendas", "AgendaId"), LeftJoin("jAgenda"), TextualField("AgendaTitle")]
        public int? AgendaId
        {
            get => fields.AgendaId[this];
            set => fields.AgendaId[this] = value;
        }

        [DisplayName("Description"), NotNull]
        public Stream Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Decision Number"), NotNull, ForeignKey("meetingagendatypes", "AgendaTypeId"), LeftJoin("jDecisionNumber"), TextualField("DecisionNumberName")]
        public int? DecisionNumber
        {
            get => fields.DecisionNumber[this];
            set => fields.DecisionNumber[this] = value;
        }

        [DisplayName("Responsible Contact"), ForeignKey("contacts", "ContactId"), LeftJoin("jResponsibleContact"), TextualField("ResponsibleContactTitle")]
        public int? ResponsibleContactId
        {
            get => fields.ResponsibleContactId[this];
            set => fields.ResponsibleContactId[this] = value;
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get => fields.DueDate[this];
            set => fields.DueDate[this] = value;
        }

        [DisplayName("Resolution Status"), NotNull]
        public int? ResolutionStatus
        {
            get => fields.ResolutionStatus[this];
            set => fields.ResolutionStatus[this] = value;
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

        [DisplayName("Agenda Meeting Id"), Expression("jAgenda.[MeetingId]")]
        public int? AgendaMeetingId
        {
            get => fields.AgendaMeetingId[this];
            set => fields.AgendaMeetingId[this] = value;
        }

        [DisplayName("Agenda Agenda Number"), Expression("jAgenda.[AgendaNumber]")]
        public int? AgendaAgendaNumber
        {
            get => fields.AgendaAgendaNumber[this];
            set => fields.AgendaAgendaNumber[this] = value;
        }

        [DisplayName("Agenda Title"), Expression("jAgenda.[Title]")]
        public string AgendaTitle
        {
            get => fields.AgendaTitle[this];
            set => fields.AgendaTitle[this] = value;
        }

        [DisplayName("Agenda Description"), Expression("jAgenda.[Description]")]
        public Stream AgendaDescription
        {
            get => fields.AgendaDescription[this];
            set => fields.AgendaDescription[this] = value;
        }

        [DisplayName("Agenda Agenda Type Id"), Expression("jAgenda.[AgendaTypeId]")]
        public int? AgendaAgendaTypeId
        {
            get => fields.AgendaAgendaTypeId[this];
            set => fields.AgendaAgendaTypeId[this] = value;
        }

        [DisplayName("Agenda Requested By Contact Id"), Expression("jAgenda.[RequestedByContactId]")]
        public int? AgendaRequestedByContactId
        {
            get => fields.AgendaRequestedByContactId[this];
            set => fields.AgendaRequestedByContactId[this] = value;
        }

        [DisplayName("Agenda Images"), Expression("jAgenda.[Images]")]
        public Stream AgendaImages
        {
            get => fields.AgendaImages[this];
            set => fields.AgendaImages[this] = value;
        }

        [DisplayName("Agenda Attachments"), Expression("jAgenda.[Attachments]")]
        public Stream AgendaAttachments
        {
            get => fields.AgendaAttachments[this];
            set => fields.AgendaAttachments[this] = value;
        }

        [DisplayName("Decision Number Name"), Expression("jDecisionNumber.[Name]")]
        public string DecisionNumberName
        {
            get => fields.DecisionNumberName[this];
            set => fields.DecisionNumberName[this] = value;
        }

        [DisplayName("Responsible Contact Title"), Expression("jResponsibleContact.[Title]")]
        public string ResponsibleContactTitle
        {
            get => fields.ResponsibleContactTitle[this];
            set => fields.ResponsibleContactTitle[this] = value;
        }

        [DisplayName("Responsible Contact First Name"), Expression("jResponsibleContact.[FirstName]")]
        public string ResponsibleContactFirstName
        {
            get => fields.ResponsibleContactFirstName[this];
            set => fields.ResponsibleContactFirstName[this] = value;
        }

        [DisplayName("Responsible Contact Last Name"), Expression("jResponsibleContact.[LastName]")]
        public string ResponsibleContactLastName
        {
            get => fields.ResponsibleContactLastName[this];
            set => fields.ResponsibleContactLastName[this] = value;
        }

        [DisplayName("Responsible Contact Email"), Expression("jResponsibleContact.[Email]")]
        public string ResponsibleContactEmail
        {
            get => fields.ResponsibleContactEmail[this];
            set => fields.ResponsibleContactEmail[this] = value;
        }

        [DisplayName("Responsible Contact Identity No"), Expression("jResponsibleContact.[IdentityNo]")]
        public string ResponsibleContactIdentityNo
        {
            get => fields.ResponsibleContactIdentityNo[this];
            set => fields.ResponsibleContactIdentityNo[this] = value;
        }

        [DisplayName("Responsible Contact User Id"), Expression("jResponsibleContact.[UserId]")]
        public int? ResponsibleContactUserId
        {
            get => fields.ResponsibleContactUserId[this];
            set => fields.ResponsibleContactUserId[this] = value;
        }

        public MeetingdecisionRow()
            : base()
        {
        }

        public MeetingdecisionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DecisionId;
            public Int32Field MeetingId;
            public Int32Field AgendaId;
            public StreamField Description;
            public Int32Field DecisionNumber;
            public Int32Field ResponsibleContactId;
            public DateTimeField DueDate;
            public Int32Field ResolutionStatus;
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

            public Int32Field AgendaMeetingId;
            public Int32Field AgendaAgendaNumber;
            public StringField AgendaTitle;
            public StreamField AgendaDescription;
            public Int32Field AgendaAgendaTypeId;
            public Int32Field AgendaRequestedByContactId;
            public StreamField AgendaImages;
            public StreamField AgendaAttachments;

            public StringField DecisionNumberName;

            public StringField ResponsibleContactTitle;
            public StringField ResponsibleContactFirstName;
            public StringField ResponsibleContactLastName;
            public StringField ResponsibleContactEmail;
            public StringField ResponsibleContactIdentityNo;
            public Int32Field ResponsibleContactUserId;
        }
    }
}
