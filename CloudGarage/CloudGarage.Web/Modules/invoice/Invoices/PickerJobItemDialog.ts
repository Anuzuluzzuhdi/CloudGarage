namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class PickerJobItemDialog extends Serenity.EntityDialog<invoice.InvoicejobitemsRow, any> {
        protected getFormKey() { return PickerJobItemForm.formKey; }
        protected getIdProperty() { return invoice.InvoicejobitemsRow.idProperty; }
        protected getLocalTextPrefix() { return invoice.InvoicejobitemsRow.localTextPrefix; }
        protected getNameProperty() { return invoice.InvoicejobitemsRow.nameProperty; }
        protected getService() { return Masters.JobtypesService.baseUrl; }

        //protected form = new PickerOrderForm(this.idPrefix);

        constructor() {
            super();
        }
    }
}