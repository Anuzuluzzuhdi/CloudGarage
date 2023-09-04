
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class VehiclemakesGrid extends Serenity.EntityGrid<VehiclemakesRow, any> {
        protected getColumnsKey() { return VehiclemakesColumns.columnsKey; }
        protected getDialogType() { return VehiclemakesDialog; }
        protected getIdProperty() { return VehiclemakesRow.idProperty; }
        protected getInsertPermission() { return VehiclemakesRow.insertPermission; }
        protected getLocalTextPrefix() { return VehiclemakesRow.localTextPrefix; }
        protected getService() { return VehiclemakesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}