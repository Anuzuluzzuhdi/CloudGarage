namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class PickerProductDialog extends Serenity.EntityDialog<InvoiceitemsRow, any> {
        protected getFormKey() { return PickerProductForm.formKey; }
        protected getIdProperty() { return InvoiceitemsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceitemsRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceitemsRow.nameProperty; }
        protected getService() { return InvoiceitemsService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}