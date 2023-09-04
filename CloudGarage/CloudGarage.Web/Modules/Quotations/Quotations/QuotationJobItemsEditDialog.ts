namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationJobItemsEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationjobitemsRow> {
        protected getFormKey() { return QuotationjobitemsForm.formKey; }
        protected getNameProperty() { return QuotationjobitemsRow.nameProperty; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }

        protected form: QuotationjobitemsForm;

        constructor() {
            super();
            this.form = new QuotationjobitemsForm(this.idPrefix);

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