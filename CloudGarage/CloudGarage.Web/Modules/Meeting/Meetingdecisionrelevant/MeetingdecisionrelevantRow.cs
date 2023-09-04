using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("Default"), Module("Meeting"), TableName("meetingdecisionrelevant")]
    [DisplayName("Meetingdecisionrelevant"), InstanceName("Meetingdecisionrelevant")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MeetingdecisionrelevantRow : Row<MeetingdecisionrelevantRow.RowFields>, IIdRow
    {
        [DisplayName("Decision Relevant Id"), Identity, IdProperty]
        public int? DecisionRelevantId
        {
            get => fields.DecisionRelevantId[this];
            set => fields.DecisionRelevantId[this] = value;
        }

        [DisplayName("Decision"), NotNull, ForeignKey("meetingdecisions", "DecisionId"), LeftJoin("jDecision")]
        public int? DecisionId
        {
            get => fields.DecisionId[this];
            set => fields.DecisionId[this] = value;
        }

        [DisplayName("Contact"), NotNull, ForeignKey("contacts", "ContactId"), LeftJoin("jContact"), TextualField("ContactTitle")]
        public int? ContactId
        {
            get => fields.ContactId[this];
            set => fields.ContactId[this] = value;
        }

        [DisplayName("Decision Meeting Id"), Expression("jDecision.[MeetingId]")]
        public int? DecisionMeetingId
        {
            get => fields.DecisionMeetingId[this];
            set => fields.DecisionMeetingId[this] = value;
        }

        [DisplayName("Decision Agenda Id"), Expression("jDecision.[AgendaId]")]
        public int? DecisionAgendaId
        {
            get => fields.DecisionAgendaId[this];
            set => fields.DecisionAgendaId[this] = value;
        }

        [DisplayName("Decision Description"), Expression("jDecision.[Description]")]
        public Stream DecisionDescription
        {
            get => fields.DecisionDescription[this];
            set => fields.DecisionDescription[this] = value;
        }

        [DisplayName("Decision Decision Number"), Expression("jDecision.[DecisionNumber]")]
        public int? DecisionDecisionNumber
        {
            get => fields.DecisionDecisionNumber[this];
            set => fields.DecisionDecisionNumber[this] = value;
        }

        [DisplayName("Decision Responsible Contact Id"), Expression("jDecision.[ResponsibleContactId]")]
        public int? DecisionResponsibleContactId
        {
            get => fields.DecisionResponsibleContactId[this];
            set => fields.DecisionResponsibleContactId[this] = value;
        }

        [DisplayName("Decision Due Date"), Expression("jDecision.[DueDate]")]
        public DateTime? DecisionDueDate
        {
            get => fields.DecisionDueDate[this];
            set => fields.DecisionDueDate[this] = value;
        }

        [DisplayName("Decision Resolution Status"), Expression("jDecision.[ResolutionStatus]")]
        public int? DecisionResolutionStatus
        {
            get => fields.DecisionResolutionStatus[this];
            set => fields.DecisionResolutionStatus[this] = value;
        }

        [DisplayName("Decision Images"), Expression("jDecision.[Images]")]
        public Stream DecisionImages
        {
            get => fields.DecisionImages[this];
            set => fields.DecisionImages[this] = value;
        }

        [DisplayName("Decision Attachments"), Expression("jDecision.[Attachments]")]
        public Stream DecisionAttachments
        {
            get => fields.DecisionAttachments[this];
            set => fields.DecisionAttachments[this] = value;
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

        public MeetingdecisionrelevantRow()
            : base()
        {
        }

        public MeetingdecisionrelevantRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DecisionRelevantId;
            public Int32Field DecisionId;
            public Int32Field ContactId;

            public Int32Field DecisionMeetingId;
            public Int32Field DecisionAgendaId;
            public StreamField DecisionDescription;
            public Int32Field DecisionDecisionNumber;
            public Int32Field DecisionResponsibleContactId;
            public DateTimeField DecisionDueDate;
            public Int32Field DecisionResolutionStatus;
            public StreamField DecisionImages;
            public StreamField DecisionAttachments;

            public StringField ContactTitle;
            public StringField ContactFirstName;
            public StringField ContactLastName;
            public StringField ContactEmail;
            public StringField ContactIdentityNo;
            public Int32Field ContactUserId;
        }
    }
}
