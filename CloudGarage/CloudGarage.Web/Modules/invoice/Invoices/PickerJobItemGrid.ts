
namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class PickerJobItemGrid extends Inventory.ProductsGrid {
        protected getDialogType() { return <any>PickerJobItemDialog; }
    }
}
