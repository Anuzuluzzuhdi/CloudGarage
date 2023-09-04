namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class PickOrderDialog extends Serenity.EntityDialog<QuotationdetailsRow, any> {
        protected getFormKey() { return PickOrderForm.formKey; }
        protected getIdProperty() { return QuotationdetailsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationdetailsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationdetailsRow.nameProperty; }
        protected getService() { return QuotationdetailsService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}