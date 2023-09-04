
namespace CloudGarage.Vehicles {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class VehicleGrid extends Serenity.EntityGrid<VehicleRow, any> {
        protected getColumnsKey() { return VehicleColumns.columnsKey; }
        protected getDialogType() { return VehicleDialog; }
        protected getIdProperty() { return VehicleRow.idProperty; }
        protected getInsertPermission() { return VehicleRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleRow.localTextPrefix; }
        protected getService() { return VehicleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: VehicleService.baseUrl + '/ListExcel',
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