
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendancestatusesGrid extends Serenity.EntityGrid<AttendancestatusesRow, any> {
        protected getColumnsKey() { return AttendancestatusesColumns.columnsKey; }
        protected getDialogType() { return AttendancestatusesDialog; }
        protected getIdProperty() { return AttendancestatusesRow.idProperty; }
        protected getInsertPermission() { return AttendancestatusesRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendancestatusesRow.localTextPrefix; }
        protected getService() { return AttendancestatusesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}