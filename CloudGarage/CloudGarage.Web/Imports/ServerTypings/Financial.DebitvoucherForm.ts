namespace CloudGarage.Financial {
    export interface DebitvoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class DebitvoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Financial.Debitvoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DebitvoucherForm.init)  {
                DebitvoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(DebitvoucherForm, [
                    'VDate', w0,
                    'Vtype', w1,
                    'CoaId', w2,
                    'DebitAccountId', w2,
                    'Credit', w3,
                    'Remark', w4
                ]);
            }
        }
    }
}
