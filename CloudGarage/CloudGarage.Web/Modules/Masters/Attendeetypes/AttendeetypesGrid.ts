
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AttendeetypesGrid extends Serenity.EntityGrid<AttendeetypesRow, any> {
        protected getColumnsKey() { return AttendeetypesColumns.columnsKey; }
        protected getDialogType() { return AttendeetypesDialog; }
        protected getIdProperty() { return AttendeetypesRow.idProperty; }
        protected getInsertPermission() { return AttendeetypesRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendeetypesRow.localTextPrefix; }
        protected getService() { return AttendeetypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}