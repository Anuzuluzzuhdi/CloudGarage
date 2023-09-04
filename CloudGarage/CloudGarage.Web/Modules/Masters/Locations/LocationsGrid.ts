
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class LocationsGrid extends Serenity.EntityGrid<LocationsRow, any> {
        protected getColumnsKey() { return LocationsColumns.columnsKey; }
        protected getDialogType() { return LocationsDialog; }
        protected getIdProperty() { return LocationsRow.idProperty; }
        protected getInsertPermission() { return LocationsRow.insertPermission; }
        protected getLocalTextPrefix() { return LocationsRow.localTextPrefix; }
        protected getService() { return LocationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}