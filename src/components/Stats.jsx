import ProgressBar from './ProgressBar'
import { formatCurrency, formatAmount } from '../helpers'
import './Stats.css'

const Stats = ({
  funds,
  backers}) => {
  return (
    <div id='container-stats' className="container">
        <div className='row'>
          <div>
            <p className='numbers'>{formatCurrency(funds)}</p>
            <p className='numbers2'>of $100,000 backed</p>
          </div>

          <hr />

          <div>
            <p className='numbers'>{formatAmount(backers)}</p>
            <p className='numbers2'>total backers</p>
          </div>

          <hr />

          <div>
            <p className='numbers'>56</p>
            <p className='numbers2'>days left</p>
          </div>
        </div>

        <ProgressBar/>
    </div>
  )
}

export default Stats