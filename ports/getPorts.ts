import { CustomerRepository } from '@/ports/customer-repository';
import { mongoCustomerRepository } from '@/ports/customer-repository/mongo-customer-repository';
import { testCustomerRepository } from '@/ports/customer-repository/test-customer-repository';

export interface Ports {
  customerRepository: CustomerRepository,
}

const createFakePorts = (): Ports => ({
  customerRepository: testCustomerRepository,
});

const createSandboxPorts = (): Ports => ({
  customerRepository: testCustomerRepository,
});

const createRealPorts = async (): Promise<Ports> => ({
  customerRepository: mongoCustomerRepository,
});

let ports: Ports;

export async function getPorts(): Promise<Ports> {
  if (process.env.USE_FAKE_PORTS === 'true') {
    ports = ports || createFakePorts();
  } else if (process.env.NODE_ENV === 'test') {
    ports = ports || createSandboxPorts();
  } else {
    ports = ports || (await createRealPorts());
  }

  return ports;
}

