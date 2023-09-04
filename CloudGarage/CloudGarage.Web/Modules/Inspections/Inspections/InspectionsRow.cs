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
    [ConnectionKey("couldgarage"), Module("Inspections"), TableName("inspections")]
    [DisplayName("Inspections"), InstanceName("Inspections")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InspectionsRow : Row<InspectionsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Rate")]
        public double? Rate
        {
            get => fields.Rate[this];
            set => fields.Rate[this] = value;
        }

        [DisplayName("Standard Timing")]
        public TimeSpan? StandardTiming
        {
            get => fields.StandardTiming[this];
            set => fields.StandardTiming[this] = value;
        }

        [DisplayName("Is Inspection List"), Hidden, DefaultValue(true)]
        public Boolean? IsInspectionList
        {
            get => fields.IsInspectionList[this];
            set => fields.IsInspectionList[this] = value;
        }

        [MasterDetailRelation(foreignKey: "JobType")]
        [DisplayName("Checklist"), NotMapped]
        public List<InspectionchecklistRow> Checklist
        {
            get { return Fields.Checklist[this]; }
            set { Fields.Checklist[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupInclude, LookupEditor(typeof(BusinessPartners.CustomersRow), InplaceAdd = true)]
        public int? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public string CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        public InspectionsRow()
            : base()
        {
        }

        public InspectionsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public DoubleField Rate;
            public TimeSpanField StandardTiming;
            public BooleanField IsInspectionList;
            public readonly RowListField<InspectionchecklistRow> Checklist;

            public StringField CustomerName;
            public Int32Field CustomerId;
        }
    }
}
