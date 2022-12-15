import { CustomerRepository } from '@/ports/customer-repository';
import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();

const createCustomer = async (): Promise<void> => {

  /*
   * Pass in Customer information from form and create it in our
   * MongoDB
   * await prisma.customer.create({
   * });
   */
};

export const mongoCustomerRepository: CustomerRepository = {
  createCustomer,
};
