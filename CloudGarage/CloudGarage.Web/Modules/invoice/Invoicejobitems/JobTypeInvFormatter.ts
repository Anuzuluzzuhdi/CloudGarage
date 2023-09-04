namespace CloudGarage.invoice {

    @Serenity.Decorators.registerFormatter()
    export class JobtypenameFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            if (ctx.item.JobType == "" || ctx.item.JobType == null) {
                return "<span class=''>-</span>";
            } else {
                var Name = Masters.JobtypesRow.getLookup().itemById[parseInt(ctx.item.JobType)].Name;

                return Name;
            }
        }
    }
}