
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()

    export class GoodsreceiptDialog extends Serenity.EntityDialog<GoodsreceiptRow, any> {
        protected getFormKey() { return GoodsreceiptForm.formKey; }
        protected getIdProperty() { return GoodsreceiptRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsreceiptRow.localTextPrefix; }
        protected getNameProperty() { return GoodsreceiptRow.nameProperty; }
        protected getService() { return GoodsreceiptService.baseUrl; }
        protected getDeletePermission() { return GoodsreceiptRow.deletePermission; }
        protected getInsertPermission() { return GoodsreceiptRow.insertPermission; }
        protected getUpdatePermission() { return GoodsreceiptRow.updatePermission; }

        protected form = new GoodsreceiptForm(this.idPrefix);
        constructor() {
            super();


            this.form = new GoodsreceiptForm(this.idPrefix);
            this.form.PurchaseId.change(e => {

                var purchaseId = Q.toId(this.form.PurchaseId.value);
                if (purchaseId != null) {

                    this.form.SupplierId.value = Q.toId(CloudGarage.Purchasing.PurchaseRow.getLookup().itemById[purchaseId].SupplierId);
                }

                //this.updateExpiryDate();
            });

            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                var totalQuantity = 0;
                for (var k of this.form.LineItems.getItems()) {
                    totalQuantity += k.Quantity;
                }
                this.form.TotalQuantity.value = totalQuantity;
                // Q.notifySuccess(total.toString());
            });

        }

        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
        }


    }
}