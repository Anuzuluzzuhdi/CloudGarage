
namespace CloudGarage.Common {

    @Serenity.Decorators.registerClass()
    export class UserpreferencesGrid extends Serenity.EntityGrid<UserpreferencesRow, any> {
        protected getColumnsKey() { return UserpreferencesColumns.columnsKey; }
        protected getDialogType() { return UserpreferencesDialog; }
        protected getIdProperty() { return UserpreferencesRow.idProperty; }
        protected getInsertPermission() { return UserpreferencesRow.insertPermission; }
        protected getLocalTextPrefix() { return UserpreferencesRow.localTextPrefix; }
        protected getService() { return UserpreferencesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}