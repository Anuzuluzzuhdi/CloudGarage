namespace CloudGarage.Purchasing {

    @Serenity.Decorators.registerClass()
    export class PickOrderDialog extends Serenity.EntityDialog<PurchasedetailsRow, any> {
        protected getFormKey() { return PickOrderForm.formKey; }
        protected getIdProperty() { return PurchasedetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasedetailsRow.localTextPrefix; }
        protected getNameProperty() { return PurchasedetailsRow.nameProperty; }
        protected getService() { return PurchasedetailsService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}                                                    