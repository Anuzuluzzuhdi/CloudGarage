namespace CloudGarage.Masters {
    export interface JobcategoriesForm {
        Name: Serenity.StringEditor;
    }

    export class JobcategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Jobcategories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobcategoriesForm.init)  {
                JobcategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(JobcategoriesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
