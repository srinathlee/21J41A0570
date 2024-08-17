const axios = require('axios');



exports.getallProducts = async (req, res) => {
    console.log("hhhh")
    try {

   console.log("hh")
    const authBody={
        "companyName": "goMart",
        "clientID": "5a89e05d-e121-47dc-9463-4809c731786b",
        "clientSecret": "UaEPcgMFnxMdPIIT",
        "ownerName": "B Srinath",
        "ownerEmail": "iamsrinath5255@gmail.com",
        "rollNo": "21J41A0570"
      }

      const authUrl="http://20.244.56.144/test/auth"

      const authResponse=await axios.post(authUrl,authBody)
      const access_token=authResponse.data.access_token


    
      const headers = {
        "Authorization": `Bearer ${access_token}`, 
        'Content-Type': 'application/json' 
      };

      const response = await axios.get(
        'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=100&maxPrice=100000',
        {headers} 
      );
  
      res.json(response.data)
      console.log(response.data)

    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  };

// Function to handle login (if needed)
exports.getSpecificProduct = (req, res) => {
    res.send('Login Function');
};