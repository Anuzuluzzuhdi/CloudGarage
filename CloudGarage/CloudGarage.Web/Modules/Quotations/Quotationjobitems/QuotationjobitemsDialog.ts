
namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationjobitemsDialog extends Serenity.Extensions.GridEditorDialog<QuotationjobitemsRow> {
        protected getFormKey() { return QuotationjobitemsForm.formKey; }                                      
        protected getIdProperty() { return QuotationjobitemsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationjobitemsRow.nameProperty; }
        protected getService() { return QuotationjobitemsService.baseUrl; }
        protected getDeletePermission() { return QuotationjobitemsRow.deletePermission; }                            
        protected getInsertPermission() { return QuotationjobitemsRow.insertPermission; }
        protected getUpdatePermission() { return QuotationjobitemsRow.updatePermission; }

        protected form = new QuotationjobitemsForm(this.idPrefix);
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