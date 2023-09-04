
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class JobcategoriesDialog extends Serenity.EntityDialog<JobcategoriesRow, any> {
        protected getFormKey() { return JobcategoriesForm.formKey; }
        protected getIdProperty() { return JobcategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return JobcategoriesRow.localTextPrefix; }
        protected getNameProperty() { return JobcategoriesRow.nameProperty; }
        protected getService() { return JobcategoriesService.baseUrl; }
        protected getDeletePermission() { return JobcategoriesRow.deletePermission; }
        protected getInsertPermission() { return JobcategoriesRow.insertPermission; }
        protected getUpdatePermission() { return JobcategoriesRow.updatePermission; }

        protected form = new JobcategoriesForm(this.idPrefix);

    }
}