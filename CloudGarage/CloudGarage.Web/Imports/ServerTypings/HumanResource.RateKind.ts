namespace CloudGarage.HumanResource {
    export enum RateKind {
        Hourly = 1,
        Salary = 2
    }
    Serenity.Decorators.registerEnumType(RateKind, 'CloudGarage.HumanResource.RateKind', 'CloudGarage.RateKind');
}
