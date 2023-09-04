namespace CloudGarage.Meeting {
    export interface MeetingagendatypeForm {
        Name: Serenity.StringEditor;
    }

    export class MeetingagendatypeForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetingagendatype';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingagendatypeForm.init)  {
                MeetingagendatypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeetingagendatypeForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
