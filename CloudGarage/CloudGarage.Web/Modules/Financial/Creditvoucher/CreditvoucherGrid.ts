
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CreditvoucherGrid extends Serenity.EntityGrid<CreditvoucherRow, any> {
        protected getColumnsKey() { return CreditvoucherColumns.columnsKey; }
        protected getDialogType() { return CreditvoucherDialog; }
        protected getIdProperty() { return CreditvoucherRow.idProperty; }
        protected getInsertPermission() { return CreditvoucherRow.insertPermission; }
        protected getLocalTextPrefix() { return CreditvoucherRow.localTextPrefix; }
        protected getService() { return CreditvoucherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}