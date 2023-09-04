
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransferdetailsDialog extends Serenity.EntityDialog<TransferdetailsRow, any> {
        protected getFormKey() { return TransferdetailsForm.formKey; }
        protected getIdProperty() { return TransferdetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TransferdetailsRow.localTextPrefix; }
        protected getService() { return TransferdetailsService.baseUrl; }
        protected getDeletePermission() { return TransferdetailsRow.deletePermission; }
        protected getInsertPermission() { return TransferdetailsRow.insertPermission; }
        protected getUpdatePermission() { return TransferdetailsRow.updatePermission; }

        protected form = new TransferdetailsForm(this.idPrefix);

    }
}