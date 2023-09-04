namespace CloudGarage.Inventory {
    export interface DamagedproductsForm {
        CategoryId: CategoriesEditor;
        ProductId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        PurchasePrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class DamagedproductsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Damagedproducts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DamagedproductsForm.init)  {
                DamagedproductsForm.init = true;

                var s = Serenity;
                var w0 = CategoriesEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(DamagedproductsForm, [
                    'CategoryId', w0,
                    'ProductId', w1,
                    'Code', w2,
                    'Name', w2,
                    'PurchasePrice', w3,
                    'Quantity', w3,
                    'Date', w4,
                    'Note', w5
                ]);
            }
        }
    }
}
