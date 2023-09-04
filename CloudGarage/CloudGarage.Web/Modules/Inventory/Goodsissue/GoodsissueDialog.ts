
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()

    export class GoodsissueDialog extends Serenity.EntityDialog<GoodsissueRow, any> {
        protected getFormKey() { return GoodsissueForm.formKey; }
        protected getIdProperty() { return GoodsissueRow.idProperty; }
        protected getLocalTextPrefix() { return GoodsissueRow.localTextPrefix; }
        protected getNameProperty() { return GoodsissueRow.nameProperty; }
        protected getService() { return GoodsissueService.baseUrl; }
        protected getDeletePermission() { return GoodsissueRow.deletePermission; }
        protected getInsertPermission() { return GoodsissueRow.insertPermission; }
        protected getUpdatePermission() { return GoodsissueRow.updatePermission; }

        protected form = new GoodsissueForm(this.idPrefix);
        constructor() {
            super();


            this.form = new GoodsissueForm(this.idPrefix);
            this.form.SaleId.change(e => {

                var saleId = Q.toId(this.form.SaleId.value);
                if (saleId != null) {

                    this.form.CustomerId.value = Q.toId(CloudGarage.Sales.SalesRow.getLookup().itemById[saleId].CustomerId);
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