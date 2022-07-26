import { Descriptor, ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PaymentMethodsMemoryPersistence } from 'service-paymentmethods-node';
import { PaymentMethodsController } from 'service-paymentmethods-node';
import { PaymentMethodsDirectClientV1 } from '../../src/version1/PaymentMethodsDirectClientV1';
import { PaymentMethodsClientFixtureV1 } from './PaymentMethodsClientFixtureV1';

suite('PaymentMethodsDirectClientV1', () => {
    let client: PaymentMethodsDirectClientV1;
    let fixture: PaymentMethodsClientFixtureV1;

    suiteSetup(async () => {
        
        let logger = new ConsoleLogger();
        let paymentmethodsPersistence = new PaymentMethodsMemoryPersistence();

        let controller = new PaymentMethodsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-paymentmethods', 'persistence', 'memory', 'default', '1.0'), paymentmethodsPersistence,
            new Descriptor('service-paymentmethods', 'controller', 'default', 'default', '1.0'), controller,
        );

        paymentmethodsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new PaymentMethodsDirectClientV1();
        client.setReferences(references);

        fixture = new PaymentMethodsClientFixtureV1(client);

        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
