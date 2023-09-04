
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicletypesGrid extends Serenity.EntityGrid<VehicletypesRow, any> {
        protected getColumnsKey() { return VehicletypesColumns.columnsKey; }
        protected getDialogType() { return VehicletypesDialog; }
        protected getIdProperty() { return VehicletypesRow.idProperty; }
        protected getInsertPermission() { return VehicletypesRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicletypesRow.localTextPrefix; }
        protected getService() { return VehicletypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}