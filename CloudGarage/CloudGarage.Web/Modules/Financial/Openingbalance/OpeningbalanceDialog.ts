
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OpeningbalanceDialog extends Serenity.EntityDialog<OpeningbalanceRow, any> {
        protected getFormKey() { return OpeningbalanceForm.formKey; }
        protected getIdProperty() { return OpeningbalanceRow.idProperty; }
        protected getLocalTextPrefix() { return OpeningbalanceRow.localTextPrefix; }
        protected getNameProperty() { return OpeningbalanceRow.nameProperty; }
        protected getService() { return OpeningbalanceService.baseUrl; }
        protected getDeletePermission() { return OpeningbalanceRow.deletePermission; }
        protected getInsertPermission() { return OpeningbalanceRow.insertPermission; }
        protected getUpdatePermission() { return OpeningbalanceRow.updatePermission; }

        protected form = new OpeningbalanceForm(this.idPrefix);
        constructor() {
            super();


        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
            window.location.href = "/BusinessPartners/Customers";
        }
    }
}