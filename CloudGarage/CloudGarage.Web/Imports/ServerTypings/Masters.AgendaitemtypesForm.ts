namespace CloudGarage.Masters {
    export interface AgendaitemtypesForm {
        Name: Serenity.StringEditor;
    }

    export class AgendaitemtypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Agendaitemtypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AgendaitemtypesForm.init)  {
                AgendaitemtypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AgendaitemtypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
