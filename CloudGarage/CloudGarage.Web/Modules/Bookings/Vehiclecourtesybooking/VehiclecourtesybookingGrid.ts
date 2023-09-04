
namespace CloudGarage.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehiclecourtesybookingGrid extends Serenity.EntityGrid<VehiclecourtesybookingRow, any> {
        protected getColumnsKey() { return VehiclecourtesybookingColumns.columnsKey; }
        protected getDialogType() { return VehiclecourtesybookingDialog; }
        protected getIdProperty() { return VehiclecourtesybookingRow.idProperty; }
        protected getInsertPermission() { return VehiclecourtesybookingRow.insertPermission; }
        protected getLocalTextPrefix() { return VehiclecourtesybookingRow.localTextPrefix; }
        protected getService() { return VehiclecourtesybookingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: VehiclecourtesybookingService.baseUrl + '/ListExcel',
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));


            return buttons;
        }
    }
}