
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class GoodsreceiptGrid extends Serenity.EntityGrid<GoodsreceiptRow, any> {
        protected getColumnsKey() { return GoodsreceiptColumns.columnsKey; }
        protected getDialogType() { return GoodsreceiptDialog; }
        protected getIdProperty() { return GoodsreceiptRow.idProperty; }
        protected getInsertPermission() { return GoodsreceiptRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsreceiptRow.localTextPrefix; }
        protected getService() { return GoodsreceiptService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: GoodsreceiptService.baseUrl + '/ListExcel',
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