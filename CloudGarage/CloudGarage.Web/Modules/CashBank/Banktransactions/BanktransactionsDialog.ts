
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class BanktransactionsDialog extends Serenity.EntityDialog<BanktransactionsRow, any> {
        protected getFormKey() { return BanktransactionsForm.formKey; }
        protected getIdProperty() { return BanktransactionsRow.idProperty; }
        protected getLocalTextPrefix() { return BanktransactionsRow.localTextPrefix; }
        protected getNameProperty() { return BanktransactionsRow.nameProperty; }
        protected getService() { return BanktransactionsService.baseUrl; }
        protected getDeletePermission() { return BanktransactionsRow.deletePermission; }
        protected getInsertPermission() { return BanktransactionsRow.insertPermission; }
        protected getUpdatePermission() { return BanktransactionsRow.updatePermission; }

        protected form = new BanktransactionsForm(this.idPrefix);
        constructor() {
            super();
        }
        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }
    }
}