
namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobcarddetailsDialog extends Serenity.EntityDialog<JobcarddetailsRow, any> {
        protected getFormKey() { return JobcarddetailsForm.formKey; }
        protected getIdProperty() { return JobcarddetailsRow.idProperty; }
        protected getLocalTextPrefix() { return JobcarddetailsRow.localTextPrefix; }
        protected getNameProperty() { return JobcarddetailsRow.nameProperty; }
        protected getService() { return JobcarddetailsService.baseUrl; }
        protected getDeletePermission() { return JobcarddetailsRow.deletePermission; }
        protected getInsertPermission() { return JobcarddetailsRow.insertPermission; }
        protected getUpdatePermission() { return JobcarddetailsRow.updatePermission; }

        protected form = new JobcarddetailsForm(this.idPrefix);

    }
}