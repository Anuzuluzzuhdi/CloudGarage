namespace CloudGarage.Bookings {
    export namespace VehiclecourtesybookingService {
        export const baseUrl = 'Bookings/Vehiclecourtesybooking';

        export declare function Create(request: Serenity.SaveRequest<VehiclecourtesybookingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VehiclecourtesybookingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclecourtesybookingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclecourtesybookingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Bookings/Vehiclecourtesybooking/Create",
            Update = "Bookings/Vehiclecourtesybooking/Update",
            Delete = "Bookings/Vehiclecourtesybooking/Delete",
            Retrieve = "Bookings/Vehiclecourtesybooking/Retrieve",
            List = "Bookings/Vehiclecourtesybooking/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VehiclecourtesybookingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
