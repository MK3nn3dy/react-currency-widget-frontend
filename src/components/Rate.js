// Rate item component for individual rates
const Rate = ({country, rate, flag}) => {
    
    return (
        // change these to bootstrap table rows for easy control over columns in widget
        <div className="rate-item">
            <img alt="This item's country flag" className="rate-item-flag" src={flag}/>
            <p>{country}</p>
            <p>{rate}</p>
        </div>
    )
}

export default Rate;