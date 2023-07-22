import {Route, Routes} from "react-router-dom"
import Dashboard from "./Dashboard"
import NewInvestment from "./NewInvestment"
import InvestHis from "./InvestHis"
import Deposit from "./Deposit"
import DepositHis from "./DepositHis"
import WithDraw from "./WithDraw"
import WithDrawHis from "./WithDrawHis"
import TransactionLog from "./TransactionLog"
import CommssionLog from "./CommssionLog"
import ProfileSettings from "./ProfileSettings"
import ChangePassword from "./ChangePassword"
import SupportTicket from "./SupportTicket"
import SupportTicketNew from "./SupportTicketNew"
import FaSecurity from "./FaSecurity"


const UserPgIndex = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/investment-new" element={<NewInvestment />} />
      <Route path="/investment-history" element={<InvestHis />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/deposit/history" element={<DepositHis />} />
      <Route path="/withdraw" element={<WithDraw />} />
      <Route path="/withdraw/history" element={<WithDrawHis />} />
      <Route path="/transaction" element={<TransactionLog />} />
      <Route path="/transaction/refer/log" element={<CommssionLog />} />
      <Route path="/edit-profile" element={<ProfileSettings />} />
      <Route path="/twofactor" element={<FaSecurity />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/ticket" element={<SupportTicket />} />
      <Route path="/ticket/new" element={<SupportTicketNew />} />
    </Routes>
  )
}

export default UserPgIndex
