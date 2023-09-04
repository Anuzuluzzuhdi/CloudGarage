namespace CloudGarage.Masters {
    export interface AttendeetypesForm {
        Name: Serenity.StringEditor;
    }

    export class AttendeetypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Attendeetypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendeetypesForm.init)  {
                AttendeetypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AttendeetypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
