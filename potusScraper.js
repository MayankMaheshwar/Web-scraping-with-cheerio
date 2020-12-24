const request = require('request');
const cheerio = require('cheerio');
const url = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

request(url, (error,
  response, html) => {
    //success!
    if (!error && response.statusCode ==200){
      const $ = cheerio.load(html);
      $('.field-content').each((i, el) => {
        const item = $(el).find('.lbl-licitacao').text().replace(/ /g, "");
        if (item != ""){
          console.log(item.slice(0,27));
          console.log(item.slice(27,107));
          console.log(item.slice(107,133));
        } 
      });  
      
      const url1=$(".field.field--name-field-icone.field--type-image.field--label-hidden.field__item");
      console.log(url1.find('a').attr('href'));
      
      
    }

                                                            
  }); 