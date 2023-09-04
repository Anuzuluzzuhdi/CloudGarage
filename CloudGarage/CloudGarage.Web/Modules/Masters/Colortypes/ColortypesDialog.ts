
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class ColortypesDialog extends Serenity.EntityDialog<ColortypesRow, any> {
        protected getFormKey() { return ColortypesForm.formKey; }
        protected getIdProperty() { return ColortypesRow.idProperty; }
        protected getLocalTextPrefix() { return ColortypesRow.localTextPrefix; }
        protected getNameProperty() { return ColortypesRow.nameProperty; }
        protected getService() { return ColortypesService.baseUrl; }
        protected getDeletePermission() { return ColortypesRow.deletePermission; }
        protected getInsertPermission() { return ColortypesRow.insertPermission; }
        protected getUpdatePermission() { return ColortypesRow.updatePermission; }

        protected form = new ColortypesForm(this.idPrefix);

    }
}