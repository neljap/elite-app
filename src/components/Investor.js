import "../styles/Investor.style.css"
import { InvestorData } from "../utils/Data"

const Investor = () => {
  return (
    <div className="container">
      <div className="investorContainer">
        <div className="investTitle">
          <h2>Our Top Investor</h2>
          <p>
            Here are some of our top and loyal investors through the years..
          </p>
        </div>
        <div className="investor-containers">
          {InvestorData.map((item) => {
            return(
              <div className="investContain" key={item.id}>
                <img src={item.img} alt="img" className="w-100"/>
                <div className="invest-detail">
                  <h5>{item.title}</h5>
                  <p>Total Investment: <span className="text-danger">{item.amount}</span></p>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Investor