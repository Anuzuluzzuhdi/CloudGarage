namespace CloudGarage.JobCards {
    export interface JobcarddetailsForm {
        JobType: Serenity.LookupEditor;
        Mechanic: Serenity.LookupEditor;
        CustomerNotes: Serenity.TextAreaEditor;
    }

    export class JobcarddetailsForm extends Serenity.PrefixedContext {
        static formKey = 'JobCards.Jobcarddetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobcarddetailsForm.init)  {
                JobcarddetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(JobcarddetailsForm, [
                    'JobType', w0,
                    'Mechanic', w0,
                    'CustomerNotes', w1
                ]);
            }
        }
    }
}
