import React from 'react';
import {useState} from 'react'


function AboutUs() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
      }

    return(<div className="row">
        <div className = "col-sm-4">
        <div className="card mt-5" style={{width: "18rem"}}>
    <sup>
        <span className="badge pill badge-notification bg-warning">
        4
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        </span>
    </sup>
    <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/01/22/1642821685e3978a1124996bdfa4f250d502fb4f17.webp" alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">T-shirt</h5>
        <p className="card-text">white basic tshirt</p>
        <h6 className = "mt-2">18£</h6>
        <div className="card text-center">
            <a href="#" className= {active ? "btn btn-danger" : "btn btn-primary"} onClick={handleClick}>{ active ? "Remove" : "Add to your Cart"}</a>
        </div>
    </div>
</div>
</div>

<div className = "col-sm-4">
<div className="card mt-5" style={{width: "18rem"}}>
    <sup>
        <span className="badge pill badge-notification bg-warning">
        4
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        </span>
    </sup>
    <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2023/03/09/1678349569c6ede564064c65833bb6c78f07ccb280_thumbnail_900x.webp"/>
    <div className="card-body">
        <h5 className="card-title">T-shirt</h5>
        <p className="card-text">black basic tshirt</p>
        <h6 className = "mt-2">12£</h6>
        <div className="card text-center">
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
    </div>
</div>
</div>

<div className = "col-sm-4">
<div className="card mt-5" style={{width: "18rem"}}>
    <sup>
        <span className="badge pill badge-notification bg-warning">
        4
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        </span>
    </sup>
    <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2023/02/15/167645391455b9f3d72a9a56722750f2638a148e81_thumbnail_900x.webp"/>
    <div className="card-body">
        <h5 className="card-title">T-shirt</h5>
        <p className="card-text">purple flower tshirt</p>
        <h6 className = "mt-2">20£</h6>
        <div className="card text-center">
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
    </div>
</div>
</div>

<div className="card mt-5" style={{width: "18rem"}}>
    <sup>
        <span className="badge pill badge-notification bg-warning">
        4
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        </span>
    </sup>
    <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/09/27/166424329384d97afa7bb4103799ee7c0c4a67f442_thumbnail_900x.webp"/>
    <div className="card-body">
        <h5 className="card-title">T-shirt</h5>
        <p className="card-text">green tshirt</p>
        <h6 className = "mt-2">14£</h6>
        <div className="card text-center">
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
    </div>
</div>

<div className="card mt-5" style={{width: "18rem"}}>
    <sup>
        <span className="badge pill badge-notification bg-warning">
        4
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        </span>
    </sup>
    <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/01/22/1642821685e3978a1124996bdfa4f250d502fb4f17.webp" alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">T-shirt</h5>
        <p className="card-text">white basic tshirt</p>
        <h6 className = "mt-2">18£</h6>
        <div className="card text-center">
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
    </div>
</div>
</div>

    )
    
    
    
    // return (<>
    //     <div className="p-5 mb-4 bg-light rounded-3">
    //         <div className="container-fluid py-5">
    //             <h2 className="display-5 fw-bold">About Us</h2>
    //             <p className="col-md-8 fs-4">Welcome and thank you for choosing JustBuy. We aim to deliver a shopping experience you'll love without any of the fuss of more traditional sites. Want to sign up? Go ahead! Want to check out without registering? That's fine too! We're sure you'll love our products and we offer rapid delivery at bargain prices so that you can see for yourself. Don't agree with us? Simply return the products within 35 days for a free refund with no questions asked.</p>
    //         </div>
    //     </div></>
    // )
}

export default AboutUs;