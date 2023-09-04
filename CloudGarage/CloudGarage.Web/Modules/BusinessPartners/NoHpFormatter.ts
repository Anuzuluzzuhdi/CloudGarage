namespace CloudGarage {

    @Serenity.Decorators.registerFormatter()
    export class NoHpFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            if (ctx.value == "" || ctx.value == null) {
                return "<span class=''>-</span>";
            } else {
                var fisrtLater = ctx.value.charAt(0);
                var noHp = ctx.value;
                var noHpFinal = ctx.value; 
                if (fisrtLater == "0") {
                    noHpFinal = '62' + noHp.substring(1);
                }
                return `<span><a title="telepon" style="cursor:pointer; margin-right:3px;"  href="tel:${Q.htmlEncode(ctx.value)}"><i class='fa fa-phone text-dark'></i></a><a title="kirim pesan wa" style="cursor:pointer; margin-right:3px; margin-left:3px;" onclick="window.open('https://wa.me/${noHpFinal}')">${ctx.value}</a></span>`;
            }
        }
    }
}