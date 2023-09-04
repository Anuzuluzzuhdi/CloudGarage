
namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobcardsGrid extends Serenity.EntityGrid<JobcardsRow, any> {
        protected getColumnsKey() { return JobcardsColumns.columnsKey; }
        protected getDialogType() { return JobcardsDialog; }
        protected getIdProperty() { return JobcardsRow.idProperty; }
        protected getInsertPermission() { return JobcardsRow.insertPermission; }
        protected getLocalTextPrefix() { return JobcardsRow.localTextPrefix; }
        protected getService() { return JobcardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

        }
        protected getButtons() {
            var buttons = super.getButtons();
            var $this = this;
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: JobcardsService.baseUrl + '/ListExcel',
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