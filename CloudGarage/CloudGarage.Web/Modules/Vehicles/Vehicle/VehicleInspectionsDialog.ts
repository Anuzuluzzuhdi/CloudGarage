/// <reference path="../../Inspections/Inspections/InspectionsDialog.ts" />

namespace CloudGarage.Vehicles {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomerInspectionsDialog extends Inspections.InspectionsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CustomerId, true);
        }
    }
}