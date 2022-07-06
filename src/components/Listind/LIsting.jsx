import React from 'react'


export default function Listing({items}){
    return(
        <div className="item-list">
            {items.map(item => {
                {return checkItemState(item) === true &&
                    <div key={item.listing_id} className="item">
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title}</p>
                            <p className="item-price">{validateCurrencyCode(item.currency_code)} {item.price}</p>
                            <p className={checkItemQuantity(item.quantity)}>{item.quantity} left</p>
                        </div>
                    </div>
                }
            })}
        </div>
    )
}

function checkItemState(item){
    return item.state === 'active' ? true : false;
}

function validateCurrencyCode(currency_code){
    switch(currency_code){
        case 'USD' :
            return '$'

        case 'EUR' : 
            return '€';

        default : 
            return 'GPB'
    }
}

function checkItemQuantity(quantity){
    const defaultClassName = 'item-quantity';
    let result;

    switch(true){
        case quantity <= 10 :
            result = 'level-low';
            break;
        case quantity <= 20 :
            result = 'level-medium';
            break;
        case quantity > 20 :
            result = 'level-high';
            break;
    }

    return `${defaultClassName} ${result}`


}