namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class JobItemsPickEditDialog extends Serenity.Extensions.GridEditorDialog<InvoicejobitemsRow> {
        protected getFormKey() { return InvoicejobitemsForm.formKey; }
        protected getNameProperty() { return InvoicejobitemsRow.nameProperty; }
        protected getLocalTextPrefix() { return InvoicejobitemsRow.localTextPrefix; }

        protected form: InvoicejobitemsForm;

        constructor() {
            super();
            this.form = new InvoicejobitemsForm(this.idPrefix);

            this.form.JobType.changeSelect2(e => {

                var JobTypeId = Q.toId(this.form.JobType.value);
                if (JobTypeId != null) {
                    this.form.UnitPrice.value = Masters.JobtypesRow.getLookup().itemById[JobTypeId].Rate;
                    this.form.Discount.value = 0;
                }
            });
        }

    }
}