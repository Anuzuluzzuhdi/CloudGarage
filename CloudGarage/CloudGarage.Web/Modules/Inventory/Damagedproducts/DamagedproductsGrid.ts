
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DamagedproductsGrid extends Serenity.EntityGrid<DamagedproductsRow, any> {
        protected getColumnsKey() { return DamagedproductsColumns.columnsKey; }
        protected getDialogType() { return DamagedproductsDialog; }
        protected getIdProperty() { return DamagedproductsRow.idProperty; }
        protected getInsertPermission() { return DamagedproductsRow.insertPermission; }
        protected getLocalTextPrefix() { return DamagedproductsRow.localTextPrefix; }
        protected getService() { return DamagedproductsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: DamagedproductsService.baseUrl + '/ListExcel',
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