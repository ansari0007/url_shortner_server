const urlShortnerModel=require('./../models/urlShortner.model')
const {nanoid}=require('nanoid')


const urlShortner=async(req,res)=>{
        const { originalUrl } = req.body;
        if(!originalUrl){
                return res.status(400).json({ status: 400, message: 'url is required field' });
        }

        if(!originalUrl.includes('https://')){
                return res.status(400).json({ status: 400, message: 'please include https:// in the url' });          
        }
        const hash = nanoid(8);
        const shortUrl = new urlShortnerModel({ originalUrl, hash });
        await shortUrl.save();
        res.json({ shortUrl: `http://localhost:8000/${hash}` });
}

const url= async (req, res) => {
        const { hash } = req.params;
        const url = await urlShortnerModel.findOne({ hash });
        if (url) {
          res.redirect(url.originalUrl);
        } else {
          res.status(404).send('URL not found');
        }
      }

module.exports = {urlShortner,url}