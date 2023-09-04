
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class SuppliergroupsDialog extends Serenity.EntityDialog<SuppliergroupsRow, any> {
        protected getFormKey() { return SuppliergroupsForm.formKey; }
        protected getIdProperty() { return SuppliergroupsRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliergroupsRow.localTextPrefix; }
        protected getNameProperty() { return SuppliergroupsRow.nameProperty; }
        protected getService() { return SuppliergroupsService.baseUrl; }
        protected getDeletePermission() { return SuppliergroupsRow.deletePermission; }
        protected getInsertPermission() { return SuppliergroupsRow.insertPermission; }
        protected getUpdatePermission() { return SuppliergroupsRow.updatePermission; }

        protected form = new SuppliergroupsForm(this.idPrefix);

    }
}