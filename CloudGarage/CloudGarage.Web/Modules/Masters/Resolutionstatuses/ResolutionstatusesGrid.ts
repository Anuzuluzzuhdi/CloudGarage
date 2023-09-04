
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class ResolutionstatusesGrid extends Serenity.EntityGrid<ResolutionstatusesRow, any> {
        protected getColumnsKey() { return ResolutionstatusesColumns.columnsKey; }
        protected getDialogType() { return ResolutionstatusesDialog; }
        protected getIdProperty() { return ResolutionstatusesRow.idProperty; }
        protected getInsertPermission() { return ResolutionstatusesRow.insertPermission; }
        protected getLocalTextPrefix() { return ResolutionstatusesRow.localTextPrefix; }
        protected getService() { return ResolutionstatusesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}