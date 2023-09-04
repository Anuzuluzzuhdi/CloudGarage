
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SupplierpaymentDialog extends Serenity.EntityDialog<SupplierpaymentRow, any> {
        protected getFormKey() { return SupplierpaymentForm.formKey; }
        protected getIdProperty() { return SupplierpaymentRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierpaymentRow.localTextPrefix; }
        protected getNameProperty() { return SupplierpaymentRow.nameProperty; }
        protected getService() { return SupplierpaymentService.baseUrl; }
        protected getDeletePermission() { return SupplierpaymentRow.deletePermission; }
        protected getInsertPermission() { return SupplierpaymentRow.insertPermission; }
        protected getUpdatePermission() { return SupplierpaymentRow.updatePermission; }

        protected form = new SupplierpaymentForm(this.idPrefix);
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