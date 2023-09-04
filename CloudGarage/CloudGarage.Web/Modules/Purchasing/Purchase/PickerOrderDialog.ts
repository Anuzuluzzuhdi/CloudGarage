namespace CloudGarage.Purchasing {

    @Serenity.Decorators.registerClass()
    export class PickerOrderDialog extends Serenity.EntityDialog<Inventory.ProductsRow, any> {
        protected getFormKey() { return PickerOrderFormPurchase.formKey; }
        protected getIdProperty() { return Inventory.ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return Inventory.ProductsRow.localTextPrefix; }
        protected getNameProperty() { return Inventory.ProductsRow.nameProperty; }
        protected getService() { return Inventory.ProductsService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}