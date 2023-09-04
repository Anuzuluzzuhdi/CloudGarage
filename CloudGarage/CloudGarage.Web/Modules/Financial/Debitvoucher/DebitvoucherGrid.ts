
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DebitvoucherGrid extends Serenity.EntityGrid<DebitvoucherRow, any> {
        protected getColumnsKey() { return DebitvoucherColumns.columnsKey; }
        protected getDialogType() { return DebitvoucherDialog; }
        protected getIdProperty() { return DebitvoucherRow.idProperty; }
        protected getInsertPermission() { return DebitvoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return DebitvoucherRow.localTextPrefix; }
        protected getService() { return DebitvoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}