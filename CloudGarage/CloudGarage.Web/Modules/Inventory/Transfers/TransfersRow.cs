using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Inventory
{
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("transfers")]
    [DisplayName("Transfers"), InstanceName("Transfers")]
    [ReadPermission(PermissionKeys.Transfers.View)]
    [InsertPermission(PermissionKeys.Transfers.Create)]
    [UpdatePermission(PermissionKeys.Transfers.Update)]
    [DeletePermission(PermissionKeys.Transfers.Delete)]
    public sealed class TransfersRow : Row<TransfersRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("V No")]
        public int? VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("From Branch"), NotNull, ForeignKey("branches", "Id"), LeftJoin("jFromBranch"), TextualField("FromBranchName")]
        [LookupEditor(typeof(Masters.BranchesRow))]

        public int? FromBranchId
        {
            get => fields.FromBranchId[this];
            set => fields.FromBranchId[this] = value;
        }

        [DisplayName("To Branch"), NotNull, ForeignKey("branches", "Id"), LeftJoin("jToBranch"), TextualField("ToBranchName")]
        [LookupEditor(typeof(Masters.BranchesRow))]
        public int? ToBranchId
        {
            get => fields.ToBranchId[this];
            set => fields.ToBranchId[this] = value;
        }

        [DisplayName("From Warehouse"), NotNull, ForeignKey("warehouses", "Id"), LeftJoin("jFromWarehouse"), TextualField("FromWarehouseName")]
        [LookupEditor(typeof(Masters.WarehousesRow))]
        public int? FromWarehouseId
        {
            get => fields.FromWarehouseId[this];
            set => fields.FromWarehouseId[this] = value;
        }

        [DisplayName("To Warehouse"), NotNull, ForeignKey("warehouses", "Id"), LeftJoin("jToWarehouse"), TextualField("ToWarehouseName")]
        [LookupEditor(typeof(Masters.WarehousesRow))]
        public int? ToWarehouseId
        {
            get => fields.ToWarehouseId[this];
            set => fields.ToWarehouseId[this] = value;
        }

        [DisplayName("Status"), NotNull, DefaultValue(StatusKind.Complete)]
        public StatusKindTf? Status
        {
            get => (StatusKindTf?)fields.Status[this];
            set => fields.Status[this] = (Int32)value;
        }

        [MasterDetailRelation(foreignKey: "TransferId")]
        [DisplayName("Line Items"), NotMapped]
        public List<TransferdetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }


        [DisplayName("Total Quantity")]
        public double? TotalQuantity
        {
            get => fields.TotalQuantity[this];
            set => fields.TotalQuantity[this] = value;
        }

        [DisplayName("From Branch"), Expression("jFromBranch.[Name]")]
        public string FromBranchName
        {
            get => fields.FromBranchName[this];
            set => fields.FromBranchName[this] = value;
        }

        [DisplayName("From Branch Description"), Expression("jFromBranch.[Description]")]
        public string FromBranchDescription
        {
            get => fields.FromBranchDescription[this];
            set => fields.FromBranchDescription[this] = value;
        }

        [DisplayName("From Branch Address"), Expression("jFromBranch.[Address]")]
        public string FromBranchAddress
        {
            get => fields.FromBranchAddress[this];
            set => fields.FromBranchAddress[this] = value;
        }

        [DisplayName("From Branch City"), Expression("jFromBranch.[City]")]
        public int? FromBranchCity
        {
            get => fields.FromBranchCity[this];
            set => fields.FromBranchCity[this] = value;
        }

        [DisplayName("From Branch State"), Expression("jFromBranch.[State]")]
        public int? FromBranchState
        {
            get => fields.FromBranchState[this];
            set => fields.FromBranchState[this] = value;
        }

        [DisplayName("From Branch Country"), Expression("jFromBranch.[Country]")]
        public int? FromBranchCountry
        {
            get => fields.FromBranchCountry[this];
            set => fields.FromBranchCountry[this] = value;
        }

        [DisplayName("From Branch Email"), Expression("jFromBranch.[Email]")]
        public string FromBranchEmail
        {
            get => fields.FromBranchEmail[this];
            set => fields.FromBranchEmail[this] = value;
        }

        [DisplayName("From Branch Phone1"), Expression("jFromBranch.[Phone1]")]
        public string FromBranchPhone1
        {
            get => fields.FromBranchPhone1[this];
            set => fields.FromBranchPhone1[this] = value;
        }

        [DisplayName("From Branch Phone2"), Expression("jFromBranch.[Phone2]")]
        public string FromBranchPhone2
        {
            get => fields.FromBranchPhone2[this];
            set => fields.FromBranchPhone2[this] = value;
        }

        [DisplayName("From Branch Use Branch Address"), Expression("jFromBranch.[UseBranchAddress]")]
        public short? FromBranchUseBranchAddress
        {
            get => fields.FromBranchUseBranchAddress[this];
            set => fields.FromBranchUseBranchAddress[this] = value;
        }

        [DisplayName("From Branch Vat Percentage"), Expression("jFromBranch.[VatPercentage]")]
        public double? FromBranchVatPercentage
        {
            get => fields.FromBranchVatPercentage[this];
            set => fields.FromBranchVatPercentage[this] = value;
        }

        [DisplayName("From Branch Logo"), Expression("jFromBranch.[Logo]")]
        public string FromBranchLogo
        {
            get => fields.FromBranchLogo[this];
            set => fields.FromBranchLogo[this] = value;
        }

        [DisplayName("From Branch Insert User Id"), Expression("jFromBranch.[InsertUserId]")]
        public int? FromBranchInsertUserId
        {
            get => fields.FromBranchInsertUserId[this];
            set => fields.FromBranchInsertUserId[this] = value;
        }

        [DisplayName("From Branch Insert Date"), Expression("jFromBranch.[InsertDate]")]
        public DateTime? FromBranchInsertDate
        {
            get => fields.FromBranchInsertDate[this];
            set => fields.FromBranchInsertDate[this] = value;
        }

        [DisplayName("From Branch Update User Id"), Expression("jFromBranch.[UpdateUserId]")]
        public int? FromBranchUpdateUserId
        {
            get => fields.FromBranchUpdateUserId[this];
            set => fields.FromBranchUpdateUserId[this] = value;
        }

        [DisplayName("From Branch Update Date"), Expression("jFromBranch.[UpdateDate]")]
        public DateTime? FromBranchUpdateDate
        {
            get => fields.FromBranchUpdateDate[this];
            set => fields.FromBranchUpdateDate[this] = value;
        }

        [DisplayName("From Branch Delete User Id"), Expression("jFromBranch.[DeleteUserId]")]
        public int? FromBranchDeleteUserId
        {
            get => fields.FromBranchDeleteUserId[this];
            set => fields.FromBranchDeleteUserId[this] = value;
        }

        [DisplayName("From Branch Delete Date"), Expression("jFromBranch.[DeleteDate]")]
        public DateTime? FromBranchDeleteDate
        {
            get => fields.FromBranchDeleteDate[this];
            set => fields.FromBranchDeleteDate[this] = value;
        }

        [DisplayName("From Branch Is Active"), Expression("jFromBranch.[IsActive]")]
        public int? FromBranchIsActive
        {
            get => fields.FromBranchIsActive[this];
            set => fields.FromBranchIsActive[this] = value;
        }

        [DisplayName("To Branch"), Expression("jToBranch.[Name]")]
        public string ToBranchName
        {
            get => fields.ToBranchName[this];
            set => fields.ToBranchName[this] = value;
        }

        [DisplayName("To Branch Description"), Expression("jToBranch.[Description]")]
        public string ToBranchDescription
        {
            get => fields.ToBranchDescription[this];
            set => fields.ToBranchDescription[this] = value;
        }

        [DisplayName("To Branch Address"), Expression("jToBranch.[Address]")]
        public string ToBranchAddress
        {
            get => fields.ToBranchAddress[this];
            set => fields.ToBranchAddress[this] = value;
        }

        [DisplayName("To Branch City"), Expression("jToBranch.[City]")]
        public int? ToBranchCity
        {
            get => fields.ToBranchCity[this];
            set => fields.ToBranchCity[this] = value;
        }

        [DisplayName("To Branch State"), Expression("jToBranch.[State]")]
        public int? ToBranchState
        {
            get => fields.ToBranchState[this];
            set => fields.ToBranchState[this] = value;
        }

        [DisplayName("To Branch Country"), Expression("jToBranch.[Country]")]
        public int? ToBranchCountry
        {
            get => fields.ToBranchCountry[this];
            set => fields.ToBranchCountry[this] = value;
        }

        [DisplayName("To Branch Email"), Expression("jToBranch.[Email]")]
        public string ToBranchEmail
        {
            get => fields.ToBranchEmail[this];
            set => fields.ToBranchEmail[this] = value;
        }

        [DisplayName("To Branch Phone1"), Expression("jToBranch.[Phone1]")]
        public string ToBranchPhone1
        {
            get => fields.ToBranchPhone1[this];
            set => fields.ToBranchPhone1[this] = value;
        }

        [DisplayName("To Branch Phone2"), Expression("jToBranch.[Phone2]")]
        public string ToBranchPhone2
        {
            get => fields.ToBranchPhone2[this];
            set => fields.ToBranchPhone2[this] = value;
        }

        [DisplayName("To Branch Use Branch Address"), Expression("jToBranch.[UseBranchAddress]")]
        public short? ToBranchUseBranchAddress
        {
            get => fields.ToBranchUseBranchAddress[this];
            set => fields.ToBranchUseBranchAddress[this] = value;
        }

        [DisplayName("To Branch Vat Percentage"), Expression("jToBranch.[VatPercentage]")]
        public double? ToBranchVatPercentage
        {
            get => fields.ToBranchVatPercentage[this];
            set => fields.ToBranchVatPercentage[this] = value;
        }

        [DisplayName("To Branch Logo"), Expression("jToBranch.[Logo]")]
        public string ToBranchLogo
        {
            get => fields.ToBranchLogo[this];
            set => fields.ToBranchLogo[this] = value;
        }

        [DisplayName("To Branch Insert User Id"), Expression("jToBranch.[InsertUserId]")]
        public int? ToBranchInsertUserId
        {
            get => fields.ToBranchInsertUserId[this];
            set => fields.ToBranchInsertUserId[this] = value;
        }

        [DisplayName("To Branch Insert Date"), Expression("jToBranch.[InsertDate]")]
        public DateTime? ToBranchInsertDate
        {
            get => fields.ToBranchInsertDate[this];
            set => fields.ToBranchInsertDate[this] = value;
        }

        [DisplayName("To Branch Update User Id"), Expression("jToBranch.[UpdateUserId]")]
        public int? ToBranchUpdateUserId
        {
            get => fields.ToBranchUpdateUserId[this];
            set => fields.ToBranchUpdateUserId[this] = value;
        }

        [DisplayName("To Branch Update Date"), Expression("jToBranch.[UpdateDate]")]
        public DateTime? ToBranchUpdateDate
        {
            get => fields.ToBranchUpdateDate[this];
            set => fields.ToBranchUpdateDate[this] = value;
        }

        [DisplayName("To Branch Delete User Id"), Expression("jToBranch.[DeleteUserId]")]
        public int? ToBranchDeleteUserId
        {
            get => fields.ToBranchDeleteUserId[this];
            set => fields.ToBranchDeleteUserId[this] = value;
        }

        [DisplayName("To Branch Delete Date"), Expression("jToBranch.[DeleteDate]")]
        public DateTime? ToBranchDeleteDate
        {
            get => fields.ToBranchDeleteDate[this];
            set => fields.ToBranchDeleteDate[this] = value;
        }

        [DisplayName("To Branch Is Active"), Expression("jToBranch.[IsActive]")]
        public int? ToBranchIsActive
        {
            get => fields.ToBranchIsActive[this];
            set => fields.ToBranchIsActive[this] = value;
        }

        [DisplayName("From Warehouse"), Expression("jFromWarehouse.[Name]")]
        public string FromWarehouseName
        {
            get => fields.FromWarehouseName[this];
            set => fields.FromWarehouseName[this] = value;
        }

        [DisplayName("From Warehouse Description"), Expression("jFromWarehouse.[Description]")]
        public string FromWarehouseDescription
        {
            get => fields.FromWarehouseDescription[this];
            set => fields.FromWarehouseDescription[this] = value;
        }

        [DisplayName("From Warehouse Country Id"), Expression("jFromWarehouse.[CountryId]")]
        public int? FromWarehouseCountryId
        {
            get => fields.FromWarehouseCountryId[this];
            set => fields.FromWarehouseCountryId[this] = value;
        }

        [DisplayName("From Warehouse State Id"), Expression("jFromWarehouse.[StateId]")]
        public int? FromWarehouseStateId
        {
            get => fields.FromWarehouseStateId[this];
            set => fields.FromWarehouseStateId[this] = value;
        }

        [DisplayName("From Warehouse City Id"), Expression("jFromWarehouse.[CityId]")]
        public int? FromWarehouseCityId
        {
            get => fields.FromWarehouseCityId[this];
            set => fields.FromWarehouseCityId[this] = value;
        }

        [DisplayName("From Warehouse Phone"), Expression("jFromWarehouse.[Phone]")]
        public string FromWarehousePhone
        {
            get => fields.FromWarehousePhone[this];
            set => fields.FromWarehousePhone[this] = value;
        }

        [DisplayName("From Warehouse Address"), Expression("jFromWarehouse.[Address]")]
        public string FromWarehouseAddress
        {
            get => fields.FromWarehouseAddress[this];
            set => fields.FromWarehouseAddress[this] = value;
        }

        [DisplayName("To Warehouse"), Expression("jToWarehouse.[Name]")]
        public string ToWarehouseName
        {
            get => fields.ToWarehouseName[this];
            set => fields.ToWarehouseName[this] = value;
        }

        [DisplayName("To Warehouse Description"), Expression("jToWarehouse.[Description]")]
        public string ToWarehouseDescription
        {
            get => fields.ToWarehouseDescription[this];
            set => fields.ToWarehouseDescription[this] = value;
        }

        [DisplayName("To Warehouse Country Id"), Expression("jToWarehouse.[CountryId]")]
        public int? ToWarehouseCountryId
        {
            get => fields.ToWarehouseCountryId[this];
            set => fields.ToWarehouseCountryId[this] = value;
        }

        [DisplayName("To Warehouse State Id"), Expression("jToWarehouse.[StateId]")]
        public int? ToWarehouseStateId
        {
            get => fields.ToWarehouseStateId[this];
            set => fields.ToWarehouseStateId[this] = value;
        }

        [DisplayName("To Warehouse City Id"), Expression("jToWarehouse.[CityId]")]
        public int? ToWarehouseCityId
        {
            get => fields.ToWarehouseCityId[this];
            set => fields.ToWarehouseCityId[this] = value;
        }

        [DisplayName("To Warehouse Phone"), Expression("jToWarehouse.[Phone]")]
        public string ToWarehousePhone
        {
            get => fields.ToWarehousePhone[this];
            set => fields.ToWarehousePhone[this] = value;
        }

        [DisplayName("To Warehouse Address"), Expression("jToWarehouse.[Address]")]
        public string ToWarehouseAddress
        {
            get => fields.ToWarehouseAddress[this];
            set => fields.ToWarehouseAddress[this] = value;
        }

        public TransfersRow()
            : base()
        {
        }

        public TransfersRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VNo;
            public Int32Field FromBranchId;
            public Int32Field ToBranchId;
            public Int32Field FromWarehouseId;
            public Int32Field ToWarehouseId;
            public Int32Field Status;
            public DoubleField TotalQuantity;
            public readonly RowListField<TransferdetailsRow> LineItems;

            public StringField FromBranchName;
            public StringField FromBranchDescription;
            public StringField FromBranchAddress;
            public Int32Field FromBranchCity;
            public Int32Field FromBranchState;
            public Int32Field FromBranchCountry;
            public StringField FromBranchEmail;
            public StringField FromBranchPhone1;
            public StringField FromBranchPhone2;
            public Int16Field FromBranchUseBranchAddress;
            public DoubleField FromBranchVatPercentage;
            public StringField FromBranchLogo;
            public Int32Field FromBranchInsertUserId;
            public DateTimeField FromBranchInsertDate;
            public Int32Field FromBranchUpdateUserId;
            public DateTimeField FromBranchUpdateDate;
            public Int32Field FromBranchDeleteUserId;
            public DateTimeField FromBranchDeleteDate;
            public Int32Field FromBranchIsActive;

            public StringField ToBranchName;
            public StringField ToBranchDescription;
            public StringField ToBranchAddress;
            public Int32Field ToBranchCity;
            public Int32Field ToBranchState;
            public Int32Field ToBranchCountry;
            public StringField ToBranchEmail;
            public StringField ToBranchPhone1;
            public StringField ToBranchPhone2;
            public Int16Field ToBranchUseBranchAddress;
            public DoubleField ToBranchVatPercentage;
            public StringField ToBranchLogo;
            public Int32Field ToBranchInsertUserId;
            public DateTimeField ToBranchInsertDate;
            public Int32Field ToBranchUpdateUserId;
            public DateTimeField ToBranchUpdateDate;
            public Int32Field ToBranchDeleteUserId;
            public DateTimeField ToBranchDeleteDate;
            public Int32Field ToBranchIsActive;

            public StringField FromWarehouseName;
            public StringField FromWarehouseDescription;
            public Int32Field FromWarehouseCountryId;
            public Int32Field FromWarehouseStateId;
            public Int32Field FromWarehouseCityId;
            public StringField FromWarehousePhone;
            public StringField FromWarehouseAddress;

            public StringField ToWarehouseName;
            public StringField ToWarehouseDescription;
            public Int32Field ToWarehouseCountryId;
            public Int32Field ToWarehouseStateId;
            public Int32Field ToWarehouseCityId;
            public StringField ToWarehousePhone;
            public StringField ToWarehouseAddress;
        }
    }
}
