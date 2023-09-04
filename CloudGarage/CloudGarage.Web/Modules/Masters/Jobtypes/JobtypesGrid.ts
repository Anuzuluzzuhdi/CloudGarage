
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class JobtypesGrid extends Serenity.EntityGrid<JobtypesRow, any> {
        protected getColumnsKey() { return JobtypesColumns.columnsKey; }
        protected getDialogType() { return JobtypesDialog; }
        protected getIdProperty() { return JobtypesRow.idProperty; }
        protected getInsertPermission() { return JobtypesRow.insertPermission; }
        protected getLocalTextPrefix() { return JobtypesRow.localTextPrefix; }
        protected getService() { return JobtypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}