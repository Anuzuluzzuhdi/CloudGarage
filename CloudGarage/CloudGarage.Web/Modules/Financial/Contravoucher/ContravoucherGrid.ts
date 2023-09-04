
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ContravoucherGrid extends Serenity.EntityGrid<ContravoucherRow, any> {
        protected getColumnsKey() { return ContravoucherColumns.columnsKey; }
        protected getDialogType() { return ContravoucherDialog; }
        protected getIdProperty() { return ContravoucherRow.idProperty; }
        protected getInsertPermission() { return ContravoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return ContravoucherRow.localTextPrefix; }
        protected getService() { return ContravoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}