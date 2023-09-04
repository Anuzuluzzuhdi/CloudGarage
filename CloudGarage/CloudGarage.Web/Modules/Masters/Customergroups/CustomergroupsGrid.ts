
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class CustomergroupsGrid extends Serenity.EntityGrid<CustomergroupsRow, any> {
        protected getColumnsKey() { return CustomergroupsColumns.columnsKey; }
        protected getDialogType() { return CustomergroupsDialog; }
        protected getIdProperty() { return CustomergroupsRow.idProperty; }
        protected getInsertPermission() { return CustomergroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomergroupsRow.localTextPrefix; }
        protected getService() { return CustomergroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}