namespace CloudGarage.Inspections {
    export interface InspectionchecklistForm {
        JobCategory: Serenity.LookupEditor;
        JobTypes: Serenity.LookupEditor;
    }

    export class InspectionchecklistForm extends Serenity.PrefixedContext {
        static formKey = 'Inspections.Inspectionchecklist';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InspectionchecklistForm.init)  {
                InspectionchecklistForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(InspectionchecklistForm, [
                    'JobCategory', w0,
                    'JobTypes', w0
                ]);
            }
        }
    }
}
