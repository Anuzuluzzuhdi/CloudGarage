
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class SuppliergroupsGrid extends Serenity.EntityGrid<SuppliergroupsRow, any> {
        protected getColumnsKey() { return SuppliergroupsColumns.columnsKey; }
        protected getDialogType() { return SuppliergroupsDialog; }
        protected getIdProperty() { return SuppliergroupsRow.idProperty; }
        protected getInsertPermission() { return SuppliergroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliergroupsRow.localTextPrefix; }
        protected getService() { return SuppliergroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}