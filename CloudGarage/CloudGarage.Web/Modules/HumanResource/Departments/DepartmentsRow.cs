using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.HumanResource
{
    [ConnectionKey("couldgarage"), Module("HumanResource"), TableName("departments")]
    [DisplayName("Departments"), InstanceName("Departments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DepartmentsRow : Row<DepartmentsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Department"), Size(255), NotNull, QuickSearch, NameProperty]
        public string Department
        {
            get => fields.Department[this];
            set => fields.Department[this] = value;
        }

        [DisplayName("Description"), Size(255)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Parent Department Id"), ForeignKey("departments", "Id"), LeftJoin("jParentDepartment"), TextualField("ParentDepartmentDepartment")]
        [LookupInclude, DepartmentsEditor]
        public int? ParentDepartmentId
        {
            get => fields.ParentDepartmentId[this];
            set => fields.ParentDepartmentId[this] = value;
        }

        [DisplayName("Parent Department"), Expression("jParentDepartment.[Department]")]
        public String ParentDepartmentDepartment
        {
            get { return Fields.ParentDepartmentDepartment[this]; }
            set { Fields.ParentDepartmentDepartment[this] = value; }
        }

        [DisplayName("Parent Department Description"), Expression("jParentDepartment.[Description]")]
        public String ParentDepartmentDescription
        {
            get { return Fields.ParentDepartmentDescription[this]; }
            set { Fields.ParentDepartmentDescription[this] = value; }
        }

        [DisplayName("Parent Department Parent Department Id"), Expression("jParentDepartment.[ParentDepartmentId]")]
        public Int64? ParentDepartmentParentDepartmentId
        {
            get { return Fields.ParentDepartmentParentDepartmentId[this]; }
            set { Fields.ParentDepartmentParentDepartmentId[this] = value; }
        }

        public DepartmentsRow()
            : base()
        {
        }

        public DepartmentsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Department;
            public StringField Description;
            public Int32Field ParentDepartmentId;

            public StringField ParentDepartmentDepartment;
            public StringField ParentDepartmentDescription;
            public Int64Field ParentDepartmentParentDepartmentId;
        }
    }
}
