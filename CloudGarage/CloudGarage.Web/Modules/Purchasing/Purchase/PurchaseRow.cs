using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace CloudGarage.Purchasing
{
    [ConnectionKey("couldgarage"), Module("Purchasing"), TableName("purchase")]
    [DisplayName("Purchases"), InstanceName("Purchase")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PurchaseRow : Row<PurchaseRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Supplier"), NotNull, ForeignKey("suppliers", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(BusinessPartners.SuppliersRow), InplaceAdd = true, DialogType = "CloudGarage.BusinessPartners.Suppliers"), LookupInclude]
        public int? SupplierId
        {
            get => fields.SupplierId[this];
            set => fields.SupplierId[this] = value;
        }

        [DisplayName("Invoice No"), Size(100), QuickSearch, NameProperty]
        public string InvoiceNo
        {
            get => fields.InvoiceNo[this];
            set => fields.InvoiceNo[this] = value;
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Payment Account"), NotNull, ForeignKey("accounts", "Id"), LeftJoin("jPaymentAccount"), TextualField("PaymentAccountHeadName")]
        [LookupInclude, LookupEditor(typeof(Financial.AccountsCashLookup), AutoComplete = true)]
        public int? PaymentAccount
        {
            get => fields.PaymentAccount[this];
            set => fields.PaymentAccount[this] = value;
        }

        [DisplayName("Branch"), NotNull, ForeignKey("branches", "Id"), LeftJoin("jBranches"), TextualField("BranchName")]
        [LookupEditor(typeof(Masters.BranchesRow), InplaceAdd = true)]
        public int? BranchesId
        {
            get => fields.BranchesId[this];
            set => fields.BranchesId[this] = value;
        }
        [DisplayName("In"), Insertable(false), Updatable(false), NotNull]
        public DateTime? In
        {
            get => fields.In[this];
            set => fields.In[this] = value;
        }

        [DisplayName("In By")]
        public int? InBy
        {
            get => fields.InBy[this];
            set => fields.InBy[this] = value;
        }

        [DisplayName("Up"), Insertable(false), Updatable(false), NotNull]
        public DateTime? Up
        {
            get => fields.Up[this];
            set => fields.Up[this] = value;
        }

        [DisplayName("Up By")]
        public int? UpBy
        {
            get => fields.UpBy[this];
            set => fields.UpBy[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Total Discount"), NotNull]
        public double? TotalDiscount
        {
            get => fields.TotalDiscount[this];
            set => fields.TotalDiscount[this] = value;
        }

        [DisplayName("Vat"), NotNull]
        public double? Vat
        {
            get => fields.Vat[this];
            set => fields.Vat[this] = value;
        }
        [CurrencyFormatter]
        [DisplayName("Total Tax"), NotNull]
        public double? TotalTax
        {
            get => fields.TotalTax[this];
            set => fields.TotalTax[this] = value;
        }

        [DisplayName("Shipping Cost"), Size(10), Scale(2), NotNull]
        public decimal? ShippingCost
        {
            get => fields.ShippingCost[this];
            set => fields.ShippingCost[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Grand Total"), NotNull]
        public double? GrandTotal
        {
            get => fields.GrandTotal[this];
            set => fields.GrandTotal[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Net Total"), NotNull]
        public double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("Paid Amount"), NotNull]
        public double? PaidAmount
        {
            get => fields.PaidAmount[this];
            set => fields.PaidAmount[this] = value;
        }

        [CurrencyFormatter]
        [DisplayName("Due"), NotNull]
        public double? Due
        {
            get => fields.Due[this];
            set => fields.Due[this] = value;
        }

        [DisplayName("Change"), NotNull]
        public double? Change
        {
            get => fields.Change[this];
            set => fields.Change[this] = value;
        }

        [DisplayName("Details"), Size(255)]
        public string Details
        {
            get => fields.Details[this];
            set => fields.Details[this] = value;
        }

        [DisplayName("Line Items"), MasterDetailRelation(foreignKey: "PurchaseId"), NotMapped]
        public List<PurchasedetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }

        [DisplayName("V No")]
        public int? VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("No Tax"), NotNull]
        public short? NoTax
        {
            get => fields.NoTax[this];
            set => fields.NoTax[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranches.[Name]")]
        public string BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
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

        [DisplayName("Payment Account Head Code"), Expression("jPaymentAccount.[HeadCode]")]
        public int? PaymentAccountHeadCode
        {
            get => fields.PaymentAccountHeadCode[this];
            set => fields.PaymentAccountHeadCode[this] = value;
        }

        [DisplayName("Payment Account Head Name"), Expression("jPaymentAccount.[HeadName]")]
        public string PaymentAccountHeadName
        {
            get => fields.PaymentAccountHeadName[this];
            set => fields.PaymentAccountHeadName[this] = value;
        }

        [DisplayName("Payment Account Parent Head"), Expression("jPaymentAccount.[ParentHead]")]
        public int? PaymentAccountParentHead
        {
            get => fields.PaymentAccountParentHead[this];
            set => fields.PaymentAccountParentHead[this] = value;
        }

        [DisplayName("Payment Account P Head Name"), Expression("jPaymentAccount.[PHeadName]")]
        public string PaymentAccountPHeadName
        {
            get => fields.PaymentAccountPHeadName[this];
            set => fields.PaymentAccountPHeadName[this] = value;
        }

        [DisplayName("Payment Account Head Level"), Expression("jPaymentAccount.[HeadLevel]")]
        public int? PaymentAccountHeadLevel
        {
            get => fields.PaymentAccountHeadLevel[this];
            set => fields.PaymentAccountHeadLevel[this] = value;
        }

        [DisplayName("Payment Account Head Type"), Expression("jPaymentAccount.[HeadType]")]
        public string PaymentAccountHeadType
        {
            get => fields.PaymentAccountHeadType[this];
            set => fields.PaymentAccountHeadType[this] = value;
        }

        [DisplayName("Payment Account Is Transaction"), Expression("jPaymentAccount.[IsTransaction]")]
        public short? PaymentAccountIsTransaction
        {
            get => fields.PaymentAccountIsTransaction[this];
            set => fields.PaymentAccountIsTransaction[this] = value;
        }

        [DisplayName("Payment Account Is Gl"), Expression("jPaymentAccount.[IsGl]")]
        public short? PaymentAccountIsGl
        {
            get => fields.PaymentAccountIsGl[this];
            set => fields.PaymentAccountIsGl[this] = value;
        }

        [DisplayName("Payment Account Is Budget"), Expression("jPaymentAccount.[IsBudget]")]
        public short? PaymentAccountIsBudget
        {
            get => fields.PaymentAccountIsBudget[this];
            set => fields.PaymentAccountIsBudget[this] = value;
        }

        [DisplayName("Payment Account Is Depreciation"), Expression("jPaymentAccount.[IsDepreciation]")]
        public short? PaymentAccountIsDepreciation
        {
            get => fields.PaymentAccountIsDepreciation[this];
            set => fields.PaymentAccountIsDepreciation[this] = value;
        }

        [DisplayName("Payment Account Customer Id"), Expression("jPaymentAccount.[CustomerId]")]
        public int? PaymentAccountCustomerId
        {
            get => fields.PaymentAccountCustomerId[this];
            set => fields.PaymentAccountCustomerId[this] = value;
        }

        [DisplayName("Payment Account Supplier Id"), Expression("jPaymentAccount.[SupplierId]")]
        public int? PaymentAccountSupplierId
        {
            get => fields.PaymentAccountSupplierId[this];
            set => fields.PaymentAccountSupplierId[this] = value;
        }

        [DisplayName("Payment Account Depreciation Rate"), Expression("jPaymentAccount.[DepreciationRate]")]
        public double? PaymentAccountDepreciationRate
        {
            get => fields.PaymentAccountDepreciationRate[this];
            set => fields.PaymentAccountDepreciationRate[this] = value;
        }

        public PurchaseRow()
            : base()
        {
        }

        public PurchaseRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SupplierId;
            public StringField InvoiceNo;
            public DateTimeField Date;
            public Int32Field PaymentAccount;
            public DoubleField Discount;
            public DoubleField TotalDiscount;
            public DoubleField Vat;
            public DoubleField TotalTax;
            public DecimalField ShippingCost;
            public DoubleField GrandTotal;
            public DoubleField NetTotal;
            public DoubleField PaidAmount;
            public DoubleField Due;
            public DoubleField Change;
            public StringField Details;
            public Int32Field VNo;
            public Int16Field NoTax;
            public StringField BranchName;
            public Int32Field BranchesId;
            public DateTimeField In;
            public Int32Field InBy;
            public DateTimeField Up;
            public Int32Field UpBy;

            public readonly RowListField<PurchasedetailsRow> LineItems;

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

            public Int32Field PaymentAccountHeadCode;
            public StringField PaymentAccountHeadName;
            public Int32Field PaymentAccountParentHead;
            public StringField PaymentAccountPHeadName;
            public Int32Field PaymentAccountHeadLevel;
            public StringField PaymentAccountHeadType;
            public Int16Field PaymentAccountIsTransaction;
            public Int16Field PaymentAccountIsGl;
            public Int16Field PaymentAccountIsBudget;
            public Int16Field PaymentAccountIsDepreciation;
            public Int32Field PaymentAccountCustomerId;
            public Int32Field PaymentAccountSupplierId;
            public DoubleField PaymentAccountDepreciationRate;
        }
    }
}
