
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicletypesDialog extends Serenity.EntityDialog<VehicletypesRow, any> {
        protected getFormKey() { return VehicletypesForm.formKey; }
        protected getIdProperty() { return VehicletypesRow.idProperty; }
        protected getLocalTextPrefix() { return VehicletypesRow.localTextPrefix; }
        protected getNameProperty() { return VehicletypesRow.nameProperty; }
        protected getService() { return VehicletypesService.baseUrl; }
        protected getDeletePermission() { return VehicletypesRow.deletePermission; }
        protected getInsertPermission() { return VehicletypesRow.insertPermission; }
        protected getUpdatePermission() { return VehicletypesRow.updatePermission; }

        protected form = new VehicletypesForm(this.idPrefix);

    }
}