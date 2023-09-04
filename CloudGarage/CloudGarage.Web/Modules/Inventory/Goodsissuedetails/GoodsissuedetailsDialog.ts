
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsissuedetailsDialog extends Serenity.EntityDialog<GoodsissuedetailsRow, any> {
        protected getFormKey() { return GoodsissuedetailsForm.formKey; }
        protected getIdProperty() { return GoodsissuedetailsRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsissuedetailsRow.localTextPrefix; }
        protected getNameProperty() { return GoodsissuedetailsRow.nameProperty; }
        protected getService() { return GoodsissuedetailsService.baseUrl; }
        protected getDeletePermission() { return GoodsissuedetailsRow.deletePermission; }
        protected getInsertPermission() { return GoodsissuedetailsRow.insertPermission; }
        protected getUpdatePermission() { return GoodsissuedetailsRow.updatePermission; }

        protected form = new GoodsissuedetailsForm(this.idPrefix);

    }
}