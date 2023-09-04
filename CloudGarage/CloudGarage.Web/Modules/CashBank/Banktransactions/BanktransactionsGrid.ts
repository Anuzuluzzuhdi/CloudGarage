
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class BanktransactionsGrid extends Serenity.EntityGrid<BanktransactionsRow, any> {
        protected getColumnsKey() { return BanktransactionsColumns.columnsKey; }
        protected getDialogType() { return BanktransactionsDialog; }
        protected getIdProperty() { return BanktransactionsRow.idProperty; }
        protected getInsertPermission() { return BanktransactionsRow.insertPermission; }
        protected getLocalTextPrefix() { return BanktransactionsRow.localTextPrefix; }
        protected getService() { return BanktransactionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return window.localStorage;
        }
    }
}