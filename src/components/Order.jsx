function Order({closeHour, openHour}) {
    return (<div className="order">
        <p>
            "نحن نعمل  من الساعة {openHour}:00 حتى الساعة {closeHour}:00. زورونا أو اطلبوا عبر الإنترنت."

        </p>
        <button className="btn">Order</button>
    </div>);
}

export default Order;