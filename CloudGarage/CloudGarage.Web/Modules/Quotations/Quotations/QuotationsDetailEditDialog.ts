namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationsDetailEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationdetailsRow> {
        protected getFormKey() { return QuotationdetailsForm.formKey; }
        protected getNameProperty() { return QuotationdetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return QuotationdetailsRow.localTextPrefix; }

        protected form: QuotationdetailsForm;

        constructor() {
            super();
            this.form = new QuotationdetailsForm(this.idPrefix);

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