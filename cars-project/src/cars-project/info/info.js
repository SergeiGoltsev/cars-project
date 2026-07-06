import "./info.css"

const Info = ({carsTotal, carsDiscounted, carsStock}) => {
    return (
        <div className='Info'>
            <h1 className='Info__title'>New vehicles for&nbsp;sale</h1>
            <p className='Info__text'>Total number of&nbsp;cars: {carsTotal}  </p>
            <p className='Info__text'>Discounted cars: {carsDiscounted}</p>
            <p className='Info__text'>Cars in&nbsp;stock: {carsStock}</p>
        </div>
    )
}

export default Info;