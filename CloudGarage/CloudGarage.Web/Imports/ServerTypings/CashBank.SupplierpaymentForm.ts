namespace CloudGarage.CashBank {
    export interface SupplierpaymentForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        SupplierId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class SupplierpaymentForm extends Serenity.PrefixedContext {
        static formKey = 'CashBank.Supplierpayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierpaymentForm.init)  {
                SupplierpaymentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(SupplierpaymentForm, [
                    'VDate', w0,
                    'Vtype', w1,
                    'SupplierId', w2,
                    'CoaId', w2,
                    'Credit', w3,
                    'Remark', w4
                ]);
            }
        }
    }
}
