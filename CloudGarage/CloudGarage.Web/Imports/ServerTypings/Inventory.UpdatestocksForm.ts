namespace CloudGarage.Inventory {
    export interface UpdatestocksForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        BranchId: Serenity.LookupEditor;
        WarehouseId: Serenity.LookupEditor;
        StockMode: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class UpdatestocksForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Updatestocks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UpdatestocksForm.init)  {
                UpdatestocksForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.EnumEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(UpdatestocksForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'BranchId', w0,
                    'WarehouseId', w0,
                    'StockMode', w2,
                    'Status', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
