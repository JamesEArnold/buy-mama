export interface CustomerRepository {
  createCustomer(): Promise<void>,
}
