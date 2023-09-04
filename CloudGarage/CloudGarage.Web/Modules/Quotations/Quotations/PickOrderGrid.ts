
namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class PickOrderGrid extends Inventory.ProductsGrid {
        protected getDialogType() { return <any>PickOrderDialog; }
    }
}
