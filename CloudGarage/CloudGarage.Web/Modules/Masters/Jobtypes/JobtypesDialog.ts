
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class JobtypesDialog extends Serenity.EntityDialog<JobtypesRow, any> {
        protected getFormKey() { return JobtypesForm.formKey; }
        protected getIdProperty() { return JobtypesRow.idProperty; }
        protected getLocalTextPrefix() { return JobtypesRow.localTextPrefix; }
        protected getNameProperty() { return JobtypesRow.nameProperty; }
        protected getService() { return JobtypesService.baseUrl; }
        protected getDeletePermission() { return JobtypesRow.deletePermission; }
        protected getInsertPermission() { return JobtypesRow.insertPermission; }
        protected getUpdatePermission() { return JobtypesRow.updatePermission; }

        protected form = new JobtypesForm(this.idPrefix);

    }
}