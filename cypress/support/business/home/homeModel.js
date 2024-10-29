let token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDA3NTh9.IPO0hq3HRiDPjHkGAaf7ns3oJTPPNb2BRQqKNWS-4fc'

class HomeModel{    
constructor(){
this.saldoConta=null
}


    getToken(){
        return token
    }
    
    setSaldoConta(saldo) {
        this.saldoConta = saldo;
    }

    getSaldoConta(){
        return this.saldoConta
    }

}
export default new HomeModel;