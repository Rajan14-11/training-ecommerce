import './MobilePost.css';
import React, { useRef, useState } from 'react';



const MobilePost = () => {

            // sucess message
            const [sucess,setSucess]=useState(false)
            // error message
            const [error,setError]=useState('')
            const[image,setImage]=useState(null)

            const nameRef=useRef()
            const titleRef=useRef()
            const image1Ref=useRef()
            const image2Ref=useRef()
            const image3Ref=useRef()
            const price1Ref=useRef()
            const discountPriceRef=useRef()
            const ram1Ref=useRef()
            const ram2Ref=useRef()
            const batteryHealthRef=useRef()
            const processorRef=useRef()
            const color1Ref=useRef()
            const color2Ref=useRef()
            const videoLinkRef=useRef()



            const mobileHandle=e=>{

                const mobileName=nameRef.current.value;
                const mobileTitle=titleRef.current.value;
                const image1=image1Ref.current.value;
                const image2=image2Ref.current.value;
                const image3=image3Ref.current.value;
                const mobilePrice1=price1Ref.current.value;
                const mobileDiscountPrice2=discountPriceRef.current.value;
                const mobileRam1=ram1Ref.current.value;
                const mobileRam2=ram2Ref.current.value;
                const battery=batteryHealthRef.current.value;
                const processor=processorRef.current.value;
                const mobileColor1=color1Ref.current.value;
                const mobileColor2=color2Ref.current.value;
                const mobileVideoLink=videoLinkRef.current.value;


                    // all data
                    const allMobileData={
                        mobileName,
                        mobileTitle,
                        image1,
                        image2,
                        image3,
                        mobilePrice1,
                        mobilePrice2: mobileDiscountPrice2,
                        mobileRam1,
                        mobileRam2,
                        battery,
                        processor,
                        mobileColor1,
                        mobileColor2,
                        mobileVideoLink,

                    }

              console.log(allMobileData)
            //    fetch('https://theskyaural.herokuapp.com/mobileDetailsPost',{
               fetch('http://localhost:5000/mobileDetailsPost',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(allMobileData)
                     })
                     .then(res=>res.json())
                     .then(data=>{
                         if(data.insertedId){
                             setSucess(true)
                           e.target.reset()
                         }
                     }).catch((error)=>{
                         setError(error)
                     })

                     e.preventDefault()




            }


    return (
        <>
      
        {/* ================================== */}
        <div class=" justify-content-center admin_container m-auto row">
    <div class="admin_myform col-sm-12 col-md-6 col-lg-6">
      <form onSubmit={mobileHandle} encType="multipart/form-data">
        <h2>ADD PRODUCT </h2>
        <input ref={nameRef} type="text" placeholder="Mobile Name"/>
        <input ref={titleRef} type="text" placeholder="Title"/>
        <input ref={discountPriceRef}  type="number " placeholder="Discounted Price"/>
        <input ref={price1Ref} type="number " placeholder="Original Price"/>
        <input ref={ram1Ref} type='number'required placeholder="RAM-1"/>
        <input ref={ram2Ref} type='number' placeholder="RAM-2"/>
        <input ref={color1Ref} type="text" placeholder="Color-1"/>
        <input ref={color2Ref} type='text' placeholder="Color-2"/>


        <label>Video</label>
        <input ref={image1Ref}  required type="text" />
        <label>Image -1 </label>
        <input ref={image2Ref}  required type="text" placeholder='Link-1' />
        <label>Image -2 </label>
        <input ref={image3Ref}  required type="text" placeholder='Link-2'/>
        <label>Image -3 </label>

        <input type="text" placeholder='Link-3'/>


        <button type="submit">ADD</button>
      </form>
    </div>
    <div class="admin_image col-sm-12 col-md-6 col-lg-6">
      <img className='img-fluid' src="https://i.ibb.co/7z3f4pq/undraw-Online-test-re-kyfx.png" alt=''/>
    </div>
    <div>

{
    sucess &&<h3>Product added succes</h3>
}
</div>
  </div>
        </>
    );
};

export default MobilePost;