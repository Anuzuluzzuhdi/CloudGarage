
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendancestatusesDialog extends Serenity.EntityDialog<AttendancestatusesRow, any> {
        protected getFormKey() { return AttendancestatusesForm.formKey; }
        protected getIdProperty() { return AttendancestatusesRow.idProperty; }
        protected getLocalTextPrefix() { return AttendancestatusesRow.localTextPrefix; }
        protected getNameProperty() { return AttendancestatusesRow.nameProperty; }
        protected getService() { return AttendancestatusesService.baseUrl; }
        protected getDeletePermission() { return AttendancestatusesRow.deletePermission; }
        protected getInsertPermission() { return AttendancestatusesRow.insertPermission; }
        protected getUpdatePermission() { return AttendancestatusesRow.updatePermission; }

        protected form = new AttendancestatusesForm(this.idPrefix);

    }
}