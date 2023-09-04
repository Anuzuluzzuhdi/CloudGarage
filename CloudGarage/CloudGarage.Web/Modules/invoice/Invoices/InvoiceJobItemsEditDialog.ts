namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class InvoiceJobItemsEditDialog extends Serenity.Extensions.GridEditorDialog<InvoicejobitemsRow> {
        protected getFormKey() { return InvoicejobitemsForm.formKey; }
        protected getNameProperty() { return InvoicejobitemsRow.nameProperty; }
        protected getLocalTextPrefix() { return InvoicejobitemsRow.localTextPrefix; }

        protected form: InvoicejobitemsForm;

        constructor() {
            super();
            this.form = new InvoicejobitemsForm(this.idPrefix);

            this.form.JobType.changeSelect2(e => {

                var JobTypeID = Q.toId(this.form.JobType.value);
                if (JobTypeID != null) {
                    this.form.UnitPrice.value = CloudGarage.Masters.JobtypesRow.getLookup().itemById[JobTypeID].Rate;
                    this.form.Discount.value = 0;
                }
            });
        }

    }
}