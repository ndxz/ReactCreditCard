import React from 'react'

 function Card({number,valid,name}) {
    
  if (number.length>16) number= number.slice(0, number.length - (number.length - 16)) ;
  if (valid.length>4) valid = valid.slice(0 ,valid.length - (valid.length-4));
  if (name.length>20) name = name.slice(0 ,name.length - (name.length-20));

/*  ph stands for placeholder */
let ph='---- ---- ---- ----',z=Array.from(ph) , p='-' , formatted='' ,ccNumber=''  ;
let r=16-number.length ;



r<0 ? formatted=number+ p.repeat(0):formatted=number+ p.repeat(r) ;

for (let i=0 ; i<ph.length; i++){  z[i]=formatted[i]   } ;
 ccNumber=z.join(''); 

 let v='MM/YY' , vthru=Array.from(v) ; for(let i=0 ; i<=valid.length;i++) { vthru[i]=valid[i]   }  ;

  


    return (
        <div className='card'>
            <h6>{ccNumber.replace(/(.{4})/g,"$1 ")}</h6>
            <h4>{valid>1? vthru.join('').replace(/(.{2})/,"$1/") : vthru.join('').replace(/(.{1})/,"$1M")}</h4>
            <h3>{name.toUpperCase()}</h3>
            <h2>Company Name</h2>

        </div>
    )
}
export default Card


