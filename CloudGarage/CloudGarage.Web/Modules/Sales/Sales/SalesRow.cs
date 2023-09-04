using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using CloudGarage.BusinessPartners;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;
using System.Collections.Generic;
using CloudGarage.Masters;

namespace CloudGarage.Sales
{
    [ConnectionKey("couldgarage"), Module("Sales"), TableName("sales")]
    [DisplayName("Sales"), InstanceName("Sales")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SalesRow : Row<SalesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true, DialogType = "CloudGarage.BusinessPartners.Customers"), LookupInclude]
        public int? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Date"), NotNull, NameProperty]
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

        [DisplayName("Branch"), ForeignKey("branches", "Id"), LeftJoin("jBranches"), TextualField("BranchName")]
        [LookupEditor(typeof(BranchesRow), InplaceAdd = true)]
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

        [CurrencyFormatter]
        [DisplayName("Vat"), NotNull]
        public double? Vat
        {
            get => fields.Vat[this];
            set => fields.Vat[this] = value;
        }

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

        //[MasterDetailRelation(foreignKey: "SaleId", IncludeColumns = "Name,Quntity,UnitPrice,Total")]
        //[DisplayName("Line Items"), NotMapped]
        //public List<SaledetailsRow> LineItems
        //{
        //    get { return Fields.LineItems[this]; }
        //    set { Fields.LineItems[this] = value; }
        //}

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "SaleId"), NotMapped]
        public List<SaledetailsRow> LineItems
        {
            get => fields.LineItems[this];
            set => fields.LineItems[this] = value;
        }

        [DisplayName("Details"), Size(255), QuickSearch]
        public string Details
        {
            get => fields.Details[this];
            set => fields.Details[this] = value;
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

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public string CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public string CustomerContactName
        {
            get => fields.CustomerContactName[this];
            set => fields.CustomerContactName[this] = value;
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public string CustomerContactTitle
        {
            get => fields.CustomerContactTitle[this];
            set => fields.CustomerContactTitle[this] = value;
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public int? CustomerCountryId
        {
            get => fields.CustomerCountryId[this];
            set => fields.CustomerCountryId[this] = value;
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public int? CustomerStateId
        {
            get => fields.CustomerStateId[this];
            set => fields.CustomerStateId[this] = value;
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityId]")]
        public int? CustomerCityId
        {
            get => fields.CustomerCityId[this];
            set => fields.CustomerCityId[this] = value;
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public string CustomerAddress
        {
            get => fields.CustomerAddress[this];
            set => fields.CustomerAddress[this] = value;
        }

        [DisplayName("Customer Region Id"), Expression("jCustomer.[RegionId]")]
        public int? CustomerRegionId
        {
            get => fields.CustomerRegionId[this];
            set => fields.CustomerRegionId[this] = value;
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public string CustomerPostalCode
        {
            get => fields.CustomerPostalCode[this];
            set => fields.CustomerPostalCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public string CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public string CustomerFax
        {
            get => fields.CustomerFax[this];
            set => fields.CustomerFax[this] = value;
        }

        [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
        public string CustomerWebsite
        {
            get => fields.CustomerWebsite[this];
            set => fields.CustomerWebsite[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public string CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Customer Email Address"), Expression("jCustomer.[EmailAddress]")]
        public string CustomerEmailAddress
        {
            get => fields.CustomerEmailAddress[this];
            set => fields.CustomerEmailAddress[this] = value;
        }

        [DisplayName("Customer Previous Credit Balance"), Expression("jCustomer.[PreviousCreditBalance]")]
        public double? CustomerPreviousCreditBalance
        {
            get => fields.CustomerPreviousCreditBalance[this];
            set => fields.CustomerPreviousCreditBalance[this] = value;
        }

        [DisplayName("Customer Customer Group Id"), Expression("jCustomer.[CustomerGroupId]")]
        public int? CustomerCustomerGroupId
        {
            get => fields.CustomerCustomerGroupId[this];
            set => fields.CustomerCustomerGroupId[this] = value;
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

        public SalesRow()
            : base()
        {
        }

        public SalesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CustomerId;
            public DateTimeField Date;
            public Int32Field PaymentAccount;
            public Int32Field BranchesId;
            public DateTimeField In;
            public Int32Field InBy;
            public DateTimeField Up;
            public Int32Field UpBy;
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
            public readonly RowListField<SaledetailsRow> LineItems;
            public Int32Field VNo;
            public Int16Field NoTax;
            public StringField BranchName;

            public StringField CustomerName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public Int32Field CustomerCountryId;
            public Int32Field CustomerStateId;
            public Int32Field CustomerCityId;
            public StringField CustomerAddress;
            public Int32Field CustomerRegionId;
            public StringField CustomerPostalCode;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public StringField CustomerWebsite;
            public StringField CustomerEmail;
            public StringField CustomerEmailAddress;
            public DoubleField CustomerPreviousCreditBalance;
            public Int32Field CustomerCustomerGroupId;

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
