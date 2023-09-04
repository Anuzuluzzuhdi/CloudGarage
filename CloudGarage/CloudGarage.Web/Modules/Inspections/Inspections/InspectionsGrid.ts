
namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionsGrid extends Serenity.EntityGrid<InspectionsRow, any> {
        protected getColumnsKey() { return InspectionsColumns.columnsKey; }
        protected getDialogType() { return InspectionsDialog; }
        protected getIdProperty() { return InspectionsRow.idProperty; }
        protected getInsertPermission() { return InspectionsRow.insertPermission; }
        protected getLocalTextPrefix() { return InspectionsRow.localTextPrefix; }
        protected getService() { return InspectionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}