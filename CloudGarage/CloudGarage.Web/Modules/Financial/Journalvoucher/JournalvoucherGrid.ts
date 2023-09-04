
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class JournalvoucherGrid extends Serenity.EntityGrid<JournalvoucherRow, any> {
        protected getColumnsKey() { return JournalvoucherColumns.columnsKey; }
        protected getDialogType() { return JournalvoucherDialog; }
        protected getIdProperty() { return JournalvoucherRow.idProperty; }
        protected getInsertPermission() { return JournalvoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return JournalvoucherRow.localTextPrefix; }
        protected getService() { return JournalvoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}