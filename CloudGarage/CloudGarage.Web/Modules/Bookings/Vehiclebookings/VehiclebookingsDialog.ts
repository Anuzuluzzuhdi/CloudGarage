
namespace CloudGarage.Bookings {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class VehiclebookingsDialog extends Serenity.EntityDialog<VehiclebookingsRow, any> {
        protected getFormKey() { return VehiclebookingsForm.formKey; }
        protected getIdProperty() { return VehiclebookingsRow.idProperty; }
        protected getLocalTextPrefix() { return VehiclebookingsRow.localTextPrefix; }
        protected getNameProperty() { return VehiclebookingsRow.nameProperty; }
        protected getService() { return VehiclebookingsService.baseUrl; }
        protected getDeletePermission() { return VehiclebookingsRow.deletePermission; }
        protected getInsertPermission() { return VehiclebookingsRow.insertPermission; }
        protected getUpdatePermission() { return VehiclebookingsRow.updatePermission; }

        protected form = new VehiclebookingsForm(this.idPrefix);

    }
}