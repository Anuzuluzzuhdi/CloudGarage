
namespace CloudGarage.Purchasing {

    @Serenity.Decorators.registerClass()
    export class PurchasedetailsDialog extends Serenity.Extensions.GridEditorDialog<PurchasedetailsRow> {
        protected getFormKey() { return PurchasedetailsForm.formKey; }
        protected getLocalTextPrefix() { return PurchasedetailsRow.localTextPrefix; }

        protected form = new PurchasedetailsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new PurchasedetailsForm(this.idPrefix);

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
