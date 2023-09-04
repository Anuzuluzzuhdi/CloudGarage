using CloudGarage.BusinessPartners;
using CloudGarage.Purchasing;
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
    [ConnectionKey("couldgarage"), Module("Inventory"), TableName("goodsreceipt")]
    [DisplayName("Goods Receipt"), InstanceName("Goodsreceipt")]
    [ReadPermission(PermissionKeys.GoodsReceipt.View)]
    [InsertPermission(PermissionKeys.GoodsReceipt.Create)]
    [UpdatePermission(PermissionKeys.GoodsReceipt.Update)]
    [DeletePermission(PermissionKeys.GoodsReceipt.Delete)]

    public sealed class GoodsreceiptRow : Row<GoodsreceiptRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Supplier"), NotNull, ForeignKey("suppliers", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(SuppliersRow))]
        public int? SupplierId
        {
            get => fields.SupplierId[this];
            set => fields.SupplierId[this] = value;
        }

        [DisplayName("Purchase"), NotNull, ForeignKey("purchase", "Id"), LeftJoin("jPurchase"), TextualField("PurchaseInvoiceNo")]
        [LookupEditor(typeof(PurchaseRow))]

        public int? PurchaseId
        {
            get => fields.PurchaseId[this];
            set => fields.PurchaseId[this] = value;
        }

        [DisplayName("Purchase Bill"), Expression("CONCAT('BILL - ', jPurchase.[Id])")]
        public string PurchaseBill
        {
            get { return Fields.PurchaseBill[this]; }
            set { Fields.PurchaseBill[this] = value; }
        }

        [DisplayName("Date")]
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

        [DisplayName("Employee"), ForeignKey("employees", "Id"), LeftJoin("jEmployeen"), TextualField("EmployeenFirstName")]
        [LookupInclude, LookupEditor(typeof(HumanResource.EmployeesRow), AutoComplete = true, InplaceAdd =true)]

        public int? EmployeenId
        {
            get => fields.EmployeenId[this];
            set => fields.EmployeenId[this] = value;
        }

        [DisplayName("Employee")]
        [Expression("CONCAT(jEmployeen.[FirstName], CONCAT(' ', jEmployeen.[LastName]))"), QuickSearch, NameProperty]
        public string EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }

        [MasterDetailRelation(foreignKey: "GoodsReceiptId")]
        [DisplayName("Line Items"), NotMapped]
        public List<GoodsreceiptdetailsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }

        [DisplayName("Remarks"), Size(255)]
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

        [DisplayName("Products"), ForeignKey("products", "Id"), LeftJoin("jProducts"), TextualField("GoodsReceiptProductName")]
        [LookupEditor(typeof(ProductsRow), InplaceAdd = true)]
        public int? ProductsId
        {
            get => fields.ProductsId[this];
            set => fields.ProductsId[this] = value;
        }

        //[DisplayName("GoodsReceiptProductName"), Expression("jProducts.[Name]")]
        //public string GoodsReceiptProductName
        //{
        //    get => fields.GoodsReceiptProductName[this];
        //    set => fields.GoodsReceiptProductName[this] = value;
        //}

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

        [DisplayName("Purchase Supplier Id"), Expression("jPurchase.[SupplierId]")]
        public int? PurchaseSupplierId
        {
            get => fields.PurchaseSupplierId[this];
            set => fields.PurchaseSupplierId[this] = value;
        }

        [DisplayName("Purchase Invoice No"), Expression("jPurchase.[InvoiceNo]")]
        public string PurchaseInvoiceNo
        {
            get => fields.PurchaseInvoiceNo[this];
            set => fields.PurchaseInvoiceNo[this] = value;
        }

        [DisplayName("Purchase Date"), Expression("jPurchase.[Date]")]
        public DateTime? PurchaseDate
        {
            get => fields.PurchaseDate[this];
            set => fields.PurchaseDate[this] = value;
        }

        [DisplayName("Purchase Payment Account"), Expression("jPurchase.[PaymentAccount]")]
        public int? PurchasePaymentAccount
        {
            get => fields.PurchasePaymentAccount[this];
            set => fields.PurchasePaymentAccount[this] = value;
        }

        [DisplayName("Purchase Discount"), Expression("jPurchase.[Discount]")]
        public double? PurchaseDiscount
        {
            get => fields.PurchaseDiscount[this];
            set => fields.PurchaseDiscount[this] = value;
        }

        [DisplayName("Purchase Total Discount"), Expression("jPurchase.[TotalDiscount]")]
        public double? PurchaseTotalDiscount
        {
            get => fields.PurchaseTotalDiscount[this];
            set => fields.PurchaseTotalDiscount[this] = value;
        }

        [DisplayName("Purchase Vat"), Expression("jPurchase.[Vat]")]
        public double? PurchaseVat
        {
            get => fields.PurchaseVat[this];
            set => fields.PurchaseVat[this] = value;
        }

        [DisplayName("Purchase Total Tax"), Expression("jPurchase.[TotalTax]")]
        public double? PurchaseTotalTax
        {
            get => fields.PurchaseTotalTax[this];
            set => fields.PurchaseTotalTax[this] = value;
        }

        [DisplayName("Purchase Shipping Cost"), Expression("jPurchase.[ShippingCost]")]
        public decimal? PurchaseShippingCost
        {
            get => fields.PurchaseShippingCost[this];
            set => fields.PurchaseShippingCost[this] = value;
        }

        [DisplayName("Purchase Grand Total"), Expression("jPurchase.[GrandTotal]")]
        public double? PurchaseGrandTotal
        {
            get => fields.PurchaseGrandTotal[this];
            set => fields.PurchaseGrandTotal[this] = value;
        }

        [DisplayName("Purchase Net Total"), Expression("jPurchase.[NetTotal]")]
        public double? PurchaseNetTotal
        {
            get => fields.PurchaseNetTotal[this];
            set => fields.PurchaseNetTotal[this] = value;
        }

        [DisplayName("Purchase Paid Amount"), Expression("jPurchase.[PaidAmount]")]
        public double? PurchasePaidAmount
        {
            get => fields.PurchasePaidAmount[this];
            set => fields.PurchasePaidAmount[this] = value;
        }

        [DisplayName("Purchase Due"), Expression("jPurchase.[Due]")]
        public double? PurchaseDue
        {
            get => fields.PurchaseDue[this];
            set => fields.PurchaseDue[this] = value;
        }

        [DisplayName("Purchase Change"), Expression("jPurchase.[Change]")]
        public double? PurchaseChange
        {
            get => fields.PurchaseChange[this];
            set => fields.PurchaseChange[this] = value;
        }

        [DisplayName("Purchase Details"), Expression("jPurchase.[Details]")]
        public string PurchaseDetails
        {
            get => fields.PurchaseDetails[this];
            set => fields.PurchaseDetails[this] = value;
        }

        [DisplayName("Purchase V No"), Expression("jPurchase.[VNo]")]
        public int? PurchaseVNo
        {
            get => fields.PurchaseVNo[this];
            set => fields.PurchaseVNo[this] = value;
        }

        [DisplayName("Purchase No Tax"), Expression("jPurchase.[NoTax]")]
        public short? PurchaseNoTax
        {
            get => fields.PurchaseNoTax[this];
            set => fields.PurchaseNoTax[this] = value;
        }

        [DisplayName("Employee"), Expression("jEmployeen.[FirstName]")]
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

        public GoodsreceiptRow()
            : base()
        {
        }

        public GoodsreceiptRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SupplierId;
            public Int32Field PurchaseId;
            public DateTimeField Date;
            public DoubleField TotalQuantity;
            public Int32Field EmployeenId;
            public StringField Remarks;
            public StringField JournalRemarks;
            public StringField Reference;
            public StringField PurchaseBill;

            public Int32Field BranchesId;
            public StringField BranchName;
            public Int32Field ProductsId;
            //public StringField GoodsReceiptProductName;
            public StringField EmployeeFullName;
            public readonly RowListField<GoodsreceiptdetailsRow> LineItems;




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

            public Int32Field PurchaseSupplierId;
            public StringField PurchaseInvoiceNo;
            public DateTimeField PurchaseDate;
            public Int32Field PurchasePaymentAccount;
            public DoubleField PurchaseDiscount;
            public DoubleField PurchaseTotalDiscount;
            public DoubleField PurchaseVat;
            public DoubleField PurchaseTotalTax;
            public DecimalField PurchaseShippingCost;
            public DoubleField PurchaseGrandTotal;
            public DoubleField PurchaseNetTotal;
            public DoubleField PurchasePaidAmount;
            public DoubleField PurchaseDue;
            public DoubleField PurchaseChange;
            public StringField PurchaseDetails;
            public Int32Field PurchaseVNo;
            public Int16Field PurchaseNoTax;

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
