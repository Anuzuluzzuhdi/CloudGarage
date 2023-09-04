namespace CloudGarage.invoice {
    @Serenity.Decorators.registerFormatter()
    export class UnitNameFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            console.log(ctx.item);
            if (ctx.item.UnitId == "" || ctx.item.UnitId == null) {
                return "<span class=''>-</span>";
            } else {
                var Name = Inventory.UnitsRow.getLookup().itemById[parseInt(ctx.item.UnitId)].Name;

                return Name;
            }
        }
    }
}