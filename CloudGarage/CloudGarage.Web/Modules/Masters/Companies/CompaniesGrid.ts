
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey() { return CompaniesColumns.columnsKey; }
        protected getDialogType() { return CompaniesDialog; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getInsertPermission() { return CompaniesRow.insertPermission; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getService() { return CompaniesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}