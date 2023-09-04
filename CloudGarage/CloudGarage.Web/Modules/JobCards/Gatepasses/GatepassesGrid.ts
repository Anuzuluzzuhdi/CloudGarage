
namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    export class GatepassesGrid extends Serenity.EntityGrid<GatepassesRow, any> {
        protected getColumnsKey() { return GatepassesColumns.columnsKey; }
        protected getDialogType() { return GatepassesDialog; }
        protected getIdProperty() { return GatepassesRow.idProperty; }
        protected getInsertPermission() { return GatepassesRow.insertPermission; }
        protected getLocalTextPrefix() { return GatepassesRow.localTextPrefix; }
        protected getService() { return GatepassesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: GatepassesService.baseUrl + '/ListExcel',
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