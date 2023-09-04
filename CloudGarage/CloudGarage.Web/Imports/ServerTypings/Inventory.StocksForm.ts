namespace CloudGarage.Inventory {
    export interface StocksForm {
        ProductId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        CategoryId: CategoriesEditor;
        QtyIn: Serenity.DecimalEditor;
        QtyOut: Serenity.DecimalEditor;
        Stock: Serenity.DecimalEditor;
    }

    export class StocksForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Stocks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StocksForm.init)  {
                StocksForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = CategoriesEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(StocksForm, [
                    'ProductId', w0,
                    'BranchId', w0,
                    'CategoryId', w1,
                    'QtyIn', w2,
                    'QtyOut', w2,
                    'Stock', w2
                ]);
            }
        }
    }
}
