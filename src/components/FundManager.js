import FMImg from "./images/fundManager.png"
import "../styles/FundManager.css"

const FundManager = () => {
  return (
    <div className="container">
      <div className="fundmanger-container row justify-content-between align-items-center flex-wrap">
        <div className="col-md-6">
          <h2>Be A Fund Manager</h2>
          <p>
            Build your own fund manager portfolio by trading well. Forexmainiac
            allows you to manage your investor funds easily through its
            proprietary copy trading system.
          </p>
          <p>
            Forexmainiac is a proprietary trading tool developed exclusively for
            Forexmainiac .
          </p>
          <button className="btn btn-primary">READ MORE</button>
        </div>
        <div className="col-md-6">
          <img src={FMImg} alt="img" className="w-75 object-fit-contain" />
        </div>
      </div>
    </div>
  );
}

export default FundManager
