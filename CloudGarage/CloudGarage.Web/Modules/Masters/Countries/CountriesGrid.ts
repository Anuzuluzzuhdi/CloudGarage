
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey() { return CountriesColumns.columnsKey; }
        protected getDialogType() { return CountriesDialog; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getInsertPermission() { return CountriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getService() { return CountriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}