
namespace CloudGarage.Reports {

    @Serenity.Decorators.registerClass()
    export class DailyclosingGrid extends Serenity.EntityGrid<DailyclosingRow, any> {
        protected getColumnsKey() { return DailyclosingColumns.columnsKey; }
        protected getDialogType() { return DailyclosingDialog; }
        protected getIdProperty() { return DailyclosingRow.idProperty; }
        protected getInsertPermission() { return DailyclosingRow.insertPermission; }
        protected getLocalTextPrefix() { return DailyclosingRow.localTextPrefix; }
        protected getService() { return DailyclosingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}