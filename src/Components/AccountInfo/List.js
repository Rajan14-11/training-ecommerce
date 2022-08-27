import React from 'react';

const Order = () => {
    return (
        <div className="col-sm-11 col-md-8 col-lg-9 list">
      <div className="mb-4">
        <h1 className="list__title d-flex">
icon
        </h1>
        <hr className="list__title-border" />
      </div>
      <div className="col-12 list__col">
        <table className="table list__table">
          <thead className="list__head text-center">
            <tr>
              <th className="list__text" scope="col">
                order id
              </th>
              <th className="list__text" scope="col">
                date
              </th>
              <th className="list__text" scope="col">
                status
              </th>
              <th className="list__text" scope="col">
                total
              </th>
              <th className="list__text" scope="col">
                action
              </th>
            </tr>
          </thead>
          <tbody className="border-0 text-center">
            <tr>
              <td>202156</td>
              <td>Jan 01, 2021</td>
              <td className="list__pending list__status text-success">
                process
              </td>
              <td>$85.00</td>
              <td>
                <a className="list__btn btn" href="#">
                  quick view
                </a>
              </td>
            </tr>
            <tr>
              <td>202156</td>
              <td>Jan 01, 2021</td>
              <td className="list__cancel list__status">cancel</td>
              <td>$85.00</td>
              <td>
                <a className="list__btn btn" href="#">
                  quick view
                </a>
              </td>
            </tr>
            <tr>
              <td>202156</td>
              <td>Jan 01, 2021</td>
              <td className="list__pending list__status text-success">
                process
              </td>
              <td>$85.00</td>
              <td>
                <a className="list__btn btn" href="#">
                  quick view
                </a>
              </td>
            </tr>
            <tr>
              <td>202156</td>
              <td>Jan 01, 2021</td>
              <td className="list__cancel list__status">cancel</td>
              <td>$85.00</td>
              <td>
                <a className="list__btn btn" href="#">
                  quick view
                </a>
              </td>
            </tr>
            <tr>
              <td>202156</td>
              <td>Jan 01, 2021</td>
              <td className="list__pending list__status text-success">
                process
              </td>
              <td>$85.00</td>
              <td>
                <a className="list__btn btn" href="#">
                  quick view
                </a>
              </td>
            </tr>
            <tr>
              <td>202156</td>
              <td>Jan 01, 2021</td>
              <td className="list__cancel list__status">cancel</td>
              <td>$85.00</td>
              <td>
                <a className="list__btn btn" href="#">
                  quick view
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Order;