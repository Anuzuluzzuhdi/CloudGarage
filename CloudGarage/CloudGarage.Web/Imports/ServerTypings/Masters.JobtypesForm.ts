namespace CloudGarage.Masters {
    export interface JobtypesForm {
        JobCategory: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        StandardTiming: Serenity.DateEditor;
        IsInspectionList: Serenity.BooleanEditor;
    }

    export class JobtypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Jobtypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobtypesForm.init)  {
                JobtypesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(JobtypesForm, [
                    'JobCategory', w0,
                    'Name', w1,
                    'Rate', w2,
                    'StandardTiming', w3,
                    'IsInspectionList', w4
                ]);
            }
        }
    }
}
