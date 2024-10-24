let nomeConta="Conta via rest"
let token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDA3NTh9.IPO0hq3HRiDPjHkGAaf7ns3oJTPPNb2BRQqKNWS-4fc'
let contaByName="Conta para alterar"

class AccountModel{
getNomeConta(){
    return nomeConta
}

getToken(){
    return token
}

getContaByName(){
    return contaByName
}

}
export default new AccountModel;