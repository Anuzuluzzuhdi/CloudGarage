namespace CloudGarage.Inventory {
    export interface GoodsreceiptForm {
        PurchaseId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: GoodsReceiptDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }

    export class GoodsreceiptForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Goodsreceipt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsreceiptForm.init)  {
                GoodsreceiptForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = GoodsReceiptDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(GoodsreceiptForm, [
                    'PurchaseId', w0,
                    'SupplierId', w0,
                    'Date', w1,
                    'EmployeenId', w0,
                    'Reference', w2,
                    'BranchesId', w0,
                    'LineItems', w3,
                    'TotalQuantity', w4,
                    'Remarks', w5,
                    'JournalRemarks', w5
                ]);
            }
        }
    }
}
