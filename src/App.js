import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchTotalRes } from "./redux/actions";
import { products } from "./product";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.products,
    };
  }

  componentDidUpdate(i, id, e) {
    console.log(this.props.productsData)
  }

  componentDidMount() {
    console.log(this.props.productsData);
    this.props.fetchTotalRes(products.products, null, 1);
  }

  updateTotal(id, quantity) {
    console.log(this.props.productsData);
    this.props.fetchTotalRes(this.props.productsData, id, quantity);
  }

  render() {
    return (
      <>
        <div className="app">
          {this.state.products.map((data, index) => {
            return (
              <>
                <div className="card">
                  <div className="imgSec">
                    <div className="img">
                      <img src={data.thumbnail} alt={data.brand} />
                    </div>
                    <div className="info">
                      <h2>{data.brand}</h2>
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <h4>{data.category}</h4>
                    </div>
                    <div className="quantity">
                      <div className="quantityBox">
                        <select
                          onChange={(e) => this.updateTotal(data.id, e.target.value)}
                        >
                          <option value="1" key={data.id}>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <span>$ {data.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="subtotal">
            <div className="subDes">
              <p>SUBTOTAL</p>
              <p>SHIPPING</p>
            </div>
            <div className="subPrice">
              <p>$ {this.props.totalData}</p>
              <p>Free</p>
            </div>
          </div>
          <div className="subtotal">
            <div className="subDes">
              <p className="mb-0">TOTAL</p>
            </div>
            <div className="subPrice">
              <p>$ {this.props.totalData}</p>
              <p className="ctype mb-0">Get daily with nespola card</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    productsData: state.getProductsData,
    totalData: state.getTotalData,
  };
}

const mapDispatchToProps = (dispatch) => {
  const extra = {
    fetchTotalRes: (data, id, quantity) => {
      dispatch(fetchTotalRes(data, id, quantity));
    },
  };

  return extra;
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
