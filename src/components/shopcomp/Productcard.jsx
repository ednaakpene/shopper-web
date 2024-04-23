import React from 'react'
import Jewelry from '../../pages/Jewelry/Jewelry'
import Electronics from '../../pages/electronics/Electronics'
import Men from '../../pages/mens wear/Men'
import Women from '../../pages/womenswear/women'

const Productcard = () => {
  return (
    <>
    <div className="container py-5">
                            <div className="col-12 text-center text-bold text-4xl">
                                <h1>Products</h1>
                        </div>
                    </div>
    <Jewelry/>
<Electronics/>

<Women/>
<Men/>
    </>
  )
}

export default Productcard