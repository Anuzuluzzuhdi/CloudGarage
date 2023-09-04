
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AssemblytypesDialog extends Serenity.EntityDialog<AssemblytypesRow, any> {
        protected getFormKey() { return AssemblytypesForm.formKey; }
        protected getIdProperty() { return AssemblytypesRow.idProperty; }
        protected getLocalTextPrefix() { return AssemblytypesRow.localTextPrefix; }
        protected getNameProperty() { return AssemblytypesRow.nameProperty; }
        protected getService() { return AssemblytypesService.baseUrl; }
        protected getDeletePermission() { return AssemblytypesRow.deletePermission; }
        protected getInsertPermission() { return AssemblytypesRow.insertPermission; }
        protected getUpdatePermission() { return AssemblytypesRow.updatePermission; }

        protected form = new AssemblytypesForm(this.idPrefix);

    }
}