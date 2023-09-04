namespace CloudGarage.Inspections {
    export interface InspectionjobtypesForm {
        InspectionId: Serenity.IntegerEditor;
        JobType: Serenity.IntegerEditor;
    }

    export class InspectionjobtypesForm extends Serenity.PrefixedContext {
        static formKey = 'Inspections.Inspectionjobtypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InspectionjobtypesForm.init)  {
                InspectionjobtypesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(InspectionjobtypesForm, [
                    'InspectionId', w0,
                    'JobType', w0
                ]);
            }
        }
    }
}
