
namespace CloudGarage.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehiclecourtesybookingDialog extends Serenity.EntityDialog<VehiclecourtesybookingRow, any> {
        protected getFormKey() { return VehiclecourtesybookingForm.formKey; }
        protected getIdProperty() { return VehiclecourtesybookingRow.idProperty; }
        protected getLocalTextPrefix() { return VehiclecourtesybookingRow.localTextPrefix; }
        protected getNameProperty() { return VehiclecourtesybookingRow.nameProperty; }
        protected getService() { return VehiclecourtesybookingService.baseUrl; }
        protected getDeletePermission() { return VehiclecourtesybookingRow.deletePermission; }
        protected getInsertPermission() { return VehiclecourtesybookingRow.insertPermission; }
        protected getUpdatePermission() { return VehiclecourtesybookingRow.updatePermission; }

        protected form = new VehiclecourtesybookingForm(this.idPrefix);

    }
}