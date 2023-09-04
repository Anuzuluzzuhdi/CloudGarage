
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class VehiclemodelsGrid extends Serenity.EntityGrid<VehiclemodelsRow, any> {
        protected getColumnsKey() { return VehiclemodelsColumns.columnsKey; }
        protected getDialogType() { return VehiclemodelsDialog; }
        protected getIdProperty() { return VehiclemodelsRow.idProperty; }
        protected getInsertPermission() { return VehiclemodelsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehiclemodelsRow.localTextPrefix; }
        protected getService() { return VehiclemodelsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}