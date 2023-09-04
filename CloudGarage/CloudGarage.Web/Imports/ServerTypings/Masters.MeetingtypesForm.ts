namespace CloudGarage.Masters {
    export interface MeetingtypesForm {
        Name: Serenity.StringEditor;
    }

    export class MeetingtypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Meetingtypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingtypesForm.init)  {
                MeetingtypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeetingtypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
