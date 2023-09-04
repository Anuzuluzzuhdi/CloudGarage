
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class JobcategoriesGrid extends Serenity.EntityGrid<JobcategoriesRow, any> {
        protected getColumnsKey() { return JobcategoriesColumns.columnsKey; }
        protected getDialogType() { return JobcategoriesDialog; }
        protected getIdProperty() { return JobcategoriesRow.idProperty; }
        protected getInsertPermission() { return JobcategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return JobcategoriesRow.localTextPrefix; }
        protected getService() { return JobcategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}