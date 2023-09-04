namespace CloudGarage.Meeting {
    export interface MeetingagendaForm {
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        AgendaTypeId: Serenity.LookupEditor;
        RequestedByContactId: Serenity.IntegerEditor;
        AgendaNumber: Serenity.IntegerEditor;
        Images: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
    }

    export class MeetingagendaForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetingagenda';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingagendaForm.init)  {
                MeetingagendaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(MeetingagendaForm, [
                    'Title', w0,
                    'Description', w0,
                    'AgendaTypeId', w1,
                    'RequestedByContactId', w2,
                    'AgendaNumber', w2,
                    'Images', w0,
                    'Attachments', w0
                ]);
            }
        }
    }
}
