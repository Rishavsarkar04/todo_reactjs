export let initial = {
    username:'rishav sarkar',
    password:'tilak',
    isauthenticated:false,
}


export default function reducerfuc(state,action){

    switch(action.type){
        case 'login':
            return {...state,isauthenticated:true}
        case 'logout':
            return {...state,isauthenticated:false}
        default:
            throw new Error('unkonwn action')
    }

}