namespace CloudGarage.Meeting {
    export interface MeetingdecisionForm {
        MeetingId: Serenity.IntegerEditor;
        AgendaId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        DecisionNumber: Serenity.IntegerEditor;
        ResponsibleContactId: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        ResolutionStatus: Serenity.IntegerEditor;
        Images: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
    }

    export class MeetingdecisionForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetingdecision';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingdecisionForm.init)  {
                MeetingdecisionForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MeetingdecisionForm, [
                    'MeetingId', w0,
                    'AgendaId', w0,
                    'Description', w1,
                    'DecisionNumber', w0,
                    'ResponsibleContactId', w0,
                    'DueDate', w2,
                    'ResolutionStatus', w0,
                    'Images', w1,
                    'Attachments', w1
                ]);
            }
        }
    }
}
