
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class TerritoriesGrid extends Serenity.EntityGrid<TerritoriesRow, any> {
        protected getColumnsKey() { return TerritoriesColumns.columnsKey; }
        protected getDialogType() { return TerritoriesDialog; }
        protected getIdProperty() { return TerritoriesRow.idProperty; }
        protected getInsertPermission() { return TerritoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return TerritoriesRow.localTextPrefix; }
        protected getService() { return TerritoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}