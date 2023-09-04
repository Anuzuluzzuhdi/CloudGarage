namespace CloudGarage.Inventory {
    export interface GoodsissuedetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class GoodsissuedetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Goodsissuedetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsissuedetailsForm.init)  {
                GoodsissuedetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(GoodsissuedetailsForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'WarehouseId', w0,
                    'Description', w2
                ]);
            }
        }
    }
}
