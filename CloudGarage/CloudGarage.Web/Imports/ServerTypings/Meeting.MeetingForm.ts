namespace CloudGarage.Meeting {
    export interface MeetingForm {
        MeetingName: Serenity.StringEditor;
        MeetingTypeId: Serenity.IntegerEditor;
        MeetingNumber: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        LocationId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
        OrganizerContactId: Serenity.IntegerEditor;
        ReporterContactId: Serenity.IntegerEditor;
        AttendeeList: Serenity.StringEditor;
    }

    export class MeetingForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meeting';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingForm.init)  {
                MeetingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MeetingForm, [
                    'MeetingName', w0,
                    'MeetingTypeId', w1,
                    'MeetingNumber', w0,
                    'StartDate', w2,
                    'EndDate', w2,
                    'LocationId', w1,
                    'UnitId', w1,
                    'OrganizerContactId', w1,
                    'ReporterContactId', w1,
                    'AttendeeList', w0
                ]);
            }
        }
    }
}
