
namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobcarddetailsGrid extends Serenity.EntityGrid<JobcarddetailsRow, any> {
        protected getColumnsKey() { return JobcarddetailsColumns.columnsKey; }
        protected getDialogType() { return JobcarddetailsDialog; }
        protected getIdProperty() { return JobcarddetailsRow.idProperty; }
        protected getInsertPermission() { return JobcarddetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return JobcarddetailsRow.localTextPrefix; }
        protected getService() { return JobcarddetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}