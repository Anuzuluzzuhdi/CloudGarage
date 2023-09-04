namespace CloudGarage.Inventory {
    export enum StatusKind {
        Pending = 1,
        Complete = 2
    }
    Serenity.Decorators.registerEnumType(StatusKind, 'CloudGarage.Inventory.StatusKind', 'CloudGarage.StatusKind');
}
