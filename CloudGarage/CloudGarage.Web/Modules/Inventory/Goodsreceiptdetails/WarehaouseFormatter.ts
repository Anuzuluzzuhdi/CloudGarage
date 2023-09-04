namespace CloudGarage.Inventory {
    @Serenity.Decorators.registerFormatter()
    export class WarehaouseFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            console.log(ctx.item);
            if (ctx.item.WarehouseId == "" || ctx.item.WarehouseId == null) {
                return "<span class=''>-</span>";
            } else {
                var Name = Masters.WarehousesRow.getLookup().itemById[parseInt(ctx.item.WarehouseId)].Name;

                return Name;
            }
        }
    }
}