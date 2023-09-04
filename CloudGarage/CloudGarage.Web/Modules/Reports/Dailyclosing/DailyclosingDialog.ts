
namespace CloudGarage.Reports {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DailyclosingDialog extends Serenity.EntityDialog<DailyclosingRow, any> {
        protected getFormKey() { return DailyclosingForm.formKey; }
        protected getIdProperty() { return DailyclosingRow.idProperty; }
        protected getLocalTextPrefix() { return DailyclosingRow.localTextPrefix; }
        protected getService() { return DailyclosingService.baseUrl; }
        protected getDeletePermission() { return DailyclosingRow.deletePermission; }
        protected getInsertPermission() { return DailyclosingRow.insertPermission; }
        protected getUpdatePermission() { return DailyclosingRow.updatePermission; }

        protected form = new DailyclosingForm(this.idPrefix);

        constructor() {
            super();
            this.form = new DailyclosingForm(this.idPrefix);

        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
            //window.location.href = "/Customers/Customers";
        }
    }
}