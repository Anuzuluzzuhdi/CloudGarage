
namespace CloudGarage.CashBank {

    @Serenity.Decorators.registerClass()
    export class SupplierpaymentGrid extends Serenity.EntityGrid<SupplierpaymentRow, any> {
        protected getColumnsKey() { return SupplierpaymentColumns.columnsKey; }
        protected getDialogType() { return SupplierpaymentDialog; }
        protected getIdProperty() { return SupplierpaymentRow.idProperty; }
        protected getInsertPermission() { return SupplierpaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return SupplierpaymentRow.localTextPrefix; }
        protected getService() { return SupplierpaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: SupplierpaymentService.baseUrl + '/ListExcel',
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