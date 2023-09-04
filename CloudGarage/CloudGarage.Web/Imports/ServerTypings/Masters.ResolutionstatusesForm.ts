namespace CloudGarage.Masters {
    export interface ResolutionstatusesForm {
        Name: Serenity.StringEditor;
    }

    export class ResolutionstatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Resolutionstatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResolutionstatusesForm.init)  {
                ResolutionstatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ResolutionstatusesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
