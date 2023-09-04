using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("jobtypes")]
    [DisplayName("Job Types"), InstanceName("Jobtypes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class JobtypesRow : Row<JobtypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Category"), NotNull, ForeignKey("jobcategories", "Id"), LeftJoin("jJobCategory"), TextualField("JobCategoryName")]
        [LookupEditor(typeof(JobcategoriesRow), InplaceAdd = true), LookupInclude]
        public int? JobCategory
        {
            get => fields.JobCategory[this];
            set => fields.JobCategory[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty, LookupInclude]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Rate"), NotNull, LookupInclude]
        public double? Rate
        {
            get => fields.Rate[this];
            set => fields.Rate[this] = value;
        }

        [DisplayName("Standard Timing"), LookupInclude]
        public DateTime? StandardTiming
        {
            get => fields.StandardTiming[this];
            set => fields.StandardTiming[this] = value;
        }

        [DisplayName("Is Inspection List"), Hidden, DefaultValue(false), LookupInclude]
        public short? IsInspectionList
        {
            get => fields.IsInspectionList[this];
            set => fields.IsInspectionList[this] = value;
        }

        [DisplayName("Job Category Name"), Expression("jJobCategory.[Name]")]
        public string JobCategoryName
        {
            get => fields.JobCategoryName[this];
            set => fields.JobCategoryName[this] = value;
        }

        public JobtypesRow()
            : base()
        {
        }

        public JobtypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field JobCategory;
            public StringField Name;
            public DoubleField Rate;
            public DateTimeField StandardTiming;
            public Int16Field IsInspectionList;

            public StringField JobCategoryName;
        }
    }
}
