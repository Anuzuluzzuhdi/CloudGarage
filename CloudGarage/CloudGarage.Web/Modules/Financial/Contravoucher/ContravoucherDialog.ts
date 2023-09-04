
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ContravoucherDialog extends Serenity.EntityDialog<ContravoucherRow, any> {
        protected getFormKey() { return ContravoucherForm.formKey; }
        protected getIdProperty() { return ContravoucherRow.idProperty; }
        protected getLocalTextPrefix() { return ContravoucherRow.localTextPrefix; }
        protected getNameProperty() { return ContravoucherRow.nameProperty; }
        protected getService() { return ContravoucherService.baseUrl; }
        protected getDeletePermission() { return ContravoucherRow.deletePermission; }
        protected getInsertPermission() { return ContravoucherRow.insertPermission; }
        protected getUpdatePermission() { return ContravoucherRow.updatePermission; }

        protected form = new ContravoucherForm(this.idPrefix);
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