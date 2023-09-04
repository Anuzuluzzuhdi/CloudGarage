
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class ColortypesGrid extends Serenity.EntityGrid<ColortypesRow, any> {
        protected getColumnsKey() { return ColortypesColumns.columnsKey; }
        protected getDialogType() { return ColortypesDialog; }
        protected getIdProperty() { return ColortypesRow.idProperty; }
        protected getInsertPermission() { return ColortypesRow.insertPermission; }
        protected getLocalTextPrefix() { return ColortypesRow.localTextPrefix; }
        protected getService() { return ColortypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}