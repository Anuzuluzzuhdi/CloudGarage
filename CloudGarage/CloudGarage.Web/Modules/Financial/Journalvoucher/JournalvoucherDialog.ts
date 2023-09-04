
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class JournalvoucherDialog extends Serenity.EntityDialog<JournalvoucherRow, any> {
        protected getFormKey() { return JournalvoucherForm.formKey; }
        protected getIdProperty() { return JournalvoucherRow.idProperty; }
        protected getLocalTextPrefix() { return JournalvoucherRow.localTextPrefix; }
        protected getNameProperty() { return JournalvoucherRow.nameProperty; }
        protected getService() { return JournalvoucherService.baseUrl; }
        protected getDeletePermission() { return JournalvoucherRow.deletePermission; }
        protected getInsertPermission() { return JournalvoucherRow.insertPermission; }
        protected getUpdatePermission() { return JournalvoucherRow.updatePermission; }

        protected form = new JournalvoucherForm(this.idPrefix);
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