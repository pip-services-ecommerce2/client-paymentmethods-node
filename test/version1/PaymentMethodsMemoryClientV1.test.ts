import { PaymentMethodsMemoryClientV1 } from '../../src/version1/PaymentMethodsMemoryClientV1';
import { PaymentMethodsClientFixtureV1 } from './PaymentMethodsClientFixtureV1';

suite('PaymentMethodsMemoryClientV1', () => {
    let client: PaymentMethodsMemoryClientV1;
    let fixture: PaymentMethodsClientFixtureV1;

    suiteSetup(() => {
        client = new PaymentMethodsMemoryClientV1();

        fixture = new PaymentMethodsClientFixtureV1(client);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
