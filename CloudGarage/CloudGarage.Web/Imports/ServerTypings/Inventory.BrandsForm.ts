namespace CloudGarage.Inventory {
    export interface BrandsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class BrandsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Brands';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BrandsForm.init)  {
                BrandsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BrandsForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
