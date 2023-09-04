/// <reference path="../../Bookings/Vehiclebookings/VehiclebookingsDialog.ts" />

namespace CloudGarage.BusinessPartners {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomerOrderDialog extends Bookings.VehiclebookingsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Customer, true);
        }
    }
}