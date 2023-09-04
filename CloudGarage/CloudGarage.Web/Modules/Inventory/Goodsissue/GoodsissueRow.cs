using CloudGarage.BusinessPartners;
using CloudGarage.Sales;
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
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("goodsissue")]
    [DisplayName("Goods Issue"), InstanceName("Goodsissue")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class GoodsissueRow : Row<GoodsissueRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("customers", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow))]
        public int? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Sale"), NotNull, ForeignKey("sales", "Id"), LeftJoin("jSale"), TextualField("SaleDetails")]
        [LookupEditor(typeof(SalesRow))]
        public int? SaleId
        {
            get => fields.SaleId[this];
            set => fields.SaleId[this] = value;
        }

        [DisplayName("Date"), NotNull, NameProperty]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Total Quantity"), NotNull]
        public double? TotalQuantity
        {
            get => fields.TotalQuantity[this];
            set => fields.TotalQuantity[this] = value;
        }

        [DisplayName("Sales Person"), ForeignKey("employees", "Id"), LeftJoin("jEmployeen"), TextualField("EmployeenFirstName")]
        [LookupInclude, LookupEditor(typeof(HumanResource.EmployeesRow), AutoComplete = true)]
        public int? EmployeenId
        {
            get => fields.EmployeenId[this];
            set => fields.EmployeenId[this] = value;
        }

        [DisplayName("Remarks"), Size(255), QuickSearch]
        public string Remarks
        {
            get => fields.Remarks[this];
            set => fields.Remarks[this] = value;
        }

        [DisplayName("Journal Remarks"), Size(255)]
        public string JournalRemarks
        {
            get => fields.JournalRemarks[this];
            set => fields.JournalRemarks[this] = value;
        }

        [DisplayName("Reference"), Size(255)]
        public string Reference
        {
            get => fields.Reference[this];
            set => fields.Reference[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("branches", "Id"), LeftJoin("jBranches"), TextualField("BranchName")]
        [LookupEditor(typeof(Masters.BranchesRow), InplaceAdd = true)]
        public int? BranchesId
        {
            get => fields.BranchesId[this];
            set => fields.BranchesId[this] = value;
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

        [DisplayName("Sale Customer Id"), Expression("jSale.[CustomerId]")]
        public int? SaleCustomerId
        {
            get => fields.SaleCustomerId[this];
            set => fields.SaleCustomerId[this] = value;
        }

        [DisplayName("Sale Date"), Expression("jSale.[Date]")]
        public DateTime? SaleDate
        {
            get => fields.SaleDate[this];
            set => fields.SaleDate[this] = value;
        }

        [DisplayName("Sale Payment Account"), Expression("jSale.[PaymentAccount]")]
        public int? SalePaymentAccount
        {
            get => fields.SalePaymentAccount[this];
            set => fields.SalePaymentAccount[this] = value;
        }

        [DisplayName("Sale Discount"), Expression("jSale.[Discount]")]
        public double? SaleDiscount
        {
            get => fields.SaleDiscount[this];
            set => fields.SaleDiscount[this] = value;
        }

        [DisplayName("Sale Total Discount"), Expression("jSale.[TotalDiscount]")]
        public double? SaleTotalDiscount
        {
            get => fields.SaleTotalDiscount[this];
            set => fields.SaleTotalDiscount[this] = value;
        }

        [DisplayName("Sale Vat"), Expression("jSale.[Vat]")]
        public double? SaleVat
        {
            get => fields.SaleVat[this];
            set => fields.SaleVat[this] = value;
        }

        [DisplayName("Sale Total Tax"), Expression("jSale.[TotalTax]")]
        public double? SaleTotalTax
        {
            get => fields.SaleTotalTax[this];
            set => fields.SaleTotalTax[this] = value;
        }

        [DisplayName("Sale Shipping Cost"), Expression("jSale.[ShippingCost]")]
        public decimal? SaleShippingCost
        {
            get => fields.SaleShippingCost[this];
            set => fields.SaleShippingCost[this] = value;
        }

        [DisplayName("Sale Grand Total"), Expression("jSale.[GrandTotal]")]
        public double? SaleGrandTotal
        {
            get => fields.SaleGrandTotal[this];
            set => fields.SaleGrandTotal[this] = value;
        }

        [DisplayName("Sale Net Total"), Expression("jSale.[NetTotal]")]
        public double? SaleNetTotal
        {
            get => fields.SaleNetTotal[this];
            set => fields.SaleNetTotal[this] = value;
        }

        [DisplayName("Sale Paid Amount"), Expression("jSale.[PaidAmount]")]
        public double? SalePaidAmount
        {
            get => fields.SalePaidAmount[this];
            set => fields.SalePaidAmount[this] = value;
        }

        [DisplayName("Sale Due"), Expression("jSale.[Due]")]
        public double? SaleDue
        {
            get => fields.SaleDue[this];
            set => fields.SaleDue[this] = value;
        }

        [DisplayName("Sale Change"), Expression("jSale.[Change]")]
        public double? SaleChange
        {
            get => fields.SaleChange[this];
            set => fields.SaleChange[this] = value;
        }

        [DisplayName("Sale Details"), Expression("jSale.[Details]")]
        public string SaleDetails
        {
            get => fields.SaleDetails[this];
            set => fields.SaleDetails[this] = value;
        }

        [DisplayName("Sale V No"), Expression("jSale.[VNo]")]
        public int? SaleVNo
        {
            get => fields.SaleVNo[this];
            set => fields.SaleVNo[this] = value;
        }

        [DisplayName("Sale No Tax"), Expression("jSale.[NoTax]")]
        public short? SaleNoTax
        {
            get => fields.SaleNoTax[this];
            set => fields.SaleNoTax[this] = value;
        }

        [DisplayName("Employeen First Name"), Expression("jEmployeen.[FirstName]")]
        public string EmployeenFirstName
        {
            get => fields.EmployeenFirstName[this];
            set => fields.EmployeenFirstName[this] = value;
        }

        [DisplayName("Employeen Last Name"), Expression("jEmployeen.[LastName]")]
        public string EmployeenLastName
        {
            get => fields.EmployeenLastName[this];
            set => fields.EmployeenLastName[this] = value;
        }

        [DisplayName("Employeen Designation Id"), Expression("jEmployeen.[DesignationId]")]
        public int? EmployeenDesignationId
        {
            get => fields.EmployeenDesignationId[this];
            set => fields.EmployeenDesignationId[this] = value;
        }

        [DisplayName("Employeen Department Id"), Expression("jEmployeen.[DepartmentId]")]
        public int? EmployeenDepartmentId
        {
            get => fields.EmployeenDepartmentId[this];
            set => fields.EmployeenDepartmentId[this] = value;
        }

        [DisplayName("Employeen Rate Type"), Expression("jEmployeen.[RateType]")]
        public int? EmployeenRateType
        {
            get => fields.EmployeenRateType[this];
            set => fields.EmployeenRateType[this] = value;
        }

        [DisplayName("Employeen Phone"), Expression("jEmployeen.[Phone]")]
        public string EmployeenPhone
        {
            get => fields.EmployeenPhone[this];
            set => fields.EmployeenPhone[this] = value;
        }

        [DisplayName("Employeen Houre Rate Salary"), Expression("jEmployeen.[HoureRateSalary]")]
        public double? EmployeenHoureRateSalary
        {
            get => fields.EmployeenHoureRateSalary[this];
            set => fields.EmployeenHoureRateSalary[this] = value;
        }

        [DisplayName("Employeen Email"), Expression("jEmployeen.[Email]")]
        public string EmployeenEmail
        {
            get => fields.EmployeenEmail[this];
            set => fields.EmployeenEmail[this] = value;
        }

        [DisplayName("Employeen Blood Group"), Expression("jEmployeen.[BloodGroup]")]
        public int? EmployeenBloodGroup
        {
            get => fields.EmployeenBloodGroup[this];
            set => fields.EmployeenBloodGroup[this] = value;
        }

        [DisplayName("Employeen Picture"), Expression("jEmployeen.[Picture]")]
        public string EmployeenPicture
        {
            get => fields.EmployeenPicture[this];
            set => fields.EmployeenPicture[this] = value;
        }

        [DisplayName("Employeen Country Id"), Expression("jEmployeen.[CountryId]")]
        public int? EmployeenCountryId
        {
            get => fields.EmployeenCountryId[this];
            set => fields.EmployeenCountryId[this] = value;
        }

        [DisplayName("Employeen State Id"), Expression("jEmployeen.[StateId]")]
        public int? EmployeenStateId
        {
            get => fields.EmployeenStateId[this];
            set => fields.EmployeenStateId[this] = value;
        }

        [DisplayName("Employeen City Id"), Expression("jEmployeen.[CityId]")]
        public int? EmployeenCityId
        {
            get => fields.EmployeenCityId[this];
            set => fields.EmployeenCityId[this] = value;
        }

        [DisplayName("Employeen Zip Code"), Expression("jEmployeen.[ZipCode]")]
        public string EmployeenZipCode
        {
            get => fields.EmployeenZipCode[this];
            set => fields.EmployeenZipCode[this] = value;
        }

        [DisplayName("Employeen Address"), Expression("jEmployeen.[Address]")]
        public string EmployeenAddress
        {
            get => fields.EmployeenAddress[this];
            set => fields.EmployeenAddress[this] = value;
        }

        [DisplayName("Employeen User Id"), Expression("jEmployeen.[UserId]")]
        public int? EmployeenUserId
        {
            get => fields.EmployeenUserId[this];
            set => fields.EmployeenUserId[this] = value;
        }

        [DisplayName("Employeen Region Id"), Expression("jEmployeen.[RegionId]")]
        public int? EmployeenRegionId
        {
            get => fields.EmployeenRegionId[this];
            set => fields.EmployeenRegionId[this] = value;
        }

        [DisplayName("Employeen Territory Id"), Expression("jEmployeen.[TerritoryId]")]
        public int? EmployeenTerritoryId
        {
            get => fields.EmployeenTerritoryId[this];
            set => fields.EmployeenTerritoryId[this] = value;
        }

        [MasterDetailRelation(foreignKey: "GoodsIssueId", IncludeColumns = "Name,Quntity,Total")]
        [DisplayName("Line Items"), NotMapped]
        public List<GoodsissuedetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }

        [DisplayName("Sale Invoice"), Column("SaleInvoice"), Expression("CONCAT('INV - ', jSale.[Id])")]
        public string SaleInvoice
        {
            get { return Fields.SaleInvoice[this]; }
            set { Fields.SaleInvoice[this] = value; }
        }

        public GoodsissueRow()
            : base()
        {
        }

        public GoodsissueRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CustomerId;
            public Int32Field SaleId;
            public DateTimeField Date;
            public DoubleField TotalQuantity;
            public Int32Field EmployeenId;
            public StringField Remarks;
            public StringField JournalRemarks;
            public StringField Reference;

            public StringField SaleInvoice;

            public Int32Field BranchesId;
            public StringField BranchName;

            public readonly RowListField<GoodsissuedetailsRow> LineItems;

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

            public Int32Field SaleCustomerId;
            public DateTimeField SaleDate;
            public Int32Field SalePaymentAccount;
            public DoubleField SaleDiscount;
            public DoubleField SaleTotalDiscount;
            public DoubleField SaleVat;
            public DoubleField SaleTotalTax;
            public DecimalField SaleShippingCost;
            public DoubleField SaleGrandTotal;
            public DoubleField SaleNetTotal;
            public DoubleField SalePaidAmount;
            public DoubleField SaleDue;
            public DoubleField SaleChange;
            public StringField SaleDetails;
            public Int32Field SaleVNo;
            public Int16Field SaleNoTax;

            public StringField EmployeenFirstName;
            public StringField EmployeenLastName;
            public Int32Field EmployeenDesignationId;
            public Int32Field EmployeenDepartmentId;
            public Int32Field EmployeenRateType;
            public StringField EmployeenPhone;
            public DoubleField EmployeenHoureRateSalary;
            public StringField EmployeenEmail;
            public Int32Field EmployeenBloodGroup;
            public StringField EmployeenPicture;
            public Int32Field EmployeenCountryId;
            public Int32Field EmployeenStateId;
            public Int32Field EmployeenCityId;
            public StringField EmployeenZipCode;
            public StringField EmployeenAddress;
            public Int32Field EmployeenUserId;
            public Int32Field EmployeenRegionId;
            public Int32Field EmployeenTerritoryId;
        }
    }
}
