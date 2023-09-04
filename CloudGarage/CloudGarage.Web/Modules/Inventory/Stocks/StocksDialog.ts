
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class StocksDialog extends Serenity.EntityDialog<StocksRow, any> {
        protected getFormKey() { return StocksForm.formKey; }
        protected getIdProperty() { return StocksRow.idProperty; }
        protected getLocalTextPrefix() { return StocksRow.localTextPrefix; }
        protected getService() { return StocksService.baseUrl; }
        protected getDeletePermission() { return StocksRow.deletePermission; }
        protected getInsertPermission() { return StocksRow.insertPermission; }
        protected getUpdatePermission() { return StocksRow.updatePermission; }

        protected form = new StocksForm(this.idPrefix);

    }
}