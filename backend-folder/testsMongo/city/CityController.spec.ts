import {suite, test} from "@testdeck/mocha";
import {expect} from "chai";
import {mockRequest, mockResponse} from "mock-req-res";
import {anything, instance, mock, when} from "ts-mockito";
import {CityController, CityRequest} from "../../src/app/country/resolvers/CityController";
import {CityService} from "../../src/app/country/service/CityService";

@suite
export class CityControllerTests {
    private service!: CityService;
    private controller!: CityController;

    async before() {
        this.service = mock(CityService);
        this.controller = new CityController(instance(this.service));
    }

    @test async "get cities for country"() {
        const params = {country: "nigeria"};

        when(this.service.getCountryCities(anything())).thenReject();
        when(this.service.getCountryCities("nigeria")).thenResolve();

        const request = mockRequest({
            params,
        }) as unknown as CityRequest;

        const response = mockResponse();

        await this.controller.getCountryCities(request, response);

        expect(response.json.called).to.be.true;
    }
}
