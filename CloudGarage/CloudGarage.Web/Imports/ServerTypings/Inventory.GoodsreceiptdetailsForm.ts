namespace CloudGarage.Inventory {
    export interface GoodsreceiptdetailsForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        WarehouseId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class GoodsreceiptdetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Goodsreceiptdetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GoodsreceiptdetailsForm.init)  {
                GoodsreceiptdetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(GoodsreceiptdetailsForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'WarehouseId', w0,
                    'Description', w2
                ]);
            }
        }
    }
}
