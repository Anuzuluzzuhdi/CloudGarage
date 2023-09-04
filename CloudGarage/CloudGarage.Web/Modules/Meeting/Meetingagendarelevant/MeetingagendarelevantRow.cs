using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetingagendarelevant")]
    [DisplayName("Meetingagendarelevant"), InstanceName("Meetingagendarelevant")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingagendarelevantRow : Row<MeetingagendarelevantRow.RowFields>, IIdRow
    {
        [DisplayName("Agenda Relevant Id"), Identity, IdProperty]
        public int? AgendaRelevantId
        {
            get => fields.AgendaRelevantId[this];
            set => fields.AgendaRelevantId[this] = value;
        }

        [DisplayName("Agenda"), NotNull, ForeignKey("meetingagendas", "AgendaId"), LeftJoin("jAgenda"), TextualField("AgendaTitle")]
        public int? AgendaId
        {
            get => fields.AgendaId[this];
            set => fields.AgendaId[this] = value;
        }

        [DisplayName("Contact"), NotNull, ForeignKey("contacts", "ContactId"), LeftJoin("jContact"), TextualField("ContactTitle")]
        public int? ContactId
        {
            get => fields.ContactId[this];
            set => fields.ContactId[this] = value;
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

        public MeetingagendarelevantRow()
            : base()
        {
        }

        public MeetingagendarelevantRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgendaRelevantId;
            public Int32Field AgendaId;
            public Int32Field ContactId;

            public Int32Field AgendaMeetingId;
            public Int32Field AgendaAgendaNumber;
            public StringField AgendaTitle;
            public StreamField AgendaDescription;
            public Int32Field AgendaAgendaTypeId;
            public Int32Field AgendaRequestedByContactId;
            public StreamField AgendaImages;
            public StreamField AgendaAttachments;

            public StringField ContactTitle;
            public StringField ContactFirstName;
            public StringField ContactLastName;
            public StringField ContactEmail;
            public StringField ContactIdentityNo;
            public Int32Field ContactUserId;
        }
    }
}
