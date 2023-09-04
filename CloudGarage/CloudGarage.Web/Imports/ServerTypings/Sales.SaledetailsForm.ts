namespace CloudGarage.Sales {
    export interface SaledetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class SaledetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.Saledetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SaledetailsForm.init)  {
                SaledetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(SaledetailsForm, [
                    'ProductId', w0,
                    'UnitId', w0,
                    'Quantity', w1,
                    'UnitPrice', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
