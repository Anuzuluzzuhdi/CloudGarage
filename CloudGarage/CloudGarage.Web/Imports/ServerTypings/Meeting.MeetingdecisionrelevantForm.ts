namespace CloudGarage.Meeting {
    export interface MeetingdecisionrelevantForm {
        DecisionId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }

    export class MeetingdecisionrelevantForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetingdecisionrelevant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingdecisionrelevantForm.init)  {
                MeetingdecisionrelevantForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(MeetingdecisionrelevantForm, [
                    'DecisionId', w0,
                    'ContactId', w0
                ]);
            }
        }
    }
}
