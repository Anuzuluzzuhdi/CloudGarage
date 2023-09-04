
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransferDetailEditDialog extends Serenity.Extensions.GridEditorDialog<TransferdetailsRow> {
        protected getFormKey() { return TransferdetailsForm.formKey; }
        protected getNameProperty() { return TransferdetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return TransferdetailsRow.localTextPrefix; }

        protected form: TransferdetailsForm;

        constructor() {
            super();
            this.form = new TransferdetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.UnitPrice.value = CloudGarage.Inventory.ProductsRow.getLookup().itemById[productID].UnitPrice;
                    this.form.Quantity.value = 1;

                    var unitId = Q.toId(CloudGarage.Inventory.ProductsRow.getLookup().itemById[productID].UnitId);
                    
                }
            });
        }

    }
}