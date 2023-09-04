namespace CloudGarage.JobCards {
    export interface JobcardsForm {
        Customer: Serenity.LookupEditor;
        WorkOrderNo: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Vehicle: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Reference: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        ScheduleDatetime: Serenity.DateEditor;
        Website: Serenity.StringEditor;
        DeliveryDatetime: Serenity.DateTimeEditor;
        BranchesId: Serenity.LookupEditor;
        JobCardDetails: JobCardDetailsEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class JobcardsForm extends Serenity.PrefixedContext {
        static formKey = 'JobCards.Jobcards';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobcardsForm.init)  {
                JobcardsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DateTimeEditor;
                var w4 = JobCardDetailsEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(JobcardsForm, [
                    'Customer', w0,
                    'WorkOrderNo', w1,
                    'Address', w1,
                    'Vehicle', w0,
                    'Phone', w1,
                    'Reference', w1,
                    'Mobile', w1,
                    'ScheduleDatetime', w2,
                    'Website', w1,
                    'DeliveryDatetime', w3,
                    'BranchesId', w0,
                    'JobCardDetails', w4,
                    'Details', w5
                ]);
            }
        }
    }
}
