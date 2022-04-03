const welcomeService = require('../Services/welcomeService');

class welcomeController  // class name and file name need not be same
{
async welcomefun(req,res)
{
    try
    {
        let resultt = await welcomeService.messagefun();
        if(resultt)
        res.status(200).json({ message: 'welcome service work is done, finished controller work' });
    }
    catch(error)
    {
        console.log(error);
        res.status(504).json({ message: 'fail fail fail' });
    } 
}
}

module.exports = new welcomeController();