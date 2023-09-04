namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class PickJobTypeDialog extends Serenity.EntityDialog<QuotationjobitemsRow, any> {
        protected getFormKey() { return PickJobTypeForm.formKey; }
        protected getIdProperty() { return QuotationjobitemsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationjobitemsRow.nameProperty; }
        protected getService() { return QuotationjobitemsService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}