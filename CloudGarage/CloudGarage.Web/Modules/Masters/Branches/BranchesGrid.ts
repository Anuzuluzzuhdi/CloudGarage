
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class BranchesGrid extends Serenity.EntityGrid<BranchesRow, any> {
        protected getColumnsKey() { return BranchesColumns.columnsKey; }
        protected getDialogType() { return BranchesDialog; }
        protected getIdProperty() { return BranchesRow.idProperty; }
        protected getInsertPermission() { return BranchesRow.insertPermission; }
        protected getLocalTextPrefix() { return BranchesRow.localTextPrefix; }
        protected getService() { return BranchesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}