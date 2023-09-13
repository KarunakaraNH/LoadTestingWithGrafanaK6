import http from 'k6/http';
import { sleep } from 'k6';
import {check} from 'k6';


export const options={
    vus:5,
    duration:'3s',
}

//performance script should be inside this perticuler method

export default function(){

    const url='https://reqres.in/api/users';

    const payload=JSON.stringify(
        {
            name: "morpheus",
            job: "leader",
        }
    )  ;

    const params={
        headers: {'Content-Type':'Application/JSON'},
    };

   const res= http.post(url,payload,params);

        check(res,{"response code was 200":(res)=>res.status==201,
        "is res body has username":(res)=>res.body.includes('morpheus'),
   
    })

}
