
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CashadjustmentDialog extends Serenity.EntityDialog<CashadjustmentRow, any> {
        protected getFormKey() { return CashadjustmentForm.formKey; }
        protected getIdProperty() { return CashadjustmentRow.idProperty; }
        protected getLocalTextPrefix() { return CashadjustmentRow.localTextPrefix; }
        protected getNameProperty() { return CashadjustmentRow.nameProperty; }
        protected getService() { return CashadjustmentService.baseUrl; }
        protected getDeletePermission() { return CashadjustmentRow.deletePermission; }
        protected getInsertPermission() { return CashadjustmentRow.insertPermission; }
        protected getUpdatePermission() { return CashadjustmentRow.updatePermission; }

        protected form = new CashadjustmentForm(this.idPrefix);
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