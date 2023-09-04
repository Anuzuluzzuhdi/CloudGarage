
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomerreceiveDialog extends Serenity.EntityDialog<CustomerreceiveRow, any> {
        protected getFormKey() { return CustomerreceiveForm.formKey; }
        protected getIdProperty() { return CustomerreceiveRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerreceiveRow.localTextPrefix; }
        protected getNameProperty() { return CustomerreceiveRow.nameProperty; }
        protected getService() { return CustomerreceiveService.baseUrl; }
        protected getDeletePermission() { return CustomerreceiveRow.deletePermission; }
        protected getInsertPermission() { return CustomerreceiveRow.insertPermission; }
        protected getUpdatePermission() { return CustomerreceiveRow.updatePermission; }

        protected form = new CustomerreceiveForm(this.idPrefix);

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