
namespace CloudGarage.HumanResource {

    @Serenity.Decorators.registerClass()
    export class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey() { return DepartmentsColumns.columnsKey; }
        protected getDialogType() { return DepartmentsDialog; }
        protected getIdProperty() { return DepartmentsRow.idProperty; }
        protected getInsertPermission() { return DepartmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return DepartmentsRow.localTextPrefix; }
        protected getService() { return DepartmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}