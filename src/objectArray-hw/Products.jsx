import { products } from "../data/products";

export default function Products() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{`${item?.unitPrice} TL`}</td>
              <td>{item?.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
