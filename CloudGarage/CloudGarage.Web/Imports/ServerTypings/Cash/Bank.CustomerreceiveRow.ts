
namespace CloudGarage.Cash/Bank {
    export interface CustomerreceiveRow {
        Id?: number;
        VNo?: string;
        Vtype?: string;
        VDate?: string;
        CoaId?: number;
        CustomerId?: number;
        Coa?: string;
        Narration?: string;
        Debit?: number;
        Credit?: number;
        IsPosted?: number;
        IsAppove?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CoaHeadCode?: number;
        CoaHeadName?: string;
        CoaParentHead?: number;
        CoaPHeadName?: string;
        CoaHeadLevel?: number;
        CoaHeadType?: string;
        CoaIsTransaction?: number;
        CoaIsGl?: number;
        CoaIsBudget?: number;
        CoaIsDepreciation?: number;
        CoaCustomerId?: number;
        CoaSupplierId?: number;
        CoaDepreciationRate?: number;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerCustomerGroupId?: number;
    }

    export namespace CustomerreceiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VNo';
        export const localTextPrefix = 'Cash/Bank.Customerreceive';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const VNo;
            export declare const Vtype;
            export declare const VDate;
            export declare const CoaId;
            export declare const CustomerId;
            export declare const Coa;
            export declare const Narration;
            export declare const Debit;
            export declare const Credit;
            export declare const IsPosted;
            export declare const IsAppove;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const CoaHeadCode;
            export declare const CoaHeadName;
            export declare const CoaParentHead;
            export declare const CoaPHeadName;
            export declare const CoaHeadLevel;
            export declare const CoaHeadType;
            export declare const CoaIsTransaction;
            export declare const CoaIsGl;
            export declare const CoaIsBudget;
            export declare const CoaIsDepreciation;
            export declare const CoaCustomerId;
            export declare const CoaSupplierId;
            export declare const CoaDepreciationRate;
            export declare const CustomerName;
            export declare const CustomerContactName;
            export declare const CustomerContactTitle;
            export declare const CustomerCountryId;
            export declare const CustomerStateId;
            export declare const CustomerCityId;
            export declare const CustomerAddress;
            export declare const CustomerRegionId;
            export declare const CustomerPostalCode;
            export declare const CustomerPhone;
            export declare const CustomerFax;
            export declare const CustomerWebsite;
            export declare const CustomerEmail;
            export declare const CustomerEmailAddress;
            export declare const CustomerPreviousCreditBalance;
            export declare const CustomerCustomerGroupId;
        }

        [
            'Id',
            'VNo',
            'Vtype',
            'VDate',
            'CoaId',
            'CustomerId',
            'Coa',
            'Narration',
            'Debit',
            'Credit',
            'IsPosted',
            'IsAppove',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'CoaHeadCode',
            'CoaHeadName',
            'CoaParentHead',
            'CoaPHeadName',
            'CoaHeadLevel',
            'CoaHeadType',
            'CoaIsTransaction',
            'CoaIsGl',
            'CoaIsBudget',
            'CoaIsDepreciation',
            'CoaCustomerId',
            'CoaSupplierId',
            'CoaDepreciationRate',
            'CustomerName',
            'CustomerContactName',
            'CustomerContactTitle',
            'CustomerCountryId',
            'CustomerStateId',
            'CustomerCityId',
            'CustomerAddress',
            'CustomerRegionId',
            'CustomerPostalCode',
            'CustomerPhone',
            'CustomerFax',
            'CustomerWebsite',
            'CustomerEmail',
            'CustomerEmailAddress',
            'CustomerPreviousCreditBalance',
            'CustomerCustomerGroupId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}