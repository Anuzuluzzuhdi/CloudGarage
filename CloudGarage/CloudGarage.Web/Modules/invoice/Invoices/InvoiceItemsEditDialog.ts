namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemsEditDialog extends Serenity.Extensions.GridEditorDialog<InvoiceitemsRow> {
        protected getFormKey() { return InvoiceitemsForm.formKey; }
        protected getNameProperty() { return InvoiceitemsRow.nameProperty; }
        protected getLocalTextPrefix() { return InvoiceitemsRow.localTextPrefix; }

        protected form: InvoiceitemsForm;

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