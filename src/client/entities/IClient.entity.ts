export interface IClient {
    id,
    name,
    age,
    address: {
        postalCode,
        city,
        number,
        state,
        complement,
        street
      }
}
