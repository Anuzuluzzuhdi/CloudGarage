
namespace CloudGarage.Sales {

    @Serenity.Decorators.registerClass()
    export class SaledetailsDialog extends Serenity.Extensions.GridEditorDialog<SaledetailsRow> {
        protected getFormKey() { return SaledetailsForm.formKey; }
        protected getIdProperty() { return SaledetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SaledetailsRow.localTextPrefix; }
        protected getNameProperty() { return SaledetailsRow.nameProperty; }
        protected getService() { return SaledetailsService.baseUrl; }
        protected getDeletePermission() { return SaledetailsRow.deletePermission; }
        protected getInsertPermission() { return SaledetailsRow.insertPermission; }
        protected getUpdatePermission() { return SaledetailsRow.updatePermission; }

        protected form = new SaledetailsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new SaledetailsForm(this.idPrefix);

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
