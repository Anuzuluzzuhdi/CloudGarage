
namespace CloudGarage.HumanResource {

    @Serenity.Decorators.registerClass()
    export class AttendanceGrid extends Serenity.EntityGrid<AttendanceRow, any> {
        protected getColumnsKey() { return AttendanceColumns.columnsKey; }
        protected getDialogType() { return AttendanceDialog; }
        protected getIdProperty() { return AttendanceRow.idProperty; }
        protected getInsertPermission() { return AttendanceRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendanceRow.localTextPrefix; }
        protected getService() { return AttendanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: AttendanceService.baseUrl + '/ListExcel',
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