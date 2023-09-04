
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class VehiclemakesDialog extends Serenity.EntityDialog<VehiclemakesRow, any> {
        protected getFormKey() { return VehiclemakesForm.formKey; }
        protected getIdProperty() { return VehiclemakesRow.idProperty; }
        protected getLocalTextPrefix() { return VehiclemakesRow.localTextPrefix; }
        protected getNameProperty() { return VehiclemakesRow.nameProperty; }
        protected getService() { return VehiclemakesService.baseUrl; }
        protected getDeletePermission() { return VehiclemakesRow.deletePermission; }
        protected getInsertPermission() { return VehiclemakesRow.insertPermission; }
        protected getUpdatePermission() { return VehiclemakesRow.updatePermission; }

        protected form = new VehiclemakesForm(this.idPrefix);

    }
}