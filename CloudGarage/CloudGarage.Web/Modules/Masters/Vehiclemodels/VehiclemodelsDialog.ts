
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class VehiclemodelsDialog extends Serenity.EntityDialog<VehiclemodelsRow, any> {
        protected getFormKey() { return VehiclemodelsForm.formKey; }
        protected getIdProperty() { return VehiclemodelsRow.idProperty; }
        protected getLocalTextPrefix() { return VehiclemodelsRow.localTextPrefix; }
        protected getNameProperty() { return VehiclemodelsRow.nameProperty; }
        protected getService() { return VehiclemodelsService.baseUrl; }
        protected getDeletePermission() { return VehiclemodelsRow.deletePermission; }
        protected getInsertPermission() { return VehiclemodelsRow.insertPermission; }
        protected getUpdatePermission() { return VehiclemodelsRow.updatePermission; }

        protected form = new VehiclemodelsForm(this.idPrefix);

    }
}