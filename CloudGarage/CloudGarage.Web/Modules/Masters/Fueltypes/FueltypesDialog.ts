
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class FueltypesDialog extends Serenity.EntityDialog<FueltypesRow, any> {
        protected getFormKey() { return FueltypesForm.formKey; }
        protected getIdProperty() { return FueltypesRow.idProperty; }
        protected getLocalTextPrefix() { return FueltypesRow.localTextPrefix; }
        protected getNameProperty() { return FueltypesRow.nameProperty; }
        protected getService() { return FueltypesService.baseUrl; }
        protected getDeletePermission() { return FueltypesRow.deletePermission; }
        protected getInsertPermission() { return FueltypesRow.insertPermission; }
        protected getUpdatePermission() { return FueltypesRow.updatePermission; }

        protected form = new FueltypesForm(this.idPrefix);

    }
}