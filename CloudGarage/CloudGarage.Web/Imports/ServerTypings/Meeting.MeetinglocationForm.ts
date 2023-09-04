namespace CloudGarage.Meeting {
    export interface MeetinglocationForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
    }

    export class MeetinglocationForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meetinglocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetinglocationForm.init)  {
                MeetinglocationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(MeetinglocationForm, [
                    'Name', w0,
                    'Address', w0,
                    'Latitude', w1,
                    'Longitude', w1
                ]);
            }
        }
    }
}
