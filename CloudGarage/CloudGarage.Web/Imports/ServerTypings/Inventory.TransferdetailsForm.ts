namespace CloudGarage.Inventory {
    export interface TransferdetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
    }

    export class TransferdetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Transferdetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransferdetailsForm.init)  {
                TransferdetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(TransferdetailsForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'UnitPrice', w1
                ]);
            }
        }
    }
}
