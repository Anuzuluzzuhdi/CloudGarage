namespace CloudGarage.Meeting {
    export interface MeetingattendeeForm {
        MeetingId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
        AttendeeType: Serenity.IntegerEditor;
        AttendanceStatus: Serenity.IntegerEditor;
    }

    export class MeetingattendeeForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetingattendee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingattendeeForm.init)  {
                MeetingattendeeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(MeetingattendeeForm, [
                    'MeetingId', w0,
                    'ContactId', w0,
                    'AttendeeType', w0,
                    'AttendanceStatus', w0
                ]);
            }
        }
    }
}
