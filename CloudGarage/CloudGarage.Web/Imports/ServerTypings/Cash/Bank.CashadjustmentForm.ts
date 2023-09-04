
namespace CloudGarage.Cash/Bank {
    export interface CashadjustmentForm {
        VNo: Serenity.StringEditor;
        Vtype: Serenity.StringEditor;
        VDate: Serenity.DateEditor;
        CoaId: Serenity.IntegerEditor;
        Coa: Serenity.StringEditor;
        Narration: Serenity.StringEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        IsPosted: Serenity.IntegerEditor;
        IsAppove: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }

    export class CashadjustmentForm extends Serenity.PrefixedContext {
        static formKey = 'Cash/Bank.Cashadjustment';
    }

    [,
        ['VNo', () => Serenity.StringEditor],
        ['Vtype', () => Serenity.StringEditor],
        ['VDate', () => Serenity.DateEditor],
        ['CoaId', () => Serenity.IntegerEditor],
        ['Coa', () => Serenity.StringEditor],
        ['Narration', () => Serenity.StringEditor],
        ['Debit', () => Serenity.DecimalEditor],
        ['Credit', () => Serenity.DecimalEditor],
        ['IsPosted', () => Serenity.IntegerEditor],
        ['IsAppove', () => Serenity.IntegerEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CashadjustmentForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}