using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inspections
{
    [ConnectionKey("couldgarage"), Module("Inspections"), TableName("inspectionchecklist")]
    [DisplayName("Inspectionchecklist"), InstanceName("Inspectionchecklist")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class InspectionchecklistRow : Row<InspectionchecklistRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Category"), NotNull, ForeignKey("jobcategories", "Id"), LeftJoin("jJobCategory"), TextualField("JobCategoryName")]
        [LookupEditor(typeof(Masters.JobcategoriesRow), InplaceAdd = true)]
        public int? JobCategory
        {
            get => fields.JobCategory[this];
            set => fields.JobCategory[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("jobtypes", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        public int? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Job Category Name"), Expression("jJobCategory.[Name]"), MinSelectLevel(SelectLevel.List)]

        public string JobCategoryName
        {
            get => fields.JobCategoryName[this];
            set => fields.JobCategoryName[this] = value;
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

        [DisplayName("Job Types"), MinSelectLevel(SelectLevel.List)]
        [LookupEditor(typeof(Masters.JobtypesRow), Multiple = true, CascadeField = "JobCategory", CascadeFrom = "JobCategory"), NotMapped]
        [LinkingSetRelation(typeof(InspectionjobtypesRow), "InspectionId", "JobType")]
        public List<Int32> JobTypes
        {
            get { return Fields.JobTypes[this]; }
            set { Fields.JobTypes[this] = value; }
        }

        public InspectionchecklistRow()
            : base()
        {
        }

        public InspectionchecklistRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field JobCategory;
            public Int32Field JobType;

            public StringField JobCategoryName;

            public Int32Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public DateTimeField JobTypeStandardTiming;
            public Int16Field JobTypeIsInspectionList;
            public ListField<Int32> JobTypes;
        }
    }
}
