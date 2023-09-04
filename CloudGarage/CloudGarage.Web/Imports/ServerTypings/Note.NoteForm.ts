namespace CloudGarage.Note {
    export interface NoteForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.IntegerEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserDisplayName: Serenity.StringEditor;
    }

    export class NoteForm extends Serenity.PrefixedContext {
        static formKey = 'Note.Note';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NoteForm.init)  {
                NoteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(NoteForm, [
                    'EntityType', w0,
                    'EntityId', w1,
                    'Text', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'InsertUserDisplayName', w0
                ]);
            }
        }
    }
}
