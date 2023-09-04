
namespace CloudGarage.Common {

    @Serenity.Decorators.registerClass()
    export class UserpreferencesDialog extends Serenity.EntityDialog<UserpreferencesRow, any> {
        protected getFormKey() { return UserpreferencesForm.formKey; }
        protected getIdProperty() { return UserpreferencesRow.idProperty; }
        protected getLocalTextPrefix() { return UserpreferencesRow.localTextPrefix; }
        protected getNameProperty() { return UserpreferencesRow.nameProperty; }
        protected getService() { return UserpreferencesService.baseUrl; }
        protected getDeletePermission() { return UserpreferencesRow.deletePermission; }
        protected getInsertPermission() { return UserpreferencesRow.insertPermission; }
        protected getUpdatePermission() { return UserpreferencesRow.updatePermission; }

        protected form = new UserpreferencesForm(this.idPrefix);

    }
}