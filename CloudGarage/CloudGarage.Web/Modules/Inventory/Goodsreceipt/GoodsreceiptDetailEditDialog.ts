

namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsReceiptDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsreceiptdetailsRow> {
        protected getFormKey() { return GoodsreceiptdetailsForm.formKey; }
        protected getNameProperty() { return GoodsreceiptdetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return GoodsreceiptdetailsRow.localTextPrefix; }

        protected form: GoodsreceiptdetailsForm;

        constructor() {
            super();
            this.form = new GoodsreceiptdetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.Quantity.value = 1;
                }
            });
        }

    }
}