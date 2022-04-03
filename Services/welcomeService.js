class welcomeService
{
    messagefun(data)
    {
        return new Promise((resolve,reject)=>{
            console.log("i am in welcome service");
            resolve(1);
        })
    }
}

module.exports = new welcomeService();