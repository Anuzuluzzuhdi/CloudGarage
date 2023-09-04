
namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class InvoiceitemsDialog extends Serenity.Extensions.GridEditorDialog<InvoiceitemsRow> {
        protected getFormKey() { return InvoiceitemsForm.formKey; }
        protected getIdProperty() { return InvoiceitemsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceitemsRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceitemsRow.nameProperty; }
        protected getService() { return InvoiceitemsService.baseUrl; }
        protected getDeletePermission() { return InvoiceitemsRow.deletePermission; }
        protected getInsertPermission() { return InvoiceitemsRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceitemsRow.updatePermission; }

        protected form = new InvoiceitemsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new InvoiceitemsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.UnitPrice.value = CloudGarage.Inventory.ProductsRow.getLookup().itemById[productID].UnitPrice;
                    this.form.Quantity.value = 1;
                    this.form.Discount.value = 0;
                    var unitId = Q.toId(CloudGarage.Inventory.ProductsRow.getLookup().itemById[productID].UnitId);
                    this.form.UnitId.value = unitId;
                }
            });
        }
    }
}                                                                                                                                                                                           