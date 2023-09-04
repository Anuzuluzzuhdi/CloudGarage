
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class UpdatestocksGrid extends Serenity.EntityGrid<UpdatestocksRow, any> {
        protected getColumnsKey() { return UpdatestocksColumns.columnsKey; }
        protected getDialogType() { return UpdatestocksDialog; }
        protected getIdProperty() { return UpdatestocksRow.idProperty; }
        protected getInsertPermission() { return UpdatestocksRow.insertPermission; }
        protected getLocalTextPrefix() { return UpdatestocksRow.localTextPrefix; }
        protected getService() { return UpdatestocksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: UpdatestocksService.baseUrl + '/ListExcel',
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