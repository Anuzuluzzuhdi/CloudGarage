using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Masters
{
    [ConnectionKey("couldgarage"), Module("Masters"), TableName("territories")]
    [DisplayName("Territories"), InstanceName("Territories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TerritoriesRow : Row<TerritoriesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Territory Id"), Size(20), NotNull, QuickSearch, NameProperty]
        public string TerritoryId
        {
            get => fields.TerritoryId[this];
            set => fields.TerritoryId[this] = value;
        }

        [DisplayName("Territory Description"), Size(50), NotNull]
        public string TerritoryDescription
        {
            get => fields.TerritoryDescription[this];
            set => fields.TerritoryDescription[this] = value;
        }

        [DisplayName("Region Id"), NotNull, PrimaryKey, ForeignKey("regions", "Id"), LeftJoin("jRegion"), TextualField("RegionName")]
        [LookupEditor(typeof(RegionsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "CloudGarage.Masters.Regions")]
        public int? RegionId
        {
            get => fields.RegionId[this];
            set => fields.RegionId[this] = value;
        }

        [DisplayName("Region Name"), Expression("jRegion.[Name]")]
        public String RegionName
        {
            get { return Fields.RegionName[this]; }
            set { Fields.RegionName[this] = value; }
        }

        public TerritoriesRow()
            : base()
        {
        }

        public TerritoriesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TerritoryId;
            public StringField TerritoryDescription;
            public Int32Field RegionId;

            public StringField RegionName;
        }
    }
}
