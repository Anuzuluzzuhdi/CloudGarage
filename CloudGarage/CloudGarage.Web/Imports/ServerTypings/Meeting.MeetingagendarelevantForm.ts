namespace CloudGarage.Meeting {
    export interface MeetingagendarelevantForm {
        AgendaId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }

    export class MeetingagendarelevantForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetingagendarelevant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingagendarelevantForm.init)  {
                MeetingagendarelevantForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(MeetingagendarelevantForm, [
                    'AgendaId', w0,
                    'ContactId', w0
                ]);
            }
        }
    }
}
