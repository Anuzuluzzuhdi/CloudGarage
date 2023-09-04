
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CustomerreceiveGrid extends Serenity.EntityGrid<CustomerreceiveRow, any> {
        protected getColumnsKey() { return CustomerreceiveColumns.columnsKey; }
        protected getDialogType() { return CustomerreceiveDialog; }
        protected getIdProperty() { return CustomerreceiveRow.idProperty; }
        protected getInsertPermission() { return CustomerreceiveRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerreceiveRow.localTextPrefix; }
        protected getService() { return CustomerreceiveService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: CustomerreceiveService.baseUrl + '/ListExcel',
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return window.localStorage;
        }
    }
}