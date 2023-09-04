
namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionchecklistGrid extends Serenity.EntityGrid<InspectionchecklistRow, any> {
        protected getColumnsKey() { return InspectionchecklistColumns.columnsKey; }
        protected getDialogType() { return InspectionchecklistDialog; }
        protected getIdProperty() { return InspectionchecklistRow.idProperty; }
        protected getInsertPermission() { return InspectionchecklistRow.insertPermission; }
        protected getLocalTextPrefix() { return InspectionchecklistRow.localTextPrefix; }
        protected getService() { return InspectionchecklistService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}