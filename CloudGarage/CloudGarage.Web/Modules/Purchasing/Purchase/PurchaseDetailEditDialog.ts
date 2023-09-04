
namespace CloudGarage.Purchasing {

    @Serenity.Decorators.registerClass()
    export class PurchaseDetailEditDialog extends Serenity.Extensions.GridEditorDialog<PurchasedetailsRow> {
        protected getFormKey() { return PurchasedetailsForm.formKey; }
        protected getNameProperty() { return PurchasedetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return PurchasedetailsRow.localTextPrefix; }

        protected form: PurchasedetailsForm;

        constructor() {
            super();
            this.form = new PurchasedetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].PurchasePrice;
                    this.form.Quantity.value = 1;
                    this.form.Discount.value = 0;
                    this.form.UnitPrice.value = 0;
                    var unitId = Q.toId(CloudGarage.Inventory.ProductsRow.getLookup().itemById[productID].UnitId);
                    this.form.UnitId.value = unitId;
                }
            });
        }

    }
}