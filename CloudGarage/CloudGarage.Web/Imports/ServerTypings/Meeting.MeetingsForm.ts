namespace CloudGarage.Meeting {
    export interface MeetingsForm {
        MeetingName: Serenity.StringEditor;
        MeetingType: Serenity.IntegerEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Department: Serenity.IntegerEditor;
        Location: Serenity.IntegerEditor;
        OrganizedBy: Serenity.IntegerEditor;
        Reporter: Serenity.IntegerEditor;
    }

    export class MeetingsForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingsForm.init)  {
                MeetingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MeetingsForm, [
                    'MeetingName', w0,
                    'MeetingType', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'Department', w1,
                    'Location', w1,
                    'OrganizedBy', w1,
                    'Reporter', w1
                ]);
            }
        }
    }
}
