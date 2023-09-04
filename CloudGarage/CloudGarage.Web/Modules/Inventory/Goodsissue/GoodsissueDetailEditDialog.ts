
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsIssueDetailEditDialog extends Serenity.Extensions.GridEditorDialog<GoodsissuedetailsRow> {
        protected getFormKey() { return GoodsissuedetailsForm.formKey; }
        protected getNameProperty() { return GoodsissuedetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return GoodsissuedetailsRow.localTextPrefix; }

        protected form: GoodsissuedetailsForm;

        constructor() {
            super();
            this.form = new GoodsissuedetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.Quantity.value = 1;
                }
            });
        }

    }
}