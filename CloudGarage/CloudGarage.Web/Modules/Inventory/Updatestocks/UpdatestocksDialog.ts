
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class UpdatestocksDialog extends Serenity.EntityDialog<UpdatestocksRow, any> {
        protected getFormKey() { return UpdatestocksForm.formKey; }
        protected getIdProperty() { return UpdatestocksRow.idProperty; }
        protected getLocalTextPrefix() { return UpdatestocksRow.localTextPrefix; }
        protected getNameProperty() { return UpdatestocksRow.nameProperty; }
        protected getService() { return UpdatestocksService.baseUrl; }
        protected getDeletePermission() { return UpdatestocksRow.deletePermission; }
        protected getInsertPermission() { return UpdatestocksRow.insertPermission; }
        protected getUpdatePermission() { return UpdatestocksRow.updatePermission; }

        protected form = new UpdatestocksForm(this.idPrefix);

    }
}