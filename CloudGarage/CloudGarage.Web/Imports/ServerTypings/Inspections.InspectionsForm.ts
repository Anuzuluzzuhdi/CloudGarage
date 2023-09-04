namespace CloudGarage.Inspections {
    export interface InspectionsForm {
        CustomerId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        StandardTiming: Serenity.MaskedEditor;
        Checklist: InspectionChecklistEditor;
    }

    export class InspectionsForm extends Serenity.PrefixedContext {
        static formKey = 'Inspections.Inspections';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InspectionsForm.init)  {
                InspectionsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.MaskedEditor;
                var w4 = InspectionChecklistEditor;

                Q.initFormType(InspectionsForm, [
                    'CustomerId', w0,
                    'Name', w1,
                    'Rate', w2,
                    'StandardTiming', w3,
                    'Checklist', w4
                ]);
            }
        }
    }
}
