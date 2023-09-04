namespace CloudGarage.CashBank {
    export enum AccountKind {
        Debit = 1,
        Credit = 2
    }
    Serenity.Decorators.registerEnumType(AccountKind, 'CloudGarage.CashBank.AccountKind', 'CloudGarage.AccountKind');
}
