import {FaWallet} from "react-icons/fa"
import "../styles/Dashboard.styles.css"

const DashboardBody = () => {
  return (
    <div className="row justify-content-center align-items-center flex-wrap g-5">
      <div className="dashboard-items">
        <div>
          <FaWallet size={50}/>
        </div>
        <h3>Total Investment Amount</h3>
        <h1>$0</h1>
        <button>DEPOSIT HISTORY</button>
      </div>
    </div>
  );
}

export default DashboardBody