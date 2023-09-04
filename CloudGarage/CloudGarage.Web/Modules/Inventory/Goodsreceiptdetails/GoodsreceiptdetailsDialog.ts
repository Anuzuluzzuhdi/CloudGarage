
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsreceiptdetailsDialog extends Serenity.EntityDialog<GoodsreceiptdetailsRow, any> {
        protected getFormKey() { return GoodsreceiptdetailsForm.formKey; }
        protected getIdProperty() { return GoodsreceiptdetailsRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsreceiptdetailsRow.localTextPrefix; }
        protected getNameProperty() { return GoodsreceiptdetailsRow.nameProperty; }
        protected getService() { return GoodsreceiptdetailsService.baseUrl; }
        protected getDeletePermission() { return GoodsreceiptdetailsRow.deletePermission; }
        protected getInsertPermission() { return GoodsreceiptdetailsRow.insertPermission; }
        protected getUpdatePermission() { return GoodsreceiptdetailsRow.updatePermission; }

        protected form = new GoodsreceiptdetailsForm(this.idPrefix);

    }
}