
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class RegionsGrid extends Serenity.EntityGrid<RegionsRow, any> {
        protected getColumnsKey() { return RegionsColumns.columnsKey; }
        protected getDialogType() { return RegionsDialog; }
        protected getIdProperty() { return RegionsRow.idProperty; }
        protected getInsertPermission() { return RegionsRow.insertPermission; }
        protected getLocalTextPrefix() { return RegionsRow.localTextPrefix; }
        protected getService() { return RegionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}