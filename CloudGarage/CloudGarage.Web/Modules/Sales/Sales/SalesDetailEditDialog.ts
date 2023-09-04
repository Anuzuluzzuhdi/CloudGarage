namespace CloudGarage.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesDetailEditDialog extends Common.GridEditorDialog<SaledetailsRow> {
        protected getFormKey() { return SaledetailsForm.formKey; }
        protected getNameProperty() { return SaledetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return SaledetailsRow.localTextPrefix; }

        protected form: SaledetailsForm;

        constructor() {
            super();
            this.form = new SaledetailsForm(this.idPrefix);
        }

    }
}