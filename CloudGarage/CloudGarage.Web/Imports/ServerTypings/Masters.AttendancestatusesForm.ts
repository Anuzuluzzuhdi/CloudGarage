namespace CloudGarage.Masters {
    export interface AttendancestatusesForm {
        Name: Serenity.StringEditor;
    }

    export class AttendancestatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Attendancestatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendancestatusesForm.init)  {
                AttendancestatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AttendancestatusesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
