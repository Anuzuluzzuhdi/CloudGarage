
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CreditvoucherDialog extends Serenity.EntityDialog<CreditvoucherRow, any> {
        protected getFormKey() { return CreditvoucherForm.formKey; }
        protected getIdProperty() { return CreditvoucherRow.idProperty; }
        protected getLocalTextPrefix() { return CreditvoucherRow.localTextPrefix; }
        protected getNameProperty() { return CreditvoucherRow.nameProperty; }
        protected getService() { return CreditvoucherService.baseUrl; }
        protected getDeletePermission() { return CreditvoucherRow.deletePermission; }
        protected getInsertPermission() { return CreditvoucherRow.insertPermission; }
        protected getUpdatePermission() { return CreditvoucherRow.updatePermission; }

        protected form = new CreditvoucherForm(this.idPrefix);
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