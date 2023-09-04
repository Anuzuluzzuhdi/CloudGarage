using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.CashBank
{
    [ConnectionKey("couldgarage"), Module("CashBank"), TableName("supplierpayment")]
    [DisplayName("Supplier Payment"), InstanceName("Supplierpayment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SupplierpaymentRow : Row<SupplierpaymentRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Voucher No"), Size(255), QuickSearch, NameProperty]
        public string VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("Voucher Type"), NotNull, QuickFilter]
        public VoucherType? Vtype
        {
            get => (VoucherType?)fields.Vtype[this];
            set => fields.Vtype[this] = (Int32)value;
        }

        [DisplayName("Voucher Date"), NotNull]
        public DateTime? VDate
        {
            get => fields.VDate[this];
            set => fields.VDate[this] = value;
        }

        [DisplayName("Payment Type"), NotNull, ForeignKey("accounts", "Id"), LeftJoin("jCoa"), TextualField("CoaHeadName")]
        [LookupInclude, LookupEditor(typeof(Financial.AccountsCashLookup), AutoComplete = true)]
        public int? CoaId
        {
            get => fields.CoaId[this];
            set => fields.CoaId[this] = value;
        }

        [DisplayName("Supplier"), NotNull, ForeignKey("suppliers", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(BusinessPartners.SuppliersRow), InplaceAdd = true, DialogType = "CloudGarage.BusinessPartners.Suppliers")]
        public int? SupplierId
        {
            get => fields.SupplierId[this];
            set => fields.SupplierId[this] = value;
        }

        [DisplayName("Coa"), Size(255)]
        public string Coa
        {
            get => fields.Coa[this];
            set => fields.Coa[this] = value;
        }

        [DisplayName("Narration"), Size(255)]
        public string Narration
        {
            get => fields.Narration[this];
            set => fields.Narration[this] = value;
        }

        [DisplayName("Remark"), Size(2147483647), NotMapped]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [CurrencyFormatter]
        [DisplayName("Debit")]
        public double? Debit
        {
            get => fields.Debit[this];
            set => fields.Debit[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Credit")]
        public double? Credit
        {
            get => fields.Credit[this];
            set => fields.Credit[this] = value;
        }

        [DisplayName("Is Posted")]
        public Boolean? IsPosted
        {
            get => fields.IsPosted[this];
            set => fields.IsPosted[this] = value;
        }

        [DisplayName("Is Appove")]
        public Boolean? IsAppove
        {
            get => fields.IsAppove[this];
            set => fields.IsAppove[this] = value;
        }  
        
        [DisplayName("Is Active")]
        public Boolean? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Insert User Id")]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Coa Head Code"), Expression("jCoa.[HeadCode]")]
        public int? CoaHeadCode
        {
            get => fields.CoaHeadCode[this];
            set => fields.CoaHeadCode[this] = value;
        }

        [DisplayName("Coa Head Name"), Expression("jCoa.[HeadName]")]
        public string CoaHeadName
        {
            get => fields.CoaHeadName[this];
            set => fields.CoaHeadName[this] = value;
        }

        [DisplayName("Coa Parent Head"), Expression("jCoa.[ParentHead]")]
        public int? CoaParentHead
        {
            get => fields.CoaParentHead[this];
            set => fields.CoaParentHead[this] = value;
        }

        [DisplayName("Coa P Head Name"), Expression("jCoa.[PHeadName]")]
        public string CoaPHeadName
        {
            get => fields.CoaPHeadName[this];
            set => fields.CoaPHeadName[this] = value;
        }

        [DisplayName("Coa Head Level"), Expression("jCoa.[HeadLevel]")]
        public int? CoaHeadLevel
        {
            get => fields.CoaHeadLevel[this];
            set => fields.CoaHeadLevel[this] = value;
        }

        [DisplayName("Coa Head Type"), Expression("jCoa.[HeadType]")]
        public string CoaHeadType
        {
            get => fields.CoaHeadType[this];
            set => fields.CoaHeadType[this] = value;
        }

        [DisplayName("Coa Is Transaction"), Expression("jCoa.[IsTransaction]")]
        public short? CoaIsTransaction
        {
            get => fields.CoaIsTransaction[this];
            set => fields.CoaIsTransaction[this] = value;
        }

        [DisplayName("Coa Is Gl"), Expression("jCoa.[IsGl]")]
        public short? CoaIsGl
        {
            get => fields.CoaIsGl[this];
            set => fields.CoaIsGl[this] = value;
        }

        [DisplayName("Coa Is Budget"), Expression("jCoa.[IsBudget]")]
        public short? CoaIsBudget
        {
            get => fields.CoaIsBudget[this];
            set => fields.CoaIsBudget[this] = value;
        }

        [DisplayName("Coa Is Depreciation"), Expression("jCoa.[IsDepreciation]")]
        public short? CoaIsDepreciation
        {
            get => fields.CoaIsDepreciation[this];
            set => fields.CoaIsDepreciation[this] = value;
        }

        [DisplayName("Coa Customer Id"), Expression("jCoa.[CustomerId]")]
        public int? CoaCustomerId
        {
            get => fields.CoaCustomerId[this];
            set => fields.CoaCustomerId[this] = value;
        }

        [DisplayName("Coa Supplier Id"), Expression("jCoa.[SupplierId]")]
        public int? CoaSupplierId
        {
            get => fields.CoaSupplierId[this];
            set => fields.CoaSupplierId[this] = value;
        }

        [DisplayName("Coa Depreciation Rate"), Expression("jCoa.[DepreciationRate]")]
        public double? CoaDepreciationRate
        {
            get => fields.CoaDepreciationRate[this];
            set => fields.CoaDepreciationRate[this] = value;
        }

        [DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        public string SupplierCompanyName
        {
            get => fields.SupplierCompanyName[this];
            set => fields.SupplierCompanyName[this] = value;
        }

        [DisplayName("Supplier Country Id"), Expression("jSupplier.[CountryId]")]
        public int? SupplierCountryId
        {
            get => fields.SupplierCountryId[this];
            set => fields.SupplierCountryId[this] = value;
        }

        [DisplayName("Supplier State Id"), Expression("jSupplier.[StateId]")]
        public int? SupplierStateId
        {
            get => fields.SupplierStateId[this];
            set => fields.SupplierStateId[this] = value;
        }

        [DisplayName("Supplier City Id"), Expression("jSupplier.[CityId]")]
        public int? SupplierCityId
        {
            get => fields.SupplierCityId[this];
            set => fields.SupplierCityId[this] = value;
        }

        [DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        public string SupplierContactName
        {
            get => fields.SupplierContactName[this];
            set => fields.SupplierContactName[this] = value;
        }

        [DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        public string SupplierContactTitle
        {
            get => fields.SupplierContactTitle[this];
            set => fields.SupplierContactTitle[this] = value;
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public string SupplierAddress
        {
            get => fields.SupplierAddress[this];
            set => fields.SupplierAddress[this] = value;
        }

        [DisplayName("Supplier Region Id"), Expression("jSupplier.[RegionId]")]
        public int? SupplierRegionId
        {
            get => fields.SupplierRegionId[this];
            set => fields.SupplierRegionId[this] = value;
        }

        [DisplayName("Supplier Postal Code"), Expression("jSupplier.[PostalCode]")]
        public string SupplierPostalCode
        {
            get => fields.SupplierPostalCode[this];
            set => fields.SupplierPostalCode[this] = value;
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public string SupplierPhone
        {
            get => fields.SupplierPhone[this];
            set => fields.SupplierPhone[this] = value;
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public string SupplierFax
        {
            get => fields.SupplierFax[this];
            set => fields.SupplierFax[this] = value;
        }

        [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
        public string SupplierWebsite
        {
            get => fields.SupplierWebsite[this];
            set => fields.SupplierWebsite[this] = value;
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public string SupplierEmail
        {
            get => fields.SupplierEmail[this];
            set => fields.SupplierEmail[this] = value;
        }

        [DisplayName("Supplier Email Address"), Expression("jSupplier.[EmailAddress]")]
        public string SupplierEmailAddress
        {
            get => fields.SupplierEmailAddress[this];
            set => fields.SupplierEmailAddress[this] = value;
        }

        [DisplayName("Supplier Previous Credit Balance"), Expression("jSupplier.[PreviousCreditBalance]")]
        public double? SupplierPreviousCreditBalance
        {
            get => fields.SupplierPreviousCreditBalance[this];
            set => fields.SupplierPreviousCreditBalance[this] = value;
        }

        [DisplayName("Supplier Supplier Group Id"), Expression("jSupplier.[SupplierGroupId]")]
        public int? SupplierSupplierGroupId
        {
            get => fields.SupplierSupplierGroupId[this];
            set => fields.SupplierSupplierGroupId[this] = value;
        }

        public SupplierpaymentRow()
            : base()
        {
        }

        public SupplierpaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField VNo;
            public Int32Field Vtype;
            public DateTimeField VDate;
            public Int32Field CoaId;
            public Int32Field SupplierId;
            public StringField Coa;
            public StringField Narration;
            public DoubleField Debit;
            public DoubleField Credit;
            public BooleanField IsPosted;
            public BooleanField IsAppove;
            public BooleanField IsActive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;

            public Int32Field CoaHeadCode;
            public StringField CoaHeadName;
            public Int32Field CoaParentHead;
            public StringField CoaPHeadName;
            public Int32Field CoaHeadLevel;
            public StringField CoaHeadType;
            public Int16Field CoaIsTransaction;
            public Int16Field CoaIsGl;
            public Int16Field CoaIsBudget;
            public Int16Field CoaIsDepreciation;
            public Int32Field CoaCustomerId;
            public Int32Field CoaSupplierId;
            public DoubleField CoaDepreciationRate;

            public StringField SupplierCompanyName;
            public Int32Field SupplierCountryId;
            public Int32Field SupplierStateId;
            public Int32Field SupplierCityId;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierAddress;
            public Int32Field SupplierRegionId;
            public StringField SupplierPostalCode;
            public StringField SupplierPhone;
            public StringField SupplierFax;
            public StringField SupplierWebsite;
            public StringField SupplierEmail;
            public StringField SupplierEmailAddress;
            public DoubleField SupplierPreviousCreditBalance;
            public Int32Field SupplierSupplierGroupId;

            public StringField Remark;
        }
    }
}
