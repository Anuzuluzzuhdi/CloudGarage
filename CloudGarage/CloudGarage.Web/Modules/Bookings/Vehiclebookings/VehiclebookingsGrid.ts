
namespace CloudGarage.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehiclebookingsGrid extends Serenity.EntityGrid<VehiclebookingsRow, any> {
        protected getColumnsKey() { return VehiclebookingsColumns.columnsKey; }
        protected getDialogType() { return VehiclebookingsDialog; }
        protected getIdProperty() { return VehiclebookingsRow.idProperty; }
        protected getInsertPermission() { return VehiclebookingsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehiclebookingsRow.localTextPrefix; }
        protected getService() { return VehiclebookingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: VehiclebookingsService.baseUrl + '/ListExcel',
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