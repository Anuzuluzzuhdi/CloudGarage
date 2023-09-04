
namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionjobtypesGrid extends Serenity.EntityGrid<InspectionjobtypesRow, any> {
        protected getColumnsKey() { return InspectionjobtypesColumns.columnsKey; }
        protected getDialogType() { return InspectionjobtypesDialog; }
        protected getIdProperty() { return InspectionjobtypesRow.idProperty; }
        protected getInsertPermission() { return InspectionjobtypesRow.insertPermission; }
        protected getLocalTextPrefix() { return InspectionjobtypesRow.localTextPrefix; }
        protected getService() { return InspectionjobtypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}