namespace CloudGarage.Inventory {
    export interface GoodsissueForm {
        SaleId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        EmployeenId: Serenity.LookupEditor;
        Reference: Serenity.StringEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: GoodsIssueDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        JournalRemarks: Serenity.TextAreaEditor;
    }

    export class GoodsissueForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Goodsissue';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsissueForm.init)  {
                GoodsissueForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = GoodsIssueDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(GoodsissueForm, [
                    'SaleId', w0,
                    'CustomerId', w0,
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
