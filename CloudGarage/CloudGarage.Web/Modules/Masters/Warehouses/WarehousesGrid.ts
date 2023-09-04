﻿
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class WarehousesGrid extends Serenity.EntityGrid<WarehousesRow, any> {
        protected getColumnsKey() { return WarehousesColumns.columnsKey; }
        protected getDialogType() { return WarehousesDialog; }
        protected getIdProperty() { return WarehousesRow.idProperty; }
        protected getInsertPermission() { return WarehousesRow.insertPermission; }
        protected getLocalTextPrefix() { return WarehousesRow.localTextPrefix; }
        protected getService() { return WarehousesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}