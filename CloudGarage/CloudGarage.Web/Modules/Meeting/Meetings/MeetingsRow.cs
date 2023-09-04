using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Meeting
{
    [ConnectionKey("couldgarage"), Module("Meeting"), TableName("meetings")]
    [DisplayName("Meetings"), InstanceName("Meetings")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MeetingsRow : Row<MeetingsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Meeting Name"), Size(255), NotNull, QuickSearch, NameProperty]
        public string MeetingName
        {
            get => fields.MeetingName[this];
            set => fields.MeetingName[this] = value;
        }

        [DisplayName("Meeting Type"), NotNull]
        public int? MeetingType
        {
            get => fields.MeetingType[this];
            set => fields.MeetingType[this] = value;
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

        [DisplayName("Department")]
        public int? Department
        {
            get => fields.Department[this];
            set => fields.Department[this] = value;
        }

        [DisplayName("Location"), NotNull]
        public int? Location
        {
            get => fields.Location[this];
            set => fields.Location[this] = value;
        }

        [DisplayName("Organized By")]
        public int? OrganizedBy
        {
            get => fields.OrganizedBy[this];
            set => fields.OrganizedBy[this] = value;
        }

        [DisplayName("Reporter")]
        public int? Reporter
        {
            get => fields.Reporter[this];
            set => fields.Reporter[this] = value;
        }

        public MeetingsRow()
            : base()
        {
        }

        public MeetingsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField MeetingName;
            public Int32Field MeetingType;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field Department;
            public Int32Field Location;
            public Int32Field OrganizedBy;
            public Int32Field Reporter;
        }
    }
}
