namespace CloudGarage.Sales {

    @Serenity.Decorators.registerClass()
    export class PickerOrderDialog extends Serenity.EntityDialog<SaledetailsRow, any> {
        protected getFormKey() { return PickerOrderForm.formKey; }
        protected getIdProperty() { return SaledetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SaledetailsRow.localTextPrefix; }
        protected getNameProperty() { return SaledetailsRow.nameProperty; }
        protected getService() { return SaledetailsService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}