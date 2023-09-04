﻿
namespace CloudGarage.Sales {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class PickerOrderGrid extends Inventory.ProductsGrid {
        protected getDialogType() { return <any>PickerOrderDialog; }
    }
}
