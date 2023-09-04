
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CashadjustmentGrid extends Serenity.EntityGrid<CashadjustmentRow, any> {
        protected getColumnsKey() { return CashadjustmentColumns.columnsKey; }
        protected getDialogType() { return CashadjustmentDialog; }
        protected getIdProperty() { return CashadjustmentRow.idProperty; }
        protected getInsertPermission() { return CashadjustmentRow.insertPermission; }
        protected getLocalTextPrefix() { return CashadjustmentRow.localTextPrefix; }
        protected getService() { return CashadjustmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: CashadjustmentService.baseUrl + '/ListExcel',
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