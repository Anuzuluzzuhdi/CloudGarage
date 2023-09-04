namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class JobItemsPickEditDialog extends Serenity.Extensions.GridEditorDialog<QuotationjobitemsRow> {
        protected getFormKey() { return QuotationjobitemsForm.formKey; }
        protected getNameProperty() { return QuotationjobitemsRow.nameProperty; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }

        protected form: QuotationjobitemsForm;

        constructor() {
            super();
            this.form = new QuotationjobitemsForm(this.idPrefix);

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