
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class CustomergroupsDialog extends Serenity.EntityDialog<CustomergroupsRow, any> {
        protected getFormKey() { return CustomergroupsForm.formKey; }
        protected getIdProperty() { return CustomergroupsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomergroupsRow.localTextPrefix; }
        protected getNameProperty() { return CustomergroupsRow.nameProperty; }
        protected getService() { return CustomergroupsService.baseUrl; }
        protected getDeletePermission() { return CustomergroupsRow.deletePermission; }
        protected getInsertPermission() { return CustomergroupsRow.insertPermission; }
        protected getUpdatePermission() { return CustomergroupsRow.updatePermission; }

        protected form = new CustomergroupsForm(this.idPrefix);

    }
}