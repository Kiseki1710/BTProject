pragma solidity^ 0.4.17;
contract Master{
    mapping(string=>address) firs;
    function createFir(string name, string det,string pass) public{
        address fir = new Fir(name,det,pass,msg.sender);
        firs[pass] = fir;
    }
    function getFir(string pass) public view returns(address){
        return firs[pass];
    }
}
contract Fir{
    string subjectName;
    string details;
    string password;//temporary authentication
    address subjectAddress;
    function Fir(string name, string det,string pass,address a)public{
        subjectName = name;
        details = det;
        password = pass;
        subjectAddress = a;
    }
    function getSummary() public view returns(string, string){
        require(msg.sender==subjectAddress);
        return(
            subjectName,
            details
            );
    }
}
