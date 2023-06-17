import {MdSecurity} from "react-icons/md"
import {TbWorld} from "react-icons/tb"
import {SiConvertio} from "react-icons/si"
import {BsFillEyeSlashFill} from "react-icons/bs" 
import {FaPhoneVolume} from "react-icons/fa"
import {IoMdPhoneLandscape} from "react-icons/io"
import {FaTimes} from "react-icons/fa"


export const ReasonData = [
  {
    id: 1,
    title: "Strong Security",
    text: "Protection against DDoS attacks, full data encrytion",
    icon: <MdSecurity />
  },
  {
    id: 2,
    title: "WORLD COVERAGE",
    text: "Providing Service around the world",
    icon: <TbWorld />
  },
  {
    id: 3,
    title: "FAST WITHDRAWAL",
    text: "Student success measured online. Independent reviews. No hidden fees. Instant, secure withdrawals.",
    icon: <SiConvertio />
  },
  {
    id: 4,
    title: "REFERRALS",
    text: "Referral commission encourages the work of promoters",
    icon: <SiConvertio />
  },
  {
    id: 5,
    title: "RELIABLE PROTECTION",
    text: "All data of our clients is protected as much as possible",
    icon: <BsFillEyeSlashFill />
  },
  {
    id: 6,
    title: "FAST AND AVAILABLE SUPPORT",
    text: "24/7 support via email, chat, customer & technical assistance",
    icon: <FaPhoneVolume />
  },
  {
    id: 7,
    title: "COST EFFICIENCY",
    text: "Reasonable trading fees for takers and all market makers",
    icon: <IoMdPhoneLandscape />
  },
];

export const InvestorData = [
  {
    id: 1,
    title: "Richard",
    amount: "765000 USD",
    img: require('../components/images/manb.png')
  },
  {
    id: 2,
    title: "Jake Bloomer",
    amount: "980000 USD",
    img: require('../components/images/mana.png')
  },
  {
    id: 3,
    title: "John Lucas Berger",
    amount: "170000 USD",
    img: require('../components/images/man.png')
  }
]

export const howData = [
  {
    id: 1,
    no: 1,
    title: "OPEN AN ACCOUNT",
    text: "Sign up for an account with your name, email and phone number"
  },
  {
    id: 2,
    no: 2,
    title: "DEPOSIT FUNDS",
    text: "Fund your wallet via fast and secure payment options"
  },
  {
    id: 3,
    no: 3,
    title: "GROW PROFITS",
    text: "We trade with your assets and earn profit"
  }
]

export const DashData = [
  {
    id: 1,
    title: "Current Balance",
    btnTxt: "WITHDRAW NOW"
  },
  {
    id: 2,
    title: "Total Investment Amount",
    btnTxt: "INVESTMENT HISTORY"
  },
  {
    id: 3,
    title: "Total Deposits Amount",
    btnTxt: "DEPOSIT HISTORY"
  },
  {
    id: 4,
    title: "Total Withdraws Amount",
    btnTxt: "WITHDRAW HISTORY"
  },
  {
    id: 5,
    title: "Total Transaction Amount",
    btnTxt: "TRANSACTION LOG"
  },
  {
    id: 6,
    title: "Total Referrals User",
    btnTxt: "REFERRALS USER"
  }
];