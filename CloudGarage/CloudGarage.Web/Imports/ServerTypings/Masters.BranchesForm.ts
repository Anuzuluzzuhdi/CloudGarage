namespace CloudGarage.Masters {
    export interface BranchesForm {
        Name: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        State: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        VatPercentage: Serenity.DecimalEditor;
        Logo: Serenity.ImageUploadEditor;
        Address: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        UseBranchAddress: Serenity.BooleanEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class BranchesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Branches';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BranchesForm.init)  {
                BranchesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(BranchesForm, [
                    'Name', w0,
                    'Country', w1,
                    'State', w1,
                    'City', w1,
                    'VatPercentage', w2,
                    'Logo', w3,
                    'Address', w0,
                    'Email', w0,
                    'Phone1', w0,
                    'Phone2', w0,
                    'UseBranchAddress', w4,
                    'Description', w5
                ]);
            }
        }
    }
}
