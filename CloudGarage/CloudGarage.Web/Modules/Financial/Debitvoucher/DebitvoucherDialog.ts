
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DebitvoucherDialog extends Serenity.EntityDialog<DebitvoucherRow, any> {
        protected getFormKey() { return DebitvoucherForm.formKey; }
        protected getIdProperty() { return DebitvoucherRow.idProperty; }
        protected getLocalTextPrefix() { return DebitvoucherRow.localTextPrefix; }
        protected getNameProperty() { return DebitvoucherRow.nameProperty; }
        protected getService() { return DebitvoucherService.baseUrl; }
        protected getDeletePermission() { return DebitvoucherRow.deletePermission; }
        protected getInsertPermission() { return DebitvoucherRow.insertPermission; }
        protected getUpdatePermission() { return DebitvoucherRow.updatePermission; }

        protected form = new DebitvoucherForm(this.idPrefix);
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