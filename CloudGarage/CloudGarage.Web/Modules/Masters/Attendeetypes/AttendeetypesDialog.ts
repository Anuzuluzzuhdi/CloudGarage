
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendeetypesDialog extends Serenity.EntityDialog<AttendeetypesRow, any> {
        protected getFormKey() { return AttendeetypesForm.formKey; }
        protected getIdProperty() { return AttendeetypesRow.idProperty; }
        protected getLocalTextPrefix() { return AttendeetypesRow.localTextPrefix; }
        protected getNameProperty() { return AttendeetypesRow.nameProperty; }
        protected getService() { return AttendeetypesService.baseUrl; }
        protected getDeletePermission() { return AttendeetypesRow.deletePermission; }
        protected getInsertPermission() { return AttendeetypesRow.insertPermission; }
        protected getUpdatePermission() { return AttendeetypesRow.updatePermission; }

        protected form = new AttendeetypesForm(this.idPrefix);

    }
}