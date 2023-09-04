using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("categories")]
    [DisplayName("Categories"), InstanceName("Categories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class CategoriesRow : Row<CategoriesRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Description"), Size(255)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Parent Category"),PrimaryKey, ForeignKey("categories", "Id"), LeftJoin("jParentCategory"), TextualField("ParentCategoryName")]
        [LookupInclude, CategoriesEditor]
        public int? ParentCategoryId
        {
            get => fields.ParentCategoryId[this];
            set => fields.ParentCategoryId[this] = value;
        }
        [DisplayName("Parent Category Name"), Expression("jParentCategory.[Name]")]
        public String ParentCategoryName
        {
            get { return Fields.ParentCategoryName[this]; }
            set { Fields.ParentCategoryName[this] = value; }
        }

        [DisplayName("Parent Category Description"), Expression("jParentCategory.[Description]")]
        public String ParentCategoryDescription
        {
            get { return Fields.ParentCategoryDescription[this]; }
            set { Fields.ParentCategoryDescription[this] = value; }
        }

        [DisplayName("Parent Category Parent Category Id"), Expression("jParentCategory.[ParentCategoryId]")]
        public Int64? ParentCategoryParentCategoryId
        {
            get { return Fields.ParentCategoryParentCategoryId[this]; }
            set { Fields.ParentCategoryParentCategoryId[this] = value; }
        }
        public CategoriesRow()
            : base()
        {
        }

        public CategoriesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public Int32Field ParentCategoryId;
            public StringField ParentCategoryName;
            public StringField ParentCategoryDescription;
            public Int64Field ParentCategoryParentCategoryId;
        }
    }
}
