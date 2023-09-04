namespace CloudGarage.Inventory {
    export interface TransfersForm {
        FromBranchId: Serenity.LookupEditor;
        ToBranchId: Serenity.LookupEditor;
        FromWarehouseId: Serenity.LookupEditor;
        ToWarehouseId: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        LineItems: TransferDetailEditor;
        TotalQuantity: Serenity.DecimalEditor;
    }

    export class TransfersForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Transfers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransfersForm.init)  {
                TransfersForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = TransferDetailEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(TransfersForm, [
                    'FromBranchId', w0,
                    'ToBranchId', w0,
                    'FromWarehouseId', w0,
                    'ToWarehouseId', w0,
                    'Status', w1,
                    'LineItems', w2,
                    'TotalQuantity', w3
                ]);
            }
        }
    }
}
