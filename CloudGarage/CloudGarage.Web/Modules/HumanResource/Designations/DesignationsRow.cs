using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.HumanResource
{
    [ConnectionKey("couldgarage"), Module("HumanResource"), TableName("designations")]
    [DisplayName("Designations"), InstanceName("Designations")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DesignationsRow : Row<DesignationsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Designation"), Size(255), NotNull, QuickSearch, NameProperty]
        public string Designation
        {
            get => fields.Designation[this];
            set => fields.Designation[this] = value;
        }

        [DisplayName("Description"), Size(255)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Parent Designation Id"), ForeignKey("designations", "Id"), LeftJoin("jParentDesignation"), TextualField("ParentDesignationDesignation")]
        [LookupInclude, DesignationsEditor]
        public int? ParentDesignationId
        {
            get => fields.ParentDesignationId[this];
            set => fields.ParentDesignationId[this] = value;
        }

        [DisplayName("Parent Designation"), Expression("jParentDesignation.[Designation]")]
        public String ParentDesignationDesignation
        {
            get { return Fields.ParentDesignationDesignation[this]; }
            set { Fields.ParentDesignationDesignation[this] = value; }
        }

        [DisplayName("Parent Designation Description"), Expression("jParentDesignation.[Description]")]
        public String ParentDesignationDescription
        {
            get { return Fields.ParentDesignationDescription[this]; }
            set { Fields.ParentDesignationDescription[this] = value; }
        }

        [DisplayName("Parent Designation Parent Designation Id"), Expression("jParentDesignation.[ParentDesignationId]")]
        public Int64? ParentDesignationParentDesignationId
        {
            get { return Fields.ParentDesignationParentDesignationId[this]; }
            set { Fields.ParentDesignationParentDesignationId[this] = value; }
        }

        public DesignationsRow()
            : base()
        {
        }

        public DesignationsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Designation;
            public StringField Description;
            public Int32Field ParentDesignationId;

            public StringField ParentDesignationDesignation;
            public StringField ParentDesignationDescription;
            public Int64Field ParentDesignationParentDesignationId;
        }
    }
}
