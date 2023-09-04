/// <reference path="../../Vehicles/Vehicle/VehicleDialog.ts" />

namespace CloudGarage.BusinessPartners {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomerVehicleDialog extends Vehicles.VehicleDialog {       

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CustomerId, true);
        }
    }
}