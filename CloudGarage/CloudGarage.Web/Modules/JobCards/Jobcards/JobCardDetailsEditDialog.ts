namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobCardDetailsEditDialog extends Serenity.Extensions.GridEditorDialog<JobCards.JobcarddetailsRow> {
        protected getFormKey() { return JobCards.JobcarddetailsForm.formKey; }
        protected getNameProperty() { return JobCards.JobcarddetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return JobCards.JobcarddetailsRow.localTextPrefix; }

        protected form: JobCards.JobcarddetailsForm;

        constructor() {
            super();
            this.form = new JobCards.JobcarddetailsForm(this.idPrefix);
        }
    }
}