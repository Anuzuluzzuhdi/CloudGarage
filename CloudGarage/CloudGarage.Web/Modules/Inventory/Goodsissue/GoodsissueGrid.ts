
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class GoodsissueGrid extends Serenity.EntityGrid<GoodsissueRow, any> {
        protected getColumnsKey() { return GoodsissueColumns.columnsKey; }
        protected getDialogType() { return GoodsissueDialog; }
        protected getIdProperty() { return GoodsissueRow.idProperty; }
        protected getInsertPermission() { return GoodsissueRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsissueRow.localTextPrefix; }
        protected getService() { return GoodsissueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: GoodsissueService.baseUrl + '/ListExcel',
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