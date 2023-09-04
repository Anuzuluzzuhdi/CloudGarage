namespace CloudGarage.Common {
    export interface UserpreferencesForm {
        UserId: Serenity.StringEditor;
        PreferenceType: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }

    export class UserpreferencesForm extends Serenity.PrefixedContext {
        static formKey = 'Common.Userpreferences';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserpreferencesForm.init)  {
                UserpreferencesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(UserpreferencesForm, [
                    'UserId', w0,
                    'PreferenceType', w0,
                    'Name', w0,
                    'Value', w0
                ]);
            }
        }
    }
}
