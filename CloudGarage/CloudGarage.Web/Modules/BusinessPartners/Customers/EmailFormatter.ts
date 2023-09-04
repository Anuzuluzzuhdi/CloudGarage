namespace CloudGarage {

    @Serenity.Decorators.registerFormatter()
    export class EmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            if (ctx.value == "" || ctx.value == null) {
                return "<span class=''>-</span>";
            } else {
                return `<span><a title="kirim email" style="cursor:pointer; margin-right:3px;" href="mailto:${ctx.value}">${ctx.value}</a></span>`;
            }
        }
    }
}