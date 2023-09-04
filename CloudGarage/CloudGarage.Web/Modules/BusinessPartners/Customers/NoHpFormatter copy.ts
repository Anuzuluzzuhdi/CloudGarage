namespace CloudGarage {

    @Serenity.Decorators.registerFormatter()
    export class WaFormatter implements Slick.Formatter {
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
                return `<span><a title="kirim pesan wa" style="cursor:pointer; margin-right:3px; margin-left:3px;" onclick="window.open('https://wa.me/${noHpFinal}')"><i class='fa fa-whatsapp text-success'></i></a>${ctx.value}</span>`;
            }
        }
    }
}