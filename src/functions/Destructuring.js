import React from 'react'

const Destructuring = ({userResponse:{userName}}) => {
    
    function getUserIpDetails()
    {
        const obj={
            name:userName,
            userIp:'0.0.0.0'
        }
        return ['Name :',obj.name,'  ','UserIp :' ,obj.userIp];
    }

    function getTopThree()
    {
        const studentMarks =[40,50,60,70,80];
        const [first,second,third]=studentMarks;
        return [first,' ',second,' ',third];
    }

    getUserIpDetails()
    return (
        <div>
            <h1>{getUserIpDetails()}</h1>
            <h1>MARKS : {getTopThree()}</h1>
        </div>
    )
}

export default Destructuring
