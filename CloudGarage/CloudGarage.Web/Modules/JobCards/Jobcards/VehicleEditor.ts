namespace CloudGarage {

    @Serenity.Decorators.registerEditor()
    export class VehicleEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Vehicles.VehicleRow> {

        constructor(hidden: JQuery, options: Serenity.LookupEditorOptions) {
            super(hidden, options);
        }

        protected getLookupKey() {
            return 'CloudGarage.Vehicles';
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.MakeName + ']';
        }
    }
}