
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DamagedproductsDialog extends Serenity.EntityDialog<DamagedproductsRow, any> {
        protected getFormKey() { return DamagedproductsForm.formKey; }
        protected getIdProperty() { return DamagedproductsRow.idProperty; }
        protected getLocalTextPrefix() { return DamagedproductsRow.localTextPrefix; }
        protected getNameProperty() { return DamagedproductsRow.nameProperty; }
        protected getService() { return DamagedproductsService.baseUrl; }
        protected getDeletePermission() { return DamagedproductsRow.deletePermission; }
        protected getInsertPermission() { return DamagedproductsRow.insertPermission; }
        protected getUpdatePermission() { return DamagedproductsRow.updatePermission; }

        protected form = new DamagedproductsForm(this.idPrefix);
        constructor() {
            super();
            this.form = new DamagedproductsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    var item = CloudGarage.Inventory.ProductsRow.getLookup().itemById[productID];
                    this.form.Name.value = item.ProductName;
                    this.form.Code.value = item.Barcode;
                    this.form.PurchasePrice.value = item.UnitPrice;
                    this.form.Quantity.value = 1;
                }
            });
        }

    }
}