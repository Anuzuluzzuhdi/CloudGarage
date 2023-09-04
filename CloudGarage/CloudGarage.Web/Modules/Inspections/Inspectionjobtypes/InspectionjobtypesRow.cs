using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inspections
{
    [ConnectionKey("couldgarage"), Module("Inspections"), TableName("inspectionjobtypes")]
    [DisplayName("Inspectionjobtypes"), InstanceName("Inspectionjobtypes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InspectionjobtypesRow : Row<InspectionjobtypesRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Inspection"), NotNull, ForeignKey("inspectionchecklist", "Id"), LeftJoin("jInspection")]
        public int? InspectionId
        {
            get => fields.InspectionId[this];
            set => fields.InspectionId[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("jobtypes", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        public int? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Inspection Job Category"), Expression("jInspection.[JobCategory]")]
        public int? InspectionJobCategory
        {
            get => fields.InspectionJobCategory[this];
            set => fields.InspectionJobCategory[this] = value;
        }

        [DisplayName("Inspection Job Type"), Expression("jInspection.[JobType]")]
        public int? InspectionJobType
        {
            get => fields.InspectionJobType[this];
            set => fields.InspectionJobType[this] = value;
        }

        [DisplayName("Job Type Job Category"), Expression("jJobType.[JobCategory]")]
        public int? JobTypeJobCategory
        {
            get => fields.JobTypeJobCategory[this];
            set => fields.JobTypeJobCategory[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]")]
        public string JobTypeName
        {
            get => fields.JobTypeName[this];
            set => fields.JobTypeName[this] = value;
        }

        [DisplayName("Job Type Rate"), Expression("jJobType.[Rate]")]
        public double? JobTypeRate
        {
            get => fields.JobTypeRate[this];
            set => fields.JobTypeRate[this] = value;
        }

        [DisplayName("Job Type Standard Timing"), Expression("jJobType.[StandardTiming]")]
        public DateTime? JobTypeStandardTiming
        {
            get => fields.JobTypeStandardTiming[this];
            set => fields.JobTypeStandardTiming[this] = value;
        }

        [DisplayName("Job Type Is Inspection List"), Expression("jJobType.[IsInspectionList]")]
        public short? JobTypeIsInspectionList
        {
            get => fields.JobTypeIsInspectionList[this];
            set => fields.JobTypeIsInspectionList[this] = value;
        }

        public InspectionjobtypesRow()
            : base()
        {
        }

        public InspectionjobtypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InspectionId;
            public Int32Field JobType;

            public Int32Field InspectionJobCategory;
            public Int32Field InspectionJobType;

            public Int32Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public DateTimeField JobTypeStandardTiming;
            public Int16Field JobTypeIsInspectionList;
        }
    }
}
